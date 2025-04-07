const { data } = require('react-router-dom');
const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });
  const games = new Map();


  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    console.log('New client connected');


    socket.on('message', (message) => {
      let gameId = null; 
      console.log('Received message:', message);
      const parsedData = JSON.parse(data);
      console.log('Parsed data:', parsedData);
      // Check if the message is a game event
      gameId = parsedData.gameId;
      if (!gameId) {
        console.log('No game ID found in message');
        return;
      }

      if (!games.has(gameId)) {
        games.set(gameId, []);
      }

      const clients = games.get(gameId);

      if (clients.length < 2) {
        socket.send(JSON.stringify({
          type: 'error',
          message: 'You\'re not allowed to move yet. Waiting for another player.'
        }));
        return;
      }

      if (!games.get(gameId).includes(socket)) {
        games.get(gameId).push(socket);
        console.log(`Added new client to game ${gameId}`);
      }

      games.get(gameId).forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'move', gameId, move: parsedData.move }));
        }
      });

    socket.on('close', () => {
      console.log('Client disconnected');
      
      if (gameId && games.has(gameId)) {
        const clients = games.get(gameId);
        const index = clients.indexOf(socket);
        if (index !== -1) {
          clients.splice(index, 1);
          console.log(`Client removed from game ${gameId}`);

          if (clients.length === 0) {
            games.delete(gameId);
            console.log(`Game ${gameId} deleted`);
          }
        }
      }
    });

    });


    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };