import 'airbnb-browser-shims';
import 'the-new-css-reset';
import '../public/styles.css';
import K from './functions/init.js';
import one from './scenes/one.js';
import two from './scenes/two.js';
import win from './scenes/win.js';
import './functions/controls.js';

K.scene('one', () => one());
K.scene('two', () => two());
K.scene('win', win);

K.start('one');
