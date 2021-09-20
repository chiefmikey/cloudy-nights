import { tommyman, tommySize } from '../elements/tommyman.js';
import { body } from '../elements/body.js';
import { allAudio } from './audio.js';
import { getOffset } from '../helpers/position.js';
import { randomBounce } from './direction.js';

let first = true;
let touching = false;
let triggered = true;

const mouseMove = (event) => {
  isOverlapping(event.clientX, event.clientY);
  touching = true;
};

const touchMove = (event) => {
  isOverlapping(
    event.changedTouches[0].clientX,
    event.changedTouches[0].clientY,
  );
  touching = true;
};

const touchEnd = (event) => {
  touching = false;
  triggered = false;
};

const firstClick = (event) => {
  if (first) {
    allAudio.beginning.play();
    tommyman.addEventListener('mousemove', mouseMove);
    tommyman.addEventListener(
      'touchstart',
      randomBounce(touching, triggered, first),
    );
    tommyman.addEventListener('touchend', touchEnd);
    tommyman.addEventListener('mouseout', touchEnd);
    tommyman.addEventListener('touchmove', touchMove);
    body.addEventListener('touchmove', touchMove);
    body.addEventListener('touchend', touchEnd);
    first = false;
  }
  touching = true;
  randomBounce(touching, triggered, first);
};

const isOverlapping = (x, y) => {
  const area = getOffset(tommyman);
  if (
    x >= area.leftSide + tommySize.width / 6 &&
    x <= area.rightSide - tommySize.width / 6 &&
    y >= area.topSide + tommySize.height / 6 &&
    y <= area.bottomSide - tommySize.height / 6
  ) {
    randomBounce(touching, triggered, first);
    triggered = true;
  } else if (
    x < area.leftSide - tommySize.width / 2 ||
    x > area.rightSide + tommySize.width / 2 ||
    y < area.topSide - tommySize.height / 2 ||
    y > area.bottomSide + tommySize.height / 2
  ) {
    triggered = false;
  }
};

tommyman.addEventListener('click', firstClick);
