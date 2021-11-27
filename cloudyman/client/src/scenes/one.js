import characters from '../content/characters.js';
import K from '../functions/init.js';

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

  K.addLevel(level, {
    width: 11,
    height: 11,
    pos: K.vec2(20, 20),
    '=': [K.sprite('steel'), K.solid()],
    $: [K.sprite('key'), 'key'],
    '@': [K.sprite('guy'), 'playerOne'],
    '|': [K.sprite('door'), K.solid(), 'door1'],
    any(ch) {
      const char = characters[ch];
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
