import playerOne from '../content/player';
import { ifTalking } from '../content/talking';

import K from './init';
import './zoom';

let getMoving = () => {};
let isDown = false;
let direction: string;
let timer: NodeJS.Timer;
let sound = false;

const controls = () => {
  const player = playerOne();
  const SPEED = 80;

  const allDirections = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };

  const directionKeys = Object.keys(allDirections);
  for (const key of directionKeys) {
    K.keyPress(key, ifTalking);
    K.keyDown(key, () => {
      player.move(
        allDirections[key as keyof typeof allDirections].scale(SPEED),
      );
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        player.move(
          allDirections[direction as keyof typeof allDirections].scale(SPEED),
        );
      }
    }, 15);
  };
};

const playerMove = (event: MouseEvent) => {
  event.preventDefault();
  // eslint-disable-next-line no-param-reassign
  event.returnValue = false;
  if (
    event.type !== 'mouseup' &&
    event.type !== 'touchend' &&
    event.type !== 'touchcancel' &&
    ((event.target as Element).id === 'up' ||
      (event.target as Element).id === 'right' ||
      (event.target as Element).id === 'down' ||
      (event.target as Element).id === 'left')
  ) {
    if (
      event.buttons === 1 ||
      event.buttons === 3 ||
      event.type === 'touchstart' ||
      event.type === 'touchmove'
    ) {
      clearInterval(timer);
      isDown = true;
      if ((event.target as Element).id) {
        direction = (event.target as Element).id;
      }
      getMoving();
    }
  } else {
    clearInterval(timer);
    isDown = false;
  }
};

const blackScreen: HTMLElement = document.querySelector('#blackScreen');
const title: HTMLElement = document.querySelector('#title');

const touchStart = () => {
  if (!sound && getComputedStyle(title).opacity === '1') {
    K.play('coin');
    sound = true;
    (document.querySelector('#controls') as HTMLElement).style.pointerEvents =
      'all';
    blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
    title.style.animation = 'fadeOut .2s linear 0s forwards';
    controls();
  }
};

blackScreen.addEventListener('mousedown', touchStart);
blackScreen.addEventListener('touchstart', touchStart, { passive: true });
title.addEventListener('mousedown', touchStart);
title.addEventListener('touchstart', touchStart, { passive: true });

document.addEventListener('mousedown', playerMove);
document.addEventListener('mouseup', playerMove);
document.addEventListener('mouseover', playerMove);
document.addEventListener('touchstart', playerMove, { passive: true });
document.addEventListener('touchend', playerMove, false);
document.addEventListener('touchmove', playerMove, { passive: true });
document.addEventListener('touchcancel', playerMove, false);

export default controls;
