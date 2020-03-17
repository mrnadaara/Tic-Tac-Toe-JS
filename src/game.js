import Player from './player';
import * as Board from './board';

function start(playerXName, playerOName) {
  // After getting the players, we render the form
  Board.render();
  let player1 = Player(playerXName, 1);
  let player2 = Player(playerOName, 2);
  let boardSlots = document.getElementsByClassName('.slot');
  let currentTurn = 1;

  for (let i = 0; i < boardSlots.length; i++) {
    boardSlots[i].addEventListener('click', () => {
      const row = Number(this.getAttribute('data-row'));
      const column = Number(this.getAttribute('data-column'));

      if (!Board.slotAvailable(row, column)) return;

      this.innerText = currentTurn === 1 ? 'x' : 'o';
      currentTurn = currentTurn === 1 ? 'o' : 'x';
    });
  }
}

export default start;
