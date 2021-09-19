import { bodySize } from '../elements/body.js';
import { tommyman, move, spinLeft, spinRight } from '../elements/tommyman.js';
import addInterval from '../helpers/interval.js';

const cool = new Audio('../assets/sounds/cool.mp3');
const crazy = new Audio('../assets/sounds/crazy.mp3');
crazy.volume = 0.9;
const d = new Audio('../assets/sounds/d.mp3');
d.volume = 0.5;
const ea = new Audio('../assets/sounds/ea.mp3');
const g = new Audio('../assets/sounds/g.mp3');
g.volume = 0.8;
const gnarly = new Audio('../assets/sounds/gnarly.mp3');
gnarly.volume = 0.8;

const allWords = [cool, crazy, gnarly];
const allNoises = [d, ea, g];

const tommySize = {
  width: tommyman.clientWidth,
  height: tommyman.clientHeight,
};

let left = bodySize.width / 2 - tommySize.width / 2;
let bottom = bodySize.height / 2 - tommySize.height / 2;

tommyman.style.left = `${left}px`;
tommyman.style.bottom = `${bottom}px`;

const random = (keys) => keys[((keys.length - 1) * Math.random()).toFixed()];

const goLeft = () => {
  return () =>
    setInterval(() => {
      left -= 1;
      if (!hitsWall()) {
        spinLeft();
        move(left, bottom);
      }
    }, 1);
};
const goLeftUp = () => {
  return () =>
    setInterval(() => {
      left -= 1;
      bottom += 1;
      if (!hitsWall()) {
        spinLeft();
        move(left, bottom);
      }
    }, 1);
};
const goLeftDown = () => {
  return () =>
    setInterval(() => {
      left -= 1;
      bottom -= 1;
      if (!hitsWall()) {
        spinLeft();
        move(left, bottom);
      }
    }, 1);
};
const goRight = () => {
  return () =>
    setInterval(() => {
      left += 1;
      if (!hitsWall()) {
        spinRight();
        move(left, bottom);
      }
    }, 1);
};
const goRightUp = () => {
  return () =>
    setInterval(() => {
      left += 1;
      bottom += 1;
      if (!hitsWall()) {
        spinRight();
        move(left, bottom);
      }
    }, 1);
};
const goRightDown = () => {
  return () =>
    setInterval(() => {
      left += 1;
      bottom -= 1;
      if (!hitsWall()) {
        spinRight();
        move(left, bottom);
      }
    }, 1);
};
const goUp = () => {
  return () =>
    setInterval(() => {
      bottom += 1;
      if (!hitsWall()) {
        spinLeft();
        move(left, bottom);
      }
    }, 1);
};
const goDown = () => {
  return () =>
    setInterval(() => {
      bottom -= 1;
      if (!hitsWall()) {
        spinRight();
        move(left, bottom);
      }
    }, 1);
};

const allDirections = {
  left: goLeft,
  right: goRight,
  up: goUp,
  down: goDown,
  leftUp: goLeftUp,
  rightUp: goRightUp,
  leftDown: goLeftDown,
  rightDown: goRightDown,
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

const hitsWall = () => {
  const randomNoise =
    allNoises[((allNoises.length - 1) * Math.random()).toFixed()];
  if (left <= 0) {
    randomNoise.play();
    addInterval(aRight()());
    return true;
  }
  if (left >= bodySize.width - tommySize.width) {
    randomNoise.play();
    addInterval(aLeft()());
    return true;
  }
  if (bottom <= 0) {
    randomNoise.play();
    addInterval(aUp()());
    return true;
  }
  if (bottom >= bodySize.height - tommySize.height) {
    randomNoise.play();
    addInterval(aDown()());
    return true;
  }
  return false;
};

const randomBounce = (event) => {
  const randomWord =
    allWords[((allWords.length - 1) * Math.random()).toFixed()];
  randomWord.play();
  const dirKeys = Object.keys(allDirections);
  addInterval(allDirections[random(dirKeys)]());
};

tommyman.addEventListener('mouseover', randomBounce);
tommyman.addEventListener('click', randomBounce);
tommyman.addEventListener('touchstart', randomBounce);
tommyman.addEventListener('touchmove', randomBounce);
tommyman.addEventListener('touchend', randomBounce);
