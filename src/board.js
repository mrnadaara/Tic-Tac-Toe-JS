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
  let value, player;
  // this is for faking a break inside a forEach
  let BreakException = {};

  // in here we iterate over the rows to check for a winner
  try {
    board.forEach((row) => {
      value = row[0];

      if (value === 0) return;

      winner = row.every(slot => {
        return slot === value;
      });

      player = value === 1 ? 'x' : 'o';

      if (winner) throw BreakException;
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }

  if (winner) return player;

  // in here we check for a diagonal with all the values equal
  let leftToRightDiag = [];

  for(let i = 0; i < board.length; i++){
    leftToRightDiag.push(board[i][i]);
  }

  winner = leftToRightDiag.every((currentSlot) => {
    return currentSlot === leftToRightDiag[0];
  });

  value = leftToRightDiag[0];

  if (value === 0) winner = false;

  player = value === 1 ? 'x' : 'o';

  if (winner) return player;

  // in this part we go for the columns
  let columns = [], column;

  for(let i = 0; i < board.length; i++) {
    column = [];

    for(let j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }

    columns.push(column);
  }

  let values = columns.map(column => {
    return column[0];
  });

  try {
    columns.forEach((column, index) => {
      if (values[index] === 0) return;

      winner = column.every(slot => {
        return slot === values[index];
      });

      player = values[index] === 1 ? 'x' : 'o';

      if (winner) throw BreakException;
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }

  if (winner) return player;

  // and in this one we go for the right to left diagonal
  let rightToLeft = [];
  let counter = 2;

  for(let i = 0; i < board.length; i++) {
    rightToLeft.push(board[i][counter]);
    counter--;
  }

  winner = rightToLeft.every((currentSlot) => {
    return currentSlot === rightToLeft[0];
  });

  value = rightToLeft[0];

  if (value === 0) winner = false;

  player = value === 1 ? 'x' : 'o';

  if (winner) return player;

  return isDraw();
}

const isDraw = () => {
  const allDifferent = board.every(row => {
    return row.every(col => col !== 0);
  });

  if (allDifferent) return 'draw';

  return 'go';
}

// This is for printing the board at the beginning
const render = () => {
  board.forEach((b, outerIndex) => {
    b.forEach((innerB, innerIndex) => {
      let slots = document.createElement('div');
      slots.classList.add('slot');
      slots.setAttribute('data-row', outerIndex);
      slots.setAttribute('data-column', innerIndex);
      document.getElementById('board-container').appendChild(slots);
    });
  });
}

// This is for updating the already printed board
const update = (row, col, value) => {
  board[row][col] = value;
}

const slotAvailable = (row, col) => {
  return board[row][col] === 0;
}

export { status, render, update, slotAvailable };
