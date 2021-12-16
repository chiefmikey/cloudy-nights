import { tommyman } from '../elements/tommyman';

import { allAudio } from './audio';
import { randomBounce } from './direction';

let first = true;
let touching = false;
let triggered = true;

const mouseMove = () => {
  randomBounce(touching, triggered, first);
  triggered = true;
  touching = true;
};

const touchStart = () => randomBounce(touching, triggered, first);

const touchEnd = () => {
  touching = false;
  triggered = false;
};

const firstClick = () => {
  if (first) {
    allAudio.beginning.play();
    (tommyman?.addEventListener as EventListenerType)('mouseenter', mouseMove);
    // (tommyman?.addEventListener as EventListenerType)('mouseenter', mouseMove);
    (tommyman?.addEventListener as EventListenerType)('mouseover', mouseMove);
    tommyman?.addEventListener('mouseleave', touchEnd);
    // tommyman?.addEventListener('mouseout', touchEnd);
    // tommyman?.addEventListener('touchend', touchEnd);
    (tommyman?.addEventListener as EventListenerType)(
      'touchstart',
      touchStart,
      {
        passive: true,
      },
    );
    (tommyman?.addEventListener as EventListenerType)('touchmove', mouseMove, {
      passive: true,
    });
    // (body?.addEventListener as EventListenerType)('touchmove', mouseMove, {
    //   passive: true,
    // });
    // body?.addEventListener('touchend', touchEnd);
    first = false;
  }
  touching = true;
  randomBounce(touching, triggered, first);
};

(tommyman?.addEventListener as EventListenerType)('click', firstClick);
