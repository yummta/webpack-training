/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__suma_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__suma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__suma_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resta_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resta_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__resta_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__show_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumando", function() { return sumando; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restando", function() { return restando; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showing", function() { return showing; });




console.log('[] -> calculadora ', __WEBPACK_IMPORTED_MODULE_0__suma_js__);

let sumando = __WEBPACK_IMPORTED_MODULE_0__suma_js__["operacionSuma"];
let restando = __WEBPACK_IMPORTED_MODULE_1__resta_js__["operacionResta"];
let showing = __WEBPACK_IMPORTED_MODULE_2__show_js__["operationShow"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function resta(a, b) {
	return a - b;
}

console.log('[] -> function resta ');

exports.operacionResta = resta;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var show = valueShow => {
	console.log('operaciones con:', valueShow);
};

console.log('[] -> function show ');

exports.operationShow = show;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected { (9:7)\n\n\u001b[0m \u001b[90m  7 | \u001b[39mconsole\u001b[33m.\u001b[39mlog(\u001b[32m'[] -> function suma '\u001b[39m)\n \u001b[90m  8 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m\u001b[36mexport\u001b[39m operationSuma\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 10 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_modules_calculadora_js__ = __webpack_require__(0);


var a = 54;
var b = 12;

console.log('OPOPOP', __WEBPACK_IMPORTED_MODULE_0__js_modules_calculadora_js__);

console.log('[ run module ] -> main');
// operaciones.showing([a, b].toString());
console.log('sumando: ', __WEBPACK_IMPORTED_MODULE_0__js_modules_calculadora_js__["sumando"](a, b));
// console.log( 'restando: ', operaciones.restando(a, b) );

/***/ })
/******/ ]);