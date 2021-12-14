import { body } from '../elements/body';
import { tommyman } from '../elements/tommyman';

import { allAudio } from './audio';
import { randomBounce } from './direction';

let first = true;
let touching = false;
let triggered = true;

const mouseMove = async () => {
  await randomBounce(touching, triggered, first);
  triggered = true;
  touching = true;
};

const touchStart = async () => {
  await randomBounce(touching, triggered, first);
};

const touchEnd = () => {
  touching = false;
  triggered = false;
};

const firstClick = async () => {
  if (first) {
    await allAudio.beginning.play();
    (tommyman?.addEventListener as EventListenerType)('mousemove', mouseMove);
    (tommyman?.addEventListener as EventListenerType)('mouseenter', mouseMove);
    (tommyman?.addEventListener as EventListenerType)(
      'touchstart',
      touchStart,
      {
        passive: true,
      },
    );
    tommyman?.addEventListener('touchend', touchEnd);
    tommyman?.addEventListener('mouseout', touchEnd);
    (tommyman?.addEventListener as EventListenerType)('touchmove', mouseMove, {
      passive: true,
    });
    (body?.addEventListener as EventListenerType)('touchmove', mouseMove, {
      passive: true,
    });
    body?.addEventListener('touchend', touchEnd);
    first = false;
  }
  touching = true;
  await randomBounce(touching, triggered, first);
};

(tommyman?.addEventListener as EventListenerType)('click', firstClick);
