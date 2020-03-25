// This is the board as an array
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const isDraw = () => {
  const allDifferent = board.every(row => row.every(col => col !== 0));

  if (allDifferent) return 'draw';

  return 'go';
};

// This is for checking win or draw
const status = () => {
  // these two variables keep track of the winner
  let winner = false;
  let value;
  let player;
  let row;

  const slotsAreEqual = (row, value) => row.every(slot => slot === value);

  // in here we iterate over the rows to check for a winner
  for (let i = 0; i < 3; i += 1) {
    row = board[i];
    [value] = row;

    if (value !== 0) {
      winner = slotsAreEqual(row, value);

      player = value === 1 ? 'x' : 'o';

      if (winner) return player;
    }
  }


  // in here we check for a diagonal with all the values equal
  const leftToRightDiagonal = [];

  for (let i = 0; i < board.length; i += 1) {
    if (board[i][i] === 0) break;
    leftToRightDiagonal.push(board[i][i]);
  }

  if (leftToRightDiagonal.length === 3) {
    winner = leftToRightDiagonal.every(slot => slot === leftToRightDiagonal[0]);

    [value] = leftToRightDiagonal;
    player = value === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  // in this part we go for the columns
  const columns = []; let
    column;

  for (let i = 0; i < 3; i += 1) {
    column = [];

    for (let j = 0; j < 3; j += 1) {
      if (board[j][i] === 0) break;
      column.push(board[j][i]);
    }

    if (column.length === 3) columns.push(column);
  }

  const values = columns.map(column => column[0]);

  for (let i = 0; i < columns.length; i += 1) {
    column = columns[i];

    winner = column.every(slot => slot === values[i]);

    player = values[i] === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  // and in this one we go for the right to left diagonal
  const rightToLeftDiagonal = []; let
    counter = 2;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i][counter] === 0) break;
    rightToLeftDiagonal.push(board[i][counter]);
    counter -= 1;
  }

  if (rightToLeftDiagonal.length === 3) {
    winner = rightToLeftDiagonal.every(slot => slot === rightToLeftDiagonal[0]);

    [value] = rightToLeftDiagonal;
    player = value === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  return isDraw();
};

const clear = () => {
  const gameBoard = document.getElementById('board-container');

  board = board.map(row => row.map(slot => {
    slot = 0;
    return slot;
  }));

  gameBoard.classList.remove('bg-orange');

  return null;
};

// This is for printing the board at the beginning
const render = () => {
  const gameBoard = document.getElementById('board-container');

  board.forEach((row, rowIndex) => {
    row.forEach((slot, columnIndex) => {
      const slotElement = document.createElement('div');
      slotElement.classList.add('slot');
      slotElement.setAttribute('data-row', rowIndex);
      slotElement.setAttribute('data-column', columnIndex);
      gameBoard.appendChild(slotElement);
    });
  });

  gameBoard.classList.add('bg-orange');

  return null;
};

// This is for updating the already printed board
const update = (row, col, player) => {
  if (player.symbol === 'x') {
    board[row][col] = 1;
  } else {
    board[row][col] = 2;
  }

  return null;
};

const slotAvailable = (row, col) => board[row][col] === 0;

export {
  clear, status, render, update, slotAvailable,
};
