import { speedUp, slowDown } from '../controls/speed.js';

export const body = document.getElementById('body');

export const bodySize = { width: body.clientWidth, height: body.clientHeight };

body.addEventListener('click', (e) => {
  e.preventDefault();
  speedUp();
});
body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  slowDown();
});
