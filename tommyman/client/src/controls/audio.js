const beginning = new Audio('../assets/sounds/beginning.mp3');
beginning.volume = 0.9;
const cool = new Audio('../assets/sounds/cool.mp3');
const crazy = new Audio('../assets/sounds/crazy.mp3');
crazy.volume = 0.9;
const d = new Audio('../assets/sounds/d.mp3');
d.volume = 0.5;
const ea = new Audio('../assets/sounds/ea.mp3');
const g = new Audio('../assets/sounds/g.mp3');
g.volume = 0.8;
const gnarly = new Audio('../assets/sounds/gnarly.mp3');
gnarly.volume = 0.8;

export const allAudio = { beginning, cool, crazy, gnarly, d, ea, g };
export const allWords = [cool, crazy, gnarly];
export const allNoises = [d, ea, g];
