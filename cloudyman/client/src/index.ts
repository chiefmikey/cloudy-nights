import 'airbnb-browser-shims';
import 'the-new-css-reset/css/reset.css';
import './styles.css';
import './functions/controls';

import { K } from './functions/init';
import one from './scenes/one';
import two from './scenes/two';
import win from './scenes/win';

K.scene('one', one);
K.scene('two', two);
K.scene('win', win);

one();
