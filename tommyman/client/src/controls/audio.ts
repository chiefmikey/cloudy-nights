/* eslint-disable compat/compat */
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const beginning = new Audio(
  'tommyman/client/public/assets/sounds/beginning.mp3',
);
const beginningSource = context.createMediaElementSource(beginning);
beginningSource.connect(context.destination);
beginning.volume = 0.9;
const cool = new Audio('tommyman/client/public/assets/sounds/cool.mp3');
const coolSource = context.createMediaElementSource(cool);
coolSource.connect(context.destination);
const crazy = new Audio('tommyman/client/public/assets/sounds/crazy.mp3');
const crazySource = context.createMediaElementSource(crazy);
crazySource.connect(context.destination);
crazy.volume = 0.9;
const d = new Audio('tommyman/client/public/assets/sounds/d.mp3');
const dSource = context.createMediaElementSource(d);
dSource.connect(context.destination);
d.volume = 0.5;
const ea = new Audio('tommyman/client/public/assets/sounds/ea.mp3');
const eaSource = context.createMediaElementSource(ea);
eaSource.connect(context.destination);
const g = new Audio('tommyman/client/public/assets/sounds/g.mp3');
const gSource = context.createMediaElementSource(g);
gSource.connect(context.destination);
g.volume = 0.8;
const gnarly = new Audio('tommyman/client/public/assets/sounds/gnarly.mp3');
const gnarlySource = context.createMediaElementSource(gnarly);
gnarlySource.connect(context.destination);
gnarly.volume = 0.8;

export const allAudio = { beginning, cool, crazy, gnarly, d, ea, g };
export const allWords = [cool, crazy, gnarly];
export const allNoises = [d, ea, g];
