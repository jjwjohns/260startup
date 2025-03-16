export class PlayerState {
    static NotJoined = new PlayerState('notjoined');
    static Joined = new PlayerState('joined');
  
    constructor(name) {
      this.name = name;
    }
  }