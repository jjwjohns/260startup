import { handleMove } from "./joined";

// class EventMessage {
//   constructor(from, type, value) {
//     this.from = from;
//     this.type = type;
//     this.value = value;
//   }
// }
class WS {
    constructor(gameID, waiting_opponent, move) {
      this.waiting_opponent = waiting_opponent;
      this.move = move;

      let port = window.location.port;
      console.log("port: ", port);
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:4000/ws`);
      console.log("initialized");

      this.socket.onopen = (event) => {
        console.log("WebSocket connection established");
        this.socket.send(JSON.stringify({ from: gameID, type: 'init', msg: 'connected' }));
      };
      this.socket.onclose = (event) => {
        console.log("WebSocket connection closed");
      };
      this.socket.onmessage = async (msg) => {
        console.log("Received message (client side): ", msg.data);
        try {
          const event = JSON.parse(msg.data);
          this.receiveEvent(event);
        } catch {}
      };
    }

    broadcastEvent(from, type, value) {
      this.socket.send(JSON.stringify(from, type, value));
    }

    receiveEvent(event) {
      console.log("Received event: ", event);
      if (event.type === 'error') {
        console.log("Tried to move before opponent joined");
        waiting_function();
      }

      if (event.type === 'move') {
        handleMove(event);
      }
      if (event.type === 'init') {
        alert("Opponent joined!");
      }
      if (event.type === 'close') {
        alert("Opponent left");
      }

      // Handle the received event here
      // For example, you can update the game state or notify players
    }
}

export { WS };