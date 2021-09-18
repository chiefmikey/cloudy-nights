import { body } from '../elements/body.js';
import { getSpeed } from '../controls/speed.js';

const colorChar = 'abcdef0123456789';

let intervals = [];

const clearAll = () => {
  for (let i = 0; i < intervals.length; i += 1) {
    clearInterval(intervals[i]);
  }
  intervals = [];
};

const addInterval = (interval) => {
  clearAll();
  const hash = () => {
    let build = '';
    for (let i = 0; i < 6; i += 1) {
      build += colorChar[((colorChar.length - 1) * Math.random()).toFixed()];
    }
    return build;
  };
  body.style.backgroundColor = `#${hash()}`;
  const speed = getSpeed();
  for (let i = 0; i < speed; i += 1) {
    intervals.push(interval());
    console.log(intervals);
  }
};

export default addInterval;
