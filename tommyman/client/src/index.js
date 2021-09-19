import './controls/direction.js';
import { body } from './elements/body.js';

const beginning = new Audio('../assets/sounds/beginning.mp3');
beginning.volume = 0.9;
body.addEventListener('click', () => beginning.play());
body.addEventListener('touchstart', () => beginning.play());
