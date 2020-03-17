// This is the board as an array
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// This is for changing a position to either 1, or 2
const changeSlot = () => {
}

// This is for checking win or draw
const status = () => {
  // const row1 = [board[0][0], board[0][1], board[0][2]];
  // const row2 = [board[1][0], board[1][1], board[1][2]];
  // const row3 = [board[2][0], board[2][1], board[2][2]];
  board.forEach((b) => {
    const value = b[0];
    b.every((currentSlot) => {
      return currentSlot === value;
    });
  });

  let leftToRightDiag = [];
  for(let i = 0; i < board.length; i++){
    leftToRightDiag.push(board[i][i]);
  }
  leftToRightDiag.every((currentSlot) => {
    return currentSlot === leftToRightDiag[0];
  });

  let column = [];
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++){
      column.push(board[j][i]);
    }
  }
  column.every((currentSlot) => {
    return currentSlot === column[0];
  });

  let rightToLeft = [];
  let counter = 2;
  for(let i = 0; i < board.length; i++){
    rightToLeft.push(board[i][counter]);
    counter--;
  }
  rightToLeft.every((currentSlot) => {
    return currentSlot === rightToLeft[0];
  });
}

// This is for printing the board at the beginning
const render = () => {
  board.forEach((b, outerIndex) => {
    b.forEach((innerB, innerIndex) => {
      let slots = document.createElement('div');
      slots.setAttribute('class', 'slot');
      slots.setAttribute('data-row', outerIndex);
      slots.setAttribute('data-column', innerIndex);
      document.getElementById('board-container').appendChild(slots);
    });
  });
}

// This is for updating the already printed board
const update = (row, col, value) => {
  let slot = document.querySelector(`.slot[data-row="${row}"][data-column="${col}"]`);
  slot.innerText = value === 1 ? 'x' : 'o';
  board[row][col] = value;
}

const slotAvailable = (row, col) => {
  return board[row][col] === 0;
}

export { changeSlot, status, render, update, slotAvailable };
