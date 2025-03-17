export class MancalaLogic {
  static makeMove(slots, player, index) {
      const newSlots = [...slots];

      let stones = newSlots[index];
      if (stones === 0) {
        return;
      }
      newSlots[index] = 0;
      let i = index + 1;
      while (stones > 0) {
        if (i === 14) {
          i = 0;
        }
        newSlots[i] = newSlots[i] + 1;
        stones -= 1;
        i++;
      }
      i = i - 1;
      if (player == 1 & i > 0 & i <= 6) {
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
      if (player == 2 & i > 7 & i <= 13) {
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
      if (player == 1 & i == 7){
        return { newSlots: newSlots, goAgain: true };
      }
      if (player == 2 & i == 0){
        return { newSlots: newSlots, goAgain: true };
      }
      return { newSlots: newSlots, goAgain: false };
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