import { speedUp } from '../controls/speed.js';

let degrees = 0;

export const tommyman = document.getElementById('tommyman');

tommyman.addEventListener('click', (e) => {
  e.preventDefault();
  speedUp();
});

export const move = (left, bottom) => {
  tommyman.style.left = `${left}px`;
  tommyman.style.bottom = `${bottom}px`;
};

export const spinLeft = () => {
  degrees -= 1;
  tommyman.style.transform = `rotate(${degrees}deg)`;
};

export const spinRight = () => {
  degrees += 1;
  tommyman.style.transform = `rotate(${degrees}deg)`;
};
