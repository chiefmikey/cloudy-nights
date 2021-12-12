import 'airbnb-browser-shims';
import 'the-new-css-reset/css/reset.css';
import './styles.css';
import { tommyman } from './elements/tommyman';
import './elements/body';
import './controls/audio';
import './controls/direction';
import './controls/pointer';
import './controls/speed';
import './helpers/position';
import './helpers/interval';
import './helpers/print';
import './helpers/random';

setTimeout(() => {
  if (tommyman) {
    tommyman.style.opacity = '1';
  }
}, 0);
