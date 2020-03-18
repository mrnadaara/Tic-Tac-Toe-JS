import Player from './player';
import * as Board from './board';

function checkWinStatus(status, player) {
  if (status === player.symbol) player.winner = true;

  return null;
}

function start(playerXName, playerOName) {
  // I am going to delete all the slots to clear the board
  let gameBoard = document.getElementById('board-container');

  while (gameBoard.children.length !== 0) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  // Clear the board array
  Board.clear();
  // After getting the players, we render the board
  Board.render();
  let playerX = Player(playerXName, 'x');
  let playerO = Player(playerOName, 'o');
  let boardSlots = document.getElementsByClassName('slot');
  let currentPlayer = playerX;
  let status;
  let gameStatus = document.getElementById('game-status');
  let playerIndicator = document.getElementById('game-status');
  playerIndicator.innerText = playerX.name + "'s turn";

  for (let i = 0; i < boardSlots.length; i++) {
    boardSlots[i].addEventListener('click', (e) => {
      if (playerX.winner || playerO.winner) return;

      const row = Number(e.target.getAttribute('data-row'));
      const column = Number(e.target.getAttribute('data-column'));

      // if that slot is not available do nothing
      if (!Board.slotAvailable(row, column)) return;

      // change the inner text of the slot
      e.target.innerText = currentPlayer === playerX ? 'x' : 'o';

      // it is important to update the board before getting the status
      // because if not then you'll be parsing a past board

      // update the board
      Board.update(row, column, currentPlayer);

      // the status is going to be either go, x, o, or draw
      status = Board.status();

      // here I check if the status is a game over one
      if (status !== 'go') {
        checkWinStatus(status, playerX);
        checkWinStatus(status, playerO);
        gameOver(status, playerX, playerO);

        return;
      }

      // if everything is fine, we continue
      currentPlayer = currentPlayer === playerX ? playerO : playerX;
      gameStatus.innerText = currentPlayer.name + "'s turn";
    });
  }
}

function gameOver(status, playerX, playerO) {
  let gameBoard = document.getElementById('board-container');
  let gameStatus = document.getElementById('game-status');

  if (playerX.winner) {
    gameStatus.innerText = playerX.name + ' wins!';
  } else if (playerO.winner) {
    gameStatus.innerText = playerO.name + ' wins!';
  } else {
    gameStatus.innerText = 'It is a draw!';
  }

  return null;
}

export default start;
