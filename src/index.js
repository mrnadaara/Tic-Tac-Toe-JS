/* eslint-disable import/no-unresolved */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-enable import/no-unresolved */
import './main.css';
import Game from './game';

const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
  let playerXName = document.getElementById('x-name').value;
  let playerOName = document.getElementById('o-name').value;

  if (playerXName.trim() === '') playerXName = 'X player';

  if (playerOName.trim() === '') playerOName = 'O player';

  // Check the names
  Game(playerXName, playerOName);
});
