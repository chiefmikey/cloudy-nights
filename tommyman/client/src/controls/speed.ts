let speed = 1;

export const speedUp = () => {
  speed += 5;
};

export const slowDown = () => {
  if (speed > 6) {
    speed -= 6;
  } else if (speed === 6) {
    speed -= 5;
  }
};

export const getSpeed = () => speed;
