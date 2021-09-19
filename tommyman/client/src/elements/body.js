import { speedUp, slowDown } from '../controls/speed.js';

export const body = document.getElementById('body');

export const bodySize = { width: body.clientWidth, height: body.clientHeight };

const beginning = new Audio('../assets/sounds/beginning.mp3');
beginning.volume = 0.9;
let first = true;

const touchStart = (event) => {
  if (first) {
    beginning.play();
    first = false;
  }
};

let currentY = null;
let touching = false;

const touchMove = (event) => {
  if (!touching && currentY < event.changedTouches[0].clientY) {
    touching = true;
    speedUp();
  } else if (!touching && currentY > event.changedTouches[0].clientY) {
    touching = true;
    slowDown();
  }
  currentY = event.changedTouches[0].clientY;
};

const touchEnd = (event) => {
  touching = false;
};

const increaseSpeed = (event) => {
  speedUp();
};

const decreaseSpeed = (event) => {
  slowDown();
};

body.addEventListener('touchstart', touchStart);
body.addEventListener('touchmove', touchMove);
body.addEventListener('touchend', touchEnd);
body.addEventListener('click', increaseSpeed);
body.addEventListener('contextmenu', decreaseSpeed);
