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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/publish.jsx");
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

/***/ "./src/publish.jsx":
/*!*************************!*\
  !*** ./src/publish.jsx ***!
  \*************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9jaG9pY2VOYXYvY2hvaWNlTmF2Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9tb3ZlbWVudEFycm93cy9tb3ZlbWVudEFycm93cy5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcGljdHVyZVJvdGF0aW9uL3BpY3R1cmVSb3RhdGlvbi5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcm90YXRpb25NYXAubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbmZvbnQvaWNvbmZvbnQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2Nob2ljZU5hdi9jaG9pY2VOYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY2hvaWNlTmF2L2Nob2ljZU5hdi5sZXNzPzNmNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9jaG9pY2VOYXYvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbW92ZW1lbnRBcnJvd3MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbW92ZW1lbnRBcnJvd3MvbW92ZW1lbnRBcnJvd3MuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvbW92ZW1lbnRBcnJvd3MvbW92ZW1lbnRBcnJvd3MubGVzcz85NzdjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcGljdHVyZVJvdGF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3BpY3R1cmVSb3RhdGlvbi9waWN0dXJlUm90YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvcGljdHVyZVJvdGF0aW9uL3BpY3R1cmVSb3RhdGlvbi5sZXNzP2EwMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9yb3RhdGlvbk1hcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9yb3RhdGlvbk1hcC5sZXNzP2E1ZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25mb250L2ljb25mb250LmNzcz80ZTFmIiwid2VicGFjazovLy8uL3NyYy9pY29uZm9udC9pY29uZm9udC5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25mb250L2ljb25mb250LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbmZvbnQvaWNvbmZvbnQudHRmIiwid2VicGFjazovLy8uL3NyYy9wdWJsaXNoLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uXCIiXSwibmFtZXMiOlsiQ2hvaWNlTmF2IiwiY3JlYXRlQXJyYXkiLCJudW0iLCJuYXZBcnJheSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hdkNsaWNrIiwiZSIsInByb3BzIiwiZ29UbyIsIndpbmRvdyIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsImtleSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJNb3ZlbWVudEFycm93cyIsInN0YXRlIiwiaWNvbkxlZnQiLCJpY29uUmlnaHQiLCJnb01vdmUiLCJuZXh0UHJvcHMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZVJvdGF0aW9uIiwib25FbnRlcmVkIiwibm9kZSIsImFmdGVyQ2hhbmdlIiwiY2hpbGRyZW4iLCJkaXJlY3Rpb24iLCJlYXNpbmciLCJDaGlsZHJlbiIsImNsYXNzTmFtZSIsImVudGVyZWQiLCJleGl0ZWQiLCJlbnRlcmluZyIsImV4aXRpbmciLCJzdHlsZSIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwic3RyaW5nIiwiUm90YXRpb25NYXAiLCJvbk1vdXNlTGVhdmUiLCJiZWdpbkF1dG9QbGF5Iiwib25Nb3VzZUVudGVyIiwic3RvcEF1dG9QbGF5Iiwib25Ub3VjaE1vdmUiLCJjYW5jZWxhYmxlIiwiZGVmYXVsdFByZXZlbnRlZCIsInByZXZlbnREZWZhdWx0IiwibmF0aXZlRXZlbnQiLCJ0YXJnZXRUb3VjaGVzIiwidG91Y2giLCJwYWdlWCIsInRvdWNoU3RhcnQiLCJzZXRTdGF0ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJhdXRvcGxheSIsInRpbWVvdXQiLCJjbGVhckludGVydmFsIiwidW5kZWZpbmVkIiwic2V0SW50ZXJ2YWwiLCJjaGFuZ2VTdGF0ZSIsImJlZm9yZUNoYW5nZSIsInR5cGUiLCJsZW4iLCJsZW5ndGgiLCJFcnJvciIsInZhbCIsInByZXZQcm9wcyIsImRvdHMiLCJDaG9pY2VOYXZQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSxzQ0FBdUMsdUJBQXVCLGtCQUFrQixjQUFjLGNBQWMsd0NBQXdDLHdDQUF3Qyx5QkFBeUIseUJBQXlCLGtCQUFrQixHQUFHLHVDQUF1QyxnQkFBZ0IsZ0JBQWdCLHFCQUFxQix1QkFBdUIsbUNBQW1DLG1DQUFtQywyQkFBMkIsaUJBQWlCLHdDQUF3QyxnQ0FBZ0MsR0FBRyx1Q0FBdUMsZ0JBQWdCLDJCQUEyQiwyQ0FBMkMsR0FBRzs7QUFFbnJCOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDJEQUE0RCx1QkFBdUIsV0FBVyxrQkFBa0IsZUFBZSxpQkFBaUIsb0NBQW9DLGtDQUFrQyxvQkFBb0Isd0NBQXdDLGdDQUFnQyxHQUFHLG1GQUFtRixxQ0FBcUMsbUNBQW1DLEdBQUcscUZBQXFGLHFDQUFxQyxtQ0FBbUMsR0FBRyxnREFBZ0QsWUFBWSxHQUFHLCtDQUErQyxhQUFhLEdB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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Z0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaXNoLmpzeFwiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNob2ljZS1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNob2ljZS1uYXYgPiBidXR0b24uY2hvaWNlLW5hdi1idG4ge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIG1hcmdpbjogMTBweCAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcbi5jaG9pY2UtbmF2IC5zZWwtbmF2LmNob2ljZS1uYXYtYnRuIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjYsIDY2LCA2NiwgLjUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMzMsIDMzLCAwKTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxufVxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250OmhvdmVyLFxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsIDMzLCAzMywgLjEpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xcbn1cXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbi5pY29uZm9udDphY3RpdmUsXFxuLm1vdmVtZW50LWFycm93cyBidXR0b24uaWNvbmZvbnQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsIDMzLCAzMywgLjIpO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbn1cXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbi5pY29uZm9udDpmaXJzdC1jaGlsZCB7XFxuICBsZWZ0OiAwO1xcbn1cXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbi5pY29uZm9udDpsYXN0LWNoaWxkIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5waWN0dXJlLXJvdGF0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJvdGF0aW9uLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcyAhaW1wb3J0YW50O1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcyAhaW1wb3J0YW50O1xcbn1cXG4ucm90YXRpb24tZW50ZXIge1xcbiAgbGVmdDogMDtcXG59XFxuLnJvdGF0aW9uLWV4aXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJvdGF0aW9uLWNlbnRlci10by1sZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1jZW50ZXItdG8tbGVmdDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1jZW50ZXItdG8tbGVmdDtcXG59XFxuLnJvdGF0aW9uLXJpZ2h0LXRvLWNlbnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tcmlnaHQtdG8tY2VudGVyO1xcbiAgICAgICAgICBhbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLXJpZ2h0LXRvLWNlbnRlcjtcXG59XFxuLnJvdGF0aW9uLWNlbnRlci10by1yaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tY2VudGVyLXRvLXJpZ2h0O1xcbiAgICAgICAgICBhbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWNlbnRlci10by1yaWdodDtcXG59XFxuLnJvdGF0aW9uLWxlZnQtdG8tY2VudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1sZWZ0LXRvLWNlbnRlcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1sZWZ0LXRvLWNlbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tbGVmdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogLTIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tbGVmdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogLTIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uLXJpZ2h0LXRvLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLXJpZ2h0LXRvLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tY2VudGVyLXRvLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRpb24tY2VudGVyLXRvLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbi1sZWZ0LXRvLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0yMCU7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1sZWZ0LXRvLWNlbnRlciB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0yMCU7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1yb3RhdGlvbi1tYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbi5yZWFjdC1yb3RhdGlvbi1tYXAgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaWNvbmZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbmZvbnQuZW90P3Q9MTUzNzEwNDczMDM3MVwiKSkgKyBcIik7IC8qIElFOSovXFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pY29uZm9udC5lb3Q/dD0xNTM3MTA0NzMwMzcxXCIpKSArIFwiI2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIFxcbiAgdXJsKCdkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBUVFBQXNBQUFBQUJuQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFETUFBQUJDc1A2ejdVOVRMeklBQUFFOEFBQUFRd0FBQUZhSzJaWlhZMjFoY0FBQUFZQUFBQUJUQUFBQmZnWTNPUTFuYkhsbUFBQUIxQUFBQUVjQUFBQlFMR0JUdkdobFlXUUFBQUljQUFBQUx3QUFBRFlTcUR6RmFHaGxZUUFBQWt3QUFBQWNBQUFBSkFmZUE0Um9iWFI0QUFBQ2FBQUFBQXdBQUFBTURBQUFBR3h2WTJFQUFBSjBBQUFBQ0FBQUFBZ0FGQUFvYldGNGNBQUFBbndBQUFBZkFBQUFJQUVPQUJKdVlXMWxBQUFDbkFBQUFVVUFBQUp0UGxUK2ZYQnZjM1FBQUFQa0FBQUFMQUFBQUVXSnRxZVllSnhqWUdSZ1lPQmlrR1BRWVdCMGNmTUpZZUJnWUdHQUFKQU1ZMDVtZWlKUURNb0R5ckdBYVE0Z1pvT0lBZ0NLSXdOUEFIaWNZMkJrWVdDY3dNREt3TUhVeVhTR2dZR2hIMEl6dm1Zd1l1UmdZR0JpWUdWbXdBb0MwbHhUR0J4TVVreFNtUnYrTnpERU1EY3dOQUNGR1VGeUFNK2tDMGdBZUp4allHQmdaV0JnWUFaaUhTQm1ZV0JnREdOZ1pBQ0JBS0FvSTFpY21ZRUxMTTdDb0FKV3d3SVNOMG45L3g5SXBvQklJSjhGVERJQkNUYUdVY0FESmpXZ1BDWlFPRUV3Sk9RZ21JRUpBUEF4Q1gwQWVKeGpZR1JnK0QrRnVZaTVnWUdWZ1lHVFVabVQwWmk1OEovc2ZjYkhJS0tDaWVQdmozOHlEQXdNS09wWWpZRXFHWmttM2Y4bnkvZ1lTT1F3UGdFcEJDb0RBR1hZRjQwQWVKeGpZR1JnWUFEaWhYKzJ2b3pudC9uS3dNM0NBQUxYajlSRUllai9VMWdZbUJ1QVhBNEdKcEFvQUdzVkMvSUFlSnhqWUdSZ1lHNzQzOEFRdzhJQUFrQ1NrUUVWTUFNQVJ3a0NiQVFBQUFBRUFBQUFCQUFBQUFBQUFBQUFGQUFvZUp4allHUmdZR0JtWUdNQTBRd01URURNQllRTURQL0JmQVlBQ1VnQklRQjRuR1dQVFU3RE1CQ0ZYL29IcEJLcXFHQ0g1QVZpQVNqOUVhdHVXRlJxOTExMDM2Wk9teXFKSThldDFBTndIbzdBQ1RnQzNJQTc4RWdubXphV3g5KzhlV05QQU56Z0J4Nk8zeTMza1QxY01qdHlEUmU0RjY1VGZ4QnVrRitFbTJqalZiaEYvVTNZeHpPbXdtMTBZWG1EMTdoaTlvUjNZUThkZkFqWGNJMVA0VHIxTCtFRytWdTRpVHY4Q3JmUThlckNQdVplVjdpTlJ5LzJ4MVl2bkY2cDVVSEZvY2tpa3ptL2dwbGU3NUtGcmRMcW5HdGJ4Q1pUZzZCZlNWT2RhVnZkVSt6WFErY2lGVm1UcWdtck9rbU15cTNaNnRBRkcrZnlVYThYaVI2RUp1VllZLzYyeGdLT2NRV0ZKUTZNTVVJWVpJaks2T2c3VldiMHI3RkR3bDU3VmozTjUzUmJGTlQvYzRVQkF2VFBYRk82c3RKNU9rK0JQVjhiVW5WMEsyN0xucFEwa1Y3TlNSS3lRbDdXdGxSQzZnRTJaVmVPRVhwYzBZay9LR2RJL3dBSldtN0lBQUFBZUp4allHS0FBQzRHN0lDWmtZbVJtWkdGZ2Fjd016V2pOREd2TUxNeXZ4VEJxU3JOWjJBQUFLQW5Dbms9JykgZm9ybWF0KCd3b2ZmJyksXFxuICB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbmZvbnQudHRmP3Q9MTUzNzEwNDczMDM3MVwiKSkgKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCBcXG4gIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pY29uZm9udC5zdmc/dD0xNTM3MTA0NzMwMzcxXCIpKSArIFwiI2ljb25mb250KSBmb3JtYXQoJ3N2ZycpOyAvKiBpT1MgNC4xLSAqL1xcbn1cXG5cXG4uaWNvbmZvbnQge1xcbiAgZm9udC1mYW1pbHk6XFxcImljb25mb250XFxcIiAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOjE2cHg7XFxuICBmb250LXN0eWxlOm5vcm1hbDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLmljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFwzNDY0XFxcIjsgfVxcblxcbi5pY29uLWFycm93LWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFwzNDY1XFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXHJcbiAqIOi9ruaSreWbvuS4i+aWueeahOaMh+ekuuaMiemSru+8jOaOpeaUtuS4ieS4qiBwcm9wXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdvVG8g5YiH5o2i6L2u5pKt5Zu+55qE5Zue6LCD5Ye95pWw77yM5aSE55CG54K55Ye75LqL5Lu2XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0g5omA6ZyA6L2u5pKt5YaF5a6555qE5oC75pWwXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDlvZPliY3mmL7npLrlhoXlrrnnmoTnvJblj7dcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vY2hvaWNlTmF2Lmxlc3MnO1xyXG5cclxuY2xhc3MgQ2hvaWNlTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG51bSDmiYDpnIDova7mkq3lhoXlrrnnmoTmgLvmlbBcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSDov5Tlm57nlJ/miJDnmoTmlbDnu4RcclxuICAgICAqIOmAmui/hyBBcnJheS5maWxsIOWSjCBBcnJheS5tYXAg5pa55rOV55Sf5oiQ5LiA5Liq5pyJIG51bSDpobnnmoTmlbDnu4RcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQXJyYXkgPSAobnVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2QXJyYXkgPSBuZXcgQXJyYXkobnVtKTtcclxuICAgICAgICByZXR1cm4gbmF2QXJyYXkuZmlsbCgnJykubWFwKChpdGVtLCBpbmRleCkgPT4gaXRlbSArIGluZGV4KTtcclxuICAgIH1cclxuICAgIC8vIOaMh+ekuuaMiemSrueahOeCueWHu+S6i+S7tuWwhuaJgOeCueWHu+aMiemSrueahOW6j+WPt+S8oOmAkue7meeItue7hOS7tlxyXG4gICAgbmF2Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ29Ubyh3aW5kb3cucGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5rZXkpKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG51bSwgaW5kZXggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9pY2UtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBcnJheShudW0pLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmF2Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2hvaWNlLW5hdi1idG4gJHtrZXkgPT09IGluZGV4ID8gJ3NlbC1uYXYnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNob2ljZU5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgICBnb1RvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbnVtOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaG9pY2VOYXY7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nob2ljZU5hdi5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nob2ljZU5hdi5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaG9pY2VOYXYubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBDaG9pY2VOYXYgZnJvbSAnLi9jaG9pY2VOYXYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hvaWNlTmF2O1xyXG4iLCJpbXBvcnQgTW92ZW1lbnRBcnJvd3MgZnJvbSAnLi9tb3ZlbWVudEFycm93cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZlbWVudEFycm93cztcclxuIiwiLyoqXHJcbiAqIOi9ruaSreWbvuW3puWPs+eahOWIh+aNouaMiemSru+8jOaOpeaUtuS4ieS4qiBwcm9wXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdvTW92ZSDlt6blj7PliIfmjaLnmoTlm57osIPlh73mlbBcclxuICogQHBhcmFtIHtCb29sZWFufSBpY29uTGVmdCDmjqfliLblt6bliIfmjaLmmL7npLpcclxuICogQHBhcmFtIHtCb29sZWFufSBpY29uUmlnaHQg5o6n5Yi25Y+z5YiH5o2i5pi+56S6XHJcbiAqIGljb25MZWZ0IOWSjCBpY29uUmlnaHQg5piv5Li65LqG5Lul5ZCO5omL5py656uv6Kem5ruR5Yqo5pe25pi+56S65YiH5o2i5oyJ6ZKu5omA6aKE55WZ55qEXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL21vdmVtZW50QXJyb3dzLmxlc3MnO1xyXG5pbXBvcnQgJy4uLy4uL2ljb25mb250L2ljb25mb250LmNzcyc7XHJcblxyXG5jbGFzcyBNb3ZlbWVudEFycm93cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpY29uTGVmdDogcHJvcHMuaWNvbkxlZnQsXHJcbiAgICAgICAgICAgIGljb25SaWdodDogcHJvcHMuaWNvblJpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWNvbkxlZnQ6IG5leHRQcm9wcy5pY29uTGVmdCxcclxuICAgICAgICAgICAgaWNvblJpZ2h0OiBuZXh0UHJvcHMuaWNvblJpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGljb25MZWZ0LCBpY29uUmlnaHQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZlbWVudC1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uZm9udCBpY29uLWFycm93LWxlZnQgJHtpY29uTGVmdCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvTW92ZSgnZG93bicpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uZm9udCBpY29uLWFycm93LXJpZ2h0ICR7aWNvblJpZ2h0ID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ29Nb3ZlKCd1cCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTW92ZW1lbnRBcnJvd3MucHJvcFR5cGVzID0ge1xyXG4gICAgZ29Nb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgaWNvbkxlZnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaWNvblJpZ2h0OiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuTW92ZW1lbnRBcnJvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWNvbkxlZnQ6IGZhbHNlLFxyXG4gICAgaWNvblJpZ2h0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92ZW1lbnRBcnJvd3M7XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vdmVtZW50QXJyb3dzLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92ZW1lbnRBcnJvd3MubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92ZW1lbnRBcnJvd3MubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQaWN0dXJlUm90YXRpb24gZnJvbSAnLi9waWN0dXJlUm90YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZVJvdGF0aW9uO1xyXG4iLCIvKipcclxuICog6L2u5pKt5Zu+6L2u5pKt5YaF5a655Yy65Z+f77yM5o6l5pS25LqU5Liq5Y+C5pWwXHJcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRyZW4g6ZyA6KaB6L2u5pKt55qE5YaF5a6577yM5L2/55So6K+l57uE5Lu25pe25Lyg5YWlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFmdGVyQ2hhbmdlIOi9ruaSreWKqOeUu+e7k+adn+WQjueahOWbnuiwg+WHveaVsFxyXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXgg5b2T5YmN5pi+56S65YaF5a6555qE57yW5Y+3XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24g6ZyA6KaB5YiH5o2i6L2u5pKt55qE5pa55ZCRXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcg5o6n5Yi26L2u5pKt5Zu+55qE5Yqo55S75YiH5o2i5pWI5p6cXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xyXG5cclxuaW1wb3J0ICcuL3BpY3R1cmVSb3RhdGlvbi5sZXNzJztcclxuXHJcbmNsYXNzIFBpY3R1cmVSb3RhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAvLyBUcmFuc2l0aW9uIOeahOaWueazle+8jOeUqOS6juinpuWPkei9ruaSreWKqOeUu+e7k+adn+WQjueahOWbnuiwg+WHveaVsFxyXG4gICAgb25FbnRlcmVkID0gKG5vZGUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmFmdGVyQ2hhbmdlKHdpbmRvdy5wYXJzZUludChub2RlLmRhdGFzZXQuaW5kZXgpKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBlYXNpbmdcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtcm90YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24gb25FbnRlcmVkPXt0aGlzLm9uRW50ZXJlZH0gaW49e2luZGV4ID09PSBrZXl9IHRpbWVvdXQ9ezMwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyZWQ6ICdyb3RhdGlvbi1lbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0ZWQ6ICdyb3RhdGlvbi1leGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyaW5nOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyb3RhdGlvbi1yaWdodC10by1jZW50ZXInIDogJ3JvdGF0aW9uLWxlZnQtdG8tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRpbmc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JvdGF0aW9uLWNlbnRlci10by1sZWZ0JyA6ICdyb3RhdGlvbi1jZW50ZXItdG8tcmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm90YXRpb24taXRlbSAke2NsYXNzTmFtZVtzdGF0ZV19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblBpY3R1cmVSb3RhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogJycsXHJcbiAgICBkaXJlY3Rpb246ICdsZWZ0JyxcclxuICAgIGFmdGVyQ2hhbmdlOiAoKSA9PiB7fVxyXG59O1xyXG5cclxuUGljdHVyZVJvdGF0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFmdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBlYXNpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZVJvdGF0aW9uO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9waWN0dXJlUm90YXRpb24ubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9waWN0dXJlUm90YXRpb24ubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGljdHVyZVJvdGF0aW9uLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICog6L2u5pKt5Zu+5o+S5Lu255qE54i257uE5Lu2XHJcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRyZW4g6ZyA6KaB6L2u5pKt55qE5YaF5a65XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGJlZm9yZUNoYW5nZSDliIfmjaLliqjnlLvkuYvliY3nmoTlm57osIPlh73mlbBcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWZ0ZXJDaGFuZ2Ug5YiH5o2i5Yqo55S75LmL5ZCO55qE5Zue6LCD5Ye95pWwXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0b3BsYXkg5piv5ZCm6Ieq5Yqo6L2u5pKtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IOi9ruaSreeahOaXtumXtOW3rlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRvdHMg5piv5ZCm5pi+56S65oyH56S65p2h5Y+K5YiH5o2i5oyJ6ZKuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlYXNpbmcg5Yqo55S75YiH5o2i5pWI5p6cXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IENob2ljZU5hdiBmcm9tICcuL2Nob2ljZU5hdic7XHJcbmltcG9ydCBNb3ZlbWVudEFycm93cyBmcm9tICcuL21vdmVtZW50QXJyb3dzJztcclxuaW1wb3J0IFBpY3R1cmVSb3RhdGlvbiBmcm9tICcuL3BpY3R1cmVSb3RhdGlvbic7XHJcblxyXG5pbXBvcnQgJy4vcm90YXRpb25NYXAubGVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3RhdGlvbk1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnJyxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHByb3BzLmF1dG9wbGF5LFxyXG4gICAgICAgICAgICB0aW1lb3V0OiBwcm9wcy50aW1lb3V0LFxyXG4gICAgICAgICAgICBpY29uTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25SaWdodDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhdXRvcGxheTogbmV4dFByb3BzLmF1dG9wbGF5LFxyXG4gICAgICAgICAgICB0aW1lb3V0OiBuZXh0UHJvcHMudGltZW91dFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmJlZ2luQXV0b1BsYXkoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGF1dG9wbGF5LCB0aW1lb3V0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGF1dG9wbGF5IOS4uiB0cnVlIOeahOaDheWGteS4i+avlOi+gyB0aW1lb3V0IOWJjeWQjuWAvCDvvIzlpoLmnpzkuI3kuIDoh7TlhbPpl63lrprml7blmajph43mlrDmiZPlvIBcclxuICAgICAgICAgKiBhdXRvcGxheSDnmoTliY3lkI7lgLzkuI3lkIzkuJQgYXV0b3BsYXkg5Li6IHRydWUg55qE5oOF5Ya15LiL5byA5ZCv5a6a5pe25ZmoXHJcbiAgICAgICAgICogYXV0b3BsYXkg55qE5YmN5ZCO5YC85LiN5ZCM5LiUIGF1dG9wbGF5IOS4uiBmYWxzZSDnmoTmg4XlhrXkuIvlhbPpl63lrprml7blmahcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoYXV0b3BsYXkgJiYgdGltZW91dCAhPT0gcHJldlByb3BzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5iZWdpbkF1dG9QbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdXRvcGxheSAhPT0gcHJldlByb3BzLmF1dG9wbGF5ICYmIGF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5BdXRvUGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXV0b3BsYXkgIT09IHByZXZQcm9wcy5hdXRvcGxheSAmJiAhYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOm8oOagh+enu+WHuui9ruaSreWbvuiMg+WbtOaXtuW8gOWQr+WumuaXtuWZqFxyXG4gICAgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYmVnaW5BdXRvUGxheSgpO1xyXG4gICAgfVxyXG4gICAgLy8g6byg5qCH56e75YWl6L2u5pKt5Zu+6IyD5Zu05pe25YWz6Zet5a6a5pe25ZmoXHJcbiAgICBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcclxuICAgIH1cclxuICAgIC8vIOinpuaRuOa7keWKqOS6i+S7tlxyXG4gICAgb25Ub3VjaE1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIOWIpOaWrem7mOiupOihjOS4uuaYr+WQpuWPr+S7peiiq+emgeeUqFxyXG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcclxuICAgICAgICAgICAgLy8g5Yik5pat6buY6K6k6KGM5Li65piv5ZCm5bey57uP6KKr56aB55SoXHJcbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5ruR5Yqo5pa55ZCR55qE566t5aS05pi+56S6XHJcbiAgICAgICAgY29uc3QgW3RvdWNoXSA9IGUubmF0aXZlRXZlbnQudGFyZ2V0VG91Y2hlcztcclxuICAgICAgICBjb25zdCB7IHBhZ2VYIH0gPSB0b3VjaDtcclxuICAgICAgICBpZiAodGhpcy50b3VjaFN0YXJ0IHx8IHRoaXMudG91Y2hTdGFydCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgaWNvbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGljb25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocGFnZVggLSAxMCA+IHRoaXMudG91Y2hTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgaWNvbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2VYICsgMTAgPCB0aGlzLnRvdWNoU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIGljb25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uTGVmdCxcclxuICAgICAgICAgICAgICAgIGljb25SaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDop6bmkbjlvIDlp4vml7borrDlvZXlvZPliY3lnZDmoIdcclxuICAgIG9uVG91Y2hTdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnQgPSBlLm5hdGl2ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICB9XHJcbiAgICAvLyDop6bmkbjnu5PmnZ/ml7bop6blj5Hlr7nlupTliIfmjaLkuovku7ZcclxuICAgIG9uVG91Y2hFbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkF1dG9QbGF5KCk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCB7IGljb25MZWZ0LCBpY29uUmlnaHQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKGljb25MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Nb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpY29uUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5nb01vdmUoJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpY29uTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25SaWdodDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGJlZ2luQXV0b1BsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhdXRvcGxheSwgdGltZW91dCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAvLyBhdXRvcGxheSDlvIDlkK/lkowgdGltZW91dCDmraPnoa7nmoTmg4XlhrXkuIvlvIDlkK/oh6rliqjova7mkq3lrprml7blmahcclxuICAgICAgICBpZiAodGhpcy5jbGVhckludGVydmFsID09PSB1bmRlZmluZWQgJiYgYXV0b3BsYXkgJiYgdGltZW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmdvTW92ZSgndXAnKSwgdGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcEF1dG9QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNsZWFySW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFySW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oq96LGh55qE6L2u5pKt5o6n5Yi277yM6LCD55So6L+Z5Liq5Ye95pWw5p2l55yf5q2j55qE5L+u5pS5IHN0YXRlIOinpuWPkei9ruaSreWbvuWPmOWMllxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOi9ruaSreWbvuWGheWuueeahOW6j+WPt1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiDova7mkq3lm77liIfmjaLnmoTmlrnlkJFcclxuICAgICAqL1xyXG4gICAgY2hhbmdlU3RhdGUgPSAoaW5kZXgsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIC8vIOiwg+eUqCBiZWZvcmVDaGFuZ2Ug5Zue6LCD5Ye95pWw5Ye95pWwKCBiZWZvcmVDaGFuZ2Ug5Li65pq06Zyy5L2/55So55qE5pa55rOVKVxyXG4gICAgICAgIHRoaXMucHJvcHMuYmVmb3JlQ2hhbmdlKHRoaXMuc3RhdGUuaW5kZXgsIGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXgsIGRpcmVjdGlvbiB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o6n5Yi26L2u5pKt5Zu+5bem5Y+z5YiH5o2i55qE5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gICAgICogdHlwZSDlgLzlj6rmnInkuKTkuKogJ3VwJyDlkowgJ2Rvd24nIOS7o+ihqOedgOWQkeWJjeWSjOWQkeWQjlxyXG4gICAgICovXHJcbiAgICBnb01vdmUgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGluZGV4IDwgbGVuIC0gMSA/IGluZGV4ICsgMSA6IDAsICdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGluZGV4ID4gMCA/IGluZGV4IC0gMSA6IGxlbiAtIDEsICdyaWdodCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVGhlIGNhcm91c2VsIGhhcyBhbiBlcnJvciEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaOp+WItui9ruaSreWbvumaj+aEj+WIh+aNoueahOWHveaVsFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbCDlnKjmraPluLjojIPlm7TlhoXnmoTmlbDlrZfvvIzliIfmjaLoh7Pluo/lj7fmiYDlr7nlupTnmoTlhoXlrrlcclxuICAgICAqL1xyXG4gICAgZ29UbyA9ICh2YWwpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCA+PSAwICYmIHZhbCA8IGxlbikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKHZhbCwgaW5kZXggPCB2YWwgPyAnbGVmdCcgOiAncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBpY29uTGVmdCxcclxuICAgICAgICAgICAgaWNvblJpZ2h0XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2UsXHJcbiAgICAgICAgICAgIGRvdHMsXHJcbiAgICAgICAgICAgIGVhc2luZ1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IENob2ljZU5hdlByb3BzID0ge1xyXG4gICAgICAgICAgICBnb1RvOiB0aGlzLmdvVG8sXHJcbiAgICAgICAgICAgIG51bTogY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLm9uVG91Y2hTdGFydH1cclxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMub25Ub3VjaEVuZH1cclxuICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXt0aGlzLm9uVG91Y2hNb3ZlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlRW50ZXJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1yb3RhdGlvbi1tYXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9pY2VOYXYgey4uLkNob2ljZU5hdlByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmVtZW50QXJyb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkxlZnQ9e2ljb25MZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25SaWdodD17aWNvblJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvTW92ZT17dGhpcy5nb01vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlUm90YXRpb25cclxuICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17YWZ0ZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZz17ZWFzaW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9QaWN0dXJlUm90YXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJvdGF0aW9uTWFwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiAnJyxcclxuICAgIGJlZm9yZUNoYW5nZTogKCkgPT4ge30sXHJcbiAgICBhZnRlckNoYW5nZTogKCkgPT4ge30sXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICB0aW1lb3V0OiAzMDAwLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGVhc2luZzogJ2xpbmVhcidcclxufTtcclxuXHJcblJvdGF0aW9uTWFwLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIGJlZm9yZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBhZnRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBhdXRvcGxheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0aW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZG90czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBlYXNpbmc6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm90YXRpb25NYXAubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb3RhdGlvbk1hcC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yb3RhdGlvbk1hcC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaWNvbmZvbnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ljb25mb250LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaWNvbmZvbnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTJlMDQyYjVjYTBjYTI1NDRlMjNiMGZlNGE4YTg2NmMuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlh5QXJJQ0l6T0RVME1EbGpNbVV6T0RVM1pXVXdOMkV5T0RkbU0yRm1aR1EyWWpJNU1TNXpkbWNpT3c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmI2MDJmNjhlYTQ2ZjRkODMyYzYyYThkOTJkMDdlMWUudHRmXCI7IiwiaW1wb3J0IFJvdGF0aW9uTWFwIGZyb20gJy4vY29tcG9uZW50L3JvdGF0aW9uTWFwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdGF0aW9uTWFwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==