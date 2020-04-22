import '../src/game';

// obviously not a pure function
const checkWinStatus = jest.fn((status, player) => {
  player.winner = status === player.symbol;
});

// this one either, it hinges on an external object
// actually, this function doesn't need the status at all
const gameOver = jest.fn((playerX, playerO) => {
  if (playerX.winner) return `${playerX.name} wins!`;
  if (playerO.winner) return `${playerO.name} wins!`;
  return 'It is a draw!';
});

describe('gameOver', () => {
  const playerX = { name: 'Player X', symbol: 'x', winner: false };
  const playerO = { name: 'Player O', symbol: 'o', winner: false };

  afterEach(() => {
    playerX.winner = false;
    playerO.winner = false;
  });

  test('draw scenario', () => {
    expect(gameOver(playerX, playerO)).toBe('It is a draw!');
  });

  test('x player wins', () => {
    playerX.winner = true;
    expect(gameOver(playerX, playerO)).toBe(`${playerX.name} wins!`);
  });

  test('o player wins', () => {
    playerO.winner = true;
    expect(gameOver(playerX, playerO)).toBe(`${playerO.name} wins!`);
  });
});

describe('checkWinStatus', () => {
  describe('player symbol is x', () => {
    const player = { symbol: 'x', winner: false };

    afterEach(() => {
      player.winner = false;
    });

    test('changes winner to true when status is x', () => {
      checkWinStatus('x', player);
      expect(player.winner).toBeTruthy();
    });

    test('changes nothing when status is go', () => {
      checkWinStatus('go', player);
      expect(player.winner).toBeFalsy();
    });

    test('changes nothing when status is o', () => {
      checkWinStatus('o', player);
      expect(player.winner).toBeFalsy();
    });
  });

  describe('player symbol is o', () => {
    const player = { symbol: 'o', winner: false };

    afterEach(() => {
      player.winner = false;
    });

    test('changes winner to true when status is o', () => {
      checkWinStatus('o', player);
      expect(player.winner).toBeTruthy();
    });

    test('changes nothing when status is go', () => {
      checkWinStatus('go', player);
      expect(player.winner).toBeFalsy();
    });

    test('changes nothing when status is x', () => {
      checkWinStatus('x', player);
      expect(player.winner).toBeFalsy();
    });
  });
});
