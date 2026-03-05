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
    '!': () => [
      K.sprite(characters.cloudyman.sprite),
      K.solid(),
      K.area(),
      characters.cloudyman.sprite,
      { msg: characters.cloudyman.msg },
    ],
    '=': () => [K.sprite('steel'), K.area(), K.solid()],
    '@': () => [K.sprite('guy'), K.area(), K.solid(), K.pos(), 'playerOne'],
    any: undefined,
    F: () => [K.sprite('door'), K.area(), K.solid(), 'finalDoor'],
    height: 11,
    pos: K.vec2(20, 20),
    width: 11,
  });

  controls();
};

export default two;
