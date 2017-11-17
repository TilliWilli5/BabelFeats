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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OperClass = __webpack_require__(1);

var op = new OperClass(12);

op.Add("a");

op.Minus(10);

var externalDoop = op.Doop.bind(op);

externalDoop(function (acc, val) {
  return acc * val;
}, 100);

console.log("" + op);
console.log("[HasLogger]: " + op.hasLogger);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function decoratorValidateArg() {
    return function ValidateArgument(target, key, description) {
        console.log("Decorator done here");
    };
}

function AttachLogger(target) {
    target.prototype.hasLogger = true;
}

function ValidateNumberArgument() {
    return function (target, funcName, description) {
        var oldTarget = description.value;
        description.value = function Wrapper(arg) {
            if (!arg || typeof arg !== "number") throw new Error("Invalid arg " + arg + " - must be number");
            oldTarget(arg);
        };
        return description;
    };
}

var OperClass = (_dec = ValidateNumberArgument(), AttachLogger(_class = (_class2 = function () {
    /**
     * @param {number} value любое число
     */
    function OperClass(value) {
        _classCallCheck(this, OperClass);

        this.acc = value || 0;

        // this.Doop = this.Doop.bind(this);
    }

    _createClass(OperClass, [{
        key: "Add",
        value: function Add(value) {
            // if(!value || typeof(value) !== "number")
            //     throw new Error(`Invalid input arg ${value}`);
            this.acc += value;
        }
    }, {
        key: "Minus",
        value: function Minus(value) {
            if (!value || typeof value !== "number") throw new Error("Invalid input arg " + value);
            this.acc -= value;
        }

        /**
         * производит произвольную операцию над объектом
         * @param {function} operation 
         * @param {number} value 
         */

    }, {
        key: "Doop",
        value: function Doop(operation, value) {
            if (!value || typeof value !== "number") throw new Error("Invalid input arg " + value);
            if (!operation || typeof operation !== "function") throw new Error("Invalid input operation " + operation);

            this.acc = operation(this.acc, value);
        }
    }, {
        key: "toString",
        value: function toString() {
            return "" + this.acc;
        }
    }]);

    return OperClass;
}(), (_applyDecoratedDescriptor(_class2.prototype, "Add", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "Add"), _class2.prototype)), _class2)) || _class);


module.exports = OperClass;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzViMTU0ODg0YWVmMWNhMzUxOWUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vb3AuanMiXSwibmFtZXMiOlsiT3BlckNsYXNzIiwicmVxdWlyZSIsIm9wIiwiQWRkIiwiTWludXMiLCJleHRlcm5hbERvb3AiLCJEb29wIiwiYWNjIiwidmFsIiwiY29uc29sZSIsImxvZyIsImhhc0xvZ2dlciIsImRlY29yYXRvclZhbGlkYXRlQXJnIiwiVmFsaWRhdGVBcmd1bWVudCIsInRhcmdldCIsImtleSIsImRlc2NyaXB0aW9uIiwiQXR0YWNoTG9nZ2VyIiwicHJvdG90eXBlIiwiVmFsaWRhdGVOdW1iZXJBcmd1bWVudCIsImZ1bmNOYW1lIiwib2xkVGFyZ2V0IiwidmFsdWUiLCJXcmFwcGVyIiwiYXJnIiwiRXJyb3IiLCJvcGVyYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSxDQUFSLENBQWxCOztBQUVBLElBQUlDLEtBQUssSUFBSUYsU0FBSixDQUFjLEVBQWQsQ0FBVDs7QUFFQUUsR0FBR0MsR0FBSCxDQUFPLEdBQVA7O0FBRUFELEdBQUdFLEtBQUgsQ0FBUyxFQUFUOztBQUVBLElBQUlDLGVBQWlCSCxHQUFHSSxJQUFwQixNQUFpQkosRUFBakIsQ0FBSjs7QUFFQUcsYUFBYSxVQUFDRSxHQUFELEVBQUtDLEdBQUw7QUFBQSxTQUFXRCxNQUFJQyxHQUFmO0FBQUEsQ0FBYixFQUFpQyxHQUFqQzs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLEtBQUdSLEVBQWY7QUFDQU8sUUFBUUMsR0FBUixtQkFBNEJSLEdBQUdTLFNBQS9CLEU7Ozs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNDLG9CQUFULEdBQStCO0FBQzNCLFdBQU8sU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxHQUFsQyxFQUF1Q0MsV0FBdkMsRUFBbUQ7QUFDdERQLGdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDSCxLQUZEO0FBR0g7O0FBRUQsU0FBU08sWUFBVCxDQUFzQkgsTUFBdEIsRUFBNkI7QUFDekJBLFdBQU9JLFNBQVAsQ0FBaUJQLFNBQWpCLEdBQTZCLElBQTdCO0FBQ0g7O0FBRUQsU0FBU1Esc0JBQVQsR0FBaUM7QUFDN0IsV0FBTyxVQUFTTCxNQUFULEVBQWlCTSxRQUFqQixFQUEyQkosV0FBM0IsRUFBdUM7QUFDMUMsWUFBSUssWUFBWUwsWUFBWU0sS0FBNUI7QUFDQU4sb0JBQVlNLEtBQVosR0FBb0IsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBcUI7QUFDckMsZ0JBQUcsQ0FBQ0EsR0FBRCxJQUFRLE9BQU9BLEdBQVAsS0FBZ0IsUUFBM0IsRUFDSSxNQUFNLElBQUlDLEtBQUosa0JBQXlCRCxHQUF6Qix1QkFBTjtBQUNKSCxzQkFBVUcsR0FBVjtBQUNILFNBSkQ7QUFLQSxlQUFPUixXQUFQO0FBQ0gsS0FSRDtBQVNIOztJQUdLaEIsUyxXQVdEbUIsd0IsRUFaSkYsWTtBQUdHOzs7QUFHQSx1QkFBWUssS0FBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtmLEdBQUwsR0FBV2UsU0FBUyxDQUFwQjs7QUFFQTtBQUNIOzs7OzRCQUdHQSxLLEVBQU07QUFDTjtBQUNBO0FBQ0EsaUJBQUtmLEdBQUwsSUFBWWUsS0FBWjtBQUNIOzs7OEJBRUtBLEssRUFBTTtBQUNSLGdCQUFHLENBQUNBLEtBQUQsSUFBVSxPQUFPQSxLQUFQLEtBQWtCLFFBQS9CLEVBQ0ksTUFBTSxJQUFJRyxLQUFKLHdCQUErQkgsS0FBL0IsQ0FBTjtBQUNKLGlCQUFLZixHQUFMLElBQVllLEtBQVo7QUFDSDs7QUFFRDs7Ozs7Ozs7NkJBS0tJLFMsRUFBV0osSyxFQUFNO0FBQ2xCLGdCQUFHLENBQUNBLEtBQUQsSUFBVSxPQUFPQSxLQUFQLEtBQWtCLFFBQS9CLEVBQ0ksTUFBTSxJQUFJRyxLQUFKLHdCQUErQkgsS0FBL0IsQ0FBTjtBQUNKLGdCQUFHLENBQUNJLFNBQUQsSUFBYyxPQUFPQSxTQUFQLEtBQXNCLFVBQXZDLEVBQ0ksTUFBTSxJQUFJRCxLQUFKLDhCQUFxQ0MsU0FBckMsQ0FBTjs7QUFFSixpQkFBS25CLEdBQUwsR0FBV21CLFVBQVUsS0FBS25CLEdBQWYsRUFBb0JlLEtBQXBCLENBQVg7QUFDSDs7O21DQUVTO0FBQ04sbUJBQU8sS0FBRyxLQUFLZixHQUFmO0FBQ0g7Ozs7Ozs7QUFHTG9CLE9BQU9DLE9BQVAsR0FBaUI1QixTQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM1YjE1NDg4NGFlZjFjYTM1MTllIiwiY29uc3QgT3BlckNsYXNzID0gcmVxdWlyZShcIi4vb3AuanNcIik7XHJcblxyXG52YXIgb3AgPSBuZXcgT3BlckNsYXNzKDEyKTtcclxuXHJcbm9wLkFkZChcImFcIik7XHJcblxyXG5vcC5NaW51cygxMCk7XHJcblxyXG52YXIgZXh0ZXJuYWxEb29wID0gOjpvcC5Eb29wO1xyXG5cclxuZXh0ZXJuYWxEb29wKChhY2MsdmFsKT0+YWNjKnZhbCwgMTAwKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiXCIrb3ApO1xyXG5jb25zb2xlLmxvZyhgW0hhc0xvZ2dlcl06ICR7b3AuaGFzTG9nZ2VyfWApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0b3JWYWxpZGF0ZUFyZygpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFZhbGlkYXRlQXJndW1lbnQodGFyZ2V0LCBrZXksIGRlc2NyaXB0aW9uKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlY29yYXRvciBkb25lIGhlcmVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF0dGFjaExvZ2dlcih0YXJnZXQpe1xyXG4gICAgdGFyZ2V0LnByb3RvdHlwZS5oYXNMb2dnZXIgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0ZU51bWJlckFyZ3VtZW50KCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBmdW5jTmFtZSwgZGVzY3JpcHRpb24pe1xyXG4gICAgICAgIGxldCBvbGRUYXJnZXQgPSBkZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGZ1bmN0aW9uIFdyYXBwZXIoYXJnKXtcclxuICAgICAgICAgICAgaWYoIWFyZyB8fCB0eXBlb2YoYXJnKSAhPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhcmcgJHthcmd9IC0gbXVzdCBiZSBudW1iZXJgKTtcclxuICAgICAgICAgICAgb2xkVGFyZ2V0KGFyZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbkBBdHRhY2hMb2dnZXJcclxuY2xhc3MgT3BlckNsYXNzXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlINC70Y7QsdC+0LUg0YfQuNGB0LvQvlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5hY2MgPSB2YWx1ZSB8fCAwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkRvb3AgPSB0aGlzLkRvb3AuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBAVmFsaWRhdGVOdW1iZXJBcmd1bWVudCgpXHJcbiAgICBBZGQodmFsdWUpe1xyXG4gICAgICAgIC8vIGlmKCF2YWx1ZSB8fCB0eXBlb2YodmFsdWUpICE9PSBcIm51bWJlclwiKVxyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaW5wdXQgYXJnICR7dmFsdWV9YCk7XHJcbiAgICAgICAgdGhpcy5hY2MgKz0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgTWludXModmFsdWUpe1xyXG4gICAgICAgIGlmKCF2YWx1ZSB8fCB0eXBlb2YodmFsdWUpICE9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaW5wdXQgYXJnICR7dmFsdWV9YCk7XHJcbiAgICAgICAgdGhpcy5hY2MgLT0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQv9GA0L7QuNC30LLQvtC00LjRgiDQv9GA0L7QuNC30LLQvtC70YzQvdGD0Y4g0L7Qv9C10YDQsNGG0LjRjiDQvdCw0LQg0L7QsdGK0LXQutGC0L7QvFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3BlcmF0aW9uIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFxyXG4gICAgICovXHJcbiAgICBEb29wKG9wZXJhdGlvbiwgdmFsdWUpe1xyXG4gICAgICAgIGlmKCF2YWx1ZSB8fCB0eXBlb2YodmFsdWUpICE9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaW5wdXQgYXJnICR7dmFsdWV9YCk7XHJcbiAgICAgICAgaWYoIW9wZXJhdGlvbiB8fCB0eXBlb2Yob3BlcmF0aW9uKSAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaW5wdXQgb3BlcmF0aW9uICR7b3BlcmF0aW9ufWApO1xyXG5cclxuICAgICAgICB0aGlzLmFjYyA9IG9wZXJhdGlvbih0aGlzLmFjYywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIrdGhpcy5hY2M7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT3BlckNsYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL29wLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==