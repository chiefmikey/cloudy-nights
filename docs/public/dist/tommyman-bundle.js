/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./tommyman/node_modules/airbnb-browser-shims/index.js":
/*!*************************************************************!*\
  !*** ./tommyman/node_modules/airbnb-browser-shims/index.js ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Mikl/Dropbox/dev/apps/cloudy-nights/tommyman/node_modules/airbnb-browser-shims/index.js'");

/***/ }),

/***/ "./tommyman/client/src/controls/audio.js":
/*!***********************************************!*\
  !*** ./tommyman/client/src/controls/audio.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allAudio": () => (/* binding */ allAudio),
/* harmony export */   "allWords": () => (/* binding */ allWords),
/* harmony export */   "allNoises": () => (/* binding */ allNoises)
/* harmony export */ });
const beginning = new Audio('tommyman/client/public/assets/sounds/beginning.mp3');
beginning.volume = 0.9;
const cool = new Audio('tommyman/client/public/assets/sounds/cool.mp3');
const crazy = new Audio('tommyman/client/public/assets/sounds/crazy.mp3');
crazy.volume = 0.9;
const d = new Audio('tommyman/client/public/assets/sounds/d.mp3');
d.volume = 0.5;
const ea = new Audio('tommyman/client/public/assets/sounds/ea.mp3');
const g = new Audio('tommyman/client/public/assets/sounds/g.mp3');
g.volume = 0.8;
const gnarly = new Audio('tommyman/client/public/assets/sounds/gnarly.mp3');
gnarly.volume = 0.8;
const allAudio = {
  beginning,
  cool,
  crazy,
  gnarly,
  d,
  ea,
  g
};
const allWords = [cool, crazy, gnarly];
const allNoises = [d, ea, g];

/***/ }),

/***/ "./tommyman/client/src/controls/direction.js":
/*!***************************************************!*\
  !*** ./tommyman/client/src/controls/direction.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomBounce": () => (/* binding */ randomBounce),
/* harmony export */   "allDirections": () => (/* binding */ allDirections)
/* harmony export */ });
/* harmony import */ var _elements_body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/body.js */ "./tommyman/client/src/elements/body.js");
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");
/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move.js */ "./tommyman/client/src/controls/move.js");
/* harmony import */ var _spin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spin.js */ "./tommyman/client/src/controls/spin.js");
/* harmony import */ var _speed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speed.js */ "./tommyman/client/src/controls/speed.js");
/* harmony import */ var _helpers_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/position.js */ "./tommyman/client/src/helpers/position.js");
/* harmony import */ var _helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/interval.js */ "./tommyman/client/src/helpers/interval.js");
/* harmony import */ var _helpers_print_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/print.js */ "./tommyman/client/src/helpers/print.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio.js */ "./tommyman/client/src/controls/audio.js");
/* harmony import */ var _helpers_random_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/random.js */ "./tommyman/client/src/helpers/random.js");











const goLeft = () => {
  return () => setInterval(() => {
    (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinLeft)(); // move(-1, 0);

    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(-1, 0);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinLeft)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goLeftUp = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(-1, 1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinLeft)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goLeftDown = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(-1, -1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinLeft)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goRight = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1, 0);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinRight)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goRightUp = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1, 1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinRight)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goRightDown = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1, -1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinRight)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goUp = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinLeft)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const goDown = () => {
  return () => setInterval(() => {
    const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0, -1);

    if (!hitsWall(pos.left, pos.bottom)) {
      (0,_spin_js__WEBPACK_IMPORTED_MODULE_3__.spinRight)();
      (0,_move_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pos.left, pos.bottom);
    }
  }, 1);
};

const aRight = () => {
  const allRights = [goRight, goRightUp, goRightDown];
  return (0,_helpers_random_js__WEBPACK_IMPORTED_MODULE_9__["default"])(allRights);
};

const aLeft = () => {
  const allLefts = [goLeft, goLeftUp, goLeftDown];
  return (0,_helpers_random_js__WEBPACK_IMPORTED_MODULE_9__["default"])(allLefts);
};

const aUp = () => {
  const allUps = [goUp, goLeftUp, goRightUp];
  return (0,_helpers_random_js__WEBPACK_IMPORTED_MODULE_9__["default"])(allUps);
};

const aDown = () => {
  const allDowns = [goDown, goLeftDown, goRightDown];
  return (0,_helpers_random_js__WEBPACK_IMPORTED_MODULE_9__["default"])(allDowns);
};

const hitsWall = (left, bottom) => {
  const randomNoise = _audio_js__WEBPACK_IMPORTED_MODULE_8__.allNoises[((_audio_js__WEBPACK_IMPORTED_MODULE_8__.allNoises.length - 1) * Math.random()).toFixed(0)];

  if (left <= 0) {
    randomNoise.play();
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(left, bottom);
    (0,_helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__["default"])(aRight()());
    (0,_speed_js__WEBPACK_IMPORTED_MODULE_4__.slowDown)();
    return true;
  }

  if (left >= _elements_body_js__WEBPACK_IMPORTED_MODULE_0__.bodySize.width - _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommySize.width) {
    randomNoise.play();
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(left, bottom);
    (0,_helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__["default"])(aLeft()());
    (0,_speed_js__WEBPACK_IMPORTED_MODULE_4__.slowDown)();
    return true;
  }

  if (bottom <= 0) {
    randomNoise.play();
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(left, bottom);
    (0,_helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__["default"])(aUp()());
    (0,_speed_js__WEBPACK_IMPORTED_MODULE_4__.slowDown)();
    return true;
  }

  if (bottom >= _elements_body_js__WEBPACK_IMPORTED_MODULE_0__.bodySize.height - _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommySize.height) {
    randomNoise.play();
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(left, bottom);
    (0,_helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__["default"])(aDown()());
    (0,_speed_js__WEBPACK_IMPORTED_MODULE_4__.slowDown)();
    return true;
  }

  return false;
};

const randomBounce = (touching, triggered, first) => {
  const pos = (0,_helpers_position_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 0);
  const randomWord = _audio_js__WEBPACK_IMPORTED_MODULE_8__.allWords[((_audio_js__WEBPACK_IMPORTED_MODULE_8__.allWords.length - 1) * Math.random()).toFixed(0)];

  if (!first && (!touching || touching && !triggered)) {
    randomWord.play();
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(pos.left, pos.bottom);
  }

  if (first) {
    (0,_helpers_print_js__WEBPACK_IMPORTED_MODULE_7__["default"])(pos.left, pos.bottom);
  }

  const directionKeys = Object.keys(allDirections);
  (0,_helpers_interval_js__WEBPACK_IMPORTED_MODULE_6__["default"])(allDirections[(0,_helpers_random_js__WEBPACK_IMPORTED_MODULE_9__["default"])(directionKeys)]());
  (0,_speed_js__WEBPACK_IMPORTED_MODULE_4__.speedUp)();
};
const allDirections = {
  left: goLeft,
  right: goRight,
  up: goUp,
  down: goDown,
  leftUp: goLeftUp,
  rightUp: goRightUp,
  leftDown: goLeftDown,
  rightDown: goRightDown
};

/***/ }),

/***/ "./tommyman/client/src/controls/move.js":
/*!**********************************************!*\
  !*** ./tommyman/client/src/controls/move.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");


const move = (left, bottom) => {
  // tommyman.style.transform = `translateY(${left}%)`;
  // tommyman.style.transform = `translateX(${bottom}%)`;
  _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.style.left = `${left}px`;
  _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.style.bottom = `${bottom}px`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);

/***/ }),

/***/ "./tommyman/client/src/controls/pointer.js":
/*!*************************************************!*\
  !*** ./tommyman/client/src/controls/pointer.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");
/* harmony import */ var _elements_body_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/body.js */ "./tommyman/client/src/elements/body.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.js */ "./tommyman/client/src/controls/audio.js");
/* harmony import */ var _direction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direction.js */ "./tommyman/client/src/controls/direction.js");




let first = true;
let touching = false;
let triggered = true;

const mouseMove = () => {
  (0,_direction_js__WEBPACK_IMPORTED_MODULE_3__.randomBounce)(touching, triggered, first);
  triggered = true;
  touching = true;
};

const touchEnd = () => {
  touching = false;
  triggered = false;
};

const firstClick = () => {
  if (first) {
    _audio_js__WEBPACK_IMPORTED_MODULE_2__.allAudio.beginning.play();
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('mousemove', mouseMove);
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('mouseenter', mouseMove);
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('touchstart', (0,_direction_js__WEBPACK_IMPORTED_MODULE_3__.randomBounce)(touching, triggered, first), {
      passive: true
    });
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('touchend', touchEnd);
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('mouseout', touchEnd);
    _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('touchmove', mouseMove, {
      passive: true
    });
    _elements_body_js__WEBPACK_IMPORTED_MODULE_1__.body.addEventListener('touchmove', mouseMove, {
      passive: true
    });
    _elements_body_js__WEBPACK_IMPORTED_MODULE_1__.body.addEventListener('touchend', touchEnd);
    first = false;
  }

  touching = true;
  (0,_direction_js__WEBPACK_IMPORTED_MODULE_3__.randomBounce)(touching, triggered, first);
};

_elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.addEventListener('click', firstClick);

/***/ }),

/***/ "./tommyman/client/src/controls/speed.js":
/*!***********************************************!*\
  !*** ./tommyman/client/src/controls/speed.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "speedUp": () => (/* binding */ speedUp),
/* harmony export */   "slowDown": () => (/* binding */ slowDown),
/* harmony export */   "getSpeed": () => (/* binding */ getSpeed)
/* harmony export */ });
let speed = 1;
const speedUp = () => {
  speed += 1;
};
const slowDown = () => {
  if (speed > 2) {
    speed -= 2;
  } else if (speed === 2) {
    speed -= 1;
  }
};
const getSpeed = () => speed;

/***/ }),

/***/ "./tommyman/client/src/controls/spin.js":
/*!**********************************************!*\
  !*** ./tommyman/client/src/controls/spin.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spinLeft": () => (/* binding */ spinLeft),
/* harmony export */   "spinRight": () => (/* binding */ spinRight)
/* harmony export */ });
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");
/* harmony import */ var _speed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed.js */ "./tommyman/client/src/controls/speed.js");


const spinLeft = () => {
  const speed = (0,_speed_js__WEBPACK_IMPORTED_MODULE_1__.getSpeed)();
  _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.style.transform = `rotate(${speed * -5000}deg)`;
};
const spinRight = () => {
  // degrees += 1;
  const speed = (0,_speed_js__WEBPACK_IMPORTED_MODULE_1__.getSpeed)();
  _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.style.transform = `rotate(${speed * 5000}deg)`;
};

/***/ }),

/***/ "./tommyman/client/src/elements/body.js":
/*!**********************************************!*\
  !*** ./tommyman/client/src/elements/body.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "bodySize": () => (/* binding */ bodySize)
/* harmony export */ });
const body = document.querySelector('#body');
const bodySize = {
  width: body.clientWidth,
  height: body.clientHeight
};

/***/ }),

/***/ "./tommyman/client/src/elements/tommyman.js":
/*!**************************************************!*\
  !*** ./tommyman/client/src/elements/tommyman.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tommyman": () => (/* binding */ tommyman),
/* harmony export */   "tommySize": () => (/* binding */ tommySize)
/* harmony export */ });
const tommyman = document.querySelector('#tommyman');
const tommySize = {
  width: tommyman.clientWidth,
  height: tommyman.clientHeight
};

/***/ }),

/***/ "./tommyman/client/src/helpers/interval.js":
/*!*************************************************!*\
  !*** ./tommyman/client/src/helpers/interval.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls_speed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/speed.js */ "./tommyman/client/src/controls/speed.js");

let intervals = [];

const clearAll = () => {
  for (const interval of intervals) {
    clearInterval(interval);
  }

  intervals = [];
};

const addInterval = interval => {
  clearAll();
  const speed = (0,_controls_speed_js__WEBPACK_IMPORTED_MODULE_0__.getSpeed)();

  for (let index = 0; index < speed; index += 1) {
    intervals.push(interval());
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addInterval);

/***/ }),

/***/ "./tommyman/client/src/helpers/position.js":
/*!*************************************************!*\
  !*** ./tommyman/client/src/helpers/position.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/body.js */ "./tommyman/client/src/elements/body.js");
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");


let left = _elements_body_js__WEBPACK_IMPORTED_MODULE_0__.bodySize.width / 2 - _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommySize.width / 2;
let bottom = _elements_body_js__WEBPACK_IMPORTED_MODULE_0__.bodySize.height / 2 - _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommySize.height / 2;
_elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommyman.style.left = `${left}px`;
_elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommyman.style.bottom = `${bottom}px`;

const setPosition = (leftNumber, bottomNumber) => {
  left += leftNumber;
  bottom += bottomNumber;
  return {
    left,
    bottom
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setPosition);

/***/ }),

/***/ "./tommyman/client/src/helpers/print.js":
/*!**********************************************!*\
  !*** ./tommyman/client/src/helpers/print.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");

const graphic = document.querySelector('#graphic');
const allPrints = [];

const print = (left, bottom) => {
  const svg = document.createElement('img');
  svg.src = 'tommyman/client/public/assets/sprites/tommyman.svg';
  svg.style.width = `${_elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommySize.width}px`;
  svg.style.height = 'auto';
  svg.style.position = 'absolute';
  svg.style.left = `${left}px`;
  svg.style.bottom = `${bottom}px`;
  svg.style.transition = 'opacity 4s ease-in-out';
  svg.style.filter = `invert(.5) sepia(2) saturate(2.5) hue-rotate(${360 * Math.random()}deg)`;
  svg.style.transform = `${_elements_tommyman_js__WEBPACK_IMPORTED_MODULE_0__.tommyman.style.transform}`;
  allPrints.push(svg);
  graphic.append(svg);

  if (allPrints.length > 50) {
    const removePrint = allPrints.shift();
    removePrint.style.opacity = '0';
    setTimeout(() => removePrint.remove(), 4100);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (print);

/***/ }),

/***/ "./tommyman/client/src/helpers/random.js":
/*!***********************************************!*\
  !*** ./tommyman/client/src/helpers/random.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const random = keys => keys[((keys.length - 1) * Math.random()).toFixed(0)];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (random);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./tommyman/client/src/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "./tommyman/node_modules/airbnb-browser-shims/index.js");
/* harmony import */ var _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/tommyman.js */ "./tommyman/client/src/elements/tommyman.js");
/* harmony import */ var _elements_body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/body.js */ "./tommyman/client/src/elements/body.js");
/* harmony import */ var _controls_audio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/audio.js */ "./tommyman/client/src/controls/audio.js");
/* harmony import */ var _controls_direction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/direction.js */ "./tommyman/client/src/controls/direction.js");
/* harmony import */ var _controls_pointer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/pointer.js */ "./tommyman/client/src/controls/pointer.js");
/* harmony import */ var _controls_speed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/speed.js */ "./tommyman/client/src/controls/speed.js");
/* harmony import */ var _helpers_position_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/position.js */ "./tommyman/client/src/helpers/position.js");
/* harmony import */ var _helpers_interval_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/interval.js */ "./tommyman/client/src/helpers/interval.js");
/* harmony import */ var _helpers_print_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/print.js */ "./tommyman/client/src/helpers/print.js");
/* harmony import */ var _helpers_random_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/random.js */ "./tommyman/client/src/helpers/random.js");











setTimeout(() => _elements_tommyman_js__WEBPACK_IMPORTED_MODULE_1__.tommyman.style.opacity = '1', 0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUMsQ0FBdkMsQ0FBVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvY29udHJvbHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvY29udHJvbHMvZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi90b21teW1hbi9jbGllbnQvc3JjL2NvbnRyb2xzL21vdmUuanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvY29udHJvbHMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vdG9tbXltYW4vY2xpZW50L3NyYy9jb250cm9scy9zcGVlZC5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vdG9tbXltYW4vY2xpZW50L3NyYy9jb250cm9scy9zcGluLmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi90b21teW1hbi9jbGllbnQvc3JjL2VsZW1lbnRzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvZWxlbWVudHMvdG9tbXltYW4uanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvaGVscGVycy9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vdG9tbXltYW4vY2xpZW50L3NyYy9oZWxwZXJzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi90b21teW1hbi9jbGllbnQvc3JjL2hlbHBlcnMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL3RvbW15bWFuL2NsaWVudC9zcmMvaGVscGVycy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi90b21teW1hbi9jbGllbnQvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJlZ2lubmluZyA9IG5ldyBBdWRpbyhcbiAgJ3RvbW15bWFuL2NsaWVudC9wdWJsaWMvYXNzZXRzL3NvdW5kcy9iZWdpbm5pbmcubXAzJyxcbik7XG5iZWdpbm5pbmcudm9sdW1lID0gMC45O1xuY29uc3QgY29vbCA9IG5ldyBBdWRpbygndG9tbXltYW4vY2xpZW50L3B1YmxpYy9hc3NldHMvc291bmRzL2Nvb2wubXAzJyk7XG5jb25zdCBjcmF6eSA9IG5ldyBBdWRpbygndG9tbXltYW4vY2xpZW50L3B1YmxpYy9hc3NldHMvc291bmRzL2NyYXp5Lm1wMycpO1xuY3Jhenkudm9sdW1lID0gMC45O1xuY29uc3QgZCA9IG5ldyBBdWRpbygndG9tbXltYW4vY2xpZW50L3B1YmxpYy9hc3NldHMvc291bmRzL2QubXAzJyk7XG5kLnZvbHVtZSA9IDAuNTtcbmNvbnN0IGVhID0gbmV3IEF1ZGlvKCd0b21teW1hbi9jbGllbnQvcHVibGljL2Fzc2V0cy9zb3VuZHMvZWEubXAzJyk7XG5jb25zdCBnID0gbmV3IEF1ZGlvKCd0b21teW1hbi9jbGllbnQvcHVibGljL2Fzc2V0cy9zb3VuZHMvZy5tcDMnKTtcbmcudm9sdW1lID0gMC44O1xuY29uc3QgZ25hcmx5ID0gbmV3IEF1ZGlvKCd0b21teW1hbi9jbGllbnQvcHVibGljL2Fzc2V0cy9zb3VuZHMvZ25hcmx5Lm1wMycpO1xuZ25hcmx5LnZvbHVtZSA9IDAuODtcblxuZXhwb3J0IGNvbnN0IGFsbEF1ZGlvID0geyBiZWdpbm5pbmcsIGNvb2wsIGNyYXp5LCBnbmFybHksIGQsIGVhLCBnIH07XG5leHBvcnQgY29uc3QgYWxsV29yZHMgPSBbY29vbCwgY3JhenksIGduYXJseV07XG5leHBvcnQgY29uc3QgYWxsTm9pc2VzID0gW2QsIGVhLCBnXTtcbiIsImltcG9ydCB7IGJvZHlTaXplIH0gZnJvbSAnLi4vZWxlbWVudHMvYm9keS5qcyc7XG5pbXBvcnQgeyB0b21teVNpemUgfSBmcm9tICcuLi9lbGVtZW50cy90b21teW1hbi5qcyc7XG5pbXBvcnQgbW92ZSBmcm9tICcuL21vdmUuanMnO1xuaW1wb3J0IHsgc3BpbkxlZnQsIHNwaW5SaWdodCB9IGZyb20gJy4vc3Bpbi5qcyc7XG5pbXBvcnQgeyBzbG93RG93biwgc3BlZWRVcCB9IGZyb20gJy4vc3BlZWQuanMnO1xuaW1wb3J0IHNldFBvc2l0aW9uIGZyb20gJy4uL2hlbHBlcnMvcG9zaXRpb24uanMnO1xuaW1wb3J0IGFkZEludGVydmFsIGZyb20gJy4uL2hlbHBlcnMvaW50ZXJ2YWwuanMnO1xuaW1wb3J0IHByaW50IGZyb20gJy4uL2hlbHBlcnMvcHJpbnQuanMnO1xuaW1wb3J0IHsgYWxsTm9pc2VzLCBhbGxXb3JkcyB9IGZyb20gJy4vYXVkaW8uanMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICcuLi9oZWxwZXJzL3JhbmRvbS5qcyc7XG5cbmNvbnN0IGdvTGVmdCA9ICgpID0+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BpbkxlZnQoKTtcbiAgICAgIC8vIG1vdmUoLTEsIDApO1xuICAgICAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oLTEsIDApO1xuICAgICAgaWYgKCFoaXRzV2FsbChwb3MubGVmdCwgcG9zLmJvdHRvbSkpIHtcbiAgICAgICAgc3BpbkxlZnQoKTtcbiAgICAgICAgbW92ZShwb3MubGVmdCwgcG9zLmJvdHRvbSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG59O1xuXG5jb25zdCBnb0xlZnRVcCA9ICgpID0+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oLTEsIDEpO1xuICAgICAgaWYgKCFoaXRzV2FsbChwb3MubGVmdCwgcG9zLmJvdHRvbSkpIHtcbiAgICAgICAgc3BpbkxlZnQoKTtcbiAgICAgICAgbW92ZShwb3MubGVmdCwgcG9zLmJvdHRvbSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG59O1xuY29uc3QgZ29MZWZ0RG93biA9ICgpID0+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oLTEsIC0xKTtcbiAgICAgIGlmICghaGl0c1dhbGwocG9zLmxlZnQsIHBvcy5ib3R0b20pKSB7XG4gICAgICAgIHNwaW5MZWZ0KCk7XG4gICAgICAgIG1vdmUocG9zLmxlZnQsIHBvcy5ib3R0b20pO1xuICAgICAgfVxuICAgIH0sIDEpO1xufTtcbmNvbnN0IGdvUmlnaHQgPSAoKSA9PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IHNldFBvc2l0aW9uKDEsIDApO1xuICAgICAgaWYgKCFoaXRzV2FsbChwb3MubGVmdCwgcG9zLmJvdHRvbSkpIHtcbiAgICAgICAgc3BpblJpZ2h0KCk7XG4gICAgICAgIG1vdmUocG9zLmxlZnQsIHBvcy5ib3R0b20pO1xuICAgICAgfVxuICAgIH0sIDEpO1xufTtcbmNvbnN0IGdvUmlnaHRVcCA9ICgpID0+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oMSwgMSk7XG4gICAgICBpZiAoIWhpdHNXYWxsKHBvcy5sZWZ0LCBwb3MuYm90dG9tKSkge1xuICAgICAgICBzcGluUmlnaHQoKTtcbiAgICAgICAgbW92ZShwb3MubGVmdCwgcG9zLmJvdHRvbSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG59O1xuY29uc3QgZ29SaWdodERvd24gPSAoKSA9PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IHNldFBvc2l0aW9uKDEsIC0xKTtcbiAgICAgIGlmICghaGl0c1dhbGwocG9zLmxlZnQsIHBvcy5ib3R0b20pKSB7XG4gICAgICAgIHNwaW5SaWdodCgpO1xuICAgICAgICBtb3ZlKHBvcy5sZWZ0LCBwb3MuYm90dG9tKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbn07XG5jb25zdCBnb1VwID0gKCkgPT4ge1xuICByZXR1cm4gKCkgPT5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSBzZXRQb3NpdGlvbigwLCAxKTtcbiAgICAgIGlmICghaGl0c1dhbGwocG9zLmxlZnQsIHBvcy5ib3R0b20pKSB7XG4gICAgICAgIHNwaW5MZWZ0KCk7XG4gICAgICAgIG1vdmUocG9zLmxlZnQsIHBvcy5ib3R0b20pO1xuICAgICAgfVxuICAgIH0sIDEpO1xufTtcbmNvbnN0IGdvRG93biA9ICgpID0+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oMCwgLTEpO1xuICAgICAgaWYgKCFoaXRzV2FsbChwb3MubGVmdCwgcG9zLmJvdHRvbSkpIHtcbiAgICAgICAgc3BpblJpZ2h0KCk7XG4gICAgICAgIG1vdmUocG9zLmxlZnQsIHBvcy5ib3R0b20pO1xuICAgICAgfVxuICAgIH0sIDEpO1xufTtcblxuY29uc3QgYVJpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBhbGxSaWdodHMgPSBbZ29SaWdodCwgZ29SaWdodFVwLCBnb1JpZ2h0RG93bl07XG4gIHJldHVybiByYW5kb20oYWxsUmlnaHRzKTtcbn07XG5cbmNvbnN0IGFMZWZ0ID0gKCkgPT4ge1xuICBjb25zdCBhbGxMZWZ0cyA9IFtnb0xlZnQsIGdvTGVmdFVwLCBnb0xlZnREb3duXTtcbiAgcmV0dXJuIHJhbmRvbShhbGxMZWZ0cyk7XG59O1xuXG5jb25zdCBhVXAgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFVwcyA9IFtnb1VwLCBnb0xlZnRVcCwgZ29SaWdodFVwXTtcbiAgcmV0dXJuIHJhbmRvbShhbGxVcHMpO1xufTtcblxuY29uc3QgYURvd24gPSAoKSA9PiB7XG4gIGNvbnN0IGFsbERvd25zID0gW2dvRG93biwgZ29MZWZ0RG93biwgZ29SaWdodERvd25dO1xuICByZXR1cm4gcmFuZG9tKGFsbERvd25zKTtcbn07XG5cbmNvbnN0IGhpdHNXYWxsID0gKGxlZnQsIGJvdHRvbSkgPT4ge1xuICBjb25zdCByYW5kb21Ob2lzZSA9XG4gICAgYWxsTm9pc2VzWygoYWxsTm9pc2VzLmxlbmd0aCAtIDEpICogTWF0aC5yYW5kb20oKSkudG9GaXhlZCgwKV07XG4gIGlmIChsZWZ0IDw9IDApIHtcbiAgICByYW5kb21Ob2lzZS5wbGF5KCk7XG4gICAgcHJpbnQobGVmdCwgYm90dG9tKTtcbiAgICBhZGRJbnRlcnZhbChhUmlnaHQoKSgpKTtcbiAgICBzbG93RG93bigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsZWZ0ID49IGJvZHlTaXplLndpZHRoIC0gdG9tbXlTaXplLndpZHRoKSB7XG4gICAgcmFuZG9tTm9pc2UucGxheSgpO1xuICAgIHByaW50KGxlZnQsIGJvdHRvbSk7XG4gICAgYWRkSW50ZXJ2YWwoYUxlZnQoKSgpKTtcbiAgICBzbG93RG93bigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChib3R0b20gPD0gMCkge1xuICAgIHJhbmRvbU5vaXNlLnBsYXkoKTtcbiAgICBwcmludChsZWZ0LCBib3R0b20pO1xuICAgIGFkZEludGVydmFsKGFVcCgpKCkpO1xuICAgIHNsb3dEb3duKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGJvdHRvbSA+PSBib2R5U2l6ZS5oZWlnaHQgLSB0b21teVNpemUuaGVpZ2h0KSB7XG4gICAgcmFuZG9tTm9pc2UucGxheSgpO1xuICAgIHByaW50KGxlZnQsIGJvdHRvbSk7XG4gICAgYWRkSW50ZXJ2YWwoYURvd24oKSgpKTtcbiAgICBzbG93RG93bigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21Cb3VuY2UgPSAodG91Y2hpbmcsIHRyaWdnZXJlZCwgZmlyc3QpID0+IHtcbiAgY29uc3QgcG9zID0gc2V0UG9zaXRpb24oMCwgMCk7XG4gIGNvbnN0IHJhbmRvbVdvcmQgPVxuICAgIGFsbFdvcmRzWygoYWxsV29yZHMubGVuZ3RoIC0gMSkgKiBNYXRoLnJhbmRvbSgpKS50b0ZpeGVkKDApXTtcbiAgaWYgKCFmaXJzdCAmJiAoIXRvdWNoaW5nIHx8ICh0b3VjaGluZyAmJiAhdHJpZ2dlcmVkKSkpIHtcbiAgICByYW5kb21Xb3JkLnBsYXkoKTtcbiAgICBwcmludChwb3MubGVmdCwgcG9zLmJvdHRvbSk7XG4gIH1cbiAgaWYgKGZpcnN0KSB7XG4gICAgcHJpbnQocG9zLmxlZnQsIHBvcy5ib3R0b20pO1xuICB9XG4gIGNvbnN0IGRpcmVjdGlvbktleXMgPSBPYmplY3Qua2V5cyhhbGxEaXJlY3Rpb25zKTtcbiAgYWRkSW50ZXJ2YWwoYWxsRGlyZWN0aW9uc1tyYW5kb20oZGlyZWN0aW9uS2V5cyldKCkpO1xuICBzcGVlZFVwKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWxsRGlyZWN0aW9ucyA9IHtcbiAgbGVmdDogZ29MZWZ0LFxuICByaWdodDogZ29SaWdodCxcbiAgdXA6IGdvVXAsXG4gIGRvd246IGdvRG93bixcbiAgbGVmdFVwOiBnb0xlZnRVcCxcbiAgcmlnaHRVcDogZ29SaWdodFVwLFxuICBsZWZ0RG93bjogZ29MZWZ0RG93bixcbiAgcmlnaHREb3duOiBnb1JpZ2h0RG93bixcbn07XG4iLCJpbXBvcnQgeyB0b21teW1hbiB9IGZyb20gJy4uL2VsZW1lbnRzL3RvbW15bWFuLmpzJztcblxuY29uc3QgbW92ZSA9IChsZWZ0LCBib3R0b20pID0+IHtcbiAgLy8gdG9tbXltYW4uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtsZWZ0fSUpYDtcbiAgLy8gdG9tbXltYW4uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtib3R0b219JSlgO1xuICB0b21teW1hbi5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gIHRvbW15bWFuLnN0eWxlLmJvdHRvbSA9IGAke2JvdHRvbX1weGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZlO1xuIiwiaW1wb3J0IHsgdG9tbXltYW4gfSBmcm9tICcuLi9lbGVtZW50cy90b21teW1hbi5qcyc7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSAnLi4vZWxlbWVudHMvYm9keS5qcyc7XG5pbXBvcnQgeyBhbGxBdWRpbyB9IGZyb20gJy4vYXVkaW8uanMnO1xuaW1wb3J0IHsgcmFuZG9tQm91bmNlIH0gZnJvbSAnLi9kaXJlY3Rpb24uanMnO1xuXG5sZXQgZmlyc3QgPSB0cnVlO1xubGV0IHRvdWNoaW5nID0gZmFsc2U7XG5sZXQgdHJpZ2dlcmVkID0gdHJ1ZTtcblxuY29uc3QgbW91c2VNb3ZlID0gKCkgPT4ge1xuICByYW5kb21Cb3VuY2UodG91Y2hpbmcsIHRyaWdnZXJlZCwgZmlyc3QpO1xuICB0cmlnZ2VyZWQgPSB0cnVlO1xuICB0b3VjaGluZyA9IHRydWU7XG59O1xuXG5jb25zdCB0b3VjaEVuZCA9ICgpID0+IHtcbiAgdG91Y2hpbmcgPSBmYWxzZTtcbiAgdHJpZ2dlcmVkID0gZmFsc2U7XG59O1xuXG5jb25zdCBmaXJzdENsaWNrID0gKCkgPT4ge1xuICBpZiAoZmlyc3QpIHtcbiAgICBhbGxBdWRpby5iZWdpbm5pbmcucGxheSgpO1xuICAgIHRvbW15bWFuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG4gICAgdG9tbXltYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdXNlTW92ZSk7XG4gICAgdG9tbXltYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgIHJhbmRvbUJvdW5jZSh0b3VjaGluZywgdHJpZ2dlcmVkLCBmaXJzdCksXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfSxcbiAgICApO1xuICAgIHRvbW15bWFuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICAgIHRvbW15bWFuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdG91Y2hFbmQpO1xuICAgIHRvbW15bWFuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcbiAgICBmaXJzdCA9IGZhbHNlO1xuICB9XG4gIHRvdWNoaW5nID0gdHJ1ZTtcbiAgcmFuZG9tQm91bmNlKHRvdWNoaW5nLCB0cmlnZ2VyZWQsIGZpcnN0KTtcbn07XG5cbnRvbW15bWFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyc3RDbGljayk7XG4iLCJsZXQgc3BlZWQgPSAxO1xuXG5leHBvcnQgY29uc3Qgc3BlZWRVcCA9ICgpID0+IHtcbiAgc3BlZWQgKz0gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBzbG93RG93biA9ICgpID0+IHtcbiAgaWYgKHNwZWVkID4gMikge1xuICAgIHNwZWVkIC09IDI7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPT09IDIpIHtcbiAgICBzcGVlZCAtPSAxO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3BlZWQgPSAoKSA9PiBzcGVlZDtcbiIsImltcG9ydCB7IHRvbW15bWFuIH0gZnJvbSAnLi4vZWxlbWVudHMvdG9tbXltYW4uanMnO1xuaW1wb3J0IHsgZ2V0U3BlZWQgfSBmcm9tICcuL3NwZWVkLmpzJztcblxuZXhwb3J0IGNvbnN0IHNwaW5MZWZ0ID0gKCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IGdldFNwZWVkKCk7XG4gIHRvbW15bWFuLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtzcGVlZCAqIC01MDAwfWRlZylgO1xufTtcblxuZXhwb3J0IGNvbnN0IHNwaW5SaWdodCA9ICgpID0+IHtcbiAgLy8gZGVncmVlcyArPSAxO1xuICBjb25zdCBzcGVlZCA9IGdldFNwZWVkKCk7XG4gIHRvbW15bWFuLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtzcGVlZCAqIDUwMDB9ZGVnKWA7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keScpO1xuZXhwb3J0IGNvbnN0IGJvZHlTaXplID0geyB3aWR0aDogYm9keS5jbGllbnRXaWR0aCwgaGVpZ2h0OiBib2R5LmNsaWVudEhlaWdodCB9O1xuIiwiZXhwb3J0IGNvbnN0IHRvbW15bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW15bWFuJyk7XG5cbmV4cG9ydCBjb25zdCB0b21teVNpemUgPSB7XG4gIHdpZHRoOiB0b21teW1hbi5jbGllbnRXaWR0aCxcbiAgaGVpZ2h0OiB0b21teW1hbi5jbGllbnRIZWlnaHQsXG59O1xuIiwiaW1wb3J0IHsgZ2V0U3BlZWQgfSBmcm9tICcuLi9jb250cm9scy9zcGVlZC5qcyc7XG5cbmxldCBpbnRlcnZhbHMgPSBbXTtcblxuY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gIGZvciAoY29uc3QgaW50ZXJ2YWwgb2YgaW50ZXJ2YWxzKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cbiAgaW50ZXJ2YWxzID0gW107XG59O1xuXG5jb25zdCBhZGRJbnRlcnZhbCA9IChpbnRlcnZhbCkgPT4ge1xuICBjbGVhckFsbCgpO1xuICBjb25zdCBzcGVlZCA9IGdldFNwZWVkKCk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzcGVlZDsgaW5kZXggKz0gMSkge1xuICAgIGludGVydmFscy5wdXNoKGludGVydmFsKCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRJbnRlcnZhbDtcbiIsImltcG9ydCB7IGJvZHlTaXplIH0gZnJvbSAnLi4vZWxlbWVudHMvYm9keS5qcyc7XG5pbXBvcnQgeyB0b21teW1hbiwgdG9tbXlTaXplIH0gZnJvbSAnLi4vZWxlbWVudHMvdG9tbXltYW4uanMnO1xuXG5sZXQgbGVmdCA9IGJvZHlTaXplLndpZHRoIC8gMiAtIHRvbW15U2l6ZS53aWR0aCAvIDI7XG5sZXQgYm90dG9tID0gYm9keVNpemUuaGVpZ2h0IC8gMiAtIHRvbW15U2l6ZS5oZWlnaHQgLyAyO1xuXG50b21teW1hbi5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG50b21teW1hbi5zdHlsZS5ib3R0b20gPSBgJHtib3R0b219cHhgO1xuXG5jb25zdCBzZXRQb3NpdGlvbiA9IChsZWZ0TnVtYmVyLCBib3R0b21OdW1iZXIpID0+IHtcbiAgbGVmdCArPSBsZWZ0TnVtYmVyO1xuICBib3R0b20gKz0gYm90dG9tTnVtYmVyO1xuICByZXR1cm4geyBsZWZ0LCBib3R0b20gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFBvc2l0aW9uO1xuIiwiaW1wb3J0IHsgdG9tbXltYW4sIHRvbW15U2l6ZSB9IGZyb20gJy4uL2VsZW1lbnRzL3RvbW15bWFuLmpzJztcblxuY29uc3QgZ3JhcGhpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmFwaGljJyk7XG5cbmNvbnN0IGFsbFByaW50cyA9IFtdO1xuXG5jb25zdCBwcmludCA9IChsZWZ0LCBib3R0b20pID0+IHtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHN2Zy5zcmMgPSAndG9tbXltYW4vY2xpZW50L3B1YmxpYy9hc3NldHMvc3ByaXRlcy90b21teW1hbi5zdmcnO1xuICBzdmcuc3R5bGUud2lkdGggPSBgJHt0b21teVNpemUud2lkdGh9cHhgO1xuICBzdmcuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICBzdmcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzdmcuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICBzdmcuc3R5bGUuYm90dG9tID0gYCR7Ym90dG9tfXB4YDtcbiAgc3ZnLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSA0cyBlYXNlLWluLW91dCc7XG4gIHN2Zy5zdHlsZS5maWx0ZXIgPSBgaW52ZXJ0KC41KSBzZXBpYSgyKSBzYXR1cmF0ZSgyLjUpIGh1ZS1yb3RhdGUoJHtcbiAgICAzNjAgKiBNYXRoLnJhbmRvbSgpXG4gIH1kZWcpYDtcbiAgc3ZnLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RvbW15bWFuLnN0eWxlLnRyYW5zZm9ybX1gO1xuICBhbGxQcmludHMucHVzaChzdmcpO1xuICBncmFwaGljLmFwcGVuZChzdmcpO1xuXG4gIGlmIChhbGxQcmludHMubGVuZ3RoID4gNTApIHtcbiAgICBjb25zdCByZW1vdmVQcmludCA9IGFsbFByaW50cy5zaGlmdCgpO1xuICAgIHJlbW92ZVByaW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiByZW1vdmVQcmludC5yZW1vdmUoKSwgNDEwMCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50O1xuIiwiY29uc3QgcmFuZG9tID0gKGtleXMpID0+IGtleXNbKChrZXlzLmxlbmd0aCAtIDEpICogTWF0aC5yYW5kb20oKSkudG9GaXhlZCgwKV07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdhaXJibmItYnJvd3Nlci1zaGltcyc7XG5pbXBvcnQgeyB0b21teW1hbiB9IGZyb20gJy4vZWxlbWVudHMvdG9tbXltYW4uanMnO1xuaW1wb3J0ICcuL2VsZW1lbnRzL2JvZHkuanMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzL2F1ZGlvLmpzJztcbmltcG9ydCAnLi9jb250cm9scy9kaXJlY3Rpb24uanMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzL3BvaW50ZXIuanMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzL3NwZWVkLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzL3Bvc2l0aW9uLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzL2ludGVydmFsLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzL3ByaW50LmpzJztcbmltcG9ydCAnLi9oZWxwZXJzL3JhbmRvbS5qcyc7XG5cbnNldFRpbWVvdXQoKCkgPT4gKHRvbW15bWFuLnN0eWxlLm9wYWNpdHkgPSAnMScpLCAwKTtcbiJdLCJuYW1lcyI6WyJiZWdpbm5pbmciLCJBdWRpbyIsInZvbHVtZSIsImNvb2wiLCJjcmF6eSIsImQiLCJlYSIsImciLCJnbmFybHkiLCJhbGxBdWRpbyIsImFsbFdvcmRzIiwiYWxsTm9pc2VzIiwiYm9keVNpemUiLCJ0b21teVNpemUiLCJtb3ZlIiwic3BpbkxlZnQiLCJzcGluUmlnaHQiLCJzbG93RG93biIsInNwZWVkVXAiLCJzZXRQb3NpdGlvbiIsImFkZEludGVydmFsIiwicHJpbnQiLCJyYW5kb20iLCJnb0xlZnQiLCJzZXRJbnRlcnZhbCIsInBvcyIsImhpdHNXYWxsIiwibGVmdCIsImJvdHRvbSIsImdvTGVmdFVwIiwiZ29MZWZ0RG93biIsImdvUmlnaHQiLCJnb1JpZ2h0VXAiLCJnb1JpZ2h0RG93biIsImdvVXAiLCJnb0Rvd24iLCJhUmlnaHQiLCJhbGxSaWdodHMiLCJhTGVmdCIsImFsbExlZnRzIiwiYVVwIiwiYWxsVXBzIiwiYURvd24iLCJhbGxEb3ducyIsInJhbmRvbU5vaXNlIiwibGVuZ3RoIiwiTWF0aCIsInRvRml4ZWQiLCJwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJyYW5kb21Cb3VuY2UiLCJ0b3VjaGluZyIsInRyaWdnZXJlZCIsImZpcnN0IiwicmFuZG9tV29yZCIsImRpcmVjdGlvbktleXMiLCJPYmplY3QiLCJrZXlzIiwiYWxsRGlyZWN0aW9ucyIsInJpZ2h0IiwidXAiLCJkb3duIiwibGVmdFVwIiwicmlnaHRVcCIsImxlZnREb3duIiwicmlnaHREb3duIiwidG9tbXltYW4iLCJzdHlsZSIsImJvZHkiLCJtb3VzZU1vdmUiLCJ0b3VjaEVuZCIsImZpcnN0Q2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInNwZWVkIiwiZ2V0U3BlZWQiLCJ0cmFuc2Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImludGVydmFscyIsImNsZWFyQWxsIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaW5kZXgiLCJwdXNoIiwibGVmdE51bWJlciIsImJvdHRvbU51bWJlciIsImdyYXBoaWMiLCJhbGxQcmludHMiLCJzdmciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwiZmlsdGVyIiwiYXBwZW5kIiwicmVtb3ZlUHJpbnQiLCJzaGlmdCIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==