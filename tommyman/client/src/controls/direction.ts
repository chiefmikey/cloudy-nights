import { bodySize } from '../elements/body';
import { tommySize } from '../elements/tommyman';
import addInterval from '../helpers/interval';
import setPosition from '../helpers/position';
import print from '../helpers/print';
import random from '../helpers/random';

import { allNoises, allWords } from './audio';
import move from './move';
import { slowDown, speedUp } from './speed';
import { spinLeft, spinRight } from './spin';

const goLeft = () => {
  return () =>
    setInterval(() => {
      spinLeft();
      // move(-1, 0);
      const pos = setPosition(-1, 0);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinLeft();
        move(pos.left, pos.bottom);
      }
    }, 1);
};

const goLeftUp = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(-1, 1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinLeft();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goLeftDown = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(-1, -1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinLeft();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goRight = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(1, 0);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinRight();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goRightUp = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(1, 1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinRight();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goRightDown = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(1, -1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinRight();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goUp = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(0, 1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinLeft();
        move(pos.left, pos.bottom);
      }
    }, 1);
};
const goDown = () => {
  return () =>
    setInterval(() => {
      const pos = setPosition(0, -1);
      if (!hitsWall(pos.left, pos.bottom)) {
        spinRight();
        move(pos.left, pos.bottom);
      }
    }, 1);
};

const aRight = () => {
  const allRights = [goRight, goRightUp, goRightDown];
  return random(allRights);
};

const aLeft = () => {
  const allLefts = [goLeft, goLeftUp, goLeftDown];
  return random(allLefts);
};

const aUp = () => {
  const allUps = [goUp, goLeftUp, goRightUp];
  return random(allUps);
};

const aDown = () => {
  const allDowns = [goDown, goLeftDown, goRightDown];
  return random(allDowns);
};

const hitsWall = (left, bottom) => {
  const randomNoise =
    allNoises[((allNoises.length - 1) * Math.random()).toFixed(0)];
  if (left <= 0) {
    randomNoise.play();
    print(left, bottom);
    addInterval(aRight()());
    slowDown();
    return true;
  }
  if (left >= bodySize.width - tommySize.width) {
    randomNoise.play();
    print(left, bottom);
    addInterval(aLeft()());
    slowDown();
    return true;
  }
  if (bottom <= 0) {
    randomNoise.play();
    print(left, bottom);
    addInterval(aUp()());
    slowDown();
    return true;
  }
  if (bottom >= bodySize.height - tommySize.height) {
    randomNoise.play();
    print(left, bottom);
    addInterval(aDown()());
    slowDown();
    return true;
  }
  return false;
};

export const randomBounce = (touching, triggered, first) => {
  const pos = setPosition(0, 0);
  const randomWord =
    allWords[((allWords.length - 1) * Math.random()).toFixed(0)];
  if (!first && (!touching || (touching && !triggered))) {
    randomWord.play();
    print(pos.left, pos.bottom);
  }
  if (first) {
    print(pos.left, pos.bottom);
  }
  const directionKeys = Object.keys(allDirections);
  addInterval(allDirections[random(directionKeys)]());
  speedUp();
};

export const allDirections = {
  left: goLeft,
  right: goRight,
  up: goUp,
  down: goDown,
  leftUp: goLeftUp,
  rightUp: goRightUp,
  leftDown: goLeftDown,
  rightDown: goRightDown,
};
