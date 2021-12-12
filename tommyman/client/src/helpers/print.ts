import { tommyman, tommySize } from '../elements/tommyman';

const graphic = document.querySelector('#graphic');

const allPrints: HTMLElement[] = [];

const print = (left: number, bottom: number) => {
  const svg = document.createElement('img');
  svg.src = 'tommyman/client/public/assets/sprites/tommyman.svg';
  if (tommySize.width) {
    svg.style.width = `${tommySize.width}px`;
  }
  svg.style.height = 'auto';
  svg.style.position = 'absolute';
  svg.style.left = `${left}px`;
  svg.style.bottom = `${bottom}px`;
  svg.style.transition = 'opacity 4s ease-in-out';
  svg.style.filter = `invert(.5) sepia(2) saturate(2.5) hue-rotate(${
    360 * Math.random()
  }deg)`;
  if (tommyman) {
    svg.style.transform = `${tommyman.style.transform}`;
  }
  allPrints.push(svg);
  if (graphic) {
    graphic.append(svg);
  }

  if (allPrints.length > 50) {
    const removePrint = allPrints.shift();
    if (removePrint) {
      removePrint.style.opacity = '0';
    }
    setTimeout(() => removePrint?.remove(), 4100);
  }
};

export default print;
