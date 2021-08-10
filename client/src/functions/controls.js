import K from './init.js';
import playerOne from '../content/player.js';
import { ifTalking } from '../content/talking.js';
import './zoom.js';

const controls = () => {
  const player = playerOne();
  const SPEED = 80;

  const dirs = {
    left: K.vec2(-1, 0),
    right: K.vec2(1, 0),
    up: K.vec2(0, -1),
    down: K.vec2(0, 1),
  };

  const dirKeys = Object.keys(dirs);
  for (let i = 0; i < dirKeys.length; i += 1) {
    K.keyPress(dirKeys[i], ifTalking);
    K.keyDown(dirKeys[i], () => {
      player.move(dirs[dirKeys[i]].scale(SPEED));
    });
  }

  let isDown = false;
  let timer;

  const playerMove = (dir) => {
    return () => {
      if (dir.length > 0) {
        ifTalking();
        isDown = true;
        timer = setInterval(() => {
          if (isDown) {
            player.move(dirs[dir].scale(SPEED));
          }
        }, 15);
      } else {
        clearInterval(timer);
        isDown = false;
      }
    };
  };

  document.getElementById('up').addEventListener('mousedown', playerMove('up'));
  document
    .getElementById('up')
    .addEventListener('touchstart', playerMove('up'));
  document
    .getElementById('right')
    .addEventListener('mousedown', playerMove('right'));
  document
    .getElementById('right')
    .addEventListener('touchstart', playerMove('right'));
  document
    .getElementById('down')
    .addEventListener('mousedown', playerMove('down'));
  document
    .getElementById('down')
    .addEventListener('touchstart', playerMove('down'));
  document
    .getElementById('left')
    .addEventListener('mousedown', playerMove('left'));
  document
    .getElementById('left')
    .addEventListener('touchstart', playerMove('left'));

  document.addEventListener('mouseup', playerMove(''));
  document.addEventListener('touchend', playerMove(''));
};

export default controls;
