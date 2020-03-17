import 'bootstrap';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game';

let startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
  let playerXName = document.getElementById('x-name').value;
  let playerOName = document.getElementById('o-name').value;
  // Check the names
  Game(playerXName, playerOName);
});
