import K from './init.js';
import playerOne from '../content/player.js';
import { ifTalking } from '../content/talking.js';
import './zoom.js';

const controls = () => {
  const SPEED = 80;

  const dirs = {
    left: K.vec2(-1, 0),
    right: K.vec2(1, 0),
    up: K.vec2(0, -1),
    down: K.vec2(0, 1),
  };

  const dirKeys = Object.keys(dirs);

  const player = playerOne();

  for (let i = 0; i < dirKeys.length; i += 1) {
    K.keyPress(dirKeys[i], ifTalking);
    K.keyDown(dirKeys[i], () => {
      player.move(dirs[dirKeys[i]].scale(SPEED));
    });
  }
};

export default controls;
