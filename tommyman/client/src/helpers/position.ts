import { bodySize } from '../elements/body';
import { tommyman, tommySize } from '../elements/tommyman';

let left: number;
let bottom: number;

if (bodySize.width && tommySize.width && bodySize.height && tommySize.height) {
  left = bodySize.width / 2 - tommySize.width / 2;
  bottom = bodySize.height / 2 - tommySize.height / 2;

  if (tommyman) {
    tommyman.style.left = `${left}px`;
    tommyman.style.bottom = `${bottom}px`;
  }
}

const setPosition = (leftNumber: number, bottomNumber: number) => {
  left += leftNumber;
  bottom += bottomNumber;
  return { left, bottom };
};

export default setPosition;
