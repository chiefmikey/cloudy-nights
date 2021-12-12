/* eslint-disable sonarjs/no-duplicate-string */
import characters from '../content/characters';
import controls from '../functions/controls';
import K from '../functions/init';

const two = () => {
  const level = [
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
  ];

  K.addLevel(level, {
    any: undefined,
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    '@': [K.sprite('guy'), 'playerOne'],
    '!': [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    F: [K.sprite('door'), K.solid(), 'finalDoor'],
  });
  controls();
};

export default two;
