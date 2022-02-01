import { Vec2, Key } from 'kaboom';

import { ifTalking } from '../content/talking';

import { K } from './init';
import './zoom';

let getMoving = () => {};
let isDown = false;
let direction: string;
let timer: NodeJS.Timer;
let sound = false;

const controls = () => {
  const player = K.get('playerOne')[0];
  const SPEED = 80;

  const allDirections = {
    left: K.vec2(-1, 0),
    up: K.vec2(0, -1),
    right: K.vec2(1, 0),
    down: K.vec2(0, 1),
  };

  const directionKeys = Object.keys(allDirections);
  for (const key of directionKeys) {
    K.onKeyPress(key as Key, ifTalking);
    K.onKeyDown(key as Key, () => {
      (player.move as (input: Vec2) => void)(
        allDirections[key as keyof typeof allDirections].scale(SPEED),
      );
    });
  }

  getMoving = () => {
    ifTalking();
    timer = setInterval(() => {
      if (isDown) {
        (player.move as (input: Vec2) => void)(
          allDirections[direction as keyof typeof allDirections].scale(SPEED),
        );
      }
    }, 15);
  };
};

const playerMove = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
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
      (event as MouseEvent).buttons === 1 ||
      (event as MouseEvent).buttons === 3 ||
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

const blackScreen: HTMLElement | null = document.querySelector('#blackScreen');
const title: HTMLElement | null = document.querySelector('#title');

const touchStart = () => {
  if (!sound && getComputedStyle(title as Element).opacity === '1') {
    K.play('coin');
    sound = true;
    (document.querySelector('#controls') as HTMLElement).style.pointerEvents =
      'all';
    if (blackScreen && title) {
      blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
      title.style.animation = 'fadeOut .2s linear 0s forwards';
    }
    controls();
  }
};

if (blackScreen && title) {
  blackScreen.addEventListener('mousedown', touchStart);
  blackScreen.addEventListener('touchstart', touchStart, { passive: true });
  title.addEventListener('mousedown', touchStart);
  title.addEventListener('touchstart', touchStart, { passive: true });
}

document.addEventListener('mousedown', playerMove);
document.addEventListener('mouseup', playerMove);
document.addEventListener('mouseover', playerMove);
document.addEventListener('touchstart', playerMove, { passive: true });
document.addEventListener('touchend', playerMove, false);
document.addEventListener('touchmove', playerMove, { passive: true });
document.addEventListener('touchcancel', playerMove, false);

export default controls;
