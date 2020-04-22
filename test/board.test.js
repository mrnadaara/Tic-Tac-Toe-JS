// src/board.js

// this is mainly using mock functions
// because almost all of them are
// tightly coupled to external variables
// or functions, this remains as a lesson

// mock function for clear
const clear = jest.fn((board) => {
  board = board.map(row => row.map(() => 0));

  return board;
});

// mock function for isDraw
const isDraw = jest.fn((board) => (board.every(row => row.every(col => col !== 0)) ? 'draw' : 'go'));

// mock function for status
const status = jest.fn((board) => {
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

  return isDraw(board);
});

// mock function for slotAvailable
const slotAvailable = jest.fn((board, row, col) => board[row][col] === 0);

// mock function for update
const update = jest.fn((board, row, col, player) => {
  board[row][col] = player.symbol === 'x' ? 1 : 2;
});

describe('clear', () => {
  const board = [
    [1, 1, 1],
    [2, 2, 1],
    [1, 2, 2],
  ];

  test('it clears the board array', () => {
    expect(clear(board).every(row => row.every(slot => slot === 0))).toBeTruthy();
  });
});

describe('isDraw', () => {
  const board = [
    [1, 2, 1],
    [1, 2, 1],
    [2, 1, 2],
  ];

  test('it returns draw with a full board', () => {
    expect(isDraw(board)).toBe('draw');
  });

  test('it returns go with a not full board', () => {
    board[0][0] = 0;
    expect(isDraw(board)).toBe('go');
  });
});

describe('status', () => {
  describe('not a win scenario and board is not full', () => {
    const scenario1 = [
      [1, 0, 1],
      [1, 2, 0],
      [2, 2, 1],
    ];

    const scenario2 = [
      [1, 1, 2],
      [2, 1, 1],
      [0, 2, 0],
    ];

    const scenario3 = [
      [0, 0, 0],
      [1, 2, 2],
      [2, 1, 1],
    ];

    test('it returns go', () => {
      expect(status(scenario1)).toBe('go');
      expect(status(scenario2)).toBe('go');
      expect(status(scenario3)).toBe('go');
    });
  });

  describe('it is a draw scenario', () => {
    const draw1 = [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ];

    const draw2 = [
      [1, 1, 2],
      [2, 1, 1],
      [1, 2, 2],
    ];

    const draw3 = [
      [2, 1, 1],
      [1, 2, 2],
      [2, 1, 1],
    ];

    test('it returns draw', () => {
      expect(status(draw1)).toBe('draw');
      expect(status(draw2)).toBe('draw');
      expect(status(draw3)).toBe('draw');
    });
  });

  describe('x player wins', () => {
    describe('row matches', () => {
      const boardRow1 = [
        [1, 1, 1],
        [2, 2, 0],
        [0, 0, 0],
      ];

      const boardRow2 = [
        [2, 2, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const boardRow3 = [
        [0, 0, 0],
        [2, 2, 0],
        [1, 1, 1],
      ];

      test('it returns x', () => {
        expect(status(boardRow1)).toBe('x');
        expect(status(boardRow2)).toBe('x');
        expect(status(boardRow3)).toBe('x');
      });
    });

    describe('column matches', () => {
      const boardColumn1 = [
        [1, 2, 0],
        [1, 2, 0],
        [1, 0, 0],
      ];

      const boardColumn2 = [
        [2, 1, 0],
        [2, 1, 0],
        [0, 1, 0],
      ];

      const boardColumn3 = [
        [0, 2, 1],
        [0, 2, 1],
        [0, 0, 1],
      ];

      test('it returns x', () => {
        expect(status(boardColumn1)).toBe('x');
        expect(status(boardColumn2)).toBe('x');
        expect(status(boardColumn3)).toBe('x');
      });
    });

    describe('diagonal matches', () => {
      const boardDiagonal1 = [
        [1, 2, 0],
        [2, 1, 0],
        [0, 0, 1],
      ];

      const boardDiagonal2 = [
        [0, 2, 1],
        [0, 1, 2],
        [1, 0, 0],
      ];

      test('it returns x', () => {
        expect(status(boardDiagonal1)).toBe('x');
        expect(status(boardDiagonal2)).toBe('x');
      });
    });
  });

  describe('o player wins', () => {
    describe('row matches', () => {
      const boardRow1 = [
        [2, 2, 2],
        [1, 1, 0],
        [0, 1, 0],
      ];

      const boardRow2 = [
        [1, 1, 0],
        [2, 2, 2],
        [1, 0, 0],
      ];

      const boardRow3 = [
        [0, 1, 0],
        [1, 1, 0],
        [2, 2, 2],
      ];

      test('it returns o', () => {
        expect(status(boardRow1)).toBe('o');
        expect(status(boardRow2)).toBe('o');
        expect(status(boardRow3)).toBe('o');
      });
    });

    describe('column matches', () => {
      const boardColumn1 = [
        [2, 1, 0],
        [2, 1, 1],
        [2, 0, 0],
      ];

      const boardColumn2 = [
        [1, 2, 0],
        [1, 2, 1],
        [0, 2, 0],
      ];

      const boardColumn3 = [
        [0, 1, 2],
        [1, 1, 2],
        [0, 0, 2],
      ];

      test('it returns o', () => {
        expect(status(boardColumn1)).toBe('o');
        expect(status(boardColumn2)).toBe('o');
        expect(status(boardColumn3)).toBe('o');
      });
    });

    describe('diagonal matches', () => {
      const boardDiagonal1 = [
        [2, 1, 0],
        [1, 2, 0],
        [1, 0, 2],
      ];

      const boardDiagonal2 = [
        [0, 1, 2],
        [0, 2, 1],
        [2, 1, 0],
      ];

      test('it returns o', () => {
        expect(status(boardDiagonal1)).toBe('o');
        expect(status(boardDiagonal2)).toBe('o');
      });
    });
  });
});

describe('slotAvailable', () => {
  const board = [
    [1, 0, 1],
    [2, 1, 0],
    [0, 0, 2],
  ];

  slotAvailable(board, 0, 0);
  slotAvailable(board, 1, 0);
  slotAvailable(board, 0, 1);
  slotAvailable(board, 2, 0);

  test('it returns false if the slot is not 0', () => {
    expect(slotAvailable.mock.results[0].value).toBeFalsy();
    expect(slotAvailable.mock.results[1].value).toBeFalsy();
  });

  test('it returns true if the slot is 0', () => {
    expect(slotAvailable.mock.results[2].value).toBeTruthy();
    expect(slotAvailable.mock.results[3].value).toBeTruthy();
  });
});

describe('update', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const playerX = { name: 'Player X', symbol: 'x', winner: false };
  const playerO = { name: 'Player O', symbol: 'o', winner: false };

  update(board, 0, 0, playerX);
  update(board, 0, 1, playerO);

  expect(board[0][0]).toBe(1);
  expect(board[0][1]).toBe(2);
});
