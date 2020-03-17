import Player from './player';
import * as Board from './board';

function start(playerXName, playerOName) {
  // After getting the players, we render the form
  Board.render();
  let player1 = Player(playerXName, 1);
  let player2 = Player(playerOName, 2);
  let boardSlots = document.getElementsByClassName('slot');
  let currentTurn = 1;
  let status;
  let playerIndicator = document.getElementById('game-status');
  playerIndicator.innerText = player1.name + "'s turn";
  for (let i = 0; i < boardSlots.length; i++) {
    boardSlots[i].addEventListener('click', (e) => {
      const row = Number(e.target.getAttribute('data-row'));
      const column = Number(e.target.getAttribute('data-column'));

      if (!Board.slotAvailable(row, column)) return;

      // this is going to be either go, x, o, or draw
      e.target.innerText = currentTurn === 1 ? 'x' : 'o';
      status = Board.status();

      // here I check if the status is a game over one
      if (status !== 'go') gameOver(status, player1.name, player2.name);

      // if everything is fine, we continue
      currentTurn = currentTurn === 1 ? 2 : 1;
      playerIndicator = currentTurn === 1 ? player1.name + "'s turn" : player2.name + "'s turn";
    });
  }
}

function gameOver(status, playerXName, playerOName) {
  let boardSlots = document.getElementByClassName('slot');
  let gameStatus = document.getElementById('game-status');

  // I am going to delete all the slots to clear the board
  for (let i = 0; i < boardSlots.length; i++) {
    boardSlots[i].parentNode.removeChild(boardSlots[i]);
  }

  // this part checks for the last board status
  switch (status) {
    case 'draw':
      gameStatus.innerText = 'It is a draw!';
      break;
    case 'x':
      gameStatus.innerText = playerXName + ' wins!';
      break;
    case 'o':
      gameStatus.innerText = playerOName + ' wins!';
      break;
  }
}

export default start;
