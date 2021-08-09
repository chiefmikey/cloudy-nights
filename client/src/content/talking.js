import K from '../functions/init.js';

let talking = null;

export const ifTalking = () => {
  if (talking) {
    K.destroy(talking);
    talking = null;
  }
};

export const talk = (msg) => {
  talking = K.add([
    K.text(msg, 7, { width: 140 }),
    K.pos(K.width() / 2, K.height() - 11),
    K.origin('center'),
  ]);
};

export const cloudyTalk = (msg) => {
  talking = K.add([K.text(msg), K.pos(K.width() / 2, 11), K.origin('center')]);
};
