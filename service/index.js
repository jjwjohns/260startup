const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// The games and users are saved in memory and disappear whenever the service is restarted.
let users = [];
let games = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    // console.log("Creating user with email: ", req.body.email);
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetGames
apiRouter.get('/games', verifyAuth, (_req, res) => {
  res.send(games);
});

// GetGame
apiRouter.get('/game/:id', verifyAuth, (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    res.send(game);
  } else {
    res.status(404).send({ msg: 'Game not found' });
  }
});

// Join a game, Not at full functionality yet, needs database and websocket.
apiRouter.post('/game/:id/join', verifyAuth, (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    game.players.push(req.body);
    res.send(game);
  } else {
    res.status(404).send({ msg: 'Game not found' });
  }
});

// Delete a game, Not at full functionality yet, needs database and websocket.
apiRouter.delete('/game/:id', verifyAuth, (req, res) => {
    // console.log("Deleting game with id: ", req.params.id);
    const gameIndex = games.findIndex((g) => g.id === parseInt(req.params.id));
    if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).send({ msg: 'Game not found' });
    }
});


// Create a new game
apiRouter.post('/game', verifyAuth, (req, res) => {
    // console.log("Creating game with id: ", req.body.id);
  games.push(req.body);
  res.send(games);
  console.log(games);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
