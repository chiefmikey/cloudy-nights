import './controls/direction.js';
import { body } from './elements/body.js';

const beginning = new Audio('../assets/sounds/beginning.mp3');
beginning.volume = 0.9;
let first = true;
if (first) {
  body.addEventListener('click', () => beginning.play());
  body.addEventListener('touchstart', () => beginning.play());
  first = false;
}
