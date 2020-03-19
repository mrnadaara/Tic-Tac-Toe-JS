import 'bootstrap';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
