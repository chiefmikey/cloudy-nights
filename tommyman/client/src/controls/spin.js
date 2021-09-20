import { tommyman } from '../elements/tommyman.js';

let degrees = 0;

export const spinLeft = () => {
  degrees -= 1;
  tommyman.style.transform = `rotate(${degrees}deg)`;
};

export const spinRight = () => {
  degrees += 1;
  tommyman.style.transform = `rotate(${degrees}deg)`;
};
