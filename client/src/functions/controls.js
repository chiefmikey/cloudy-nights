import K from './init.js';
import { ifTalking } from '../content/talking.js';
import playerOne from '../content/player.js';
import './zoom.js';

let getMoving = () => {};
let isDown = false;
let direction;
let timer;

const playerMove = (e) => {
  e.preventDefault();
  e.returnValue = false;
  if (
    e.type !== 'mouseup' &&
    e.type !== 'touchend' &&
    e.type !== 'touchcancel' &&
    (e.target.id === 'up' ||
      e.target.id === 'topRight' ||
      e.target.id === 'right' ||
      e.target.id === 'bottomRight' ||
      e.target.id === 'down' ||
      e.target.id === 'bottomLeft' ||
      e.target.id === 'left' ||
      e.target.id === 'topLeft')
  ) {
    if (
      e.buttons === 1 ||
      e.buttons === 3 ||
      e.type === 'touchstart' ||
      e.type === 'touchmove'
    ) {
      clearInterval(timer);
      isDown = true;
      direction = e.target.id;
      getMoving();
    }
  } else {
    clearInterval(timer);
    isDown = false;
  }
};

document.addEventListener('mousedown', playerMove);
document.addEventListener('mouseup', playerMove);
document.addEventListener('mouseover', playerMove);
document.addEventListener('touchstart', playerMove, false);
document.addEventListener('touchend', playerMove, false);
document.addEventListener('touchmove', playerMove, false);
document.addEventListener('touchcancel', playerMove, false);

const controls = () => {
  const player = playerOne();
  const SPEED = 80;

  const dirs = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };

  const dirKeys = Object.keys(dirs);
  for (let i = 0; i < dirKeys.length; i += 1) {
    K.keyPress(dirKeys[i], ifTalking);
    K.keyDown(dirKeys[i], () => {
      player.move(dirs[dirKeys[i]].scale(SPEED));
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        if (direction === 'topRight') {
          player.move(dirs.right.scale(SPEED));
          player.move(dirs.up.scale(SPEED));
        } else if (direction === 'bottomRight') {
          player.move(dirs.right.scale(SPEED));
          player.move(dirs.down.scale(SPEED));
        } else if (direction === 'bottomLeft') {
          player.move(dirs.left.scale(SPEED));
          setTimeout(() => player.move(dirs.down.scale(SPEED)), 0);
        } else if (direction === 'topLeft') {
          player.move(dirs.left.scale(SPEED));
          setTimeout(() => player.move(dirs.up.scale(SPEED)), 0);
        } else {
          player.move(dirs[direction].scale(SPEED));
        }
      }
    }, 15);
  };
};

export default controls;
