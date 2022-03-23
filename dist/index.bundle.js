"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _practiceFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practiceFunctions.js */ "./src/practiceFunctions.js");
/* harmony import */ var _practiceFunctions_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./practiceFunctions.test.js */ "./src/practiceFunctions.test.js");
 //for watching the html file 

__webpack_require__(/*! ./home.html */ "./src/home.html"); //import { sum } from './sum.js';
//import './sum.test.js';





/***/ }),

/***/ "./src/practiceFunctions.js":
/*!**********************************!*\
  !*** ./src/practiceFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "reverseString": () => (/* binding */ reverseString),
/* harmony export */   "calculator": () => (/* binding */ calculator),
/* harmony export */   "caesarCipher": () => (/* binding */ caesarCipher),
/* harmony export */   "analyzeArray": () => (/* binding */ analyzeArray)
/* harmony export */ });
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var capitalize = function capitalize(word) {
  var capitalized = word;

  if (capitalized.length !== 0) {
    return capitalized[0].toUpperCase() + capitalized.slice(1);
  }
};
var reverseString = function reverseString(word) {
  var reversed = '';

  if (word.length !== 0) {
    for (var i = reversed.length; i >= 0; i--) {
      reversed + word[i], _readOnlyError("reversed");
    }
  }

  return reversed;
};
var calculator = {
  a: 0,
  b: 0,
  add: function add() {
    return a + b;
  },
  substract: function substract() {
    return a - b;
  },
  divide: function divide() {
    return a / b;
  },
  multiply: function multiply() {
    return a * b;
  }
};
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var caesarCipher = function caesarCipher(val, shift) {
  if (val.length !== 0) {
    for (var i = 0; i < val.length; i++) {
      if (/[a-zA-Z]/.test(val[i])) {
        var ind = alpha.indexOf(val[i]); //if the letter is 'z', make it 'a'

        if (ind + shift === 26) {
          val[i] = alpha[0];
        } else if (ind + shift >= 52) {
          val[i] = alpha[26];
        } else {
          val[i] = alpha[ind + shift];
        }
      }
    }
  }

  return val;
};
var analyzeArray = function analyzeArray(arr) {
  var avg = 0;
  var minimum = 0;
  var maximum = 0;

  if (arr.length === 0) {
    return;
  }

  minimum = arr[0];
  maximum = arr[0];

  for (var i = 0; i < arr.length; i++) {
    //average; 
    avg += arr[i]; //minimum; 

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        minimum = arr[j];
        maximum = arr[i];
      }
    }
  }

  avg /= arr.length;
  var object = {
    average: avg,
    min: minimum,
    max: maximum,
    length: arr.length
  };
  return object;
};

/***/ }),

/***/ "./src/practiceFunctions.test.js":
/*!***************************************!*\
  !*** ./src/practiceFunctions.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practiceFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practiceFunctions.js */ "./src/practiceFunctions.js");

test('capitalize the first letter of the string value', function () {
  expect((0,_practiceFunctions_js__WEBPACK_IMPORTED_MODULE_0__.capitalize)('johnny')).toBe('Johnny');
});
test('reverse string of characters', function () {
  expect(reverse('terry')).toBe('yrret');
});

/***/ }),

/***/ "./src/home.html":
/*!***********************!*\
  !*** ./src/home.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Jest Tutorial</title>\r\n</head>\r\n<body>\r\n    <p>This is a test.</p>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3ByYWN0aWNlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvcHJhY3RpY2VGdW5jdGlvbnMudGVzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2hvbWUuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLy9mb3Igd2F0Y2hpbmcgdGhlIGh0bWwgZmlsZSBcclxucmVxdWlyZSgnLi9ob21lLmh0bWwnKVxyXG5cclxuLy9pbXBvcnQgeyBzdW0gfSBmcm9tICcuL3N1bS5qcyc7XHJcbi8vaW1wb3J0ICcuL3N1bS50ZXN0LmpzJztcclxuXHJcbmltcG9ydCAnLi9wcmFjdGljZUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCAnLi9wcmFjdGljZUZ1bmN0aW9ucy50ZXN0LmpzJztcclxuXHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gd29yZCA9PiB7XHJcbiAgICB2YXIgY2FwaXRhbGl6ZWQgPSB3b3JkOyBcclxuICAgIGlmIChjYXBpdGFsaXplZC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZWRbMF0udG9VcHBlckNhc2UoKSArIGNhcGl0YWxpemVkLnNsaWNlKDEpOyBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJldmVyc2VTdHJpbmcgPSB3b3JkID0+IHtcclxuICAgIGNvbnN0IHJldmVyc2VkID0gJyc7ICBcclxuICAgIGlmICh3b3JkLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXZlcnNlZC5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHJldmVyc2VkICs9IHdvcmRbaV07IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXZlcnNlZDsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhdG9yID0ge1xyXG4gICAgYTogMCxcclxuICAgIGI6IDAsXHJcbiAgICBhZGQoKSB7IHJldHVybiBhICsgYn0sIFxyXG4gICAgc3Vic3RyYWN0KCkgeyByZXR1cm4gYSAtIGIgfSxcclxuICAgIGRpdmlkZSgpIHsgcmV0dXJuIGEgLyBiIH0sXHJcbiAgICBtdWx0aXBseSgpIHsgcmV0dXJuIGEgKiBiOyB9LFxyXG59XHJcblxyXG5jb25zdCBhbHBoYSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwib1wiLCBcInBcIiwgXCJxXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidVwiLCBcInZcIiwgXCJ3XCIsIFwieFwiLCBcInlcIiwgXCJ6XCIsIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiLCBcIktcIiwgXCJMXCIsIFwiTVwiLCBcIk5cIiwgXCJPXCIsIFwiUFwiLCBcIlFcIiwgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIl07IFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhZXNhckNpcGhlciA9ICh2YWwsIHNoaWZ0KSA9PiB7XHJcbiAgICBpZiAodmFsLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgoL1thLXpBLVpdLykudGVzdCh2YWxbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kID0gYWxwaGEuaW5kZXhPZih2YWxbaV0pXHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBsZXR0ZXIgaXMgJ3onLCBtYWtlIGl0ICdhJ1xyXG4gICAgICAgICAgICAgICAgaWYgKChpbmQgKyBzaGlmdCkgPT09IDI2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsW2ldID0gYWxwaGFbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoaW5kICsgc2hpZnQpID49IDUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsW2ldID0gYWxwaGFbMjZdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsW2ldID0gYWxwaGFbaW5kICsgc2hpZnRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYW5hbHl6ZUFycmF5ID0gYXJyID0+IHtcclxuICAgIHZhciBhdmcgPSAwOyBcclxuICAgIHZhciBtaW5pbXVtID0gMDsgXHJcbiAgICB2YXIgbWF4aW11bSA9IDA7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBtaW5pbXVtID0gYXJyWzBdOyBcclxuICAgIG1heGltdW0gPSBhcnJbMF07IFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvL2F2ZXJhZ2U7IFxyXG4gICAgICAgIGF2ZyArPSBhcnJbaV07IFxyXG4gICAgICAgIC8vbWluaW11bTsgXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbaV0gPiBhcnJbal0pIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW0gPSBhcnJbal07IFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bSA9IGFycltpXTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdmcgLz0gYXJyLmxlbmd0aDsgXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgICAgYXZlcmFnZTogYXZnLFxyXG4gICAgICAgIG1pbjogbWluaW11bSwgXHJcbiAgICAgICAgbWF4OiBtYXhpbXVtLCBcclxuICAgICAgICBsZW5ndGg6IGFyci5sZW5ndGgsIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDsgXHJcbn0iLCJpbXBvcnQgeyBjYXBpdGFsaXplLCByZXZlcnNlU3RyaW5nLCBjYWxjdWxhdG9yLCBjYWVzYXJDaXBoZXIsIGFuYWx5emVBcnJheSB9IGZyb20gJy4vcHJhY3RpY2VGdW5jdGlvbnMuanMnOyBcclxuXHJcbnRlc3QoJ2NhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgc3RyaW5nIHZhbHVlJywgKCkgPT4ge1xyXG4gICAgZXhwZWN0KGNhcGl0YWxpemUoJ2pvaG5ueScpKS50b0JlKCdKb2hubnknKTtcclxufSlcclxuXHJcbnRlc3QoJ3JldmVyc2Ugc3RyaW5nIG9mIGNoYXJhY3RlcnMnLCAoKSA9PiB7XHJcbiAgICBleHBlY3QocmV2ZXJzZSgndGVycnknKSkudG9CZSgneXJyZXQnKTsgXHJcbn0pIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWw+XFxyXFxuPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcclxcbiAgICA8dGl0bGU+SmVzdCBUdXRvcmlhbDwvdGl0bGU+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgICA8cD5UaGlzIGlzIGEgdGVzdC48L3A+XFxyXFxuPC9ib2R5PlxcclxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7Il0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJjYXBpdGFsaXplZCIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXZlcnNlU3RyaW5nIiwicmV2ZXJzZWQiLCJpIiwiY2FsY3VsYXRvciIsImEiLCJiIiwiYWRkIiwic3Vic3RyYWN0IiwiZGl2aWRlIiwibXVsdGlwbHkiLCJhbHBoYSIsImNhZXNhckNpcGhlciIsInZhbCIsInNoaWZ0IiwidGVzdCIsImluZCIsImluZGV4T2YiLCJhbmFseXplQXJyYXkiLCJhcnIiLCJhdmciLCJtaW5pbXVtIiwibWF4aW11bSIsImoiLCJvYmplY3QiLCJhdmVyYWdlIiwibWluIiwibWF4IiwiZXhwZWN0IiwidG9CZSIsInJldmVyc2UiXSwic291cmNlUm9vdCI6IiJ9