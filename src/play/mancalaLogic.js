export class MancalaLogic {
  static makeMove(slots, player, index) {
      const newSlots = [...slots];

      let stones = newSlots[index];
      if (stones === 0) {
        return { newSlots: [...slots], goAgain: false };
      }
      newSlots[index] = 0;
      let i = index + 1;
      while (stones > 0) {
        if (i === 14) {
          i = 0;
        }
        if ((player === 1 && i === 0) || (player === 2 && i === 7)) {
          i++;
          continue;
      }
        newSlots[i] = newSlots[i] + 1;
        stones -= 1;
        i++;
      }

      i = i - 1;
      if (player === 1 && i > 0 && i <= 6) {
        if (newSlots[i] === 1) {
          let opposite = 14 - i;
          let stones = newSlots[opposite];
          if (stones > 0) {
            newSlots[i] = 0;
            newSlots[opposite] = 0;
            newSlots[7] = newSlots[7] + stones + 1;
          }
        }
      }
      if (player === 2 && i > 7 && i <= 13) {
        if (newSlots[i] === 1) {
          let opposite = 14 - i;
          let stones = newSlots[opposite];
          if (stones > 0) {
            newSlots[i] = 0;
            newSlots[opposite] = 0;
            newSlots[0] = newSlots[0] + stones + 1;
          }
        }
      }
      if (player === 1 && i === 7){
        return { newSlots: newSlots, goAgain: true };
      }
      if (player === 2 && i === 0){
        return { newSlots: newSlots, goAgain: true };
      }
      return { newSlots: newSlots, goAgain: false };
  }

    static checkEndGame(slots, player) {
      if (player === 1) {
        if (slots[1] === 0 && slots[2] === 0 && slots[3] === 0 && slots[4] === 0 && slots[5] === 0 && slots[6] === 0) {
          return true;
        }
      }
      if (player === 2) {
        if (slots[8] === 0 && slots[9] === 0 && slots[10] === 0 && slots[11] === 0 && slots[12] === 0 && slots[13] === 0) {
          return true;
        }
      }
      return false;
    }

    static endGame(slots) {
      const newSlots = [...slots];
      newSlots[7] = newSlots[7] + newSlots[1] + newSlots[2] + newSlots[3] + newSlots[4] + newSlots[5] + newSlots[6];
      newSlots[0] = newSlots[0] + newSlots[8] + newSlots[9] + newSlots[10] + newSlots[11] + newSlots[12] + newSlots[13];
      newSlots[1] = 0;
      newSlots[2] = 0;
      newSlots[3] = 0;
      newSlots[4] = 0;
      newSlots[5] = 0;
      newSlots[6] = 0;
      newSlots[8] = 0;
      newSlots[9] = 0;
      newSlots[10] = 0;
      newSlots[11] = 0;
      newSlots[12] = 0;
      newSlots[13] = 0;
      if (newSlots[7] > newSlots[0]) {
        return {slots: newSlots, winner: 1};
      }
      else if (newSlots[0] > newSlots[7]) {
        return {slots: newSlots, winner: 2};
      }
      return {slots: newSlots, winner: 0};
    }
}





  //   getSlots() {
  //       return this.slots;
  //   }

  //   getSlot(index) {
  //       return this.slots[index];
  //   }

  //   setSlot(index, value) {
  //       this.slots[index] = value;
  //   }

  //   makeMove(player, index) {
  //     if (index <= 0 || index > 6) {
  //       return;
  //     }
  //     let stones = this.slots[index];
  //     if (stones === 0) {
  //       return;
  //     }
  //     this.setSlot(index, 0);
  //     let i = index + 1;
  //     while (stones > 0) {
  //       if (i === 14) {
  //         i = 0;
  //       }
  //       this.setSlot(i, this.getSlot(i) + 1);
  //       stones -= 1;
  //       i++;
  //     }
  //     i = i - 1;
  //     if (player == 1 & i > 0 || i <= 6) {
  //       if (this.getSlot(i) === 1) {
  //         let opposite = 14 - i;
  //         let stones = this.getSlot(opposite);
  //         if (stones > 0) {
  //           this.setSlot(i, 0);
  //           this.setSlot(opposite, 0);
  //           this.setSlot(7, this.getSlot(opposite) + stones + 1);
  //         }
  //       }
  //     }
  //     if (player == 2 & i > 7 || i <= 13) {
  //       if (this.getSlot(i) === 1) {
  //         let opposite = 14 - i;
  //         let stones = this.getSlot(opposite);
  //         if (stones > 0) {
  //           this.setSlot(i, 0);
  //           this.setSlot(opposite, 0);
  //           this.setSlot(0, this.getSlot(opposite) + stones + 1);
  //         }
  //       }
  //     }
  //     if (player == 1 & i == 7){
  //       return { newSlots: this.slots, goAgain: true };
  //     }
  //     if (player == 2 & i == 0){
  //       return { newSlots: this.slots, goAgain: true };
  //     }
  //     return { newSlots: this.slots, goAgain: false };
  //   }
  // }