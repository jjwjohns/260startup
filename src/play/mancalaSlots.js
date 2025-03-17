export class mancalaSlots {
    constructor(name) {
      this.name = name;
      this.slots = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
    }

    getSlots() {
        return this.slots;
    }

    getSlot(index) {
        return this.slots[index];
    }

    setSlot(index, value) {
        this.slots[index] = value;
    }

    makeMove(index) {
      if (index <= 0 || index > 6) {
        return;
      }
      let stones = this.slots[index];
      if (stones === 0) {
        return;
      }
      this.setSlot(index, 0);
      let i = index + 1;
      while (stones > 0) {
        if (i === 14) {
          i = 0;
        }
        this.setSlot(i, this.getSlot(i) + 1);
        stones -= 1;
        i++;
      }
      i = i - 1;
      if (i > 0 || i <= 5) {
        if (this.getSlot(i) === 1) {
          let opposite = 14 - i;
          let stones = this.getSlot(opposite);
          if (stones > 0) {
            this.setSlot(i, 0);
            this.setSlot(opposite, 0);
            this.setSlot(6, this.getSlot(6) + stones + 1);
          }
        }
      }
      return i;
    }
  }