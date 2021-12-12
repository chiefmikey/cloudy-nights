import { GameObj, KaboomCtx, Vec2 } from 'kaboom';

import K from '../functions/init';

import { talk, cloudyTalk } from './talking';

interface PlayerType extends GameObj {
  overlaps?: (name: string, callback?: (key?: GameObj) => void) => void;
  resolve?: () => void;
  move?: (input: Vec2) => void;
}

const playerOne = () => {
  const player: PlayerType = K.get('playerOne')[0];

  let hasKey = false;

  player.overlaps('key', (key) => {
    K.play('coin');
    K.destroy(key);
    hasKey = true;
  });

  player.overlaps('door1', () => {
    if (hasKey) {
      K.play('hit');
      K.go('two');
    } else {
      talk('wherez dey key?');
    }
  });

  let finalDoor = false;

  player.overlaps('finalDoor', () => {
    if (finalDoor) {
      K.go('win');
    } else {
      talk('did you talk to the Cloudyman?');
    }
  });

  interface CharType extends GameObj {
    msg: string;
  }

  player.overlaps('ch1', (ch: CharType) => {
    K.play('aaa');
    talk(ch.msg);
  });

  player.overlaps('ch2', (ch: CharType) => {
    K.play('haha');
    talk(ch.msg);
  });

  player.overlaps('cloudyman', (ch: CharType) => {
    K.play('ayy');
    cloudyTalk(ch.msg);
    finalDoor = true;
  });

  player.action(() => {
    player.resolve();
  });

  return player;
};
export default playerOne;
