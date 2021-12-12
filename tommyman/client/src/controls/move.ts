import { tommyman } from '../elements/tommyman';

const move = (left: number, bottom: number) => {
  // tommyman.style.transform = `translateY(${left}%)`;
  // tommyman.style.transform = `translateX(${bottom}%)`;
  if (tommyman) {
    tommyman.style.left = `${left}px`;
    tommyman.style.bottom = `${bottom}px`;
  }
};

export default move;
