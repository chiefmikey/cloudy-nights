/* eslint-disable sonarjs/no-duplicate-string */
import characters from '../content/characters';
import controls from '../functions/controls';
import { K } from '../functions/init';

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

const two = () => {
  K.addLevel(level, {
    any: undefined,
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': () => [K.sprite('steel'), K.area(), K.solid()],
    '@': () => [K.sprite('guy'), K.area(), K.solid(), K.pos(), 'playerOne'],
    '!': () => [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      K.area(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    F: () => [K.sprite('door'), K.area(), K.solid(), 'finalDoor'],
  });

  controls();
};

export default two;
