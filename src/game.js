import Player from './player';
import * as Board from './board';

function gameOver(status, playerX, playerO) {
  const gameStatus = document.getElementById('game-status');
  const slots = document.getElementsByClassName('slot');

  for (let i = 0; i < slots.length; i += 1) {
    slots[i].classList.remove('clickable');
  }

  if (playerX.winner) {
    gameStatus.innerText = `${playerX.name} wins!`;
  } else if (playerO.winner) {
    gameStatus.innerText = `${playerO.name} wins!`;
  } else {
    gameStatus.innerText = 'It is a draw!';
  }

  return null;
}

function checkWinStatus(status, player) {
  if (status === player.symbol) player.winner = true;

  return null;
}

function start(playerXName, playerOName) {
  // I am going to delete all the slots to clear the board
  const gameBoard = document.getElementById('board-container');

  while (gameBoard.children.length !== 0) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  // Clear the board array
  Board.clear();
  // After getting the players, we render the board
  Board.render();
  const playerX = Player(playerXName, 'x');
  const playerO = Player(playerOName, 'o');
  const boardSlots = document.getElementsByClassName('slot');
  let currentPlayer = playerX;
  let status;
  let moves = 0;
  const gameStatus = document.getElementById('game-status');
  const playerIndicator = document.getElementById('game-status');
  playerIndicator.innerText = `${playerX.name}'s turn`;

  const slotClickHandler = (e) => {
    if (playerX.winner || playerO.winner) return;

    const row = Number(e.target.getAttribute('data-row'));
    const column = Number(e.target.getAttribute('data-column'));

    // if that slot is not available do nothing
    if (!Board.slotAvailable(row, column)) return;

    // change the inner text of the slot
    e.target.innerText = currentPlayer === playerX ? 'x' : 'o';

    // increment the moves
    moves += 1;

    // it is important to update the board before getting the status
    // because if not then you'll be parsing a past board

    // update the board
    Board.update(row, column, currentPlayer);

    // the status is going to be either go, x, o, or draw
    status = moves >= 5 ? Board.status() : 'go';

    // here I check if the status is a game over one
    if (status !== 'go') {
      checkWinStatus(status, playerX);
      checkWinStatus(status, playerO);
      gameOver(status, playerX, playerO);

      return;
    }

    // if everything is fine, we continue
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    gameStatus.innerText = `${currentPlayer.name}'s turn`;
  };

  for (let i = 0; i < boardSlots.length; i += 1) {
    boardSlots[i].addEventListener('click', slotClickHandler);
    boardSlots[i].classList.add('clickable');
  }
}

export default start;
