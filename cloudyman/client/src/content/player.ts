import { K } from '../functions/init';

import { talk, cloudyTalk } from './talking';

const playerOne = () => {
  let hasKey = false;
  K.onCollide('playerOne', 'key', (key) => {
    K.play('coin');
    if (key) {
      K.destroy(key);
    }
    hasKey = true;
  });

  K.onCollide('playerOne', 'door1', () => {
    if (hasKey) {
      K.play('hit');
      K.go('two');
    } else {
      talk('wherez dey key?');
    }
  });

  let finalDoor = false;

  K.onCollide('playerOne', 'finalDoor', () => {
    if (finalDoor) {
      K.go('win');
    } else {
      talk('did you talk to the Cloudyman?');
    }
  });

  K.onCollide('playerOne', 'ch1', (ch) => {
    K.play('aaa');
    if (ch && typeof ch.msg === 'string') {
      talk(ch.msg);
    }
  });

  K.onCollide('playerOne', 'ch2', (ch) => {
    K.play('haha');
    if (ch && typeof ch.msg === 'string') {
      talk(ch.msg);
    }
  });

  K.onCollide('playerOne', 'cloudyman', (ch) => {
    K.play('ayy');
    if (ch && typeof ch.msg === 'string') {
      cloudyTalk(ch.msg);
    }
    finalDoor = true;
  });
};

export default playerOne;
