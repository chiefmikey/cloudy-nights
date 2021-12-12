import { SolidComp, SpriteComp } from 'kaboom';

import characters from '../content/characters';
import K from '../functions/init';

const one = () => {
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

  type CharType = { sprite: string; msg: string };
  type AnyType = [SpriteComp, SolidComp, string, { msg: string }] | CharType;

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    $: [K.sprite('key'), 'key'],
    '@': [K.sprite('guy'), 'playerOne'],
    '|': [K.sprite('door'), K.solid(), 'door1'],
    any(ch): AnyType {
      const char: CharType = characters[ch as keyof typeof characters];
      if (char) {
        return [
          K.sprite(char.sprite),
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
};

export default one;
