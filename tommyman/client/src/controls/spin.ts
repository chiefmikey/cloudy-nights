import { tommyman } from '../elements/tommyman';

import { getSpeed } from './speed';

export const spinLeft = () => {
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${speed * -5000}deg)`;
  }
};

export const spinRight = () => {
  // degrees += 1;
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${speed * 5000}deg)`;
  }
};
