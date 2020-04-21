import playerFactory from '../src/player';

test('it returns an object with a winner property set to false', () => {
  expect(playerFactory('a', 'b').hasOwnProperty('winner')).toBeTruthy;
  expect(playerFactory('a', 'b').winner).toBeFalsy;
});
