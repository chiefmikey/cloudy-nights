let speed = 1;

export const speedUp = () => {
  speed += 1;
  console.log(speed);
};
export const slowDown = () => {
  if (speed > 1) {
    speed -= 1;
  }
  console.log(speed);
};

export const getSpeed = () => speed;
