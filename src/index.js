import 'bootstrap';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game';

const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
  const playerXName = document.getElementById('x-name').value;
  const playerOName = document.getElementById('o-name').value;
  // Check the names
  Game(playerXName, playerOName);
});
