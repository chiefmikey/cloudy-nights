// import { speedUp, slowDown } from '../controls/speed.js';

export const body = document.getElementById('body');
export const bodySize = { width: body.clientWidth, height: body.clientHeight };

// let currentY = null;
// let touching = false;

// const touchEnd = (event) => {
//   touching = false;
// };

// const touchMove = (event) => {
//   if (!touching && currentY < event.changedTouches[0].clientY) {
//     touching = true;
//     speedUp();
//   } else if (!touching && currentY > event.changedTouches[0].clientY) {
//     touching = true;
//     slowDown();
//   }
//   currentY = event.changedTouches[0].clientY;
// };

// const increaseSpeed = (event) => {
//   if (event.keyCode === 38) {
//     speedUp();
//   }
//   if (event.keyCode === 40) {
//     slowDown();
//   }
// };

// const decreaseSpeed = (event) => {
//   event.preventDefault();
//   slowDown();
// };

// body.addEventListener('touchmove', touchMove);
// body.addEventListener('touchend', touchEnd);
// body.addEventListener('keydown', increaseSpeed);
// body.addEventListener('contextmenu', decreaseSpeed);
