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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/choiceNav/choiceNav.less":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/components/choiceNav/choiceNav.less ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choice-nav {\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.choice-nav > button.choice-nav-btn {\n  width: 18px;\n  height: 3px;\n  margin: 10px 3px;\n  border-radius: 1px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #333;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.choice-nav .sel-nav.choice-nav-btn {\n  width: 25px;\n  background-color: #fff;\n  border: 1px solid rgba(66, 66, 66, .5);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/movementArrows/movementArrows.less":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/components/movementArrows/movementArrows.less ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movement-arrows button.iconfont {\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  width: 10%;\n  height: 100%;\n  background: rgba(33, 33, 33, 0);\n  color: rgba(255, 255, 255, 0);\n  font-size: 32px;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n}\n.movement-arrows button.iconfont:hover,\n.movement-arrows button.iconfont:focus {\n  background: rgba(33, 33, 33, .1);\n  color: rgba(255, 255, 255, .5);\n}\n.movement-arrows button.iconfont:active,\n.movement-arrows button.iconfont.active {\n  background: rgba(33, 33, 33, .2);\n  color: rgba(255, 255, 255, .8);\n}\n.movement-arrows button.iconfont:first-child {\n  left: 0;\n}\n.movement-arrows button.iconfont:last-child {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/pictureRotation/pictureRotation.less":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/components/pictureRotation/pictureRotation.less ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picture-rotation {\n  position: relative;\n  height: 100%;\n}\n.rotation-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-animation-fill-mode: forwards !important;\n          animation-fill-mode: forwards !important;\n}\n.rotation-enter {\n  left: 0;\n}\n.rotation-exit {\n  display: none;\n}\n.rotation-center-to-left {\n  -webkit-animation: 0.3s animation-center-to-left;\n          animation: 0.3s animation-center-to-left;\n}\n.rotation-right-to-center {\n  -webkit-animation: 0.3s animation-right-to-center;\n          animation: 0.3s animation-right-to-center;\n}\n.rotation-center-to-right {\n  -webkit-animation: 0.3s animation-center-to-right;\n          animation: 0.3s animation-center-to-right;\n}\n.rotation-left-to-center {\n  -webkit-animation: 0.3s animation-left-to-center;\n          animation: 0.3s animation-left-to-center;\n}\n@-webkit-keyframes animation-center-to-left {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: -20%;\n    opacity: 0.2;\n  }\n}\n@keyframes animation-center-to-left {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: -20%;\n    opacity: 0.2;\n  }\n}\n@-webkit-keyframes animation-right-to-center {\n  0% {\n    left: 20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes animation-right-to-center {\n  0% {\n    left: 20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animation-center-to-right {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: 20%;\n    opacity: 0.2;\n  }\n}\n@keyframes animation-center-to-right {\n  0% {\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    left: 20%;\n    opacity: 0.2;\n  }\n}\n@-webkit-keyframes animation-left-to-center {\n  0% {\n    left: -20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes animation-left-to-center {\n  0% {\n    left: -20%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/rotationMap.less":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/components/rotationMap.less ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-rotation-map {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: none;\n      touch-action: none;\n}\n.react-rotation-map button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/font/iconfont.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/font/iconfont.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: \"iconfont\";\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1537104730371 */ "./src/font/iconfont.eot?t=1537104730371")) + "); /* IE9*/\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1537104730371 */ "./src/font/iconfont.eot?t=1537104730371")) + "#iefix) format('embedded-opentype'), \n  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAQQAAsAAAAABnAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFaK2ZZXY21hcAAAAYAAAABTAAABfgY3OQ1nbHlmAAAB1AAAAEcAAABQLGBTvGhlYWQAAAIcAAAALwAAADYSqDzFaGhlYQAAAkwAAAAcAAAAJAfeA4RobXR4AAACaAAAAAwAAAAMDAAAAGxvY2EAAAJ0AAAACAAAAAgAFAAobWF4cAAAAnwAAAAfAAAAIAEOABJuYW1lAAACnAAAAUUAAAJtPlT+fXBvc3QAAAPkAAAALAAAAEWJtqeYeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBxMUkxSmRv+NzDEMDcwNACFGUFyAM+kC0gAeJxjYGBgZWBgYAZiHSBmYWBgDGNgZACBAKAoI1icmYELLM7CoAJWwwISN0n9/x9IpoBIIJ8FTDIBCTaGUcADJjWgPCZQOEEwJOQgmIEJAPAxCX0AeJxjYGRg+D+FuYi5gYGVgYGTUZmT0Zi58J/sfcbHIKKCiePvj38yDAwMKOpYjYEqGZkm3f8ny/gYSOQwPgEpBCoDAGXYF40AeJxjYGRgYADihX+2voznt/nKwM3CAALXj9REIej/U1gYmBuAXA4GJpAoAGsVC/IAeJxjYGRgYG7438AQw8IAAkCSkQEVMAMARwkCbAQAAAAEAAAABAAAAAAAAAAAFAAoeJxjYGRgYGBmYGMA0QwMTEDMBYQMDP/BfAYACUgBIQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgacwMzWjNDGvMLMyvxTBqSrNZ2AAAKAnCnk=') format('woff'),\n  url(" + escape(__webpack_require__(/*! ./iconfont.ttf?t=1537104730371 */ "./src/font/iconfont.ttf?t=1537104730371")) + ") format('truetype'), \n  url(" + escape(__webpack_require__(/*! ./iconfont.svg?t=1537104730371 */ "./src/font/iconfont.svg?t=1537104730371")) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-arrow-right:before { content: \"\\3464\"; }\n\n.icon-arrow-left:before { content: \"\\3465\"; }\n", ""]);

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

/***/ "./src/components/choiceNav/choiceNav.jsx":
/*!************************************************!*\
  !*** ./src/components/choiceNav/choiceNav.jsx ***!
  \************************************************/
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

__webpack_require__(/*! ./choiceNav.less */ "./src/components/choiceNav/choiceNav.less");

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

/***/ "./src/components/choiceNav/choiceNav.less":
/*!*************************************************!*\
  !*** ./src/components/choiceNav/choiceNav.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./choiceNav.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/choiceNav/choiceNav.less");

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

/***/ "./src/components/choiceNav/index.jsx":
/*!********************************************!*\
  !*** ./src/components/choiceNav/index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _choiceNav = __webpack_require__(/*! ./choiceNav */ "./src/components/choiceNav/choiceNav.jsx");

var _choiceNav2 = _interopRequireDefault(_choiceNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _choiceNav2.default;

/***/ }),

/***/ "./src/components/movementArrows/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/movementArrows/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementArrows = __webpack_require__(/*! ./movementArrows */ "./src/components/movementArrows/movementArrows.jsx");

var _movementArrows2 = _interopRequireDefault(_movementArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _movementArrows2.default;

/***/ }),

/***/ "./src/components/movementArrows/movementArrows.jsx":
/*!**********************************************************!*\
  !*** ./src/components/movementArrows/movementArrows.jsx ***!
  \**********************************************************/
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

__webpack_require__(/*! ./movementArrows.less */ "./src/components/movementArrows/movementArrows.less");

__webpack_require__(/*! ../../font/iconfont.css */ "./src/font/iconfont.css");

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

/***/ "./src/components/movementArrows/movementArrows.less":
/*!***********************************************************!*\
  !*** ./src/components/movementArrows/movementArrows.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./movementArrows.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/movementArrows/movementArrows.less");

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

/***/ "./src/components/pictureRotation/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/pictureRotation/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pictureRotation = __webpack_require__(/*! ./pictureRotation */ "./src/components/pictureRotation/pictureRotation.jsx");

var _pictureRotation2 = _interopRequireDefault(_pictureRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pictureRotation2.default;

/***/ }),

/***/ "./src/components/pictureRotation/pictureRotation.jsx":
/*!************************************************************!*\
  !*** ./src/components/pictureRotation/pictureRotation.jsx ***!
  \************************************************************/
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

__webpack_require__(/*! ./pictureRotation.less */ "./src/components/pictureRotation/pictureRotation.less");

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

/***/ "./src/components/pictureRotation/pictureRotation.less":
/*!*************************************************************!*\
  !*** ./src/components/pictureRotation/pictureRotation.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js!./pictureRotation.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/pictureRotation/pictureRotation.less");

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

/***/ "./src/components/rotationMap.jsx":
/*!****************************************!*\
  !*** ./src/components/rotationMap.jsx ***!
  \****************************************/
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

var _choiceNav = __webpack_require__(/*! ./choiceNav */ "./src/components/choiceNav/index.jsx");

var _choiceNav2 = _interopRequireDefault(_choiceNav);

var _movementArrows = __webpack_require__(/*! ./movementArrows */ "./src/components/movementArrows/index.jsx");

var _movementArrows2 = _interopRequireDefault(_movementArrows);

var _pictureRotation = __webpack_require__(/*! ./pictureRotation */ "./src/components/pictureRotation/index.jsx");

var _pictureRotation2 = _interopRequireDefault(_pictureRotation);

__webpack_require__(/*! ./rotationMap.less */ "./src/components/rotationMap.less");

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

/***/ "./src/components/rotationMap.less":
/*!*****************************************!*\
  !*** ./src/components/rotationMap.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/less-loader/dist/cjs.js!./rotationMap.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/rotationMap.less");

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

/***/ "./src/font/iconfont.css":
/*!*******************************!*\
  !*** ./src/font/iconfont.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./iconfont.css */ "./node_modules/css-loader/index.js!./src/font/iconfont.css");

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

/***/ "./src/font/iconfont.eot?t=1537104730371":
/*!***********************************************!*\
  !*** ./src/font/iconfont.eot?t=1537104730371 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2e042b5ca0ca2544e23b0fe4a8a866c.eot";

/***/ }),

/***/ "./src/font/iconfont.svg?t=1537104730371":
/*!***********************************************!*\
  !*** ./src/font/iconfont.svg?t=1537104730371 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICIzODU0MDljMmUzODU3ZWUwN2EyODdmM2FmZGQ2YjI5MS5zdmciOw=="

/***/ }),

/***/ "./src/font/iconfont.ttf?t=1537104730371":
/*!***********************************************!*\
  !*** ./src/font/iconfont.ttf?t=1537104730371 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b602f68ea46f4d832c62a8d92d07e1e.ttf";

/***/ }),

/***/ "./src/public.js":
/*!***********************!*\
  !*** ./src/public.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rotationMap = __webpack_require__(/*! ./components/rotationMap */ "./src/components/rotationMap.jsx");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hvaWNlTmF2L2Nob2ljZU5hdi5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vdmVtZW50QXJyb3dzL21vdmVtZW50QXJyb3dzLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGljdHVyZVJvdGF0aW9uL3BpY3R1cmVSb3RhdGlvbi5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdGF0aW9uTWFwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQvaWNvbmZvbnQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9pY2VOYXYvY2hvaWNlTmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9pY2VOYXYvY2hvaWNlTmF2Lmxlc3M/NWIyZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaG9pY2VOYXYvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vdmVtZW50QXJyb3dzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb3ZlbWVudEFycm93cy9tb3ZlbWVudEFycm93cy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92ZW1lbnRBcnJvd3MvbW92ZW1lbnRBcnJvd3MubGVzcz9hYmQxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BpY3R1cmVSb3RhdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGljdHVyZVJvdGF0aW9uL3BpY3R1cmVSb3RhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGljdHVyZVJvdGF0aW9uL3BpY3R1cmVSb3RhdGlvbi5sZXNzP2Q1OWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm90YXRpb25NYXAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JvdGF0aW9uTWFwLmxlc3M/MTJjMiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9pY29uZm9udC5jc3M/MWFhYiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9pY29uZm9udC5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQvaWNvbmZvbnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9mb250L2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cIiJdLCJuYW1lcyI6WyJDaG9pY2VOYXYiLCJjcmVhdGVBcnJheSIsIm51bSIsIm5hdkFycmF5IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmF2Q2xpY2siLCJlIiwicHJvcHMiLCJnb1RvIiwid2luZG93IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwia2V5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIk1vdmVtZW50QXJyb3dzIiwic3RhdGUiLCJpY29uTGVmdCIsImljb25SaWdodCIsImdvTW92ZSIsIm5leHRQcm9wcyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJQaWN0dXJlUm90YXRpb24iLCJvbkVudGVyZWQiLCJub2RlIiwiYWZ0ZXJDaGFuZ2UiLCJjaGlsZHJlbiIsImRpcmVjdGlvbiIsImVhc2luZyIsIkNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZW50ZXJlZCIsImV4aXRlZCIsImVudGVyaW5nIiwiZXhpdGluZyIsInN0eWxlIiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJzdHJpbmciLCJSb3RhdGlvbk1hcCIsIm9uTW91c2VMZWF2ZSIsImJlZ2luQXV0b1BsYXkiLCJvbk1vdXNlRW50ZXIiLCJzdG9wQXV0b1BsYXkiLCJvblRvdWNoTW92ZSIsImNhbmNlbGFibGUiLCJkZWZhdWx0UHJldmVudGVkIiwicHJldmVudERlZmF1bHQiLCJuYXRpdmVFdmVudCIsInRhcmdldFRvdWNoZXMiLCJ0b3VjaCIsInBhZ2VYIiwidG91Y2hTdGFydCIsInNldFN0YXRlIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsImF1dG9wbGF5IiwidGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ1bmRlZmluZWQiLCJzZXRJbnRlcnZhbCIsImNoYW5nZVN0YXRlIiwiYmVmb3JlQ2hhbmdlIiwidHlwZSIsImxlbiIsImxlbmd0aCIsIkVycm9yIiwidmFsIiwicHJldlByb3BzIiwiZG90cyIsIkNob2ljZU5hdlByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBOzs7QUFHQTtBQUNBLHNDQUF1Qyx1QkFBdUIsa0JBQWtCLGNBQWMsY0FBYyx3Q0FBd0Msd0NBQXdDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEdBQUcsdUNBQXVDLGdCQUFnQixnQkFBZ0IscUJBQXFCLHVCQUF1QixtQ0FBbUMsbUNBQW1DLDJCQUEyQixpQkFBaUIsd0NBQXdDLGdDQUFnQyxHQUFHLHVDQUF1QyxnQkFBZ0IsMkJBQTJCLDJDQUEyQyxHQUFHOztBQUVuckI7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMkRBQTRELHVCQUF1QixXQUFXLGtCQUFrQixlQUFlLGlCQUFpQixvQ0FBb0Msa0NBQWtDLG9CQUFvQix3Q0FBd0MsZ0NBQWdDLEdBQUcsbUZBQW1GLHFDQUFxQyxtQ0FBbUMsR0FBRyxxRkFBcUYscUNBQXFDLG1DQUFtQyxHQUFHLGdEQUFnRCxZQUFZLEdBQUcsK0NBQStDLGFBQWEsR0FBRzs7QUFFanZCOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDRDQUE2Qyx1QkFBdUIsaUJBQWlCLEdBQUcsa0JBQWtCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLFdBQVcsWUFBWSxxREFBcUQscURBQXFELEdBQUcsbUJBQW1CLFlBQVksR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsNEJBQTRCLHFEQUFxRCxxREFBcUQsR0FBRyw2QkFBNkIsc0RBQXNELHNEQUFzRCxHQUFHLDZCQUE2QixzREFBc0Qsc0RBQXNELEdBQUcsNEJBQTRCLHFEQUFxRCxxREFBcUQsR0FBRywrQ0FBK0MsUUFBUSxjQUFjLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLG1CQUFtQixLQUFLLEdBQUcsdUNBQXVDLFFBQVEsY0FBYyxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixtQkFBbUIsS0FBSyxHQUFHLGdEQUFnRCxRQUFRLGdCQUFnQixtQkFBbUIsS0FBSyxVQUFVLGNBQWMsaUJBQWlCLEtBQUssR0FBRyx3Q0FBd0MsUUFBUSxnQkFBZ0IsbUJBQW1CLEtBQUssVUFBVSxjQUFjLGlCQUFpQixLQUFLLEdBQUcsZ0RBQWdELFFBQVEsY0FBYyxpQkFBaUIsS0FBSyxVQUFVLGdCQUFnQixtQkFBbUIsS0FBSyxHQUFHLHdDQUF3QyxRQUFRLGNBQWMsaUJBQWlCLEtBQUssVUFBVSxnQkFBZ0IsbUJBQW1CLEtBQUssR0FBRywrQ0FBK0MsUUFBUSxpQkFBaUIsbUJBQW1CLEtBQUssVUFBVSxjQUFjLGlCQUFpQixLQUFLLEdBQUcsdUNBQXVDLFFBQVEsaUJBQWlCLG1CQUFtQixLQUFLLFVBQVUsY0FBYyxpQkFBaUIsS0FBSyxHQUFHOztBQUVqZ0U7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOENBQStDLHVCQUF1QixxQkFBcUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsMkJBQTJCLEdBQUcsOEJBQThCLGNBQWMsZUFBZSxjQUFjLGtCQUFrQixHQUFHOztBQUVuUjs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHVDQUF3Qyw4QkFBOEIsbUlBQXdFLHFOQUEwSixjQUFjLDRxREFBc2pELGtCQUFrQixlQUFlLHdDQUF3QyxtQkFBbUIsc0JBQXNCLHdDQUF3Qyx1Q0FBdUMsR0FBRyw4QkFBOEIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFOztBQUV6cEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUVBOzs7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs7O3NOQU1GQyxXLEdBQWMsVUFBQ0MsR0FBRCxFQUFTO0FBQ25CLGdCQUFNQyxXQUFXLElBQUlDLEtBQUosQ0FBVUYsR0FBVixDQUFqQjtBQUNBLG1CQUFPQyxTQUFTRSxJQUFULENBQWMsRUFBZCxFQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsdUJBQWlCRCxPQUFPQyxLQUF4QjtBQUFBLGFBQXRCLENBQVA7QUFDSCxTLFFBRURDLFEsR0FBVyxVQUFDQyxDQUFELEVBQU87QUFDZCxrQkFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxPQUFPQyxRQUFQLENBQWdCSixFQUFFSyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEdBQWpDLENBQWhCO0FBQ0gsUzs7QUFaRDs7Ozs7O0FBU0E7Ozs7O2lDQUlTO0FBQUE7O0FBQUEseUJBQ2tCLEtBQUtOLEtBRHZCO0FBQUEsZ0JBQ0dULEdBREgsVUFDR0EsR0FESDtBQUFBLGdCQUNRTSxLQURSLFVBQ1FBLEtBRFI7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUVRLHFCQUFLUCxXQUFMLENBQWlCQyxHQUFqQixFQUFzQkksR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFPVSxHQUFQO0FBQUEsMkJBQ3RCO0FBQ0ksaUNBQVMsT0FBS1IsUUFEbEI7QUFFSSxvQ0FBVVEsR0FGZDtBQUdJLHdEQUE2QkEsUUFBUVQsS0FBUixHQUFnQixTQUFoQixHQUE0QixFQUF6RCxDQUhKO0FBSUksa0NBQVFEO0FBSlosc0JBRHNCO0FBQUEsaUJBQTFCO0FBRlIsYUFESjtBQWNIOzs7RUE5Qm1CVyxnQkFBTUMsUyxHQVg5Qjs7Ozs7Ozs7QUE0Q0FuQixVQUFVb0IsU0FBVixHQUFzQjtBQUNsQlIsVUFBTVMsb0JBQVVDLElBQVYsQ0FBZUMsVUFESDtBQUVsQnJCLFNBQUttQixvQkFBVUcsTUFBVixDQUFpQkQsVUFGSjtBQUdsQmYsV0FBT2Esb0JBQVVHLE1BQVYsQ0FBaUJEO0FBSE4sQ0FBdEI7O2tCQU1ldkIsUzs7Ozs7Ozs7Ozs7O0FDakRmOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7a0JBRWVBLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVleUIsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS2Y7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBWEE7Ozs7Ozs7SUFhTUEsYzs7O0FBQ0YsNEJBQVlkLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSkFDVEEsS0FEUzs7QUFFZixjQUFLZSxLQUFMLEdBQWE7QUFDVEMsc0JBQVVoQixNQUFNZ0IsUUFEUDtBQUVUQyx1QkFBV2pCLE1BQU1pQjtBQUZSLFNBQWI7QUFGZTtBQU1sQjs7OztpQ0FPUTtBQUFBOztBQUFBLHlCQUMyQixLQUFLRixLQURoQztBQUFBLGdCQUNHQyxRQURILFVBQ0dBLFFBREg7QUFBQSxnQkFDYUMsU0FEYixVQUNhQSxTQURiOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFDSSw4REFBdUNELFdBQVcsUUFBWCxHQUFzQixFQUE3RCxDQURKO0FBRUksNkJBQVM7QUFBQSwrQkFBTSxPQUFLaEIsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQixNQUFsQixDQUFOO0FBQUE7QUFGYixrQkFESjtBQUtJO0FBQ0ksK0RBQXdDRCxZQUFZLFFBQVosR0FBdUIsRUFBL0QsQ0FESjtBQUVJLDZCQUFTO0FBQUEsK0JBQU0sT0FBS2pCLEtBQUwsQ0FBV2tCLE1BQVgsQ0FBa0IsSUFBbEIsQ0FBTjtBQUFBO0FBRmI7QUFMSixhQURKO0FBWUg7OztpREFwQitCQyxTLEVBQVc7QUFDdkMsbUJBQU87QUFDSEgsMEJBQVVHLFVBQVVILFFBRGpCO0FBRUhDLDJCQUFXRSxVQUFVRjtBQUZsQixhQUFQO0FBSUg7OztFQWJ3QlYsZ0JBQU1DLFM7O0FBK0JuQ00sZUFBZUwsU0FBZixHQUEyQjtBQUN2QlMsWUFBUVIsb0JBQVVDLElBQVYsQ0FBZUMsVUFEQTtBQUV2QkksY0FBVU4sb0JBQVVVLElBRkc7QUFHdkJILGVBQVdQLG9CQUFVVTtBQUhFLENBQTNCOztBQU1BTixlQUFlTyxZQUFmLEdBQThCO0FBQzFCTCxjQUFVLEtBRGdCO0FBRTFCQyxlQUFXO0FBRmUsQ0FBOUI7O2tCQUtlSCxjOzs7Ozs7Ozs7Ozs7QUN0RGY7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7OztrQkFFZVEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFaQTs7Ozs7Ozs7SUFjTUEsZTs7Ozs7Ozs7Ozs7Ozs7a09BRUZDLFMsR0FBWSxVQUFDQyxJQUFELEVBQVU7QUFDbEIsa0JBQUt4QixLQUFMLENBQVd5QixXQUFYLENBQXVCdkIsT0FBT0MsUUFBUCxDQUFnQnFCLEtBQUtuQixPQUFMLENBQWFSLEtBQTdCLENBQXZCO0FBQ0gsUzs7QUFIRDs7Ozs7aUNBSVM7QUFBQTs7QUFBQSx5QkFNRCxLQUFLRyxLQU5KO0FBQUEsZ0JBRUQwQixRQUZDLFVBRURBLFFBRkM7QUFBQSxnQkFHRDdCLEtBSEMsVUFHREEsS0FIQztBQUFBLGdCQUlEOEIsU0FKQyxVQUlEQSxTQUpDO0FBQUEsZ0JBS0RDLE1BTEMsVUFLREEsTUFMQzs7QUFPTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxrQkFBZjtBQUVRckIsZ0NBQU1zQixRQUFOLENBQWVsQyxHQUFmLENBQW1CK0IsUUFBbkIsRUFBNkIsVUFBQzlCLElBQUQsRUFBT1UsR0FBUDtBQUFBLDJCQUN6QjtBQUFDLDRDQUFEO0FBQUEsMEJBQVksV0FBVyxPQUFLaUIsU0FBNUIsRUFBdUMsTUFBSTFCLFVBQVVTLEdBQXJELEVBQTBELFNBQVMsR0FBbkU7QUFFUSxrQ0FBQ1MsS0FBRCxFQUFXO0FBQ1AsZ0NBQU1lLFlBQVk7QUFDZEMseUNBQVMsZ0JBREs7QUFFZEMsd0NBQVEsZUFGTTtBQUdkQywwQ0FBVU4sY0FBYyxNQUFkLEdBQXVCLDBCQUF2QixHQUFvRCx5QkFIaEQ7QUFJZE8seUNBQVNQLGNBQWMsTUFBZCxHQUF1Qix5QkFBdkIsR0FBbUQ7QUFKOUMsNkJBQWxCO0FBTUEsZ0NBQU1RLFFBQVE7QUFDVkMseURBQXlCUjtBQURmLDZCQUFkO0FBR0EsbUNBQ0k7QUFBQTtBQUFBO0FBQ0ksa0RBQVl0QixHQURoQjtBQUVJLDJDQUFPNkIsS0FGWDtBQUdJLGtFQUE0QkwsVUFBVWYsS0FBVjtBQUhoQztBQUtLbkI7QUFMTCw2QkFESjtBQVNIO0FBckJULHFCQUR5QjtBQUFBLGlCQUE3QjtBQUZSLGFBREo7QUFnQ0g7OztFQTVDeUJXLGdCQUFNQyxTOztBQStDcENjLGdCQUFnQkQsWUFBaEIsR0FBK0I7QUFDM0JLLGNBQVUsRUFEaUI7QUFFM0JDLGVBQVcsTUFGZ0I7QUFHM0JGLGlCQUFhLHVCQUFNLENBQUU7QUFITSxDQUEvQjs7QUFNQUgsZ0JBQWdCYixTQUFoQixHQUE0QjtBQUN4QmlCLGNBQVVoQixvQkFBVWMsSUFESTtBQUV4QkcsZUFBV2pCLG9CQUFVMkIsTUFGRztBQUd4QlosaUJBQWFmLG9CQUFVQyxJQUhDO0FBSXhCZCxXQUFPYSxvQkFBVUcsTUFBVixDQUFpQkQsVUFKQTtBQUt4QmdCLFlBQVFsQixvQkFBVTJCLE1BQVYsQ0FBaUJ6QjtBQUxELENBQTVCOztrQkFRZVUsZTs7Ozs7Ozs7Ozs7O0FDMUVmOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBakJBOzs7Ozs7Ozs7O0lBbUJxQmdCLFc7OztBQUNqQix5QkFBWXRDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSkFDVEEsS0FEUzs7QUFBQSxjQXlDbkJ1QyxZQXpDbUIsR0F5Q0osWUFBTTtBQUNqQixrQkFBS0MsYUFBTDtBQUNILFNBM0NrQjs7QUFBQSxjQTZDbkJDLFlBN0NtQixHQTZDSixZQUFNO0FBQ2pCLGtCQUFLQyxZQUFMO0FBQ0gsU0EvQ2tCOztBQUFBLGNBaURuQkMsV0FqRG1CLEdBaURMLFVBQUM1QyxDQUFELEVBQU87QUFDakI7QUFDQSxnQkFBSUEsRUFBRTZDLFVBQU4sRUFBa0I7QUFDZDtBQUNBLG9CQUFJLENBQUM3QyxFQUFFOEMsZ0JBQVAsRUFBeUI7QUFDckI5QyxzQkFBRStDLGNBQUY7QUFDSDtBQUNKO0FBQ0Q7O0FBUmlCLHFFQVNEL0MsRUFBRWdELFdBQUYsQ0FBY0MsYUFUYjtBQUFBLGdCQVNWQyxLQVRVOztBQUFBLGdCQVVUQyxLQVZTLEdBVUNELEtBVkQsQ0FVVEMsS0FWUzs7QUFXakIsZ0JBQUksTUFBS0MsVUFBTCxJQUFtQixNQUFLQSxVQUFMLEtBQW9CLENBQTNDLEVBQThDO0FBQzFDLG9CQUFJbkMsV0FBVyxLQUFmO0FBQ0Esb0JBQUlDLFlBQVksS0FBaEI7QUFDQSxvQkFBSWlDLFFBQVEsRUFBUixHQUFhLE1BQUtDLFVBQXRCLEVBQWtDO0FBQzlCbkMsK0JBQVcsSUFBWDtBQUNILGlCQUZELE1BRU8sSUFBSWtDLFFBQVEsRUFBUixHQUFhLE1BQUtDLFVBQXRCLEVBQWtDO0FBQ3JDbEMsZ0NBQVksSUFBWjtBQUNIO0FBQ0Qsc0JBQUttQyxRQUFMLENBQWM7QUFDVnBDLHNDQURVO0FBRVZDO0FBRlUsaUJBQWQ7QUFJSDtBQUNKLFNBekVrQjs7QUFBQSxjQTJFbkJvQyxZQTNFbUIsR0EyRUosVUFBQ3RELENBQUQsRUFBTztBQUNsQixrQkFBSzJDLFlBQUw7QUFDQSxrQkFBS1MsVUFBTCxHQUFrQnBELEVBQUVnRCxXQUFGLENBQWNDLGFBQWQsQ0FBNEIsQ0FBNUIsRUFBK0JFLEtBQWpEO0FBQ0gsU0E5RWtCOztBQUFBLGNBZ0ZuQkksVUFoRm1CLEdBZ0ZOLFlBQU07QUFDZixrQkFBS2QsYUFBTDtBQUNBLGtCQUFLVyxVQUFMLEdBQWtCLElBQWxCO0FBRmUsOEJBR2lCLE1BQUtwQyxLQUh0QjtBQUFBLGdCQUdQQyxRQUhPLGVBR1BBLFFBSE87QUFBQSxnQkFHR0MsU0FISCxlQUdHQSxTQUhIOztBQUlmLGdCQUFJRCxRQUFKLEVBQWM7QUFDVixzQkFBS0UsTUFBTCxDQUFZLE1BQVo7QUFDSCxhQUZELE1BRU8sSUFBSUQsU0FBSixFQUFlO0FBQ2xCLHNCQUFLQyxNQUFMLENBQVksSUFBWjtBQUNIO0FBQ0Qsa0JBQUtrQyxRQUFMLENBQWM7QUFDVnBDLDBCQUFVLEtBREE7QUFFVkMsMkJBQVc7QUFGRCxhQUFkO0FBSUgsU0E3RmtCOztBQUFBLGNBOEZuQnVCLGFBOUZtQixHQThGSCxZQUFNO0FBQUEsK0JBQ1ksTUFBS3pCLEtBRGpCO0FBQUEsZ0JBQ1Z3QyxRQURVLGdCQUNWQSxRQURVO0FBQUEsZ0JBQ0FDLE9BREEsZ0JBQ0FBLE9BREE7QUFFbEI7O0FBQ0EsZ0JBQUksTUFBS0MsYUFBTCxLQUF1QkMsU0FBdkIsSUFBb0NILFFBQXBDLElBQWdEQyxPQUFwRCxFQUE2RDtBQUN6RCxzQkFBS0MsYUFBTCxHQUFxQkUsWUFBWTtBQUFBLDJCQUFNLE1BQUt6QyxNQUFMLENBQVksSUFBWixDQUFOO0FBQUEsaUJBQVosRUFBcUNzQyxPQUFyQyxDQUFyQjtBQUNIO0FBQ0osU0FwR2tCOztBQUFBLGNBcUduQmQsWUFyR21CLEdBcUdKLFlBQU07QUFDakIsZ0JBQUksTUFBS2UsYUFBVCxFQUF3QjtBQUNwQkEsOEJBQWMsTUFBS0EsYUFBbkI7QUFDQSxzQkFBS0EsYUFBTCxHQUFxQkMsU0FBckI7QUFDSDtBQUNKLFNBMUdrQjs7QUFBQSxjQWlIbkJFLFdBakhtQixHQWlITCxVQUFDL0QsS0FBRCxFQUFROEIsU0FBUixFQUFzQjtBQUNoQztBQUNBLGtCQUFLM0IsS0FBTCxDQUFXNkQsWUFBWCxDQUF3QixNQUFLOUMsS0FBTCxDQUFXbEIsS0FBbkMsRUFBMENBLEtBQTFDO0FBQ0Esa0JBQUt1RCxRQUFMLENBQWMsRUFBRXZELFlBQUYsRUFBUzhCLG9CQUFULEVBQWQ7QUFDSCxTQXJIa0I7O0FBQUEsY0EySG5CVCxNQTNIbUIsR0EySFYsVUFBQzRDLElBQUQsRUFBVTtBQUFBLGdCQUNQcEMsUUFETyxHQUNNLE1BQUsxQixLQURYLENBQ1AwQixRQURPO0FBQUEsZ0JBRVA3QixLQUZPLEdBRUcsTUFBS2tCLEtBRlIsQ0FFUGxCLEtBRk87O0FBR2YsZ0JBQU1rRSxNQUFNckMsU0FBU3NDLE1BQXJCO0FBQ0Esb0JBQVFGLElBQVI7QUFDQSxxQkFBSyxJQUFMO0FBQ0ksMEJBQUtGLFdBQUwsQ0FBaUIvRCxRQUFRa0UsTUFBTSxDQUFkLEdBQWtCbEUsUUFBUSxDQUExQixHQUE4QixDQUEvQyxFQUFrRCxNQUFsRDtBQUNBO0FBQ0oscUJBQUssTUFBTDtBQUNJLDBCQUFLK0QsV0FBTCxDQUFpQi9ELFFBQVEsQ0FBUixHQUFZQSxRQUFRLENBQXBCLEdBQXdCa0UsTUFBTSxDQUEvQyxFQUFrRCxPQUFsRDtBQUNBO0FBQ0o7QUFDSSwwQkFBTUUsTUFBTSw0QkFBTixDQUFOO0FBUko7QUFVSCxTQXpJa0I7O0FBQUEsY0E4SW5CaEUsSUE5SW1CLEdBOElaLFVBQUNpRSxHQUFELEVBQVM7QUFBQSxnQkFDSnhDLFFBREksR0FDUyxNQUFLMUIsS0FEZCxDQUNKMEIsUUFESTtBQUFBLGdCQUVKN0IsS0FGSSxHQUVNLE1BQUtrQixLQUZYLENBRUpsQixLQUZJOztBQUdaLGdCQUFNa0UsTUFBTXJDLFNBQVNzQyxNQUFyQjtBQUNBLGdCQUFJbkUsVUFBVXFFLEdBQWQsRUFBbUI7QUFDbkIsZ0JBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLE9BQU8sQ0FBbEMsSUFBdUNBLE1BQU1ILEdBQWpELEVBQXNEO0FBQ2xELHNCQUFLSCxXQUFMLENBQWlCTSxHQUFqQixFQUFzQnJFLFFBQVFxRSxHQUFSLEdBQWMsTUFBZCxHQUF1QixPQUE3QztBQUNIO0FBQ0osU0F0SmtCOztBQUVmLGNBQUtuRCxLQUFMLEdBQWE7QUFDVGxCLG1CQUFPLENBREU7QUFFVDhCLHVCQUFXLEVBRkY7QUFHVDRCLHNCQUFVdkQsTUFBTXVELFFBSFA7QUFJVEMscUJBQVN4RCxNQUFNd0QsT0FKTjtBQUtUeEMsc0JBQVUsS0FMRDtBQU1UQyx1QkFBVztBQU5GLFNBQWI7QUFGZTtBQVVsQjs7Ozs0Q0FPbUI7QUFDaEIsaUJBQUt1QixhQUFMO0FBQ0g7OzsyQ0FDa0IyQixTLEVBQVc7QUFBQSx5QkFDSSxLQUFLbkUsS0FEVDtBQUFBLGdCQUNsQnVELFFBRGtCLFVBQ2xCQSxRQURrQjtBQUFBLGdCQUNSQyxPQURRLFVBQ1JBLE9BRFE7QUFFMUI7Ozs7OztBQUtBLGdCQUFJRCxZQUFZQyxZQUFZVyxVQUFVWCxPQUF0QyxFQUErQztBQUMzQyxxQkFBS2QsWUFBTDtBQUNBLHFCQUFLRixhQUFMO0FBQ0gsYUFIRCxNQUdPLElBQUllLGFBQWFZLFVBQVVaLFFBQXZCLElBQW1DQSxRQUF2QyxFQUFpRDtBQUNwRCxxQkFBS2YsYUFBTDtBQUNILGFBRk0sTUFFQSxJQUFJZSxhQUFhWSxVQUFVWixRQUF2QixJQUFtQyxDQUFDQSxRQUF4QyxFQUFrRDtBQUNyRCxxQkFBS2IsWUFBTDtBQUNIO0FBQ0o7OzsrQ0FDc0I7QUFDbkIsaUJBQUtBLFlBQUw7QUFDSDs7QUFFRDs7QUFJQTs7QUFJQTs7QUEwQkE7O0FBS0E7OztBQTZCQTs7Ozs7O0FBVUE7Ozs7OztBQW9CQTs7Ozs7OztpQ0FhUztBQUFBLHlCQU1ELEtBQUszQixLQU5KO0FBQUEsZ0JBRURsQixLQUZDLFVBRURBLEtBRkM7QUFBQSxnQkFHRDhCLFNBSEMsVUFHREEsU0FIQztBQUFBLGdCQUlEWCxRQUpDLFVBSURBLFFBSkM7QUFBQSxnQkFLREMsU0FMQyxVQUtEQSxTQUxDO0FBQUEsMEJBWUQsS0FBS2pCLEtBWko7QUFBQSxnQkFRRDBCLFFBUkMsV0FRREEsUUFSQztBQUFBLGdCQVNERCxXQVRDLFdBU0RBLFdBVEM7QUFBQSxnQkFVRDJDLElBVkMsV0FVREEsSUFWQztBQUFBLGdCQVdEeEMsTUFYQyxXQVdEQSxNQVhDOztBQWFMLGdCQUFNeUMsaUJBQWlCO0FBQ25CcEUsc0JBQU0sS0FBS0EsSUFEUTtBQUVuQlYscUJBQUttQyxTQUFTc0MsTUFGSztBQUduQm5FO0FBSG1CLGFBQXZCO0FBS0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksa0NBQWMsS0FBS3dELFlBRHZCO0FBRUksZ0NBQVksS0FBS0MsVUFGckI7QUFHSSxpQ0FBYSxLQUFLWCxXQUh0QjtBQUlJLGtDQUFjLEtBQUtKLFlBSnZCO0FBS0ksa0NBQWMsS0FBS0UsWUFMdkI7QUFNSSwrQkFBVTtBQU5kO0FBU1EyQix3QkFDSTtBQUFDLG1DQUFELENBQU8sUUFBUDtBQUFBO0FBQ0ksa0RBQUMsbUJBQUQsRUFBZUMsY0FBZixDQURKO0FBRUksa0RBQUMsd0JBQUQ7QUFDSSxrQ0FBVXJELFFBRGQ7QUFFSSxtQ0FBV0MsU0FGZjtBQUdJLGdDQUFRLEtBQUtDO0FBSGpCO0FBRkosaUJBVlo7QUFvQkk7QUFBQyw2Q0FBRDtBQUFBO0FBQ0kscUNBQWFPLFdBRGpCO0FBRUksbUNBQVdFLFNBRmY7QUFHSSwrQkFBTzlCLEtBSFg7QUFJSSxnQ0FBUStCO0FBSlo7QUFNTUY7QUFOTjtBQXBCSixhQURKO0FBK0JIOzs7aURBN0wrQlAsUyxFQUFXO0FBQ3ZDLG1CQUFPO0FBQ0hvQywwQkFBVXBDLFVBQVVvQyxRQURqQjtBQUVIQyx5QkFBU3JDLFVBQVVxQztBQUZoQixhQUFQO0FBSUg7OztFQWpCb0NqRCxnQkFBTUMsUzs7a0JBQTFCOEIsVzs7O0FBNE1yQkEsWUFBWWpCLFlBQVosR0FBMkI7QUFDdkJLLGNBQVUsRUFEYTtBQUV2Qm1DLGtCQUFjLHdCQUFNLENBQUUsQ0FGQztBQUd2QnBDLGlCQUFhLHVCQUFNLENBQUUsQ0FIRTtBQUl2QjhCLGNBQVUsS0FKYTtBQUt2QkMsYUFBUyxJQUxjO0FBTXZCWSxVQUFNLElBTmlCO0FBT3ZCeEMsWUFBUTtBQVBlLENBQTNCOztBQVVBVSxZQUFZN0IsU0FBWixHQUF3QjtBQUNwQmlCLGNBQVVoQixvQkFBVWMsSUFEQTtBQUVwQnFDLGtCQUFjbkQsb0JBQVVDLElBRko7QUFHcEJjLGlCQUFhZixvQkFBVUMsSUFISDtBQUlwQjRDLGNBQVU3QyxvQkFBVVUsSUFKQTtBQUtwQm9DLGFBQVM5QyxvQkFBVUcsTUFMQztBQU1wQnVELFVBQU0xRCxvQkFBVVUsSUFOSTtBQU9wQlEsWUFBUWxCLG9CQUFVMkI7QUFQRSxDQUF4QixDOzs7Ozs7Ozs7Ozs7QUN4T0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQSxnRjs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBcUMsd0g7Ozs7Ozs7Ozs7O0FDQXJDLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O2tCQUVlQyxxQjs7Ozs7Ozs7Ozs7QUNGZiwwRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJwdWJsaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hvaWNlLW5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY2hvaWNlLW5hdiA+IGJ1dHRvbi5jaG9pY2UtbmF2LWJ0biB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBvcGFjaXR5OiAwLjY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuLmNob2ljZS1uYXYgLnNlbC1uYXYuY2hvaWNlLW5hdi1idG4ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2NiwgNjYsIDY2LCAuNSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vdmVtZW50LWFycm93cyBidXR0b24uaWNvbmZvbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHdpZHRoOiAxMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAzMywgMzMsIDApO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBmb250LXNpemU6IDMycHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuLm1vdmVtZW50LWFycm93cyBidXR0b24uaWNvbmZvbnQ6aG92ZXIsXFxuLm1vdmVtZW50LWFycm93cyBidXR0b24uaWNvbmZvbnQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMzMsIDMzLCAuMSk7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XFxufVxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250OmFjdGl2ZSxcXG4ubW92ZW1lbnQtYXJyb3dzIGJ1dHRvbi5pY29uZm9udC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMywgMzMsIDMzLCAuMik7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XFxufVxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250OmZpcnN0LWNoaWxkIHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5tb3ZlbWVudC1hcnJvd3MgYnV0dG9uLmljb25mb250Omxhc3QtY2hpbGQge1xcbiAgcmlnaHQ6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBpY3R1cmUtcm90YXRpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucm90YXRpb24taXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzICFpbXBvcnRhbnQ7XFxufVxcbi5yb3RhdGlvbi1lbnRlciB7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucm90YXRpb24tZXhpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucm90YXRpb24tY2VudGVyLXRvLWxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWNlbnRlci10by1sZWZ0O1xcbiAgICAgICAgICBhbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWNlbnRlci10by1sZWZ0O1xcbn1cXG4ucm90YXRpb24tcmlnaHQtdG8tY2VudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1yaWdodC10by1jZW50ZXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tcmlnaHQtdG8tY2VudGVyO1xcbn1cXG4ucm90YXRpb24tY2VudGVyLXRvLXJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIGFuaW1hdGlvbi1jZW50ZXItdG8tcmlnaHQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMC4zcyBhbmltYXRpb24tY2VudGVyLXRvLXJpZ2h0O1xcbn1cXG4ucm90YXRpb24tbGVmdC10by1jZW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWxlZnQtdG8tY2VudGVyO1xcbiAgICAgICAgICBhbmltYXRpb246IDAuM3MgYW5pbWF0aW9uLWxlZnQtdG8tY2VudGVyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uLWNlbnRlci10by1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAtMjAlO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWNlbnRlci10by1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAtMjAlO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRpb24tcmlnaHQtdG8tY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMjAlO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRpb24tcmlnaHQtdG8tY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMjAlO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tcmlnaHQge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1jZW50ZXItdG8tcmlnaHQge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uLWxlZnQtdG8tY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uLWxlZnQtdG8tY2VudGVyIHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTIwJTtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXJvdGF0aW9uLW1hcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuLnJlYWN0LXJvdGF0aW9uLW1hcCBidXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJpY29uZm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pY29uZm9udC5lb3Q/dD0xNTM3MTA0NzMwMzcxXCIpKSArIFwiKTsgLyogSUU5Ki9cXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ljb25mb250LmVvdD90PTE1MzcxMDQ3MzAzNzFcIikpICsgXCIjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgXFxuICB1cmwoJ2RhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUFRUUFBc0FBQUFBQm5BQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJIVTFWQ0FBQUJDQUFBQURNQUFBQkNzUDZ6N1U5VEx6SUFBQUU4QUFBQVF3QUFBRmFLMlpaWFkyMWhjQUFBQVlBQUFBQlRBQUFCZmdZM09RMW5iSGxtQUFBQjFBQUFBRWNBQUFCUUxHQlR2R2hsWVdRQUFBSWNBQUFBTHdBQUFEWVNxRHpGYUdobFlRQUFBa3dBQUFBY0FBQUFKQWZlQTRSb2JYUjRBQUFDYUFBQUFBd0FBQUFNREFBQUFHeHZZMkVBQUFKMEFBQUFDQUFBQUFnQUZBQW9iV0Y0Y0FBQUFud0FBQUFmQUFBQUlBRU9BQkp1WVcxbEFBQUNuQUFBQVVVQUFBSnRQbFQrZlhCdmMzUUFBQVBrQUFBQUxBQUFBRVdKdHFlWWVKeGpZR1JnWU9CaWtHUFFZV0IwY2ZNSlllQmdZR0dBQUpBTVkwNW1laUpRRE1vRHlyR0FhUTRnWm9PSUFnQ0tJd05QQUhpY1kyQmtZV0Njd01ES3dNSFV5WFNHZ1lHaEgwSXp2bVl3WXVSZ1lHQmlZR1Ztd0FvQzBseFRHQnhNVWt4U21SditOekRFTURjd05BQ0ZHVUZ5QU0ra0MwZ0FlSnhqWUdCZ1pXQmdZQVppSFNCbVlXQmdER05nWkFDQkFLQW9JMWljbVlFTExNN0NvQUpXd3dJU04wbjkveDlJcG9CSUlKOEZURElCQ1RhR1VjQURKaldnUENaUU9FRXdKT1FnbUlFSkFQQXhDWDBBZUp4allHUmcrRCtGdVlpNWdZR1ZnWUdUVVptVDBaaTU4Si9zZmNiSElLS0NpZVB2ajM4eURBd01LT3BZallFcUdaa20zZjhueS9nWVNPUXdQZ0VwQkNvREFHWFlGNDBBZUp4allHUmdZQURpaFgrMnZvem50L25Ld00zQ0FBTFhqOVJFSWVqL1UxZ1ltQnVBWEE0R0pwQW9BR3NWQy9JQWVKeGpZR1JnWUc3NDM4QVF3OElBQWtDU2tRRVZNQU1BUndrQ2JBUUFBQUFFQUFBQUJBQUFBQUFBQUFBQUZBQW9lSnhqWUdSZ1lHQm1ZR01BMFF3TVRFRE1CWVFNRFAvQmZBWUFDVWdCSVFCNG5HV1BUVTdETUJDRlgvb0hwQktxcUdDSDVBVmlBU2o5RWF0dVdGUnE5MTEwMzZaT215cUpJOGV0MUFOd0hvN0FDVGdDM0lBNzhFZ25temFXeDkrOGVXTlBBTnpnQng2TzN5MzNrVDFjTWp0eURSZTRGNjVUZnhCdWtGK0VtMmpqVmJoRi9VM1l4ek9td20xMFlYbUQxN2hpOW9SM1lROGRmQWpYY0kxUDRUcjFMK0VHK1Z1NGlUdjhDcmZROGVyQ1B1WmVWN2lOUnkvMngxWXZuRjZwNVVIRm9ja2lrem0vZ3BsZTc1S0ZyZExxbkd0YnhDWlRnNkJmU1ZPZGFWdmRVK3pYUStjaUZWbVRxZ21yT2ttTXlxM1o2dEFGRytmeVVhOFhpUjZFSnVWWVkvNjJ4Z0tPY1FXRkpRNk1NVUlZWklqSzZPZzdWV2IwcjdGRHdsNTdWajNONTNSYkZOVC9jNFVCQXZUUFhGTzZzdEo1T2srQlBWOGJVblYwSzI3TG5wUTBrVjdOU1JLeVFsN1d0bFJDNmdFMlpWZU9FWHBjMFlrL0tHZEkvd0FKV203SUFBQUFlSnhqWUdLQUFDNEc3SUNaa1ltUm1aR0ZnYWN3TXpXak5ER3ZNTE15dnhUQnFTck5aMkFBQUtBbkNuaz0nKSBmb3JtYXQoJ3dvZmYnKSxcXG4gIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pY29uZm9udC50dGY/dD0xNTM3MTA0NzMwMzcxXCIpKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIFxcbiAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ljb25mb250LnN2Zz90PTE1MzcxMDQ3MzAzNzFcIikpICsgXCIjaWNvbmZvbnQpIGZvcm1hdCgnc3ZnJyk7IC8qIGlPUyA0LjEtICovXFxufVxcblxcbi5pY29uZm9udCB7XFxuICBmb250LWZhbWlseTpcXFwiaWNvbmZvbnRcXFwiICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6MTZweDtcXG4gIGZvbnQtc3R5bGU6bm9ybWFsO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uaWNvbi1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXDM0NjRcXFwiOyB9XFxuXFxuLmljb24tYXJyb3ctbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXDM0NjVcXFwiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcclxuICog6L2u5pKt5Zu+5LiL5pa555qE5oyH56S65oyJ6ZKu77yM5o6l5pS25LiJ5LiqIHByb3BcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ29UbyDliIfmjaLova7mkq3lm77nmoTlm57osIPlh73mlbDvvIzlpITnkIbngrnlh7vkuovku7ZcclxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSDmiYDpnIDova7mkq3lhoXlrrnnmoTmgLvmlbBcclxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOW9k+WJjeaYvuekuuWGheWuueeahOe8luWPt1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9jaG9pY2VOYXYubGVzcyc7XHJcblxyXG5jbGFzcyBDaG9pY2VOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbnVtIOaJgOmcgOi9ruaSreWGheWuueeahOaAu+aVsFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IOi/lOWbnueUn+aIkOeahOaVsOe7hFxyXG4gICAgICog6YCa6L+HIEFycmF5LmZpbGwg5ZKMIEFycmF5Lm1hcCDmlrnms5XnlJ/miJDkuIDkuKrmnIkgbnVtIOmhueeahOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVBcnJheSA9IChudW0pID0+IHtcclxuICAgICAgICBjb25zdCBuYXZBcnJheSA9IG5ldyBBcnJheShudW0pO1xyXG4gICAgICAgIHJldHVybiBuYXZBcnJheS5maWxsKCcnKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBpdGVtICsgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgLy8g5oyH56S65oyJ6ZKu55qE54K55Ye75LqL5Lu25bCG5omA54K55Ye75oyJ6ZKu55qE5bqP5Y+35Lyg6YCS57uZ54i257uE5Lu2XHJcbiAgICBuYXZDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nb1RvKHdpbmRvdy5wYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmtleSkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbnVtLCBpbmRleCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob2ljZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFycmF5KG51bSkubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uYXZDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEta2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjaG9pY2UtbmF2LWJ0biAke2tleSA9PT0gaW5kZXggPyAnc2VsLW5hdicgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQ2hvaWNlTmF2LnByb3BUeXBlcyA9IHtcclxuICAgIGdvVG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBudW06IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob2ljZU5hdjtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hvaWNlTmF2Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hvaWNlTmF2Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nob2ljZU5hdi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IENob2ljZU5hdiBmcm9tICcuL2Nob2ljZU5hdic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaG9pY2VOYXY7XHJcbiIsImltcG9ydCBNb3ZlbWVudEFycm93cyBmcm9tICcuL21vdmVtZW50QXJyb3dzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVtZW50QXJyb3dzO1xyXG4iLCIvKipcclxuICog6L2u5pKt5Zu+5bem5Y+z55qE5YiH5o2i5oyJ6ZKu77yM5o6l5pS25LiJ5LiqIHByb3BcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ29Nb3ZlIOW3puWPs+WIh+aNoueahOWbnuiwg+WHveaVsFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGljb25MZWZ0IOaOp+WItuW3puWIh+aNouaYvuekulxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGljb25SaWdodCDmjqfliLblj7PliIfmjaLmmL7npLpcclxuICogaWNvbkxlZnQg5ZKMIGljb25SaWdodCDmmK/kuLrkuobku6XlkI7miYvmnLrnq6/op6bmu5Hliqjml7bmmL7npLrliIfmjaLmjInpkq7miYDpooTnlZnnmoRcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vbW92ZW1lbnRBcnJvd3MubGVzcyc7XHJcbmltcG9ydCAnLi4vLi4vZm9udC9pY29uZm9udC5jc3MnO1xyXG5cclxuY2xhc3MgTW92ZW1lbnRBcnJvd3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWNvbkxlZnQ6IHByb3BzLmljb25MZWZ0LFxyXG4gICAgICAgICAgICBpY29uUmlnaHQ6IHByb3BzLmljb25SaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGljb25MZWZ0OiBuZXh0UHJvcHMuaWNvbkxlZnQsXHJcbiAgICAgICAgICAgIGljb25SaWdodDogbmV4dFByb3BzLmljb25SaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uTGVmdCwgaWNvblJpZ2h0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92ZW1lbnQtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbmZvbnQgaWNvbi1hcnJvdy1sZWZ0ICR7aWNvbkxlZnQgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5nb01vdmUoJ2Rvd24nKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbmZvbnQgaWNvbi1hcnJvdy1yaWdodCAke2ljb25SaWdodCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvTW92ZSgndXAnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk1vdmVtZW50QXJyb3dzLnByb3BUeXBlcyA9IHtcclxuICAgIGdvTW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGljb25MZWZ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb25SaWdodDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbk1vdmVtZW50QXJyb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGljb25MZWZ0OiBmYWxzZSxcclxuICAgIGljb25SaWdodDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVtZW50QXJyb3dzO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb3ZlbWVudEFycm93cy5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vdmVtZW50QXJyb3dzLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vdmVtZW50QXJyb3dzLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUGljdHVyZVJvdGF0aW9uIGZyb20gJy4vcGljdHVyZVJvdGF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVSb3RhdGlvbjtcclxuIiwiLyoqXHJcbiAqIOi9ruaSreWbvui9ruaSreWGheWuueWMuuWfn++8jOaOpeaUtuS6lOS4quWPguaVsFxyXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkcmVuIOmcgOimgei9ruaSreeahOWGheWuue+8jOS9v+eUqOivpee7hOS7tuaXtuS8oOWFpVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZnRlckNoYW5nZSDova7mkq3liqjnlLvnu5PmnZ/lkI7nmoTlm57osIPlh73mlbBcclxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IOW9k+WJjeaYvuekuuWGheWuueeahOe8luWPt1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIOmcgOimgeWIh+aNoui9ruaSreeahOaWueWQkVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIOaOp+WItui9ruaSreWbvueahOWKqOeUu+WIh+aNouaViOaenFxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcclxuXHJcbmltcG9ydCAnLi9waWN0dXJlUm90YXRpb24ubGVzcyc7XHJcblxyXG5jbGFzcyBQaWN0dXJlUm90YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgLy8gVHJhbnNpdGlvbiDnmoTmlrnms5XvvIznlKjkuo7op6blj5Hova7mkq3liqjnlLvnu5PmnZ/lkI7nmoTlm57osIPlh73mlbBcclxuICAgIG9uRW50ZXJlZCA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZnRlckNoYW5nZSh3aW5kb3cucGFyc2VJbnQobm9kZS5kYXRhc2V0LmluZGV4KSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICAgICAgZWFzaW5nXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLXJvdGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uIG9uRW50ZXJlZD17dGhpcy5vbkVudGVyZWR9IGluPXtpbmRleCA9PT0ga2V5fSB0aW1lb3V0PXszMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmVkOiAncm90YXRpb24tZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdGVkOiAncm90YXRpb24tZXhpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmluZzogZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncm90YXRpb24tcmlnaHQtdG8tY2VudGVyJyA6ICdyb3RhdGlvbi1sZWZ0LXRvLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0aW5nOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyb3RhdGlvbi1jZW50ZXItdG8tbGVmdCcgOiAncm90YXRpb24tY2VudGVyLXRvLXJpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdGF0aW9uLWl0ZW0gJHtjbGFzc05hbWVbc3RhdGVdfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5QaWN0dXJlUm90YXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46ICcnLFxyXG4gICAgZGlyZWN0aW9uOiAnbGVmdCcsXHJcbiAgICBhZnRlckNoYW5nZTogKCkgPT4ge31cclxufTtcclxuXHJcblBpY3R1cmVSb3RhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhZnRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgZWFzaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVSb3RhdGlvbjtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGljdHVyZVJvdGF0aW9uLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGljdHVyZVJvdGF0aW9uLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BpY3R1cmVSb3RhdGlvbi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyoqXHJcbiAqIOi9ruaSreWbvuaPkuS7tueahOeItue7hOS7tlxyXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkcmVuIOmcgOimgei9ruaSreeahOWGheWuuVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBiZWZvcmVDaGFuZ2Ug5YiH5o2i5Yqo55S75LmL5YmN55qE5Zue6LCD5Ye95pWwXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFmdGVyQ2hhbmdlIOWIh+aNouWKqOeUu+S5i+WQjueahOWbnuiwg+WHveaVsFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGF1dG9wbGF5IOaYr+WQpuiHquWKqOi9ruaSrVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dCDova7mkq3nmoTml7bpl7Tlt65cclxuICogQHBhcmFtIHtCb29sZWFufSBkb3RzIOaYr+WQpuaYvuekuuaMh+ekuuadoeWPiuWIh+aNouaMiemSrlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZWFzaW5nIOWKqOeUu+WIh+aNouaViOaenFxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBDaG9pY2VOYXYgZnJvbSAnLi9jaG9pY2VOYXYnO1xyXG5pbXBvcnQgTW92ZW1lbnRBcnJvd3MgZnJvbSAnLi9tb3ZlbWVudEFycm93cyc7XHJcbmltcG9ydCBQaWN0dXJlUm90YXRpb24gZnJvbSAnLi9waWN0dXJlUm90YXRpb24nO1xyXG5cclxuaW1wb3J0ICcuL3JvdGF0aW9uTWFwLmxlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRpb25NYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJycsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBwcm9wcy5hdXRvcGxheSxcclxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCxcclxuICAgICAgICAgICAgaWNvbkxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IG5leHRQcm9wcy5hdXRvcGxheSxcclxuICAgICAgICAgICAgdGltZW91dDogbmV4dFByb3BzLnRpbWVvdXRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkF1dG9QbGF5KCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBhdXRvcGxheSwgdGltZW91dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhdXRvcGxheSDkuLogdHJ1ZSDnmoTmg4XlhrXkuIvmr5TovoMgdGltZW91dCDliY3lkI7lgLwg77yM5aaC5p6c5LiN5LiA6Ie05YWz6Zet5a6a5pe25Zmo6YeN5paw5omT5byAXHJcbiAgICAgICAgICogYXV0b3BsYXkg55qE5YmN5ZCO5YC85LiN5ZCM5LiUIGF1dG9wbGF5IOS4uiB0cnVlIOeahOaDheWGteS4i+W8gOWQr+WumuaXtuWZqFxyXG4gICAgICAgICAqIGF1dG9wbGF5IOeahOWJjeWQjuWAvOS4jeWQjOS4lCBhdXRvcGxheSDkuLogZmFsc2Ug55qE5oOF5Ya15LiL5YWz6Zet5a6a5pe25ZmoXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGF1dG9wbGF5ICYmIHRpbWVvdXQgIT09IHByZXZQcm9wcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVnaW5BdXRvUGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXV0b3BsYXkgIT09IHByZXZQcm9wcy5hdXRvcGxheSAmJiBhdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luQXV0b1BsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF1dG9wbGF5ICE9PSBwcmV2UHJvcHMuYXV0b3BsYXkgJiYgIWF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpvKDmoIfnp7vlh7rova7mkq3lm77ojIPlm7Tml7blvIDlkK/lrprml7blmahcclxuICAgIG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmJlZ2luQXV0b1BsYXkoKTtcclxuICAgIH1cclxuICAgIC8vIOm8oOagh+enu+WFpei9ruaSreWbvuiMg+WbtOaXtuWFs+mXreWumuaXtuWZqFxyXG4gICAgb25Nb3VzZUVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XHJcbiAgICB9XHJcbiAgICAvLyDop6bmkbjmu5Hliqjkuovku7ZcclxuICAgIG9uVG91Y2hNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICAvLyDliKTmlq3pu5jorqTooYzkuLrmmK/lkKblj6/ku6XooqvnpoHnlKhcclxuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIOWIpOaWrem7mOiupOihjOS4uuaYr+WQpuW3sue7j+iiq+emgeeUqFxyXG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa7keWKqOaWueWQkeeahOeureWktOaYvuekulxyXG4gICAgICAgIGNvbnN0IFt0b3VjaF0gPSBlLm5hdGl2ZUV2ZW50LnRhcmdldFRvdWNoZXM7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlWCB9ID0gdG91Y2g7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hTdGFydCB8fCB0aGlzLnRvdWNoU3RhcnQgPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IGljb25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpY29uUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VYIC0gMTAgPiB0aGlzLnRvdWNoU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIGljb25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYWdlWCArIDEwIDwgdGhpcy50b3VjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBpY29uUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbkxlZnQsXHJcbiAgICAgICAgICAgICAgICBpY29uUmlnaHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g6Kem5pG45byA5aeL5pe26K6w5b2V5b2T5YmN5Z2Q5qCHXHJcbiAgICBvblRvdWNoU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0ID0gZS5uYXRpdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgfVxyXG4gICAgLy8g6Kem5pG457uT5p2f5pe26Kem5Y+R5a+55bqU5YiH5o2i5LqL5Lu2XHJcbiAgICBvblRvdWNoRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYmVnaW5BdXRvUGxheSgpO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBpY29uTGVmdCwgaWNvblJpZ2h0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChpY29uTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmdvTW92ZSgnZG93bicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaWNvblJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Nb3ZlKCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaWNvbkxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiZWdpbkF1dG9QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYXV0b3BsYXksIHRpbWVvdXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgLy8gYXV0b3BsYXkg5byA5ZCv5ZKMIHRpbWVvdXQg5q2j56Gu55qE5oOF5Ya15LiL5byA5ZCv6Ieq5Yqo6L2u5pKt5a6a5pe25ZmoXHJcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJJbnRlcnZhbCA9PT0gdW5kZWZpbmVkICYmIGF1dG9wbGF5ICYmIHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nb01vdmUoJ3VwJyksIHRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3BBdXRvUGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jbGVhckludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaKveixoeeahOi9ruaSreaOp+WItu+8jOiwg+eUqOi/meS4quWHveaVsOadpeecn+ato+eahOS/ruaUuSBzdGF0ZSDop6blj5Hova7mkq3lm77lj5jljJZcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCDova7mkq3lm77lhoXlrrnnmoTluo/lj7dcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24g6L2u5pKt5Zu+5YiH5o2i55qE5pa55ZCRXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVN0YXRlID0gKGluZGV4LCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAvLyDosIPnlKggYmVmb3JlQ2hhbmdlIOWbnuiwg+WHveaVsOWHveaVsCggYmVmb3JlQ2hhbmdlIOS4uuaatOmcsuS9v+eUqOeahOaWueazlSlcclxuICAgICAgICB0aGlzLnByb3BzLmJlZm9yZUNoYW5nZSh0aGlzLnN0YXRlLmluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4LCBkaXJlY3Rpb24gfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaOp+WItui9ruaSreWbvuW3puWPs+WIh+aNoueahOWHveaVsFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcclxuICAgICAqIHR5cGUg5YC85Y+q5pyJ5Lik5LiqICd1cCcg5ZKMICdkb3duJyDku6PooajnnYDlkJHliY3lkozlkJHlkI5cclxuICAgICAqL1xyXG4gICAgZ29Nb3ZlID0gKHR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShpbmRleCA8IGxlbiAtIDEgPyBpbmRleCArIDEgOiAwLCAnbGVmdCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShpbmRleCA+IDAgPyBpbmRleCAtIDEgOiBsZW4gLSAxLCAncmlnaHQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBjYXJvdXNlbCBoYXMgYW4gZXJyb3IhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqfliLbova7mkq3lm77pmo/mhI/liIfmjaLnmoTlh73mlbBcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWwg5Zyo5q2j5bi46IyD5Zu05YaF55qE5pWw5a2X77yM5YiH5o2i6Iez5bqP5Y+35omA5a+55bqU55qE5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGdvVG8gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHZhbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiB2YWwgPj0gMCAmJiB2YWwgPCBsZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSh2YWwsIGluZGV4IDwgdmFsID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICAgICAgaWNvbkxlZnQsXHJcbiAgICAgICAgICAgIGljb25SaWdodFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlLFxyXG4gICAgICAgICAgICBkb3RzLFxyXG4gICAgICAgICAgICBlYXNpbmdcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBDaG9pY2VOYXZQcm9wcyA9IHtcclxuICAgICAgICAgICAgZ29UbzogdGhpcy5nb1RvLFxyXG4gICAgICAgICAgICBudW06IGNoaWxkcmVuLmxlbmd0aCxcclxuICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5vblRvdWNoU3RhcnR9XHJcbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uVG91Y2hFbmR9XHJcbiAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5vblRvdWNoTW92ZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25Nb3VzZUVudGVyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3Qtcm90YXRpb24tbWFwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTmF2IHsuLi5DaG9pY2VOYXZQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZlbWVudEFycm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25MZWZ0PXtpY29uTGVmdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uUmlnaHQ9e2ljb25SaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb01vdmU9e3RoaXMuZ29Nb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8UGljdHVyZVJvdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9e2FmdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc9e2Vhc2luZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvUGljdHVyZVJvdGF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Sb3RhdGlvbk1hcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogJycsXHJcbiAgICBiZWZvcmVDaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgYWZ0ZXJDaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgdGltZW91dDogMzAwMCxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBlYXNpbmc6ICdsaW5lYXInXHJcbn07XHJcblxyXG5Sb3RhdGlvbk1hcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICBiZWZvcmVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgYWZ0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgYXV0b3BsYXk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGRvdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZWFzaW5nOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JvdGF0aW9uTWFwLmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm90YXRpb25NYXAubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm90YXRpb25NYXAubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ljb25mb250LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pY29uZm9udC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ljb25mb250LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUyZTA0MmI1Y2EwY2EyNTQ0ZTIzYjBmZTRhOGE4NjZjLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYeUFySUNJek9EVTBNRGxqTW1Vek9EVTNaV1V3TjJFeU9EZG1NMkZtWkdRMllqSTVNUzV6ZG1jaU93PT1cIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiNjAyZjY4ZWE0NmY0ZDgzMmM2MmE4ZDkyZDA3ZTFlLnR0ZlwiOyIsImltcG9ydCBSb3RhdGlvbk1hcCBmcm9tICcuL2NvbXBvbmVudHMvcm90YXRpb25NYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm90YXRpb25NYXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9