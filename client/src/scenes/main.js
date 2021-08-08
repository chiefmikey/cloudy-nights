import k from '../init.js';

const main = (args = {}) => {
  const SPEED = 80;

  const characters = {
    a: {
      sprite: 'ch1',
      msg: 'tell me more',
    },
    b: {
      sprite: 'ch2',
      msg: 'wow dude',
    },
  };

  const levels = [
    [
      '=======|=======',
      '=     = =   =$=',
      '= a   = = a = =',
      '=     = =   = =',
      '=             =',
      '=    ==========',
      '= b           =',
      '===========a  =',
      '=          =  =',
      '=  ======  =  =',
      '=  =b   =  =  =',
      '=  =  = =  =  =',
      '=  =  = =  =  =',
      '=     =@=     =',
      '===============',
    ],
    [
      '=======F=======',
      '=             =',
      '=             =',
      '=     !       =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=             =',
      '=      @      =',
      '===============',
    ],
  ];

  const levelIdx = args.levelIdx || 0;

  k.addLevel(levels[levelIdx], {
    width: 11,
    height: 11,
    pos: k.vec2(20, 20),
    '=': [k.sprite('steel'), k.solid()],
    $: [k.sprite('key'), 'key'],
    '@': [k.sprite('guy'), 'player'],
    '!': [
      k.sprite('cloudyman'),
      k.solid(),
      'cloudyman',
      { msg: 'its a cloudy night...' },
    ],
    '|': [k.sprite('door'), k.solid(), 'door'],
    F: [k.sprite('door'), k.solid(), 'finalDoor'],
    any(ch) {
      const char = characters[ch];
      if (char) {
        return [
          k.sprite(char.sprite),
          k.solid(),
          char.sprite,
          {
            msg: char.msg,
          },
        ];
      }
      return undefined;
    },
  });

  const player = k.get('player')[0];

  let hasKey = false;
  let talking = null;

  const talk = (msg) => {
    talking = k.add([
      k.text(msg, 7, { width: 140 }),
      k.pos(k.width() / 2, k.height() - 11),
      k.origin('center'),
    ]);
  };

  const cloudyTalk = (msg) => {
    talking = k.add([
      k.text(msg),
      k.pos(k.width() / 2, 11),
      k.origin('center'),
    ]);
  };

  player.overlaps('key', (key) => {
    k.play('coin');
    k.destroy(key);
    hasKey = true;
  });

  player.overlaps('door', () => {
    if (hasKey) {
      k.play('hit');
      if (levelIdx + 1 < levels.length) {
        k.go('main', { levelIdx: levelIdx + 1 });
      } else {
        k.go('win');
      }
    } else {
      talk('wherz de key!');
    }
  });

  let finalDoor = false;

  player.overlaps('finalDoor', () => {
    if (finalDoor) {
      k.go('win');
    } else {
      talk('did you talk to the cloudyman?');
    }
  });

  player.overlaps('ch1', (ch) => {
    k.play('aaa');
    talk(ch.msg);
  });

  player.overlaps('ch2', (ch) => {
    k.play('haha');
    talk(ch.msg);
  });

  player.overlaps('cloudyman', (ch) => {
    k.play('ayy');
    cloudyTalk(ch.msg);
    finalDoor = true;
  });

  const dirs = {
    left: k.vec2(-1, 0),
    right: k.vec2(1, 0),
    up: k.vec2(0, -1),
    down: k.vec2(0, 1),
  };

  const ifTalking = () => {
    if (talking) {
      k.destroy(talking);
      talking = null;
    }
  };

  const dirKeys = Object.keys(dirs);
  for (let i = 0; i < dirKeys.length; i += 1) {
    k.keyPress(dirKeys[i], ifTalking);
    k.keyDown(dirKeys[i], () => {
      player.move(dirs[dirKeys[i]].scale(SPEED));
    });
  }

  player.action(() => {
    player.resolve();
  });
};

export default main;
