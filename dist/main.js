/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: status, render, update, slotAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"status\", function() { return status; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slotAvailable\", function() { return slotAvailable; });\n// This is the board as an array\nlet board = [\n  [0, 0, 0],\n  [0, 0, 0],\n  [0, 0, 0]\n];\n\n// This is for checking win or draw\nconst status = () => {\n  // these two variables keep track of the winner\n  let winner = false;\n  let value, player;\n  // this is for faking a break inside a forEach\n  let BreakException = {};\n\n  // in here we iterate over the rows to check for a winner\n  try {\n    board.forEach((row) => {\n      value = row[0];\n\n      if (value === 0) return;\n\n      winner = row.every(slot => {\n        return slot === value;\n      });\n\n      player = value === 1 ? 'x' : 'o';\n\n      if (winner) throw BreakException;\n    });\n  } catch (e) {\n    if (e !== BreakException) throw e;\n  }\n\n  if (winner) return player;\n\n  // in here we check for a diagonal with all the values equal\n  let leftToRightDiag = [];\n\n  for(let i = 0; i < board.length; i++){\n    leftToRightDiag.push(board[i][i]);\n  }\n\n  winner = leftToRightDiag.every((currentSlot) => {\n    return currentSlot === leftToRightDiag[0];\n  });\n\n  value = leftToRightDiag[0];\n\n  if (value === 0) winner = false;\n\n  player = value === 1 ? 'x' : 'o';\n\n  if (winner) return player;\n\n  // in this part we go for the columns\n  let columns = [], column;\n\n  for(let i = 0; i < board.length; i++) {\n    column = [];\n\n    for(let j = 0; j < board.length; j++) {\n      column.push(board[j][i]);\n    }\n\n    columns.push(column);\n  }\n\n  let values = columns.map(column => {\n    return column[0];\n  });\n\n  try {\n    columns.forEach((column, index) => {\n      if (values[index] === 0) return;\n\n      winner = column.every(slot => {\n        return slot === values[index];\n      });\n\n      player = values[index] === 1 ? 'x' : 'o';\n\n      if (winner) throw BreakException;\n    });\n  } catch (e) {\n    if (e !== BreakException) throw e;\n  }\n\n  if (winner) return player;\n\n  // and in this one we go for the right to left diagonal\n  let rightToLeft = [];\n  let counter = 2;\n\n  for(let i = 0; i < board.length; i++) {\n    rightToLeft.push(board[i][counter]);\n    counter--;\n  }\n\n  winner = rightToLeft.every((currentSlot) => {\n    return currentSlot === rightToLeft[0];\n  });\n\n  value = rightToLeft[0];\n\n  if (value === 0) winner = false;\n\n  player = value === 1 ? 'x' : 'o';\n\n  if (winner) return player;\n\n  return isDraw();\n}\n\nconst isDraw = () => {\n  const allDifferent = board.every(row => {\n    return row.every(col => col !== 0);\n  });\n\n  if (allDifferent) return 'draw';\n\n  return 'go';\n}\n\n// This is for printing the board at the beginning\nconst render = () => {\n  board.forEach((b, outerIndex) => {\n    b.forEach((innerB, innerIndex) => {\n      let slots = document.createElement('div');\n      slots.classList.add('slot');\n      slots.setAttribute('data-row', outerIndex);\n      slots.setAttribute('data-column', innerIndex);\n      document.getElementById('board-container').appendChild(slots);\n    });\n  });\n}\n\n// This is for updating the already printed board\nconst update = (row, col, value) => {\n  board[row][col] = value;\n}\n\nconst slotAvailable = (row, col) => {\n  return board[row][col] === 0;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\nfunction start(playerXName, playerOName) {\n  // After getting the players, we render the form\n  _board__WEBPACK_IMPORTED_MODULE_1__[\"render\"]();\n  let player1 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerXName, 1);\n  let player2 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerOName, 2);\n  let boardSlots = document.getElementsByClassName('slot');\n  let currentTurn = 1;\n  let status;\n  let playerIndicator = document.getElementById('game-status');\n  let gameStatusText;\n  playerIndicator.innerText = player1.name + \"'s turn\";\n\n  for (let i = 0; i < boardSlots.length; i++) {\n    boardSlots[i].addEventListener('click', (e) => {\n      const row = Number(e.target.getAttribute('data-row'));\n      const column = Number(e.target.getAttribute('data-column'));\n\n      // if that slot is not available do nothing\n      if (!_board__WEBPACK_IMPORTED_MODULE_1__[\"slotAvailable\"](row, column)) return;\n\n      // change the inner text of the slot\n      e.target.innerText = currentTurn === 1 ? 'x' : 'o';\n\n      // it is important to update the board before getting the status\n      // because if not then you'll be parsing a past board\n\n      // update the board\n      _board__WEBPACK_IMPORTED_MODULE_1__[\"update\"](row, column, currentTurn);\n\n      // the status is going to be either go, x, o, or draw\n      status = _board__WEBPACK_IMPORTED_MODULE_1__[\"status\"]();\n\n      // here I check if the status is a game over one\n      if (status !== 'go') {\n        gameOver(status, player1.name, player2.name);\n\n        return;\n      }\n\n\n      // if everything is fine, we continue\n      currentTurn = currentTurn === 1 ? 2 : 1;\n\n      if (currentTurn === 1) {\n        gameStatusText = player1.name + \"'s turn\";\n      } else {\n        gameStatusText = player2.name + \"'s turn\";\n      }\n\n      playerIndicator.innerText = gameStatusText;\n    });\n  }\n}\n\nfunction gameOver(status, playerXName, playerOName) {\n  let gameBoard = document.getElementById('board-container');\n  let gameStatus = document.getElementById('game-status');\n\n  // I am going to delete all the slots to clear the board\n  while (gameBoard.children.length !== 0) {\n    gameBoard.removeChild(gameBoard.firstChild);\n  }\n\n  // this part checks for the last board status\n  switch (status) {\n    case 'draw':\n      gameStatus.innerText = 'It is a draw!';\n      break;\n    case 'x':\n      gameStatus.innerText = playerXName + ' wins!';\n      break;\n    case 'o':\n      gameStatus.innerText = playerOName + ' wins!';\n      break;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nlet startButton = document.getElementById('start');\n\nstartButton.addEventListener('click', () => {\n  let playerXName = document.getElementById('x-name').value;\n  let playerOName = document.getElementById('o-name').value;\n  // Check the names\n  Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerXName, playerOName);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction playerFactory(name, symbol) {\n  let winner = false;\n  return { name, symbol, winner };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerFactory);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });