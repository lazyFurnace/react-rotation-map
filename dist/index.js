(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/choiceNav/choiceNav.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/component/choiceNav/choiceNav.less ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choice-nav {\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.choice-nav > button {\n  width: 20px;\n  height: 5px;\n  margin: 10px 3px;\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #333;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.choice-nav .sel-nav {\n  width: 25px;\n  background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/movementArrows/movementArrows.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/component/movementArrows/movementArrows.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movement-arrows button {\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  width: 10%;\n  height: 100%;\n  background: rgba(200, 200, 200, 0);\n  color: rgba(33, 33, 33, 0);\n  font-size: 32px;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.movement-arrows button:hover,\n.movement-arrows button:focus {\n  background: rgba(200, 200, 200, .1);\n  color: rgba(66, 66, 66, .8);\n}\n.movement-arrows button:active {\n  background: rgba(200, 200, 200, .2);\n  color: #424242;\n}\n.movement-arrows button .active {\n  background: rgba(200, 200, 200, .2);\n  color: #424242;\n}\n.movement-arrows button:first-child {\n  left: 0;\n}\n.movement-arrows button:last-child {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/pictureRotation/pictureRotation.less":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/component/pictureRotation/pictureRotation.less ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picture-rotation {\n  position: relative;\n  height: 100%;\n}\n.rotation-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-transition: all .3s linear;\n  transition: all .3s linear;\n}\n.rotation-center {\n  left: 0;\n}\n.rotation-exit {\n  display: none;\n}\n.rotation-center-to-left {\n  -webkit-animation: 0.3s animation-center-to-left;\n          animation: 0.3s animation-center-to-left;\n}\n.rotation-right-to-center {\n  -webkit-animation: 0.3s animation-right-to-center;\n          animation: 0.3s animation-right-to-center;\n}\n.rotation-center-to-right {\n  -webkit-animation: 0.3s animation-center-to-right;\n          animation: 0.3s animation-center-to-right;\n}\n.rotation-left-to-center {\n  -webkit-animation: 0.3s animation-left-to-center;\n          animation: 0.3s animation-left-to-center;\n}\n@-webkit-keyframes animation-center-to-left {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes animation-center-to-left {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-webkit-keyframes animation-right-to-center {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes animation-right-to-center {\n  0% {\n    left: 100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes animation-center-to-right {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@keyframes animation-center-to-right {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@-webkit-keyframes animation-left-to-center {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes animation-left-to-center {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/rotationMap.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/component/rotationMap.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-rotation-map {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/index.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/index.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".root {\n  width: 500px;\n  height: 500px;\n}\nh1 {\n  margin: 0;\n  color: #fff;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.Rmap {\n  width: 100%;\n  height: 100%;\n}\n.React {\n  background-color: #e21bc8;\n}\n.Vue {\n  background-color: #ce2c2c;\n}\n.Ng {\n  background-color: #a7e418;\n}\n.Component {\n  background-color: #182ace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/iconfont/iconfont.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/iconfont/iconfont.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: \"iconfont\";\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1537104730371 */ "./src/iconfont/iconfont.eot?t=1537104730371")) + "); /* IE9*/\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1537104730371 */ "./src/iconfont/iconfont.eot?t=1537104730371")) + "#iefix) format('embedded-opentype'), \n  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAQQAAsAAAAABnAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFaK2ZZXY21hcAAAAYAAAABTAAABfgY3OQ1nbHlmAAAB1AAAAEcAAABQLGBTvGhlYWQAAAIcAAAALwAAADYSqDzFaGhlYQAAAkwAAAAcAAAAJAfeA4RobXR4AAACaAAAAAwAAAAMDAAAAGxvY2EAAAJ0AAAACAAAAAgAFAAobWF4cAAAAnwAAAAfAAAAIAEOABJuYW1lAAACnAAAAUUAAAJtPlT+fXBvc3QAAAPkAAAALAAAAEWJtqeYeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBxMUkxSmRv+NzDEMDcwNACFGUFyAM+kC0gAeJxjYGBgZWBgYAZiHSBmYWBgDGNgZACBAKAoI1icmYELLM7CoAJWwwISN0n9/x9IpoBIIJ8FTDIBCTaGUcADJjWgPCZQOEEwJOQgmIEJAPAxCX0AeJxjYGRg+D+FuYi5gYGVgYGTUZmT0Zi58J/sfcbHIKKCiePvj38yDAwMKOpYjYEqGZkm3f8ny/gYSOQwPgEpBCoDAGXYF40AeJxjYGRgYADihX+2voznt/nKwM3CAALXj9REIej/U1gYmBuAXA4GJpAoAGsVC/IAeJxjYGRgYG7438AQw8IAAkCSkQEVMAMARwkCbAQAAAAEAAAABAAAAAAAAAAAFAAoeJxjYGRgYGBmYGMA0QwMTEDMBYQMDP/BfAYACUgBIQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgacwMzWjNDGvMLMyvxTBqSrNZ2AAAKAnCnk=') format('woff'),\n  url(" + escape(__webpack_require__(/*! ./iconfont.ttf?t=1537104730371 */ "./src/iconfont/iconfont.ttf?t=1537104730371")) + ") format('truetype'), \n  url(" + escape(__webpack_require__(/*! ./iconfont.svg?t=1537104730371 */ "./src/iconfont/iconfont.svg?t=1537104730371")) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-arrow-right:before { content: \"\\3464\"; }\n\n.icon-arrow-left:before { content: \"\\3465\"; }\n", ""]);

// exports


/***/ }),

/***/ "./src/component/choiceNav/choiceNav.jsx":
/*!***********************************************!*\
  !*** ./src/component/choiceNav/choiceNav.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./choiceNav.less */ "./src/component/choiceNav/choiceNav.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceNav = function (_React$Component) {
    (0, _inherits3.default)(ChoiceNav, _React$Component);

    function ChoiceNav() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ChoiceNav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ChoiceNav.__proto__ || (0, _getPrototypeOf2.default)(ChoiceNav)).call.apply(_ref, [this].concat(args))), _this), _this.getLength = function (num) {
            var navArr = new Array(num);
            return navArr.fill('').map(function (item, index) {
                return index;
            });
        }, _this.navClick = function (e) {
            _this.props.choiceChangeState(window.parseInt(e.target.dataset.key));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ChoiceNav, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                num = _props.num,
                index = _props.index;

            return _react2.default.createElement(
                'div',
                { className: 'choice-nav' },
                this.getLength(num).map(function (item, key) {
                    return _react2.default.createElement('button', {
                        onClick: _this2.navClick,
                        'data-key': key,
                        className: '' + (key === index ? 'sel-nav' : ''),
                        key: '' + item
                    });
                })
            );
        }
    }]);
    return ChoiceNav;
}(_react2.default.Component); /**
                               * 轮播图下侧的指示按钮
                               * @param {Function} choiceChangeState 回调函数处理点击事件
                               * @param {Number} num 一共多少个
                               * @param {Number} index 当前是哪个
                               */


ChoiceNav.propTypes = {
    choiceChangeState: _propTypes2.default.func.isRequired,
    num: _propTypes2.default.number.isRequired,
    index: _propTypes2.default.number.isRequired
};

exports.default = ChoiceNav;

/***/ }),

/***/ "./src/component/choiceNav/choiceNav.less":
/*!************************************************!*\
  !*** ./src/component/choiceNav/choiceNav.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./choiceNav.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/choiceNav/choiceNav.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/component/choiceNav/index.jsx":
/*!*******************************************!*\
  !*** ./src/component/choiceNav/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _choiceNav = __webpack_require__(/*! ./choiceNav */ "./src/component/choiceNav/choiceNav.jsx");

var _choiceNav2 = _interopRequireDefault(_choiceNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _choiceNav2.default;

/***/ }),

/***/ "./src/component/movementArrows/index.jsx":
/*!************************************************!*\
  !*** ./src/component/movementArrows/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementArrows = __webpack_require__(/*! ./movementArrows */ "./src/component/movementArrows/movementArrows.jsx");

var _movementArrows2 = _interopRequireDefault(_movementArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _movementArrows2.default;

/***/ }),

/***/ "./src/component/movementArrows/movementArrows.jsx":
/*!*********************************************************!*\
  !*** ./src/component/movementArrows/movementArrows.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ../../iconfont/iconfont.css */ "./src/iconfont/iconfont.css");

__webpack_require__(/*! ./movementArrows.less */ "./src/component/movementArrows/movementArrows.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 左右翻页键
 * @param {Function} arrowChangeState 左右切换的回调函数
 * @param {Boolean} iconLeft 控制左翻页显示
 * @param {Boolean} iconRight 控制右翻页显示
 */
var MovementArrows = function (_React$Component) {
    (0, _inherits3.default)(MovementArrows, _React$Component);

    function MovementArrows(props) {
        (0, _classCallCheck3.default)(this, MovementArrows);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MovementArrows.__proto__ || (0, _getPrototypeOf2.default)(MovementArrows)).call(this, props));

        _this.state = {
            iconLeft: props.iconLeft,
            iconRight: props.iconRight
        };
        return _this;
    }

    (0, _createClass3.default)(MovementArrows, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                iconLeft = _state.iconLeft,
                iconRight = _state.iconRight;

            return _react2.default.createElement(
                'div',
                { className: 'movement-arrows' },
                _react2.default.createElement('button', {
                    className: 'iconfont icon-arrow-left ' + (iconLeft ? 'active' : ''),
                    onClick: function onClick() {
                        return _this2.props.arrowChangeState('down');
                    }
                }),
                _react2.default.createElement('button', {
                    className: 'iconfont icon-arrow-right ' + (iconRight ? 'active' : ''),
                    onClick: function onClick() {
                        return _this2.props.arrowChangeState('up');
                    }
                })
            );
        }
    }]);
    return MovementArrows;
}(_react2.default.Component);

MovementArrows.propTypes = {
    arrowChangeState: _propTypes2.default.func.isRequired,
    iconLeft: _propTypes2.default.bool,
    iconRight: _propTypes2.default.bool
};

MovementArrows.defaultProps = {
    iconLeft: false,
    iconRight: true
};

exports.default = MovementArrows;

/***/ }),

/***/ "./src/component/movementArrows/movementArrows.less":
/*!**********************************************************!*\
  !*** ./src/component/movementArrows/movementArrows.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./movementArrows.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/movementArrows/movementArrows.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/component/pictureRotation/index.jsx":
/*!*************************************************!*\
  !*** ./src/component/pictureRotation/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pictureRotation = __webpack_require__(/*! ./pictureRotation */ "./src/component/pictureRotation/pictureRotation.jsx");

var _pictureRotation2 = _interopRequireDefault(_pictureRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pictureRotation2.default;

/***/ }),

/***/ "./src/component/pictureRotation/pictureRotation.jsx":
/*!***********************************************************!*\
  !*** ./src/component/pictureRotation/pictureRotation.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js");

var _Transition2 = _interopRequireDefault(_Transition);

__webpack_require__(/*! ./pictureRotation.less */ "./src/component/pictureRotation/pictureRotation.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 轮播内容区域
 * @param {Node} children 需要轮播的内容
 * @param {Number} index 当前选中的页码
 * @param {String} direction 需要切换轮播的方向
 */
function PictureRotation(props) {
    var children = props.children,
        index = props.index,
        direction = props.direction;

    return _react2.default.createElement(
        'div',
        { className: 'picture-rotation' },
        _react2.default.Children.map(children, function (item, key) {
            return _react2.default.createElement(
                _Transition2.default,
                { 'in': index === key, timeout: 300 },
                function (state) {
                    var className = void 0;
                    if (state === 'entered') {
                        className = 'rotation-center';
                    } else if (state === 'exited') {
                        className = 'rotation-exit';
                    } else if (state === 'exiting') {
                        className = direction === 'left' ? 'rotation-center-to-left' : 'rotation-center-to-right';
                    } else if (state === 'entering') {
                        className = direction === 'left' ? 'rotation-right-to-center' : 'rotation-left-to-center';
                    }
                    return _react2.default.createElement(
                        'div',
                        { className: 'rotation-item ' + className },
                        item
                    );
                }
            );
        })
    );
}

PictureRotation.defaultProps = {
    children: '',
    direction: 'left'
};

PictureRotation.propTypes = {
    children: _propTypes2.default.node,
    index: _propTypes2.default.number.isRequired,
    direction: _propTypes2.default.string
};

exports.default = PictureRotation;

/***/ }),

/***/ "./src/component/pictureRotation/pictureRotation.less":
/*!************************************************************!*\
  !*** ./src/component/pictureRotation/pictureRotation.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./pictureRotation.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/pictureRotation/pictureRotation.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/component/rotationMap.jsx":
/*!***************************************!*\
  !*** ./src/component/rotationMap.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _choiceNav = __webpack_require__(/*! ./choiceNav */ "./src/component/choiceNav/index.jsx");

var _choiceNav2 = _interopRequireDefault(_choiceNav);

var _movementArrows = __webpack_require__(/*! ./movementArrows */ "./src/component/movementArrows/index.jsx");

var _movementArrows2 = _interopRequireDefault(_movementArrows);

var _pictureRotation = __webpack_require__(/*! ./pictureRotation */ "./src/component/pictureRotation/index.jsx");

var _pictureRotation2 = _interopRequireDefault(_pictureRotation);

__webpack_require__(/*! ./rotationMap.less */ "./src/component/rotationMap.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 轮播插件父组件
 * @param {Node} children 需要轮播的内容
 */
var RotationMap = function (_React$Component) {
    (0, _inherits3.default)(RotationMap, _React$Component);

    function RotationMap(props) {
        (0, _classCallCheck3.default)(this, RotationMap);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RotationMap.__proto__ || (0, _getPrototypeOf2.default)(RotationMap)).call(this, props));

        _this.arrowChangeState = function (type) {
            var children = _this.props.children;
            var index = _this.state.index;

            var direction = '';
            switch (type) {
                case 'up':
                    direction = 'left';
                    if (index < children.length - 1) {
                        _this.setState({
                            index: index + 1,
                            direction: direction
                        });
                    } else if (index === children.length - 1) {
                        _this.setState({
                            index: 0,
                            direction: direction
                        });
                    }
                    break;
                case 'down':
                    direction = 'right';
                    if (index > 0) {
                        _this.setState({
                            index: index - 1,
                            direction: direction
                        });
                    } else if (index === 0) {
                        _this.setState({
                            index: children.length - 1,
                            direction: direction
                        });
                    }
                    break;
                default:
                    throw Error('轮播出现错误！');
            }
        };

        _this.choiceChangeState = function (val) {
            var index = _this.state.index;

            if (index === val) return;
            if (Object.prototype.toString.call(val) === '[object Number]') {
                if (val >= 0 && val < _this.props.children.length) {
                    _this.setState({
                        index: val,
                        direction: index < val ? 'left' : 'right'
                    });
                }
            }
        };

        _this.state = {
            index: 0,
            direction: ''
        };
        return _this;
    }

    (0, _createClass3.default)(RotationMap, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                index = _state.index,
                direction = _state.direction;
            var children = this.props.children;

            var ChoiceNavProps = {
                choiceChangeState: this.choiceChangeState,
                num: children.length,
                index: index
            };
            return _react2.default.createElement(
                'div',
                { className: 'react-rotation-map' },
                _react2.default.createElement(_choiceNav2.default, ChoiceNavProps),
                _react2.default.createElement(
                    _pictureRotation2.default,
                    { direction: direction, index: index },
                    children
                ),
                _react2.default.createElement(_movementArrows2.default, { arrowChangeState: this.arrowChangeState })
            );
        }
    }]);
    return RotationMap;
}(_react2.default.Component);

exports.default = RotationMap;


RotationMap.defaultProps = {
    children: ''
};

RotationMap.propTypes = {
    children: _propTypes2.default.node
};

/***/ }),

/***/ "./src/component/rotationMap.less":
/*!****************************************!*\
  !*** ./src/component/rotationMap.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/less-loader/dist/cjs.js!./rotationMap.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/rotationMap.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/iconfont/iconfont.css":
/*!***********************************!*\
  !*** ./src/iconfont/iconfont.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./iconfont.css */ "./node_modules/css-loader/index.js!./src/iconfont/iconfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/iconfont/iconfont.eot?t=1537104730371":
/*!***************************************************!*\
  !*** ./src/iconfont/iconfont.eot?t=1537104730371 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2e042b5ca0ca2544e23b0fe4a8a866c.eot";

/***/ }),

/***/ "./src/iconfont/iconfont.svg?t=1537104730371":
/*!***************************************************!*\
  !*** ./src/iconfont/iconfont.svg?t=1537104730371 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICIzODU0MDljMmUzODU3ZWUwN2EyODdmM2FmZGQ2YjI5MS5zdmciOw=="

/***/ }),

/***/ "./src/iconfont/iconfont.ttf?t=1537104730371":
/*!***************************************************!*\
  !*** ./src/iconfont/iconfont.ttf?t=1537104730371 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b602f68ea46f4d832c62a8d92d07e1e.ttf";

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(/*! ./index.less */ "./src/index.less");

var _rotationMap = __webpack_require__(/*! ./component/rotationMap */ "./src/component/rotationMap.jsx");

var _rotationMap2 = _interopRequireDefault(_rotationMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {}

function App() {
    return _react2.default.createElement(
        'div',
        { className: 'root' },
        _react2.default.createElement(
            _rotationMap2.default,
            null,
            _react2.default.createElement(
                'div',
                { key: 'React', className: 'Rmap React' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4F60\u597D! React!'
                )
            ),
            _react2.default.createElement(
                'div',
                { key: 'Vue', className: 'Rmap Vue' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4F60\u597D! Vue!'
                )
            ),
            _react2.default.createElement(
                'div',
                { key: 'Ng', className: 'Rmap Ng' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4F60\u597D! NG!'
                )
            ),
            _react2.default.createElement(
                'div',
                { key: 'Component', className: 'Rmap Component' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4F60\u597D! \u7EC4\u4EF6!'
                )
            )
        )
    );
}

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\github\react-rotation-map\src\index.jsx */"./src/index.jsx");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2Nob2ljZU5hdi9jaG9pY2VOYXYubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21vdmVtZW50QXJyb3dzL21vdmVtZW50QXJyb3dzLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9waWN0dXJlUm90YXRpb24vcGljdHVyZVJvdGF0aW9uLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9yb3RhdGlvbk1hcC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9pY29uZm9udC9pY29uZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9jaG9pY2VOYXYvY2hvaWNlTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2Nob2ljZU5hdi9jaG9pY2VOYXYubGVzcz8zZjYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY2hvaWNlTmF2L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21vdmVtZW50QXJyb3dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21vdmVtZW50QXJyb3dzL21vdmVtZW50QXJyb3dzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L21vdmVtZW50QXJyb3dzL21vdmVtZW50QXJyb3dzLmxlc3M/OTc3YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3BpY3R1cmVSb3RhdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9waWN0dXJlUm90YXRpb24vcGljdHVyZVJvdGF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3BpY3R1cmVSb3RhdGlvbi9waWN0dXJlUm90YXRpb24ubGVzcz9hMDBmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcm90YXRpb25NYXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcm90YXRpb25NYXAubGVzcz9hNWVjIiwid2VicGFjazovLy8uL3NyYy9pY29uZm9udC9pY29uZm9udC5jc3M/NGUxZiIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbmZvbnQvaWNvbmZvbnQuZW90Iiwid2VicGFjazovLy8uL3NyYy9pY29uZm9udC9pY29uZm9udC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25mb250L2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5sZXNzPzY4ZDgiXSwibmFtZXMiOlsiQ2hvaWNlTmF2IiwiZ2V0TGVuZ3RoIiwibnVtIiwibmF2QXJyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmF2Q2xpY2siLCJlIiwicHJvcHMiLCJjaG9pY2VDaGFuZ2VTdGF0ZSIsIndpbmRvdyIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJNb3ZlbWVudEFycm93cyIsInN0YXRlIiwiaWNvbkxlZnQiLCJpY29uUmlnaHQiLCJhcnJvd0NoYW5nZVN0YXRlIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIlBpY3R1cmVSb3RhdGlvbiIsImNoaWxkcmVuIiwiZGlyZWN0aW9uIiwiQ2hpbGRyZW4iLCJjbGFzc05hbWUiLCJub2RlIiwic3RyaW5nIiwiUm90YXRpb25NYXAiLCJ0eXBlIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJFcnJvciIsInZhbCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIkNob2ljZU5hdlByb3BzIiwiQXBw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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBUEo7QUFVSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxXQUFULEVBQXFCLFdBQVUsZ0JBQS9CO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBVko7QUFESixLQURKO0FBa0JIOztBQUVEQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7OztBQy9CQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNob2ljZS1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNob2ljZS1uYXYgPiBidXR0b24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIG1hcmdpbjogMTBweCAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcbi5jaG9pY2UtbmF2IC5zZWwtbmF2IHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMCk7XFxuICBjb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwKTtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcbn1cXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbjpob3ZlcixcXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIC4xKTtcXG4gIGNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIC44KTtcXG59XFxuLm1vdmVtZW50LWFycm93cyBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgLjIpO1xcbiAgY29sb3I6ICM0MjQyNDI7XFxufVxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAuMik7XFxuICBjb2xvcjogIzQyNDI0MjtcXG59XFxuLm1vdmVtZW50LWFycm93cyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgbGVmdDogMDtcXG59XFxuLm1vdmVtZW50LWFycm93cyBidXR0b246bGFzdC1jaGlsZCB7XFxuICByaWdodDogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGljdHVyZS1yb3RhdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5yb3RhdGlvbi1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbn1cXG4ucm90YXRpb24tY2VudGVyIHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5yb3RhdGlvbi1leGl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yb3RhdGlvbi1jZW50ZXItdG8tbGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tY2VudGVyLXRvLWxlZnQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tY2VudGVyLXRvLWxlZnQ7XFxufVxcbi5yb3RhdGlvbi1yaWdodC10by1jZW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLXJpZ2h0LXRvLWNlbnRlcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1yaWdodC10by1jZW50ZXI7XFxufVxcbi5yb3RhdGlvbi1jZW50ZXItdG8tcmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWNlbnRlci10by1yaWdodDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1jZW50ZXItdG8tcmlnaHQ7XFxufVxcbi5yb3RhdGlvbi1sZWZ0LXRvLWNlbnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tbGVmdC10by1jZW50ZXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tbGVmdC10by1jZW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tY2VudGVyLXRvLWxlZnQge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tbGVmdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogLTEwMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tcmlnaHQtdG8tY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1yaWdodC10by1jZW50ZXIge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tY2VudGVyLXRvLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tcmlnaHQge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tbGVmdC10by1jZW50ZXIge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1sZWZ0LXRvLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXJvdGF0aW9uLW1hcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvb3Qge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uUm1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLlJlYWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjFiYzg7XFxufVxcbi5WdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMmMyYztcXG59XFxuLk5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2U0MTg7XFxufVxcbi5Db21wb25lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MmFjZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImljb25mb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ljb25mb250LmVvdD90PTE1MzcxMDQ3MzAzNzFcIikpICsgXCIpOyAvKiBJRTkqL1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbmZvbnQuZW90P3Q9MTUzNzEwNDczMDM3MVwiKSkgKyBcIiNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCBcXG4gIHVybCgnZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQVFRQUFzQUFBQUFCbkFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBRE1BQUFCQ3NQNno3VTlUTHpJQUFBRThBQUFBUXdBQUFGYUsyWlpYWTIxaGNBQUFBWUFBQUFCVEFBQUJmZ1kzT1ExbmJIbG1BQUFCMUFBQUFFY0FBQUJRTEdCVHZHaGxZV1FBQUFJY0FBQUFMd0FBQURZU3FEekZhR2hsWVFBQUFrd0FBQUFjQUFBQUpBZmVBNFJvYlhSNEFBQUNhQUFBQUF3QUFBQU1EQUFBQUd4dlkyRUFBQUowQUFBQUNBQUFBQWdBRkFBb2JXRjRjQUFBQW53QUFBQWZBQUFBSUFFT0FCSnVZVzFsQUFBQ25BQUFBVVVBQUFKdFBsVCtmWEJ2YzNRQUFBUGtBQUFBTEFBQUFFV0p0cWVZZUp4allHUmdZT0Jpa0dQUVlXQjBjZk1KWWVCZ1lHR0FBSkFNWTA1bWVpSlFETW9EeXJHQWFRNGdab09JQWdDS0l3TlBBSGljWTJCa1lXQ2N3TURLd01IVXlYU0dnWUdoSDBJenZtWXdZdVJnWUdCaVlHVm13QW9DMGx4VEdCeE1Va3hTbVJ2K056REVNRGN3TkFDRkdVRnlBTStrQzBnQWVKeGpZR0JnWldCZ1lBWmlIU0JtWVdCZ0RHTmdaQUNCQUtBb0kxaWNtWUVMTE03Q29BSld3d0lTTjBuOS94OUlwb0JJSUo4RlRESUJDVGFHVWNBREpqV2dQQ1pRT0VFd0pPUWdtSUVKQVBBeENYMEFlSnhqWUdSZytEK0Z1WWk1Z1lHVmdZR1RVWm1UMFppNThKL3NmY2JISUtLQ2llUHZqMzh5REF3TUtPcFlqWUVxR1prbTNmOG55L2dZU09Rd1BnRXBCQ29EQUdYWUY0MEFlSnhqWUdSZ1lBRGloWCsydm96bnQvbkt3TTNDQUFMWGo5UkVJZWovVTFnWW1CdUFYQTRHSnBBb0FHc1ZDL0lBZUp4allHUmdZRzc0MzhBUXc4SUFBa0NTa1FFVk1BTUFSd2tDYkFRQUFBQUVBQUFBQkFBQUFBQUFBQUFBRkFBb2VKeGpZR1JnWUdCbVlHTUEwUXdNVEVETUJZUU1EUC9CZkFZQUNVZ0JJUUI0bkdXUFRVN0RNQkNGWC9vSHBCS3FxR0NINUFWaUFTajlFYXR1V0ZScTkxMTAzNlpPbXlxSkk4ZXQxQU53SG83QUNUZ0MzSUE3OEVnbm16YVd4OSs4ZVdOUEFOemdCeDZPM3kzM2tUMWNNanR5RFJlNEY2NVRmeEJ1a0YrRW0yampWYmhGL1UzWXh6T213bTEwWVhtRDE3aGk5b1IzWVE4ZGZBalhjSTFQNFRyMUwrRUcrVnU0aVR2OENyZlE4ZXJDUHVaZVY3aU5SeS8yeDFZdm5GNnA1VUhGb2NraWt6bS9ncGxlNzVLRnJkTHFuR3RieENaVGc2QmZTVk9kYVZ2ZFUrelhRK2NpRlZtVHFnbXJPa21NeXEzWjZ0QUZHK2Z5VWE4WGlSNkVKdVZZWS82MnhnS09jUVdGSlE2TU1VSVlaSWpLNk9nN1ZXYjByN0ZEd2w1N1ZqM041M1JiRk5UL2M0VUJBdlRQWEZPNnN0SjVPaytCUFY4YlVuVjBLMjdMbnBRMGtWN05TUkt5UWw3V3RsUkM2Z0UyWlZlT0VYcGMwWWsvS0dkSS93QUpXbTdJQUFBQWVKeGpZR0tBQUM0RzdJQ1prWW1SbVpHRmdhY3dNeldqTkRHdk1MTXl2eFRCcVNyTloyQUFBS0FuQ25rPScpIGZvcm1hdCgnd29mZicpLFxcbiAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ljb25mb250LnR0Zj90PTE1MzcxMDQ3MzAzNzFcIikpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgXFxuICB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbmZvbnQuc3ZnP3Q9MTUzNzEwNDczMDM3MVwiKSkgKyBcIiNpY29uZm9udCkgZm9ybWF0KCdzdmcnKTsgLyogaU9TIDQuMS0gKi9cXG59XFxuXFxuLmljb25mb250IHtcXG4gIGZvbnQtZmFtaWx5OlxcXCJpY29uZm9udFxcXCIgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZToxNnB4O1xcbiAgZm9udC1zdHlsZTpub3JtYWw7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5pY29uLWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcMzQ2NFxcXCI7IH1cXG5cXG4uaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcMzQ2NVxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKipcclxuICog6L2u5pKt5Zu+5LiL5L6n55qE5oyH56S65oyJ6ZKuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNob2ljZUNoYW5nZVN0YXRlIOWbnuiwg+WHveaVsOWkhOeQhueCueWHu+S6i+S7tlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIOS4gOWFseWkmuWwkeS4qlxyXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg5b2T5YmN5piv5ZOq5LiqXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL2Nob2ljZU5hdi5sZXNzJztcclxuXHJcbmNsYXNzIENob2ljZU5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBnZXRMZW5ndGggPSAobnVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2QXJyID0gbmV3IEFycmF5KG51bSk7XHJcbiAgICAgICAgcmV0dXJuIG5hdkFyci5maWxsKCcnKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCk7XHJcbiAgICB9XHJcbiAgICBuYXZDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaG9pY2VDaGFuZ2VTdGF0ZSh3aW5kb3cucGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5rZXkpKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG51bSwgaW5kZXggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9pY2UtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRMZW5ndGgobnVtKS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5hdkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1rZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7a2V5ID09PSBpbmRleCA/ICdzZWwtbmF2JyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5DaG9pY2VOYXYucHJvcFR5cGVzID0ge1xyXG4gICAgY2hvaWNlQ2hhbmdlU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBudW06IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob2ljZU5hdjtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hvaWNlTmF2Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hvaWNlTmF2Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nob2ljZU5hdi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IENob2ljZU5hdiBmcm9tICcuL2Nob2ljZU5hdic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaG9pY2VOYXY7XHJcbiIsImltcG9ydCBNb3ZlbWVudEFycm93cyBmcm9tICcuL21vdmVtZW50QXJyb3dzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVtZW50QXJyb3dzO1xyXG4iLCIvKipcclxuICog5bem5Y+z57+76aG16ZSuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFycm93Q2hhbmdlU3RhdGUg5bem5Y+z5YiH5o2i55qE5Zue6LCD5Ye95pWwXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaWNvbkxlZnQg5o6n5Yi25bem57+76aG15pi+56S6XHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaWNvblJpZ2h0IOaOp+WItuWPs+e/u+mhteaYvuekulxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi4vLi4vaWNvbmZvbnQvaWNvbmZvbnQuY3NzJztcclxuaW1wb3J0ICcuL21vdmVtZW50QXJyb3dzLmxlc3MnO1xyXG5cclxuY2xhc3MgTW92ZW1lbnRBcnJvd3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWNvbkxlZnQ6IHByb3BzLmljb25MZWZ0LFxyXG4gICAgICAgICAgICBpY29uUmlnaHQ6IHByb3BzLmljb25SaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uTGVmdCwgaWNvblJpZ2h0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92ZW1lbnQtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbmZvbnQgaWNvbi1hcnJvdy1sZWZ0ICR7aWNvbkxlZnQgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5hcnJvd0NoYW5nZVN0YXRlKCdkb3duJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb25mb250IGljb24tYXJyb3ctcmlnaHQgJHtpY29uUmlnaHQgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5hcnJvd0NoYW5nZVN0YXRlKCd1cCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTW92ZW1lbnRBcnJvd3MucHJvcFR5cGVzID0ge1xyXG4gICAgYXJyb3dDaGFuZ2VTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGljb25MZWZ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb25SaWdodDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbk1vdmVtZW50QXJyb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGljb25MZWZ0OiBmYWxzZSxcclxuICAgIGljb25SaWdodDogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92ZW1lbnRBcnJvd3M7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vdmVtZW50QXJyb3dzLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92ZW1lbnRBcnJvd3MubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92ZW1lbnRBcnJvd3MubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQaWN0dXJlUm90YXRpb24gZnJvbSAnLi9waWN0dXJlUm90YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZVJvdGF0aW9uO1xyXG4iLCIvKipcclxuICog6L2u5pKt5YaF5a655Yy65Z+fXHJcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRyZW4g6ZyA6KaB6L2u5pKt55qE5YaF5a65XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDlvZPliY3pgInkuK3nmoTpobXnoIFcclxuICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiDpnIDopoHliIfmjaLova7mkq3nmoTmlrnlkJFcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XHJcblxyXG5pbXBvcnQgJy4vcGljdHVyZVJvdGF0aW9uLmxlc3MnO1xyXG5cclxuZnVuY3Rpb24gUGljdHVyZVJvdGF0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpbmRleCwgZGlyZWN0aW9uIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLXJvdGF0aW9uXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIGluPXtpbmRleCA9PT0ga2V5fSB0aW1lb3V0PXszMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2VudGVyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdyb3RhdGlvbi1jZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdleGl0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdyb3RhdGlvbi1leGl0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAnZXhpdGluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncm90YXRpb24tY2VudGVyLXRvLWxlZnQnIDogJ3JvdGF0aW9uLWNlbnRlci10by1yaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ2VudGVyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyb3RhdGlvbi1yaWdodC10by1jZW50ZXInIDogJ3JvdGF0aW9uLWxlZnQtdG8tY2VudGVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3RhdGlvbi1pdGVtICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5QaWN0dXJlUm90YXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46ICcnLFxyXG4gICAgZGlyZWN0aW9uOiAnbGVmdCdcclxufTtcclxuXHJcblBpY3R1cmVSb3RhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlUm90YXRpb247XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BpY3R1cmVSb3RhdGlvbi5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BpY3R1cmVSb3RhdGlvbi5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9waWN0dXJlUm90YXRpb24ubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxyXG4gKiDova7mkq3mj5Lku7bniLbnu4Tku7ZcclxuICogQHBhcmFtIHtOb2RlfSBjaGlsZHJlbiDpnIDopoHova7mkq3nmoTlhoXlrrlcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgQ2hvaWNlTmF2IGZyb20gJy4vY2hvaWNlTmF2JztcclxuaW1wb3J0IE1vdmVtZW50QXJyb3dzIGZyb20gJy4vbW92ZW1lbnRBcnJvd3MnO1xyXG5pbXBvcnQgUGljdHVyZVJvdGF0aW9uIGZyb20gJy4vcGljdHVyZVJvdGF0aW9uJztcclxuXHJcbmltcG9ydCAnLi9yb3RhdGlvbk1hcC5sZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdGF0aW9uTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFycm93Q2hhbmdlU3RhdGUgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gJyc7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4IC0gMSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY2hpbGRyZW4ubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCfova7mkq3lh7rnjrDplJnor6/vvIEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaG9pY2VDaGFuZ2VTdGF0ZSA9ICh2YWwpID0+IHtcclxuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBOdW1iZXJdJykge1xyXG4gICAgICAgICAgICBpZiAodmFsID49IDAgJiYgdmFsIDwgdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBpbmRleCA8IHZhbCA/ICdsZWZ0JyA6ICdyaWdodCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGRpcmVjdGlvbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IENob2ljZU5hdlByb3BzID0ge1xyXG4gICAgICAgICAgICBjaG9pY2VDaGFuZ2VTdGF0ZTogdGhpcy5jaG9pY2VDaGFuZ2VTdGF0ZSxcclxuICAgICAgICAgICAgbnVtOiBjaGlsZHJlbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LXJvdGF0aW9uLW1hcFwiPlxyXG4gICAgICAgICAgICAgICAgPENob2ljZU5hdiB7Li4uQ2hvaWNlTmF2UHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8UGljdHVyZVJvdGF0aW9uIGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBpbmRleD17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9QaWN0dXJlUm90YXRpb24+XHJcbiAgICAgICAgICAgICAgICA8TW92ZW1lbnRBcnJvd3MgYXJyb3dDaGFuZ2VTdGF0ZT17dGhpcy5hcnJvd0NoYW5nZVN0YXRlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Sb3RhdGlvbk1hcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogJydcclxufTtcclxuXHJcblJvdGF0aW9uTWFwLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59O1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb3RhdGlvbk1hcC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JvdGF0aW9uTWFwLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JvdGF0aW9uTWFwLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pY29uZm9udC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaWNvbmZvbnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pY29uZm9udC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMmUwNDJiNWNhMGNhMjU0NGUyM2IwZmU0YThhODY2Yy5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWHlBcklDSXpPRFUwTURsak1tVXpPRFUzWldVd04yRXlPRGRtTTJGbVpHUTJZakk1TVM1emRtY2lPdz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YjYwMmY2OGVhNDZmNGQ4MzJjNjJhOGQ5MmQwN2UxZS50dGZcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcclxuXHJcbmltcG9ydCBSb3RhdGlvbk1hcCBmcm9tICcuL2NvbXBvbmVudC9yb3RhdGlvbk1hcCc7XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPFJvdGF0aW9uTWFwPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJSZWFjdFwiIGNsYXNzTmFtZT1cIlJtYXAgUmVhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+5L2g5aW9ISBSZWFjdCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIlZ1ZVwiIGNsYXNzTmFtZT1cIlJtYXAgVnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPuS9oOWlvSEgVnVlITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiTmdcIiBjbGFzc05hbWU9XCJSbWFwIE5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPuS9oOWlvSEgTkchPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJDb21wb25lbnRcIiBjbGFzc05hbWU9XCJSbWFwIENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT7kvaDlpb0hIOe7hOS7tiE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm90YXRpb25NYXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=