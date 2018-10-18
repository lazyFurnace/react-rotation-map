module.exports =
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.assembly.jsx");
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
exports.push([module.i, ".choice-nav {\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.choice-nav > button.choice-nav-btn {\n  width: 18px;\n  height: 3px;\n  margin: 10px 3px;\n  border-radius: 1px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #333;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.choice-nav .sel-nav.choice-nav-btn {\n  width: 25px;\n  background-color: #fff;\n  border: 1px solid rgba(66, 66, 66, .5);\n}\n", ""]);

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
exports.push([module.i, ".movement-arrows button.iconfont {\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  width: 10%;\n  height: 100%;\n  background: rgba(33, 33, 33, 0);\n  color: rgba(255, 255, 255, 0);\n  font-size: 32px;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.movement-arrows button.iconfont:hover,\n.movement-arrows button.iconfont:focus {\n  background: rgba(33, 33, 33, .1);\n  color: rgba(255, 255, 255, .5);\n}\n.movement-arrows button.iconfont:active,\n.movement-arrows button.iconfont.active {\n  background: rgba(33, 33, 33, .2);\n  color: rgba(255, 255, 255, .8);\n}\n.movement-arrows button.iconfont:first-child {\n  left: 0;\n}\n.movement-arrows button.iconfont:last-child {\n  right: 0;\n}\n", ""]);

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
exports.push([module.i, ".picture-rotation {\n  position: relative;\n  height: 100%;\n}\n.rotation-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-animation-fill-mode: forwards !important;\n          animation-fill-mode: forwards !important;\n}\n.rotation-enter {\n  left: 0;\n}\n.rotation-exit {\n  display: none;\n}\n.rotation-center-to-left {\n  -webkit-animation: 0.3s animation-center-to-left;\n          animation: 0.3s animation-center-to-left;\n}\n.rotation-right-to-center {\n  -webkit-animation: 0.3s animation-right-to-center;\n          animation: 0.3s animation-right-to-center;\n}\n.rotation-center-to-right {\n  -webkit-animation: 0.3s animation-center-to-right;\n          animation: 0.3s animation-center-to-right;\n}\n.rotation-left-to-center {\n  -webkit-animation: 0.3s animation-left-to-center;\n          animation: 0.3s animation-left-to-center;\n}\n@-webkit-keyframes animation-center-to-left {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: -20%;\n    opacity: 0.2;\n  }\n}\n@keyframes animation-center-to-left {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: -20%;\n    opacity: 0.2;\n  }\n}\n@-webkit-keyframes animation-right-to-center {\n  0% {\n    left: 20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes animation-right-to-center {\n  0% {\n    left: 20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animation-center-to-right {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: 20%;\n    opacity: 0.2;\n  }\n}\n@keyframes animation-center-to-right {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: 20%;\n    opacity: 0.2;\n  }\n}\n@-webkit-keyframes animation-left-to-center {\n  0% {\n    left: -20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes animation-left-to-center {\n  0% {\n    left: -20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n", ""]);

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
exports.push([module.i, ".react-rotation-map {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: none;\n      touch-action: none;\n}\n.react-rotation-map button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n", ""]);

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

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ChoiceNav.__proto__ || (0, _getPrototypeOf2.default)(ChoiceNav)).call.apply(_ref, [this].concat(args))), _this), _this.createArray = function (num) {
            var navArray = new Array(num);
            return navArray.fill('').map(function (item, index) {
                return item + index;
            });
        }, _this.navClick = function (e) {
            _this.props.goTo(window.parseInt(e.target.dataset.key));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    /**
     * @param {Number} num 所需轮播内容的总数
     * @return {Array} 返回生成的数组
     * 通过 Array.fill 和 Array.map 方法生成一个有 num 项的数组
     */

    // 指示按钮的点击事件将所点击按钮的序号传递给父组件


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
                this.createArray(num).map(function (item, key) {
                    return _react2.default.createElement('button', {
                        onClick: _this2.navClick,
                        'data-key': key,
                        className: 'choice-nav-btn ' + (key === index ? 'sel-nav' : ''),
                        key: '' + item
                    });
                })
            );
        }
    }]);
    return ChoiceNav;
}(_react2.default.Component); /**
                               * 轮播图下方的指示按钮，接收三个 prop
                               * @param {Function} goTo 切换轮播图的回调函数，处理点击事件
                               * @param {Number} num 所需轮播内容的总数
                               * @param {Number} index 当前显示内容的编号
                               */


ChoiceNav.propTypes = {
    goTo: _propTypes2.default.func.isRequired,
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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./movementArrows.less */ "./src/component/movementArrows/movementArrows.less");

__webpack_require__(/*! ../../iconfont/iconfont.css */ "./src/iconfont/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 轮播图左右的切换按钮，接收三个 prop
 * @param {Function} goMove 左右切换的回调函数
 * @param {Boolean} iconLeft 控制左切换显示
 * @param {Boolean} iconRight 控制右切换显示
 * iconLeft 和 iconRight 是为了以后手机端触滑动时显示切换按钮所预留的
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
                        return _this2.props.goMove('down');
                    }
                }),
                _react2.default.createElement('button', {
                    className: 'iconfont icon-arrow-right ' + (iconRight ? 'active' : ''),
                    onClick: function onClick() {
                        return _this2.props.goMove('up');
                    }
                })
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            return {
                iconLeft: nextProps.iconLeft,
                iconRight: nextProps.iconRight
            };
        }
    }]);
    return MovementArrows;
}(_react2.default.Component);

MovementArrows.propTypes = {
    goMove: _propTypes2.default.func.isRequired,
    iconLeft: _propTypes2.default.bool,
    iconRight: _propTypes2.default.bool
};

MovementArrows.defaultProps = {
    iconLeft: false,
    iconRight: false
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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__(/*! react-transition-group/Transition */ "react-transition-group/Transition");

var _Transition2 = _interopRequireDefault(_Transition);

__webpack_require__(/*! ./pictureRotation.less */ "./src/component/pictureRotation/pictureRotation.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 轮播图轮播内容区域，接收五个参数
 * @param {Node} children 需要轮播的内容，使用该组件时传入
 * @param {Function} afterChange 轮播动画结束后的回调函数
 * @param {Number} index 当前显示内容的编号
 * @param {String} direction 需要切换轮播的方向
 * @param {String} easing 控制轮播图的动画切换效果
 */
var PictureRotation = function (_React$Component) {
    (0, _inherits3.default)(PictureRotation, _React$Component);

    function PictureRotation() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PictureRotation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PictureRotation.__proto__ || (0, _getPrototypeOf2.default)(PictureRotation)).call.apply(_ref, [this].concat(args))), _this), _this.onEntered = function (node) {
            _this.props.afterChange(window.parseInt(node.dataset.index));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    // Transition 的方法，用于触发轮播动画结束后的回调函数


    (0, _createClass3.default)(PictureRotation, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                index = _props.index,
                direction = _props.direction,
                easing = _props.easing;

            return _react2.default.createElement(
                'div',
                { className: 'picture-rotation' },
                _react2.default.Children.map(children, function (item, key) {
                    return _react2.default.createElement(
                        _Transition2.default,
                        { onEntered: _this2.onEntered, 'in': index === key, timeout: 300 },
                        function (state) {
                            var className = {
                                entered: 'rotation-enter',
                                exited: 'rotation-exit',
                                entering: direction === 'left' ? 'rotation-right-to-center' : 'rotation-left-to-center',
                                exiting: direction === 'left' ? 'rotation-center-to-left' : 'rotation-center-to-right'
                            };
                            var style = {
                                animationTimingFunction: easing
                            };
                            return _react2.default.createElement(
                                'div',
                                {
                                    'data-index': key,
                                    style: style,
                                    className: 'rotation-item ' + className[state]
                                },
                                item
                            );
                        }
                    );
                })
            );
        }
    }]);
    return PictureRotation;
}(_react2.default.Component);

PictureRotation.defaultProps = {
    children: '',
    direction: 'left',
    afterChange: function afterChange() {}
};

PictureRotation.propTypes = {
    children: _propTypes2.default.node,
    direction: _propTypes2.default.string,
    afterChange: _propTypes2.default.func,
    index: _propTypes2.default.number.isRequired,
    easing: _propTypes2.default.string.isRequired
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

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

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
 * 轮播图插件的父组件
 * @param {Node} children 需要轮播的内容
 * @param {Function} beforeChange 切换动画之前的回调函数
 * @param {Function} afterChange 切换动画之后的回调函数
 * @param {Boolean} autoplay 是否自动轮播
 * @param {Number} timeout 轮播的时间差
 * @param {Boolean} dots 是否显示指示条及切换按钮
 * @param {String} easing 动画切换效果
 */
var RotationMap = function (_React$Component) {
    (0, _inherits3.default)(RotationMap, _React$Component);

    function RotationMap(props) {
        (0, _classCallCheck3.default)(this, RotationMap);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RotationMap.__proto__ || (0, _getPrototypeOf2.default)(RotationMap)).call(this, props));

        _this.onMouseLeave = function () {
            _this.beginAutoPlay();
        };

        _this.onMouseEnter = function () {
            _this.stopAutoPlay();
        };

        _this.onTouchMove = function (e) {
            // 判断默认行为是否可以被禁用
            if (e.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!e.defaultPrevented) {
                    e.preventDefault();
                }
            }
            // 滑动方向的箭头显示

            var _e$nativeEvent$target = (0, _slicedToArray3.default)(e.nativeEvent.targetTouches, 1),
                touch = _e$nativeEvent$target[0];

            var pageX = touch.pageX;

            if (_this.touchStart || _this.touchStart === 0) {
                var iconLeft = false;
                var iconRight = false;
                if (pageX - 10 > _this.touchStart) {
                    iconLeft = true;
                } else if (pageX + 10 < _this.touchStart) {
                    iconRight = true;
                }
                _this.setState({
                    iconLeft: iconLeft,
                    iconRight: iconRight
                });
            }
        };

        _this.onTouchStart = function (e) {
            _this.stopAutoPlay();
            _this.touchStart = e.nativeEvent.targetTouches[0].pageX;
        };

        _this.onTouchEnd = function () {
            _this.beginAutoPlay();
            _this.touchStart = null;
            var _this$state = _this.state,
                iconLeft = _this$state.iconLeft,
                iconRight = _this$state.iconRight;

            if (iconLeft) {
                _this.goMove('down');
            } else if (iconRight) {
                _this.goMove('up');
            }
            _this.setState({
                iconLeft: false,
                iconRight: false
            });
        };

        _this.beginAutoPlay = function () {
            var _this$state2 = _this.state,
                autoplay = _this$state2.autoplay,
                timeout = _this$state2.timeout;
            // autoplay 开启和 timeout 正确的情况下开启自动轮播定时器

            if (_this.clearInterval === undefined && autoplay && timeout) {
                _this.clearInterval = setInterval(function () {
                    return _this.goMove('up');
                }, timeout);
            }
        };

        _this.stopAutoPlay = function () {
            if (_this.clearInterval) {
                clearInterval(_this.clearInterval);
                _this.clearInterval = undefined;
            }
        };

        _this.changeState = function (index, direction) {
            // 调用 beforeChange 回调函数函数( beforeChange 为暴露使用的方法)
            _this.props.beforeChange(_this.state.index, index);
            _this.setState({ index: index, direction: direction });
        };

        _this.goMove = function (type) {
            var children = _this.props.children;
            var index = _this.state.index;

            var len = children.length;
            switch (type) {
                case 'up':
                    _this.changeState(index < len - 1 ? index + 1 : 0, 'left');
                    break;
                case 'down':
                    _this.changeState(index > 0 ? index - 1 : len - 1, 'right');
                    break;
                default:
                    throw Error('The carousel has an error!');
            }
        };

        _this.goTo = function (val) {
            var children = _this.props.children;
            var index = _this.state.index;

            var len = children.length;
            if (index === val) return;
            if (typeof val === 'number' && val >= 0 && val < len) {
                _this.changeState(val, index < val ? 'left' : 'right');
            }
        };

        _this.state = {
            index: 0,
            direction: '',
            autoplay: props.autoplay,
            timeout: props.timeout,
            iconLeft: false,
            iconRight: false
        };
        return _this;
    }

    (0, _createClass3.default)(RotationMap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.beginAutoPlay();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _props = this.props,
                autoplay = _props.autoplay,
                timeout = _props.timeout;
            /**
             * autoplay 为 true 的情况下比较 timeout 前后值 ，如果不一致关闭定时器重新打开
             * autoplay 的前后值不同且 autoplay 为 true 的情况下开启定时器
             * autoplay 的前后值不同且 autoplay 为 false 的情况下关闭定时器
             */

            if (autoplay && timeout !== prevProps.timeout) {
                this.stopAutoPlay();
                this.beginAutoPlay();
            } else if (autoplay !== prevProps.autoplay && autoplay) {
                this.beginAutoPlay();
            } else if (autoplay !== prevProps.autoplay && !autoplay) {
                this.stopAutoPlay();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stopAutoPlay();
        }

        // 鼠标移出轮播图范围时开启定时器

        // 鼠标移入轮播图范围时关闭定时器

        // 触摸滑动事件

        // 触摸开始时记录当前坐标

        // 触摸结束时触发对应切换事件


        /**
         * 抽象的轮播控制，调用这个函数来真正的修改 state 触发轮播图变化
         * @param {Number} index 轮播图内容的序号
         * @param {String} direction 轮播图切换的方向
         */

        /**
         * 控制轮播图左右切换的函数
         * @param {String} type
         * type 值只有两个 'up' 和 'down' 代表着向前和向后
         */

        /**
         * 控制轮播图随意切换的函数
         * @param {Number} val 在正常范围内的数字，切换至序号所对应的内容
         */

    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                index = _state.index,
                direction = _state.direction,
                iconLeft = _state.iconLeft,
                iconRight = _state.iconRight;
            var _props2 = this.props,
                children = _props2.children,
                afterChange = _props2.afterChange,
                dots = _props2.dots,
                easing = _props2.easing;

            var ChoiceNavProps = {
                goTo: this.goTo,
                num: children.length,
                index: index
            };
            return _react2.default.createElement(
                'div',
                {
                    onTouchStart: this.onTouchStart,
                    onTouchEnd: this.onTouchEnd,
                    onTouchMove: this.onTouchMove,
                    onMouseLeave: this.onMouseLeave,
                    onMouseEnter: this.onMouseEnter,
                    className: 'react-rotation-map'
                },
                dots && _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(_choiceNav2.default, ChoiceNavProps),
                    _react2.default.createElement(_movementArrows2.default, {
                        iconLeft: iconLeft,
                        iconRight: iconRight,
                        goMove: this.goMove
                    })
                ),
                _react2.default.createElement(
                    _pictureRotation2.default,
                    {
                        afterChange: afterChange,
                        direction: direction,
                        index: index,
                        easing: easing
                    },
                    children
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            return {
                autoplay: nextProps.autoplay,
                timeout: nextProps.timeout
            };
        }
    }]);
    return RotationMap;
}(_react2.default.Component);

exports.default = RotationMap;


RotationMap.defaultProps = {
    children: '',
    beforeChange: function beforeChange() {},
    afterChange: function afterChange() {},
    autoplay: false,
    timeout: 3000,
    dots: true,
    easing: 'linear'
};

RotationMap.propTypes = {
    children: _propTypes2.default.node,
    beforeChange: _propTypes2.default.func,
    afterChange: _propTypes2.default.func,
    autoplay: _propTypes2.default.bool,
    timeout: _propTypes2.default.number,
    dots: _propTypes2.default.bool,
    easing: _propTypes2.default.string
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

/***/ "./src/index.assembly.jsx":
/*!********************************!*\
  !*** ./src/index.assembly.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rotationMap = __webpack_require__(/*! ./component/rotationMap */ "./src/component/rotationMap.jsx");

var _rotationMap2 = _interopRequireDefault(_rotationMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _rotationMap2.default;

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/Transition");

/***/ })

/******/ });