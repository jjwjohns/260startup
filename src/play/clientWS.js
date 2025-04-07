
class WS {
    constructor(gameID) {

      this.gameID = gameID;

      let port = window.location.port;
      console.log("port: ", port);
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:4000/ws`);


      this.socket.onopen = (event) => {
        console.log("WebSocket connection established");
      };
      this.socket.onclose = (event) => {
        console.log("WebSocket connection closed");
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };
    }

    broadcastEvent(from, type, value) {
      const event = new EventMessage(from, type, gameID, value);
      this.socket.send(JSON.stringify(event));
    }
}

export { WS };