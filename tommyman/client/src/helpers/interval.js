import { getSpeed } from '../controls/speed.js';

let intervals = [];

const clearAll = () => {
  for (let i = 0; i < intervals.length; i += 1) {
    clearInterval(intervals[i]);
  }
  intervals = [];
};

const addInterval = (interval) => {
  clearAll();
  const speed = getSpeed();
  for (let i = 0; i < speed; i += 1) {
    intervals.push(interval());
  }
};

export default addInterval;
