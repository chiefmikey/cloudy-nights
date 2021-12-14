import { getSpeed } from '../controls/speed';

let intervals: NodeJS.Timer[] = [];

const clearAll = () => {
  for (const interval of intervals) {
    clearInterval(interval);
  }
  intervals = [];
};

const addInterval = (interval: () => NodeJS.Timer) => {
  clearAll();
  const speed = getSpeed();
  for (let index = 0; index < speed; index += 1) {
    intervals.push(interval());
  }
};

export default addInterval;
