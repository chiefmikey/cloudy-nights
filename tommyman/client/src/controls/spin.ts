import { tommyman } from '../elements/tommyman';

import { getSpeed } from './speed';

export const spinLeft = () => {
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${(speed / 2) * -2500}deg)`;
  }
};

export const spinRight = () => {
  const speed = getSpeed();
  if (tommyman) {
    tommyman.style.transform = `rotate(${(speed / 2) * 2500}deg)`;
  }
};
