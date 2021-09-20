import { getSpeed } from '../controls/speed.js';
import { tommyman, tommySize } from '../elements/tommyman.js';

const graphic = document.getElementById('graphic');
let intervals = [];

const clearAll = () => {
  for (let i = 0; i < intervals.length; i += 1) {
    clearInterval(intervals[i]);
  }
  intervals = [];
};

export const addInterval = (interval) => {
  clearAll();
  const speed = getSpeed();
  for (let i = 0; i < speed; i += 1) {
    intervals.push(interval());
  }
};

export const printImg = (left, bottom) => {
  const svg = document.createElement('img');
  svg.src = 'assets/sprites/tommyman.svg';
  svg.style.width = `${tommySize.width}px`;
  svg.style.height = 'auto';
  svg.style.position = 'absolute';
  svg.style.left = `${left}px`;
  svg.style.bottom = `${bottom}px`;
  svg.style.filter = `invert(.5) sepia(2) saturate(2.5) hue-rotate(${
    360 * Math.random()
  }deg)`;
  svg.style.transform = `${tommyman.style.transform}`;
  graphic.append(svg);
};
