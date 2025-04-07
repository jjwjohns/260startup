class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}
class WS {
    constructor(gameID) {
      this.gameID = gameID;

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
      const event = new EventMessage(from, type, value);
      this.socket.send(JSON.stringify(event));
    }

    receiveEvent(event) {
      console.log("Received event: ", event);
      // Handle the received event here
      // For example, you can update the game state or notify players
    }
}

export { WS };