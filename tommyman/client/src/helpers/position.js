import { bodySize } from '../elements/body.js';
import { tommyman, tommySize } from '../elements/tommyman.js';

let left = bodySize.width / 2 - tommySize.width / 2;
let bottom = bodySize.height / 2 - tommySize.height / 2;

tommyman.style.left = `${left}px`;
tommyman.style.bottom = `${bottom}px`;

const setPosition = (leftNumber, bottomNumber) => {
  left += leftNumber;
  bottom += bottomNumber;
  return { left, bottom };
};

export default setPosition;
