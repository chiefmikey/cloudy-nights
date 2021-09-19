let speed = 1;

export const speedUp = () => {
  speed += 1;
};

export const slowDown = () => {
  if (speed > 2) {
    speed -= 2;
  } else if (speed > 1) {
    speed -= 1;
  }
};

export const getSpeed = () => speed;
