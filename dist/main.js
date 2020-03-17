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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"status\", function() { return status; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slotAvailable\", function() { return slotAvailable; });\n// This is the board as an array\r\nlet board = [\r\n  [0, 0, 0],\r\n  [0, 0, 0],\r\n  [0, 0, 0]\r\n];\r\n\r\n// This is for checking win or draw\r\nconst status = () => {\r\n  // these two variables keep track of the winner\r\n  let winner = false;\r\n  let value, player;\r\n\r\n  // in here we iterate over the rows to check for a winner\r\n  try {\r\n    board.forEach((row) => {\r\n      value = row[0];\r\n\r\n      winner = row.every(slot => {\r\n        return slot === value;\r\n      });\r\n\r\n      player = value === 1 ? 'x' : 'o';\r\n\r\n      if (winner) throw BreakException;\r\n    });\r\n  } catch (e) {\r\n    if (e !== BreakException) throw e;\r\n  }\r\n\r\n  if (winner) return player;\r\n\r\n  // in here we check for a diagonal with all the values equal\r\n  let leftToRightDiag = [];\r\n\r\n  for(let i = 0; i < board.length; i++){\r\n    leftToRightDiag.push(board[i][i]);\r\n  }\r\n\r\n  winner = leftToRightDiag.every((currentSlot) => {\r\n    return currentSlot === leftToRightDiag[0];\r\n  });\r\n\r\n  value = leftToRightDiag[0];\r\n  player = value === 1 ? 'x' : 'o';\r\n\r\n  if (winner) return player;\r\n\r\n  // in this part we go for the columns\r\n  let columns = [], column;\r\n\r\n  for(let i = 0; i < board.length; i++) {\r\n    column = [];\r\n\r\n    for(let j = 0; j < board.length; j++) {\r\n      column.push(board[j][i]);\r\n    }\r\n\r\n    columns.push(column);\r\n  }\r\n\r\n  let values = columns.map(column => {\r\n    return column[0];\r\n  });\r\n\r\n  try {\r\n    columns.forEach((column, index) => {\r\n      winner = column.every(slot => {\r\n        return slot === values[index]\r\n      });\r\n\r\n      player = values[index] === 1 ? 'x' : 'o';\r\n\r\n      if (winner) throw BreakException;\r\n    });\r\n  } catch (e) {\r\n    if (e !== BreakException) throw e;\r\n  }\r\n\r\n  if (winner) return player;\r\n\r\n  // and in this one we go for the right to left diagonal\r\n  let rightToLeft = [];\r\n  let counter = 2;\r\n\r\n  for(let i = 0; i < board.length; i++) {\r\n    rightToLeft.push(board[i][counter]);\r\n    counter--;\r\n  }\r\n\r\n  winner = rightToLeft.every((currentSlot) => {\r\n    return currentSlot === rightToLeft[0];\r\n  });\r\n\r\n  value = rightToLeft[0];\r\n  player = value === 1 ? 'x' : 'o';\r\n\r\n  if (winner) return player;\r\n\r\n  return isDraw();\r\n}\r\n\r\nconst isDraw = () => {\r\n  const allDifferent = board.every(row => {\r\n    return row.every(col => col !== 0);\r\n  });\r\n\r\n  if (allDifferent) return 'draw';\r\n\r\n  return 'go';\r\n}\r\n\r\n// This is for printing the board at the beginning\r\nconst render = () => {\r\n  board.forEach((b, outerIndex) => {\r\n    b.forEach((innerB, innerIndex) => {\r\n      let slots = document.createElement('div');\r\n      slots.classList.add('slot');\r\n      slots.setAttribute('data-row', outerIndex);\r\n      slots.setAttribute('data-column', innerIndex);\r\n      document.getElementById('board-container').appendChild(slots);\r\n    });\r\n  });\r\n}\r\n\r\n// This is for updating the already printed board\r\nconst update = (row, col, value) => {\r\n  let slot = document.querySelector(`.slot[data-row=\"${row}\"][data-column=\"${col}\"]`);\r\n  slot.innerText = value === 1 ? 'x' : 'o';\r\n  board[row][col] = value;\r\n}\r\n\r\nconst slotAvailable = (row, col) => {\r\n  return board[row][col] === 0;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\r\n\r\n\r\nfunction start(playerXName, playerOName) {\r\n  // After getting the players, we render the form\r\n  _board__WEBPACK_IMPORTED_MODULE_1__[\"render\"]();\r\n  let player1 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerXName, 1);\r\n  let player2 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerOName, 2);\r\n  let boardSlots = document.getElementsByClassName('slot');\r\n  let currentTurn = 1;\r\n  let status;\r\n  let playerIndicator = document.getElementById('game-status');\r\n  playerIndicator.innerText = player1.name + \"'s turn\";\r\n  for (let i = 0; i < boardSlots.length; i++) {\r\n    boardSlots[i].addEventListener('click', (e) => {\r\n      const row = Number(e.target.getAttribute('data-row'));\r\n      const column = Number(e.target.getAttribute('data-column'));\r\n\r\n      if (!_board__WEBPACK_IMPORTED_MODULE_1__[\"slotAvailable\"](row, column)) return;\r\n\r\n      // this is going to be either go, x, o, or draw\r\n      e.target.innerText = currentTurn === 1 ? 'x' : 'o';\r\n      status = _board__WEBPACK_IMPORTED_MODULE_1__[\"status\"]();\r\n\r\n      // here I check if the status is a game over one\r\n      if (status !== 'go') gameOver(status, player1.name, player2.name);\r\n\r\n      // if everything is fine, we continue\r\n      currentTurn = currentTurn === 1 ? 2 : 1;\r\n      playerIndicator = currentTurn === 1 ? player1.name + \"'s turn\" : player2.name + \"'s turn\";\r\n    });\r\n  }\r\n}\r\n\r\nfunction gameOver(status, playerXName, playerOName) {\r\n  let boardSlots = document.getElementByClassName('slot');\r\n  let gameStatus = document.getElementById('game-status');\r\n\r\n  // I am going to delete all the slots to clear the board\r\n  for (let i = 0; i < boardSlots.length; i++) {\r\n    boardSlots[i].parentNode.removeChild(boardSlots[i]);\r\n  }\r\n\r\n  // this part checks for the last board status\r\n  switch (status) {\r\n    case 'draw':\r\n      gameStatus.innerText = 'It is a draw!';\r\n      break;\r\n    case 'x':\r\n      gameStatus.innerText = playerXName + ' wins!';\r\n      break;\r\n    case 'o':\r\n      gameStatus.innerText = playerOName + ' wins!';\r\n      break;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\nlet startButton = document.getElementById('start');\r\n\r\nstartButton.addEventListener('click', () => {\r\n  let playerXName = document.getElementById('x-name').value;\r\n  let playerOName = document.getElementById('o-name').value;\r\n  // Check the names\r\n  Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerXName, playerOName);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction playerFactory(name, symbol) {\r\n  let winner = false;\r\n  return { name, symbol, winner };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerFactory);\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });