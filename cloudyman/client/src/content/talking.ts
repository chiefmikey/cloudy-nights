import { GameObj } from 'kaboom';

import { K } from '../functions/init';

let talking: GameObj[] = [];

export const ifTalking = () => {
  if (talking[0]) {
    for (const t of talking) {
      K.destroy(t);
    }
    talking = [];
  }
};

export const talk = (message: string) => {
  ifTalking();
  talking.push(
    K.add([
      K.text(message, { width: 140 }),
      K.pos(K.width() / 2, K.height() - 11),
      K.origin('center'),
    ]),
  );
};

export const cloudyTalk = (message: string) => {
  ifTalking();
  talking.push(
    K.add([K.text(message), K.pos(K.width() / 2, 11), K.origin('center')]),
  );
};
