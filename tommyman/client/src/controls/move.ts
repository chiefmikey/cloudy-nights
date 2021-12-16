import { tommyman } from '../elements/tommyman';

const move = (left: number, bottom: number) => {
  if (tommyman) {
    // tommyman.style.transform = `translateY(${left}px)`;
    // tommyman.style.transform = `translateX(${bottom}px)`;
    tommyman.style.left = `${left}px`;
    tommyman.style.bottom = `${bottom}px`;
  }
};

export default move;
