import { tommyman } from '../elements/tommyman.js';
import { body } from '../elements/body.js';
import { allAudio } from './audio.js';
import { randomBounce } from './direction.js';

let first = true;
let touching = false;
let triggered = true;

const mouseMove = () => {
  randomBounce(touching, triggered, first);
  triggered = true;
  touching = true;
};

const touchEnd = () => {
  touching = false;
  triggered = false;
};

const firstClick = () => {
  if (first) {
    allAudio.beginning.play();
    tommyman.addEventListener('mousemove', mouseMove);
    tommyman.addEventListener('mouseenter', mouseMove);
    tommyman.addEventListener(
      'touchstart',
      randomBounce(touching, triggered, first),
      { passive: true },
    );
    tommyman.addEventListener('touchend', touchEnd);
    tommyman.addEventListener('mouseout', touchEnd);
    tommyman.addEventListener('touchmove', mouseMove, { passive: true });
    body.addEventListener('touchmove', mouseMove, { passive: true });
    body.addEventListener('touchend', touchEnd);
    first = false;
  }
  touching = true;
  randomBounce(touching, triggered, first);
};

tommyman.addEventListener('click', firstClick);
