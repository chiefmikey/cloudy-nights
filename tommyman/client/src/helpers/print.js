import { tommyman, tommySize } from '../elements/tommyman.js';

const graphic = document.getElementById('graphic');

const print = (left, bottom) => {
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

export default print;
