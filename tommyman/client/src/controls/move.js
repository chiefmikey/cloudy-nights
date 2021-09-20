import { tommyman } from '../elements/tommyman.js';

const move = (left, bottom) => {
  tommyman.style.left = `${left}px`;
  tommyman.style.bottom = `${bottom}px`;
};

export default move;
