// This is the board as an array
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// This is for checking win or draw
const status = () => {
  // these two variables keep track of the winner
  let winner = false;
  let value, player, row;

  // in here we iterate over the rows to check for a winner
  for (let i = 0; i < 3; i++) {
    row = board[i];
    value = row[0];

    if (value === 0) continue;

    winner = row.every(slot => {
      return slot === value;
    });

    player = value === 1 ? 'x' : 'o';

    if (winner) return player;
  }


  // in here we check for a diagonal with all the values equal
  let leftToRightDiagonal = [];

  for(let i = 0; i < board.length; i++){
    if (board[i][i] === 0) break;
    leftToRightDiagonal.push(board[i][i]);
  }

  if (leftToRightDiagonal.length === 3) {
    winner = leftToRightDiagonal.every(slot => {
      return slot === leftToRightDiagonal[0];
    });

    value = leftToRightDiagonal[0];
    player = value === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  // in this part we go for the columns
  let columns = [], column;

  for(let i = 0; i < 3; i++) {
    column = [];

    for(let j = 0; j < 3; j++) {
      if (board[j][i] === 0) break;
      column.push(board[j][i]);
    }

    if (column.length === 3) columns.push(column);
  }

  let values = columns.map(column => {
    return column[0];
  });

  for (let i = 0; i < columns.length; i++) {
    column = columns[i];

    winner = column.every(slot => {
      return slot === values[i];
    });

    player = values[i] === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  // and in this one we go for the right to left diagonal
  let rightToLeftDiagonal = [], counter = 2;

  for (let i = 0; i < board.length; i++) {
    if (board[i][counter] === 0) break;
    rightToLeftDiagonal.push(board[i][counter]);
    counter--;
  }

  if (rightToLeftDiagonal.length === 3) {
    winner = rightToLeftDiagonal.every(slot => {
      return slot === rightToLeftDiagonal[0];
    });

    value = rightToLeftDiagonal[0];
    player = value === 1 ? 'x' : 'o';

    if (winner) return player;
  }

  return isDraw();
}

const isDraw = () => {
  const allDifferent = board.every(row => {
    return row.every(col => col !== 0);
  });

  if (allDifferent) return 'draw';

  return 'go';
}

const clear = () => {
  let gameBoard = document.getElementById('board-container');

  board = board.map(row => {
    return row.map(slot => {
      return 0;
    });
  });

  gameBoard.classList.remove('bg-orange');

  return null;
}

// This is for printing the board at the beginning
const render = () => {
  let gameBoard = document.getElementById('board-container');

  board.forEach((row, rowIndex) => {
    row.forEach((slot, columnIndex) => {
      let slotElement = document.createElement('div');
      slotElement.classList.add('slot');
      slotElement.setAttribute('data-row', rowIndex);
      slotElement.setAttribute('data-column', columnIndex);
      gameBoard.appendChild(slotElement);
    });
  });

  gameBoard.classList.add('bg-orange');

  return null;
}

// This is for updating the already printed board
const update = (row, col, player) => {
  if (player.symbol === 'x') {
    board[row][col] = 1;
  } else {
    board[row][col] = 2;
  }

  return null;
}

const slotAvailable = (row, col) => {
  return board[row][col] === 0;
}

export { clear, status, render, update, slotAvailable };
