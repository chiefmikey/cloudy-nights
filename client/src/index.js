import K from './functions/init.js';
import one from './scenes/one.js';
import two from './scenes/two.js';
import win from './scenes/win.js';
import controls from './functions/controls.js';

K.scene('one', () => one(controls));
K.scene('two', () => two(controls));
K.scene('win', win);

K.start('one');
