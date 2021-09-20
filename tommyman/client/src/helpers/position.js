import { bodySize } from '../elements/body.js';
import { tommyman, tommySize } from '../elements/tommyman.js';

let left = bodySize.width / 2 - tommySize.width / 2;
let bottom = bodySize.height / 2 - tommySize.height / 2;

tommyman.style.left = `${left}px`;
tommyman.style.bottom = `${bottom}px`;

export const setPosition = (leftNum, bottomNum) => {
  left += leftNum;
  bottom += bottomNum;
  return { left, bottom };
};

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    leftSide: rect.left + window.scrollX,
    rightSide: rect.right + window.scrollX,
    topSide: rect.top + window.scrollY,
    bottomSide: rect.bottom + window.scrollY,
  };
};
