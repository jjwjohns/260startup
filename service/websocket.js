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
      
      let parsedData;
      try {
        parsedData = JSON.parse(message);
      } catch (err) {
        console.error('Error parsing message:', err);
        return;
      }

      console.log('Parsed data:', parsedData);

      gameId = parsedData.from;
      if (!gameId) {
        console.log('No game ID found in message');
        return;
      }

      if (!games.has(gameId)) {
        games.set(gameId, []);
      }

      const clients = games.get(gameId);

      if (!clients.includes(socket)) {
        clients.push(socket);
        console.log(`Added new client to game ${gameId}`);
      }

      if (clients.length < 2) {
        socket.send(JSON.stringify({
          type: 'error',
          message: 'You\'re not allowed to move yet. Waiting for another player.'
        }));
        return;
      }

      clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'move', gameId, move: parsedData.move }));
        }
      });
    });

    socket.on('close', () => {
      console.log('Client disconnected');
      for (const [gameId, clients] of games.entries()) {
        const index = clients.indexOf(socket);
        if (index !== -1) {
          clients.splice(index, 1);
          console.log(`Client removed from game ${gameId}`);

          if (clients.length === 0) {
            games.delete(gameId);
            console.log(`Game ${gameId} deleted`);
          }
          break;
        }
      }
    });

    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) {
        client.terminate();
      } else {
        client.isAlive = false;
        client.ping();
      }
    });
  }, 10000);
}

module.exports = { peerProxy };
