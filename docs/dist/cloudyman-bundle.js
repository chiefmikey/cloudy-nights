/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cloudyman/node_modules/airbnb-browser-shims/index.js":
/*!**************************************************************!*\
  !*** ./cloudyman/node_modules/airbnb-browser-shims/index.js ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Mikl/Dropbox/dev/apps/cloudy-nights/cloudyman/node_modules/airbnb-browser-shims/index.js'");

/***/ }),

/***/ "./cloudyman/node_modules/kaboom/dist/kaboom.mjs":
/*!*******************************************************!*\
  !*** ./cloudyman/node_modules/kaboom/dist/kaboom.mjs ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Mikl/Dropbox/dev/apps/cloudy-nights/cloudyman/node_modules/kaboom/dist/kaboom.mjs'");

/***/ }),

/***/ "./cloudyman/client/src/content/characters.js":
/*!****************************************************!*\
  !*** ./cloudyman/client/src/content/characters.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const characters = {
  a: {
    sprite: 'ch1',
    msg: 'tell me more'
  },
  b: {
    sprite: 'ch2',
    msg: 'wow dude'
  },
  cloudyman: {
    sprite: 'cloudyman',
    msg: 'its a cloudy night...'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (characters);

/***/ }),

/***/ "./cloudyman/client/src/content/player.js":
/*!************************************************!*\
  !*** ./cloudyman/client/src/content/player.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/init.js */ "./cloudyman/client/src/functions/init.js");
/* harmony import */ var _talking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talking.js */ "./cloudyman/client/src/content/talking.js");



const playerOne = () => {
  const player = _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('playerOne')[0];
  let hasKey = false;
  player.overlaps('key', key => {
    _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('coin');
    _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].destroy(key);
    hasKey = true;
  });
  player.overlaps('door1', () => {
    if (hasKey) {
      _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('hit');
      _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].go('two');
    } else {
      (0,_talking_js__WEBPACK_IMPORTED_MODULE_1__.talk)('wherez dey key?');
    }
  });
  let finalDoor = false;
  player.overlaps('finalDoor', () => {
    if (finalDoor) {
      _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].go('win');
    } else {
      (0,_talking_js__WEBPACK_IMPORTED_MODULE_1__.talk)('did you talk to the Cloudyman?');
    }
  });
  player.overlaps('ch1', ch => {
    _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('aaa');
    (0,_talking_js__WEBPACK_IMPORTED_MODULE_1__.talk)(ch.msg);
  });
  player.overlaps('ch2', ch => {
    _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('haha');
    (0,_talking_js__WEBPACK_IMPORTED_MODULE_1__.talk)(ch.msg);
  });
  player.overlaps('cloudyman', ch => {
    _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('ayy');
    (0,_talking_js__WEBPACK_IMPORTED_MODULE_1__.cloudyTalk)(ch.msg);
    finalDoor = true;
  });
  player.action(() => {
    player.resolve();
  });
  return player;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerOne);

/***/ }),

/***/ "./cloudyman/client/src/content/talking.js":
/*!*************************************************!*\
  !*** ./cloudyman/client/src/content/talking.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifTalking": () => (/* binding */ ifTalking),
/* harmony export */   "talk": () => (/* binding */ talk),
/* harmony export */   "cloudyTalk": () => (/* binding */ cloudyTalk)
/* harmony export */ });
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/init.js */ "./cloudyman/client/src/functions/init.js");

let talking = [];
const ifTalking = () => {
  if (talking[0]) {
    for (const t of talking) {
      _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].destroy(t);
    }

    talking = [];
  }
};
const talk = message => {
  ifTalking();
  talking.push(_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].add([_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].text(message, 7, {
    width: 140
  }), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].pos(_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].width() / 2, _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].height() - 11), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin('center')]));
};
const cloudyTalk = message => {
  ifTalking();
  talking.push(_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].add([_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].text(message), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].pos(_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].width() / 2, 11), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin('center')]));
};

/***/ }),

/***/ "./cloudyman/client/src/functions/controls.js":
/*!****************************************************!*\
  !*** ./cloudyman/client/src/functions/controls.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./cloudyman/client/src/functions/init.js");
/* harmony import */ var _content_talking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/talking.js */ "./cloudyman/client/src/content/talking.js");
/* harmony import */ var _content_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/player.js */ "./cloudyman/client/src/content/player.js");
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoom.js */ "./cloudyman/client/src/functions/zoom.js");





let getMoving = () => {};

let isDown = false;
let direction;
let timer;
let sound = false;

const controls = () => {
  const player = (0,_content_player_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const SPEED = 80;
  const directories = {
    left: _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(-1, 0),
    up: _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(0, -1),
    right: _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(1, 0),
    down: _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(0, 1)
  };
  const directionKeys = Object.keys(directories);

  for (const key of directionKeys) {
    _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].keyPress(key, _content_talking_js__WEBPACK_IMPORTED_MODULE_1__.ifTalking);
    _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].keyDown(key, () => {
      player.move(directories[key].scale(SPEED));
    });
  }

  getMoving = () => {
    (0,_content_talking_js__WEBPACK_IMPORTED_MODULE_1__.ifTalking)();
    timer = setInterval(() => {
      if (isDown) {
        player.move(directories[direction].scale(SPEED));
      }
    }, 15);
  };
};

const playerMove = event => {
  event.preventDefault(); // eslint-disable-next-line no-param-reassign

  event.returnValue = false;

  if (event.type !== 'mouseup' && event.type !== 'touchend' && event.type !== 'touchcancel' && (event.target.id === 'up' || event.target.id === 'right' || event.target.id === 'down' || event.target.id === 'left')) {
    if (event.buttons === 1 || event.buttons === 3 || event.type === 'touchstart' || event.type === 'touchmove') {
      clearInterval(timer);
      isDown = true;
      direction = event.target.id;
      getMoving();
    }
  } else {
    clearInterval(timer);
    isDown = false;
  }
};

const blackScreen = document.querySelector('#blackScreen');
const title = document.querySelector('#title');

const touchStart = () => {
  if (!sound && getComputedStyle(title).opacity === '1') {
    _init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('coin');
    sound = true;
    document.querySelector('#controls').style.pointerEvents = 'all';
    blackScreen.style.animation = 'fadeOut .4s linear 0s forwards';
    title.style.animation = 'fadeOut .2s linear 0s forwards';
    controls();
  }
};

blackScreen.addEventListener('mousedown', touchStart);
blackScreen.addEventListener('touchstart', touchStart, {
  passive: true
});
title.addEventListener('mousedown', touchStart);
title.addEventListener('touchstart', touchStart, {
  passive: true
});
document.addEventListener('mousedown', playerMove);
document.addEventListener('mouseup', playerMove);
document.addEventListener('mouseover', playerMove);
document.addEventListener('touchstart', playerMove, false, {
  passive: true
});
document.addEventListener('touchend', playerMove, false);
document.addEventListener('touchmove', playerMove, false, {
  passive: true
});
document.addEventListener('touchcancel', playerMove, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controls);

/***/ }),

/***/ "./cloudyman/client/src/functions/init.js":
/*!************************************************!*\
  !*** ./cloudyman/client/src/functions/init.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaboom */ "./cloudyman/node_modules/kaboom/dist/kaboom.mjs");

const K = (0,kaboom__WEBPACK_IMPORTED_MODULE_0__["default"])({
  canvas: document.querySelector('#game'),
  clearColor: [0, 0, 0, 1],
  crisp: true,
  fullscreen: false,
  width: 205,
  height: 205,
  scale: 1,
  debug: false,
  global: false,
  plugins: []
});
K.loadRoot('cloudyman/client/public/');
K.loadSprite('ch1', 'assets/sprites/ch1.png');
K.loadSprite('ch2', 'assets/sprites/ch2.png');
K.loadSprite('cloudyman', 'assets/sprites/cloudyman.png');
K.loadSprite('door', 'assets/sprites/door.png');
K.loadSprite('guy', 'assets/sprites/guy.png');
K.loadSprite('key', 'assets/sprites/key.png');
K.loadSprite('steel', 'assets/sprites/steel.png');
K.loadSound('coin', 'assets/sounds/coin.mp3');
K.loadSound('hit', 'assets/sounds/hit.mp3');
K.loadSound('ayy', 'assets/sounds/ayy.mp3');
K.loadSound('mmm', 'assets/sounds/mmm.mp3');
K.loadSound('haha', 'assets/sounds/haha.mp3');
K.loadSound('aaa', 'assets/sounds/aaa.mp3');
K.loadSound('priorities', 'assets/sounds/priorities.mp3');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (K);

/***/ }),

/***/ "./cloudyman/client/src/functions/zoom.js":
/*!************************************************!*\
  !*** ./cloudyman/client/src/functions/zoom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
let isZoomed = false;

const zoom = () => {
  if (!isZoomed) {
    document.querySelector('#body').style.justifyContent = 'flex-start';
    document.querySelector('#app').style.justifyContent = 'flex-start';
    document.querySelector('#app').style.height = '190%';
    document.querySelector('#zoom').style.visibility = 'visible';
    document.querySelector('#title').style.transform = 'scale(2.1)';
    document.querySelector('#background').style.maxWidth = 'none';
    isZoomed = true;
  } else {
    document.querySelector('#body').style.justifyContent = 'center';
    document.querySelector('#app').style.justifyContent = 'center';
    document.querySelector('#app').style.height = '100%';
    document.querySelector('#zoom').style.visibility = '';
    document.querySelector('#title').style.transform = 'scale(1)';
    document.querySelector('#background').style.maxWidth = '100%';
    isZoomed = false;
  }
};

document.querySelector('#zoom').addEventListener('click', zoom);

if (document.addEventListener) {
  document.addEventListener('contextmenu', event_ => {
    if (window.getComputedStyle(document.querySelector('#zoom')).visibility === 'visible') {
      zoom();
    }

    event_.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', () => {
    if (window.getComputedStyle(document.querySelector('#zoom')).visibility === 'visible') {
      zoom();
    }

    window.event.returnValue = false;
  });
}

/***/ }),

/***/ "./cloudyman/client/src/scenes/one.js":
/*!********************************************!*\
  !*** ./cloudyman/client/src/scenes/one.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/init.js */ "./cloudyman/client/src/functions/init.js");
/* harmony import */ var _content_characters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/characters.js */ "./cloudyman/client/src/content/characters.js");
/* eslint-disable sonarjs/no-duplicate-string */



const one = () => {
  const level = ['=======|=======', '=     = =   =$=', '= a   = = a = =', '=     = =   = =', '=             =', '=    ==========', '= b           =', '===========a  =', '=          =  =', '=  ======  =  =', '=  =b   =  =  =', '=  =  = =  =  =', '=  =  = =  =  =', '=     =@=     =', '==============='];
  _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].addLevel(level, {
    width: 11,
    height: 11,
    pos: _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(20, 20),
    '=': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('steel'), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid()],
    $: [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('key'), 'key'],
    '@': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('guy'), 'playerOne'],
    '|': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('door'), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid(), 'door1'],

    any(ch) {
      const char = _content_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"][ch];

      if (char) {
        return [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite(char.sprite), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid(), char.sprite, {
          msg: char.msg
        }];
      }

      return char;
    }

  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (one);

/***/ }),

/***/ "./cloudyman/client/src/scenes/two.js":
/*!********************************************!*\
  !*** ./cloudyman/client/src/scenes/two.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/init.js */ "./cloudyman/client/src/functions/init.js");
/* harmony import */ var _content_characters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/characters.js */ "./cloudyman/client/src/content/characters.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/controls.js */ "./cloudyman/client/src/functions/controls.js");
/* eslint-disable sonarjs/no-duplicate-string */




const two = () => {
  const level = ['=======F=======', '=             =', '=             =', '=     !       =', '=             =', '=             =', '=             =', '=             =', '=             =', '=             =', '=             =', '=             =', '=             =', '=      @      =', '==============='];
  _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].addLevel(level, {
    width: 11,
    height: 11,
    pos: _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].vec2(20, 20),
    '=': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('steel'), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid()],
    '@': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('guy'), 'playerOne'],
    '!': [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite(_content_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"].cloudyman.sprite), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid(), _content_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"].cloudyman.sprite, {
      msg: _content_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"].cloudyman.msg
    }],
    F: [_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].sprite('door'), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].solid(), 'finalDoor']
  });
  (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);

/***/ }),

/***/ "./cloudyman/client/src/scenes/win.js":
/*!********************************************!*\
  !*** ./cloudyman/client/src/scenes/win.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/init.js */ "./cloudyman/client/src/functions/init.js");


const win = () => {
  _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].play('priorities');
  _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].add([_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].text('you win!'), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].pos(_functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].width() / 2, _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].height() / 2), _functions_init_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin('center')]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (win);

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
/*!***************************************!*\
  !*** ./cloudyman/client/src/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "./cloudyman/node_modules/airbnb-browser-shims/index.js");
/* harmony import */ var _functions_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/init.js */ "./cloudyman/client/src/functions/init.js");
/* harmony import */ var _scenes_one_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/one.js */ "./cloudyman/client/src/scenes/one.js");
/* harmony import */ var _scenes_two_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/two.js */ "./cloudyman/client/src/scenes/two.js");
/* harmony import */ var _scenes_win_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/win.js */ "./cloudyman/client/src/scenes/win.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/controls.js */ "./cloudyman/client/src/functions/controls.js");






_functions_init_js__WEBPACK_IMPORTED_MODULE_1__["default"].scene('one', () => (0,_scenes_one_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
_functions_init_js__WEBPACK_IMPORTED_MODULE_1__["default"].scene('two', () => (0,_scenes_two_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
_functions_init_js__WEBPACK_IMPORTED_MODULE_1__["default"].scene('win', _scenes_win_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
_functions_init_js__WEBPACK_IMPORTED_MODULE_1__["default"].start('one');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0VBQUEsQ0FBUSxLQUFSLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vY2xvdWR5bWFuL2NsaWVudC9zcmMvY29udGVudC9jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi9jbG91ZHltYW4vY2xpZW50L3NyYy9jb250ZW50L3BsYXllci5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vY2xvdWR5bWFuL2NsaWVudC9zcmMvY29udGVudC90YWxraW5nLmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi9jbG91ZHltYW4vY2xpZW50L3NyYy9mdW5jdGlvbnMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL2Nsb3VkeW1hbi9jbGllbnQvc3JjL2Z1bmN0aW9ucy9pbml0LmpzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvLi9jbG91ZHltYW4vY2xpZW50L3NyYy9mdW5jdGlvbnMvem9vbS5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vY2xvdWR5bWFuL2NsaWVudC9zcmMvc2NlbmVzL29uZS5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vY2xvdWR5bWFuL2NsaWVudC9zcmMvc2NlbmVzL3R3by5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzLy4vY2xvdWR5bWFuL2NsaWVudC9zcmMvc2NlbmVzL3dpbi5qcyIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nsb3VkeS1uaWdodHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbG91ZHktbmlnaHRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xvdWR5LW5pZ2h0cy8uL2Nsb3VkeW1hbi9jbGllbnQvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYXJhY3RlcnMgPSB7XG4gIGE6IHtcbiAgICBzcHJpdGU6ICdjaDEnLFxuICAgIG1zZzogJ3RlbGwgbWUgbW9yZScsXG4gIH0sXG4gIGI6IHtcbiAgICBzcHJpdGU6ICdjaDInLFxuICAgIG1zZzogJ3dvdyBkdWRlJyxcbiAgfSxcbiAgY2xvdWR5bWFuOiB7XG4gICAgc3ByaXRlOiAnY2xvdWR5bWFuJyxcbiAgICBtc2c6ICdpdHMgYSBjbG91ZHkgbmlnaHQuLi4nLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVycztcbiIsImltcG9ydCBLIGZyb20gJy4uL2Z1bmN0aW9ucy9pbml0LmpzJztcbmltcG9ydCB7IHRhbGssIGNsb3VkeVRhbGsgfSBmcm9tICcuL3RhbGtpbmcuanMnO1xuXG5jb25zdCBwbGF5ZXJPbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IEsuZ2V0KCdwbGF5ZXJPbmUnKVswXTtcblxuICBsZXQgaGFzS2V5ID0gZmFsc2U7XG5cbiAgcGxheWVyLm92ZXJsYXBzKCdrZXknLCAoa2V5KSA9PiB7XG4gICAgSy5wbGF5KCdjb2luJyk7XG4gICAgSy5kZXN0cm95KGtleSk7XG4gICAgaGFzS2V5ID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcGxheWVyLm92ZXJsYXBzKCdkb29yMScsICgpID0+IHtcbiAgICBpZiAoaGFzS2V5KSB7XG4gICAgICBLLnBsYXkoJ2hpdCcpO1xuICAgICAgSy5nbygndHdvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhbGsoJ3doZXJleiBkZXkga2V5PycpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGZpbmFsRG9vciA9IGZhbHNlO1xuXG4gIHBsYXllci5vdmVybGFwcygnZmluYWxEb29yJywgKCkgPT4ge1xuICAgIGlmIChmaW5hbERvb3IpIHtcbiAgICAgIEsuZ28oJ3dpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWxrKCdkaWQgeW91IHRhbGsgdG8gdGhlIENsb3VkeW1hbj8nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHBsYXllci5vdmVybGFwcygnY2gxJywgKGNoKSA9PiB7XG4gICAgSy5wbGF5KCdhYWEnKTtcbiAgICB0YWxrKGNoLm1zZyk7XG4gIH0pO1xuXG4gIHBsYXllci5vdmVybGFwcygnY2gyJywgKGNoKSA9PiB7XG4gICAgSy5wbGF5KCdoYWhhJyk7XG4gICAgdGFsayhjaC5tc2cpO1xuICB9KTtcblxuICBwbGF5ZXIub3ZlcmxhcHMoJ2Nsb3VkeW1hbicsIChjaCkgPT4ge1xuICAgIEsucGxheSgnYXl5Jyk7XG4gICAgY2xvdWR5VGFsayhjaC5tc2cpO1xuICAgIGZpbmFsRG9vciA9IHRydWU7XG4gIH0pO1xuXG4gIHBsYXllci5hY3Rpb24oKCkgPT4ge1xuICAgIHBsYXllci5yZXNvbHZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBwbGF5ZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgcGxheWVyT25lO1xuIiwiaW1wb3J0IEsgZnJvbSAnLi4vZnVuY3Rpb25zL2luaXQuanMnO1xuXG5sZXQgdGFsa2luZyA9IFtdO1xuXG5leHBvcnQgY29uc3QgaWZUYWxraW5nID0gKCkgPT4ge1xuICBpZiAodGFsa2luZ1swXSkge1xuICAgIGZvciAoY29uc3QgdCBvZiB0YWxraW5nKSB7XG4gICAgICBLLmRlc3Ryb3kodCk7XG4gICAgfVxuICAgIHRhbGtpbmcgPSBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhbGsgPSAobWVzc2FnZSkgPT4ge1xuICBpZlRhbGtpbmcoKTtcbiAgdGFsa2luZy5wdXNoKFxuICAgIEsuYWRkKFtcbiAgICAgIEsudGV4dChtZXNzYWdlLCA3LCB7IHdpZHRoOiAxNDAgfSksXG4gICAgICBLLnBvcyhLLndpZHRoKCkgLyAyLCBLLmhlaWdodCgpIC0gMTEpLFxuICAgICAgSy5vcmlnaW4oJ2NlbnRlcicpLFxuICAgIF0pLFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkeVRhbGsgPSAobWVzc2FnZSkgPT4ge1xuICBpZlRhbGtpbmcoKTtcbiAgdGFsa2luZy5wdXNoKFxuICAgIEsuYWRkKFtLLnRleHQobWVzc2FnZSksIEsucG9zKEsud2lkdGgoKSAvIDIsIDExKSwgSy5vcmlnaW4oJ2NlbnRlcicpXSksXG4gICk7XG59O1xuIiwiaW1wb3J0IEsgZnJvbSAnLi9pbml0LmpzJztcbmltcG9ydCB7IGlmVGFsa2luZyB9IGZyb20gJy4uL2NvbnRlbnQvdGFsa2luZy5qcyc7XG5pbXBvcnQgcGxheWVyT25lIGZyb20gJy4uL2NvbnRlbnQvcGxheWVyLmpzJztcbmltcG9ydCAnLi96b29tLmpzJztcblxubGV0IGdldE1vdmluZyA9ICgpID0+IHt9O1xubGV0IGlzRG93biA9IGZhbHNlO1xubGV0IGRpcmVjdGlvbjtcbmxldCB0aW1lcjtcbmxldCBzb3VuZCA9IGZhbHNlO1xuXG5jb25zdCBjb250cm9scyA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyT25lKCk7XG4gIGNvbnN0IFNQRUVEID0gODA7XG5cbiAgY29uc3QgZGlyZWN0b3JpZXMgPSB7XG4gICAgbGVmdDogSy52ZWMyKC0xLCAwKSxcbiAgICB1cDogSy52ZWMyKDAsIC0xKSxcbiAgICByaWdodDogSy52ZWMyKDEsIDApLFxuICAgIGRvd246IEsudmVjMigwLCAxKSxcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25LZXlzID0gT2JqZWN0LmtleXMoZGlyZWN0b3JpZXMpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBkaXJlY3Rpb25LZXlzKSB7XG4gICAgSy5rZXlQcmVzcyhrZXksIGlmVGFsa2luZyk7XG4gICAgSy5rZXlEb3duKGtleSwgKCkgPT4ge1xuICAgICAgcGxheWVyLm1vdmUoZGlyZWN0b3JpZXNba2V5XS5zY2FsZShTUEVFRCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TW92aW5nID0gKCkgPT4ge1xuICAgIGlmVGFsa2luZygpO1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICBwbGF5ZXIubW92ZShkaXJlY3Rvcmllc1tkaXJlY3Rpb25dLnNjYWxlKFNQRUVEKSk7XG4gICAgICB9XG4gICAgfSwgMTUpO1xuICB9O1xufTtcblxuY29uc3QgcGxheWVyTW92ZSA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgaWYgKFxuICAgIGV2ZW50LnR5cGUgIT09ICdtb3VzZXVwJyAmJlxuICAgIGV2ZW50LnR5cGUgIT09ICd0b3VjaGVuZCcgJiZcbiAgICBldmVudC50eXBlICE9PSAndG91Y2hjYW5jZWwnICYmXG4gICAgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ3VwJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0LmlkID09PSAncmlnaHQnIHx8XG4gICAgICBldmVudC50YXJnZXQuaWQgPT09ICdkb3duJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0LmlkID09PSAnbGVmdCcpXG4gICkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmJ1dHRvbnMgPT09IDEgfHxcbiAgICAgIGV2ZW50LmJ1dHRvbnMgPT09IDMgfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZSdcbiAgICApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgIGRpcmVjdGlvbiA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgIGdldE1vdmluZygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICBpc0Rvd24gPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgYmxhY2tTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxhY2tTY3JlZW4nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5cbmNvbnN0IHRvdWNoU3RhcnQgPSAoKSA9PiB7XG4gIGlmICghc291bmQgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0aXRsZSkub3BhY2l0eSA9PT0gJzEnKSB7XG4gICAgSy5wbGF5KCdjb2luJyk7XG4gICAgc291bmQgPSB0cnVlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250cm9scycpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICBibGFja1NjcmVlbi5zdHlsZS5hbmltYXRpb24gPSAnZmFkZU91dCAuNHMgbGluZWFyIDBzIGZvcndhcmRzJztcbiAgICB0aXRsZS5zdHlsZS5hbmltYXRpb24gPSAnZmFkZU91dCAuMnMgbGluZWFyIDBzIGZvcndhcmRzJztcbiAgICBjb250cm9scygpO1xuICB9XG59O1xuXG5ibGFja1NjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b3VjaFN0YXJ0KTtcbmJsYWNrU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0b3VjaFN0YXJ0KTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBsYXllck1vdmUpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHBsYXllck1vdmUpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgcGxheWVyTW92ZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcGxheWVyTW92ZSwgZmFsc2UsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcGxheWVyTW92ZSwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcGxheWVyTW92ZSwgZmFsc2UsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgcGxheWVyTW92ZSwgZmFsc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9scztcbiIsImltcG9ydCBrYWJvb20gZnJvbSAna2Fib29tJztcblxuY29uc3QgSyA9IGthYm9vbSh7XG4gIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKSxcbiAgY2xlYXJDb2xvcjogWzAsIDAsIDAsIDFdLFxuICBjcmlzcDogdHJ1ZSxcbiAgZnVsbHNjcmVlbjogZmFsc2UsXG4gIHdpZHRoOiAyMDUsXG4gIGhlaWdodDogMjA1LFxuICBzY2FsZTogMSxcbiAgZGVidWc6IGZhbHNlLFxuICBnbG9iYWw6IGZhbHNlLFxuICBwbHVnaW5zOiBbXSxcbn0pO1xuXG5LLmxvYWRSb290KCdjbG91ZHltYW4vY2xpZW50L3B1YmxpYy8nKTtcbksubG9hZFNwcml0ZSgnY2gxJywgJ2Fzc2V0cy9zcHJpdGVzL2NoMS5wbmcnKTtcbksubG9hZFNwcml0ZSgnY2gyJywgJ2Fzc2V0cy9zcHJpdGVzL2NoMi5wbmcnKTtcbksubG9hZFNwcml0ZSgnY2xvdWR5bWFuJywgJ2Fzc2V0cy9zcHJpdGVzL2Nsb3VkeW1hbi5wbmcnKTtcbksubG9hZFNwcml0ZSgnZG9vcicsICdhc3NldHMvc3ByaXRlcy9kb29yLnBuZycpO1xuSy5sb2FkU3ByaXRlKCdndXknLCAnYXNzZXRzL3Nwcml0ZXMvZ3V5LnBuZycpO1xuSy5sb2FkU3ByaXRlKCdrZXknLCAnYXNzZXRzL3Nwcml0ZXMva2V5LnBuZycpO1xuSy5sb2FkU3ByaXRlKCdzdGVlbCcsICdhc3NldHMvc3ByaXRlcy9zdGVlbC5wbmcnKTtcblxuSy5sb2FkU291bmQoJ2NvaW4nLCAnYXNzZXRzL3NvdW5kcy9jb2luLm1wMycpO1xuSy5sb2FkU291bmQoJ2hpdCcsICdhc3NldHMvc291bmRzL2hpdC5tcDMnKTtcbksubG9hZFNvdW5kKCdheXknLCAnYXNzZXRzL3NvdW5kcy9heXkubXAzJyk7XG5LLmxvYWRTb3VuZCgnbW1tJywgJ2Fzc2V0cy9zb3VuZHMvbW1tLm1wMycpO1xuSy5sb2FkU291bmQoJ2hhaGEnLCAnYXNzZXRzL3NvdW5kcy9oYWhhLm1wMycpO1xuSy5sb2FkU291bmQoJ2FhYScsICdhc3NldHMvc291bmRzL2FhYS5tcDMnKTtcbksubG9hZFNvdW5kKCdwcmlvcml0aWVzJywgJ2Fzc2V0cy9zb3VuZHMvcHJpb3JpdGllcy5tcDMnKTtcblxuZXhwb3J0IGRlZmF1bHQgSztcbiIsImxldCBpc1pvb21lZCA9IGZhbHNlO1xuXG5jb25zdCB6b29tID0gKCkgPT4ge1xuICBpZiAoIWlzWm9vbWVkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZHknKS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLnN0eWxlLmhlaWdodCA9ICcxOTAlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjem9vbScpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDIuMSknO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZ3JvdW5kJykuc3R5bGUubWF4V2lkdGggPSAnbm9uZSc7XG4gICAgaXNab29tZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2R5Jykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6b29tJykuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tncm91bmQnKS5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJztcbiAgICBpc1pvb21lZCA9IGZhbHNlO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjem9vbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgem9vbSk7XG5cbmlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NvbnRleHRtZW51JyxcbiAgICAoZXZlbnRfKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6b29tJykpLnZpc2liaWxpdHkgPT09XG4gICAgICAgICd2aXNpYmxlJ1xuICAgICAgKSB7XG4gICAgICAgIHpvb20oKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50Xy5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG4gICAgZmFsc2UsXG4gICk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25jb250ZXh0bWVudScsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjem9vbScpKS52aXNpYmlsaXR5ID09PVxuICAgICAgJ3Zpc2libGUnXG4gICAgKSB7XG4gICAgICB6b29tKCk7XG4gICAgfVxuICAgIHdpbmRvdy5ldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHNvbmFyanMvbm8tZHVwbGljYXRlLXN0cmluZyAqL1xuaW1wb3J0IEsgZnJvbSAnLi4vZnVuY3Rpb25zL2luaXQuanMnO1xuaW1wb3J0IGNoYXJhY3RlcnMgZnJvbSAnLi4vY29udGVudC9jaGFyYWN0ZXJzLmpzJztcblxuY29uc3Qgb25lID0gKCkgPT4ge1xuICBjb25zdCBsZXZlbCA9IFtcbiAgICAnPT09PT09PXw9PT09PT09JyxcbiAgICAnPSAgICAgPSA9ICAgPSQ9JyxcbiAgICAnPSBhICAgPSA9IGEgPSA9JyxcbiAgICAnPSAgICAgPSA9ICAgPSA9JyxcbiAgICAnPSAgICAgICAgICAgICA9JyxcbiAgICAnPSAgICA9PT09PT09PT09JyxcbiAgICAnPSBiICAgICAgICAgICA9JyxcbiAgICAnPT09PT09PT09PT1hICA9JyxcbiAgICAnPSAgICAgICAgICA9ICA9JyxcbiAgICAnPSAgPT09PT09ICA9ICA9JyxcbiAgICAnPSAgPWIgICA9ICA9ICA9JyxcbiAgICAnPSAgPSAgPSA9ICA9ICA9JyxcbiAgICAnPSAgPSAgPSA9ICA9ICA9JyxcbiAgICAnPSAgICAgPUA9ICAgICA9JyxcbiAgICAnPT09PT09PT09PT09PT09JyxcbiAgXTtcblxuICBLLmFkZExldmVsKGxldmVsLCB7XG4gICAgd2lkdGg6IDExLFxuICAgIGhlaWdodDogMTEsXG4gICAgcG9zOiBLLnZlYzIoMjAsIDIwKSxcbiAgICAnPSc6IFtLLnNwcml0ZSgnc3RlZWwnKSwgSy5zb2xpZCgpXSxcbiAgICAkOiBbSy5zcHJpdGUoJ2tleScpLCAna2V5J10sXG4gICAgJ0AnOiBbSy5zcHJpdGUoJ2d1eScpLCAncGxheWVyT25lJ10sXG4gICAgJ3wnOiBbSy5zcHJpdGUoJ2Rvb3InKSwgSy5zb2xpZCgpLCAnZG9vcjEnXSxcbiAgICBhbnkoY2gpIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBjaGFyYWN0ZXJzW2NoXTtcbiAgICAgIGlmIChjaGFyKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgSy5zcHJpdGUoY2hhci5zcHJpdGUpLFxuICAgICAgICAgIEsuc29saWQoKSxcbiAgICAgICAgICBjaGFyLnNwcml0ZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtc2c6IGNoYXIubXNnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcjtcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHNvbmFyanMvbm8tZHVwbGljYXRlLXN0cmluZyAqL1xuaW1wb3J0IEsgZnJvbSAnLi4vZnVuY3Rpb25zL2luaXQuanMnO1xuaW1wb3J0IGNoYXJhY3RlcnMgZnJvbSAnLi4vY29udGVudC9jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCBjb250cm9scyBmcm9tICcuLi9mdW5jdGlvbnMvY29udHJvbHMuanMnO1xuXG5jb25zdCB0d28gPSAoKSA9PiB7XG4gIGNvbnN0IGxldmVsID0gW1xuICAgICc9PT09PT09Rj09PT09PT0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAhICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgICAgICAgID0nLFxuICAgICc9ICAgICAgQCAgICAgID0nLFxuICAgICc9PT09PT09PT09PT09PT0nLFxuICBdO1xuXG4gIEsuYWRkTGV2ZWwobGV2ZWwsIHtcbiAgICB3aWR0aDogMTEsXG4gICAgaGVpZ2h0OiAxMSxcbiAgICBwb3M6IEsudmVjMigyMCwgMjApLFxuICAgICc9JzogW0suc3ByaXRlKCdzdGVlbCcpLCBLLnNvbGlkKCldLFxuICAgICdAJzogW0suc3ByaXRlKCdndXknKSwgJ3BsYXllck9uZSddLFxuICAgICchJzogW1xuICAgICAgSy5zcHJpdGUoY2hhcmFjdGVycy5jbG91ZHltYW4uc3ByaXRlKSxcbiAgICAgIEsuc29saWQoKSxcbiAgICAgIGNoYXJhY3RlcnMuY2xvdWR5bWFuLnNwcml0ZSxcbiAgICAgIHsgbXNnOiBjaGFyYWN0ZXJzLmNsb3VkeW1hbi5tc2cgfSxcbiAgICBdLFxuICAgIEY6IFtLLnNwcml0ZSgnZG9vcicpLCBLLnNvbGlkKCksICdmaW5hbERvb3InXSxcbiAgfSk7XG4gIGNvbnRyb2xzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0d287XG4iLCJpbXBvcnQgSyBmcm9tICcuLi9mdW5jdGlvbnMvaW5pdC5qcyc7XG5cbmNvbnN0IHdpbiA9ICgpID0+IHtcbiAgSy5wbGF5KCdwcmlvcml0aWVzJyk7XG4gIEsuYWRkKFtcbiAgICBLLnRleHQoJ3lvdSB3aW4hJyksXG4gICAgSy5wb3MoSy53aWR0aCgpIC8gMiwgSy5oZWlnaHQoKSAvIDIpLFxuICAgIEsub3JpZ2luKCdjZW50ZXInKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aW47XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnO1xuaW1wb3J0IEsgZnJvbSAnLi9mdW5jdGlvbnMvaW5pdC5qcyc7XG5pbXBvcnQgb25lIGZyb20gJy4vc2NlbmVzL29uZS5qcyc7XG5pbXBvcnQgdHdvIGZyb20gJy4vc2NlbmVzL3R3by5qcyc7XG5pbXBvcnQgd2luIGZyb20gJy4vc2NlbmVzL3dpbi5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25zL2NvbnRyb2xzLmpzJztcblxuSy5zY2VuZSgnb25lJywgKCkgPT4gb25lKCkpO1xuSy5zY2VuZSgndHdvJywgKCkgPT4gdHdvKCkpO1xuSy5zY2VuZSgnd2luJywgd2luKTtcblxuSy5zdGFydCgnb25lJyk7XG4iXSwibmFtZXMiOlsiY2hhcmFjdGVycyIsImEiLCJzcHJpdGUiLCJtc2ciLCJiIiwiY2xvdWR5bWFuIiwiSyIsInRhbGsiLCJjbG91ZHlUYWxrIiwicGxheWVyT25lIiwicGxheWVyIiwiZ2V0IiwiaGFzS2V5Iiwib3ZlcmxhcHMiLCJrZXkiLCJwbGF5IiwiZGVzdHJveSIsImdvIiwiZmluYWxEb29yIiwiY2giLCJhY3Rpb24iLCJyZXNvbHZlIiwidGFsa2luZyIsImlmVGFsa2luZyIsInQiLCJtZXNzYWdlIiwicHVzaCIsImFkZCIsInRleHQiLCJ3aWR0aCIsInBvcyIsImhlaWdodCIsIm9yaWdpbiIsImdldE1vdmluZyIsImlzRG93biIsImRpcmVjdGlvbiIsInRpbWVyIiwic291bmQiLCJjb250cm9scyIsIlNQRUVEIiwiZGlyZWN0b3JpZXMiLCJsZWZ0IiwidmVjMiIsInVwIiwicmlnaHQiLCJkb3duIiwiZGlyZWN0aW9uS2V5cyIsIk9iamVjdCIsImtleXMiLCJrZXlQcmVzcyIsImtleURvd24iLCJtb3ZlIiwic2NhbGUiLCJzZXRJbnRlcnZhbCIsInBsYXllck1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiaWQiLCJidXR0b25zIiwiY2xlYXJJbnRlcnZhbCIsImJsYWNrU2NyZWVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJ0b3VjaFN0YXJ0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9wYWNpdHkiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJhbmltYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImthYm9vbSIsImNhbnZhcyIsImNsZWFyQ29sb3IiLCJjcmlzcCIsImZ1bGxzY3JlZW4iLCJkZWJ1ZyIsImdsb2JhbCIsInBsdWdpbnMiLCJsb2FkUm9vdCIsImxvYWRTcHJpdGUiLCJsb2FkU291bmQiLCJpc1pvb21lZCIsInpvb20iLCJqdXN0aWZ5Q29udGVudCIsInZpc2liaWxpdHkiLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsImV2ZW50XyIsIndpbmRvdyIsImF0dGFjaEV2ZW50Iiwib25lIiwibGV2ZWwiLCJhZGRMZXZlbCIsInNvbGlkIiwiJCIsImFueSIsImNoYXIiLCJ0d28iLCJGIiwid2luIiwic2NlbmUiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=