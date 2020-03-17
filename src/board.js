// This is the board as an array
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

// This is for changing a position to either 1, or 2
const changeSlot = () => {
}

// This is for checking win or draw
const status = () => {
}

// This is for printing the board at the beginning
const render = () => {
}

// This is for updating the already printed board
const update = () => {
}

const slotAvailable = (row, col) => {
  return board[row][col] === 0;
}

export { changeSlot, status, render, update, slotAvailable };
