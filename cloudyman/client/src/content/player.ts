import { GameObj } from 'kaboom';

import { K } from '../functions/init';

import { talk, cloudyTalk } from './talking';

type PlayerOverlapsType = (
  input: string,
  callback: (key: GameObj) => void,
) => void;

const playerOne = () => {
  const player = K.get('playerOne')[0];
  const onOverlap = player.overlaps as PlayerOverlapsType;

  let hasKey = false;

  onOverlap('key', (key) => {
    K.play('coin');
    if (key) {
      K.destroy(key);
    }
    hasKey = true;
  });

  onOverlap('door1', () => {
    if (hasKey) {
      K.play('hit');
      K.go('two');
    } else {
      talk('wherez dey key?');
    }
  });

  let finalDoor = false;

  onOverlap('finalDoor', () => {
    if (finalDoor) {
      K.go('win');
    } else {
      talk('did you talk to the Cloudyman?');
    }
  });

  onOverlap('ch1', (ch) => {
    K.play('aaa');
    if (ch && typeof ch.msg === 'string') {
      talk(ch.msg);
    }
  });

  onOverlap('ch2', (ch) => {
    K.play('haha');
    if (ch && typeof ch.msg === 'string') {
      talk(ch.msg);
    }
  });

  onOverlap('cloudyman', (ch) => {
    K.play('ayy');
    if (ch && typeof ch.msg === 'string') {
      cloudyTalk(ch.msg);
    }
    finalDoor = true;
  });

  player.action(() => {
    (player.resolve as () => void)();
  });

  return player;
};
export default playerOne;
