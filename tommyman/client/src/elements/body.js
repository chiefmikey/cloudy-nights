import { slowDown } from '../controls/speed.js';

export const body = document.getElementById('body');

export const bodySize = { width: body.clientWidth, height: body.clientHeight };

const beginning = new Audio('../assets/sounds/beginning.mp3');
beginning.volume = 0.9;
let first = true;

const touchStart = (e) => {
  e.preventDefault();
  if (first) {
    beginning.play();
    first = false;
  }
  slowDown();
};

body.addEventListener('click', touchStart);
body.addEventListener('touchstart', touchStart);
