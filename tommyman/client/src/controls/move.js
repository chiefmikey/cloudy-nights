import { tommyman } from '../elements/tommyman.js';

const move = (left, bottom) => {
  // tommyman.style.transform = `translateY(${left}%)`;
  // tommyman.style.transform = `translateX(${bottom}%)`;
  tommyman.style.left = `${left}px`;
  tommyman.style.bottom = `${bottom}px`;
};

export default move;
