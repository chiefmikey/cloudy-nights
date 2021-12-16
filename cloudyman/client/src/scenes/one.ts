import characters from '../content/characters';
import controls from '../functions/controls';
import { K } from '../functions/init';

const level = [
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
];

const one = () => {
  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': () => [K.sprite('steel'), K.area(), K.solid()],
    $: () => [K.sprite('key'), K.area(), K.solid(), 'key'],
    '@': () => [K.sprite('guy'), K.area(), K.solid(), K.pos(), 'playerOne'],
    '|': () => [K.sprite('door'), K.area(), K.solid(), 'door1'],
    any(ch) {
      const char = characters[ch as keyof typeof characters];
      if (char) {
        return [
          K.sprite(char.sprite),
          K.area(),
          K.solid(),
          char.sprite,
          {
            msg: char.msg,
          },
        ];
      }
      return char;
    },
  });
  controls();
};

export default one;
