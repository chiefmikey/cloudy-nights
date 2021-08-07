import k from '../init.js';

const win = (args = {}) => {
  k.play('priorities');
  k.add([
    k.text('you win!'),
    k.pos(k.width() / 2, k.height() / 2),
    k.origin('center'),
  ]);
};

export default win;
