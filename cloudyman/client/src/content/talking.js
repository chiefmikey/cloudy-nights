import K from '../functions/init.js';

let talking = [];

export const ifTalking = () => {
  if (talking[0]) {
    for (const t of talking) {
      K.destroy(t);
    }
    talking = [];
  }
};

export const talk = (message) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(message, 7, { width: 140 }),
      K.pos(K.width() / 2, K.height() - 11),
      K.origin('center'),
    ]),
  );
};

export const cloudyTalk = (message) => {
  ifTalking();
  talking.push(
    K.add([K.text(message), K.pos(K.width() / 2, 11), K.origin('center')]),
  );
};
