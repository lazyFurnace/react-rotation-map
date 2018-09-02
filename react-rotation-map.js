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
exports.push([module.i, ".ChoiceNav {\n  color: #ddd;\n  position: absolute;\n  z-index: 1000;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ChoiceNav > button {\n  width: 40px;\n  height: 5px;\n  margin: 10px 5px;\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #ddd;\n  opacity: 0.6;\n}\n.ChoiceNav .selNav {\n  background-color: #666;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/less-loader/dist/cjs.js!./src/component/movementArrows/movementArrows.less":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js!./src/component/movementArrows/movementArrows.less ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".MovementArrows {\n  color: #e4393c;\n}\n.MovementArrows .arrow {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 1000;\n  width: 80px;\n  height: 100%;\n  line-height: 50px;\n  text-align: center;\n  font-size: 36px;\n}\n.MovementArrows .arrow:after {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 60%;\n  height: 100%;\n  background: no-repeat center;\n  background-size: contain;\n  opacity: 0.3;\n}\n.MovementArrows .arrow-left {\n  left: 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .6)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n.MovementArrows .arrow-left:hover {\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .8)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0));\n}\n.MovementArrows .arrow-left:hover:after {\n  background-image: url(" + escape(__webpack_require__(/*! ../../icon/icon-left-00.svg */ "./src/icon/icon-left-00.svg")) + ");\n}\n.MovementArrows .arrow-left:after {\n  background-image: url(" + escape(__webpack_require__(/*! ../../icon/icon-left-51.svg */ "./src/icon/icon-left-51.svg")) + ");\n  background-position-x: 10px;\n}\n.MovementArrows .arrow-right {\n  right: 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .6)));\n  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6));\n}\n.MovementArrows .arrow-right:hover {\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .8)));\n  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));\n}\n.MovementArrows .arrow-right:hover:after {\n  background-image: url(" + escape(__webpack_require__(/*! ../../icon/icon-right-00.svg */ "./src/icon/icon-right-00.svg")) + ");\n}\n.MovementArrows .arrow-right:after {\n  background-image: url(" + escape(__webpack_require__(/*! ../../icon/icon-right-51.svg */ "./src/icon/icon-right-51.svg")) + ");\n  background-position-x: -10px;\n}\n", ""]);

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
exports.push([module.i, ".pictureRotation {\n  color: #be24be;\n  position: relative;\n  height: 100%;\n}\n.rotation_item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  -webkit-transition: all .3s linear;\n  transition: all .3s linear;\n}\n.rotation_left_up {\n  left: -100%;\n}\n.rotation_right_up {\n  right: -100%;\n}\n.rotation_center {\n  left: 0;\n  z-index: 1;\n}\n.rotation_left_down {\n  left: 100%;\n}\n.rotation_right_down {\n  right: 100%;\n}\n", ""]);

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
exports.push([module.i, ".root {\n  background-color: #333;\n  position: relative;\n  overflow: hidden;\n  width: 800px;\n  height: 400px;\n  margin: 100px auto;\n}\nh1 {\n  margin: 0;\n  color: #fff;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.Rmap {\n  width: 100%;\n  height: 100%;\n}\n.React {\n  background-color: #e21bc8;\n}\n.Vue {\n  background-color: #ce2c2c;\n}\n.Ng {\n  background-color: #a7e418;\n}\n.Component {\n  background-color: #182ace;\n}\n", ""]);

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
                { className: 'ChoiceNav' },
                this.getLength(num).map(function (item, key) {
                    return _react2.default.createElement('button', {
                        onClick: _this2.navClick,
                        'data-key': key,
                        className: '' + (key === index ? 'selNav' : ''),
                        key: '' + item
                    });
                })
            );
        }
    }]);
    return ChoiceNav;
}(_react2.default.Component);

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./movementArrows.less */ "./src/component/movementArrows/movementArrows.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MovementArrows(props) {
    return _react2.default.createElement(
        'div',
        { className: 'MovementArrows' },
        _react2.default.createElement('button', {
            className: 'arrow arrow-left',
            onClick: function onClick() {
                return props.arrowChangeState('down');
            }
        }),
        _react2.default.createElement('button', {
            className: 'arrow arrow-right',
            onClick: function onClick() {
                return props.arrowChangeState('up');
            }
        })
    );
}

MovementArrows.propTypes = {
    arrowChangeState: _propTypes2.default.func.isRequired
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./pictureRotation.less */ "./src/component/pictureRotation/pictureRotation.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PictureRotation(props) {
    var children = props.children,
        index = props.index;

    return _react2.default.createElement(
        'div',
        { className: 'pictureRotation' },
        _react2.default.Children.map(children, function (item, key) {
            return _react2.default.createElement(
                'div',
                { className: 'rotation_item' + (index === key ? ' rotation_center' : '') },
                item
            );
        })
    );
}

PictureRotation.defaultProps = {
    children: ''
};

PictureRotation.propTypes = {
    children: _propTypes2.default.node,
    index: _propTypes2.default.number.isRequired
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

var RotationMap = function (_React$Component) {
    (0, _inherits3.default)(RotationMap, _React$Component);

    function RotationMap(props) {
        (0, _classCallCheck3.default)(this, RotationMap);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RotationMap.__proto__ || (0, _getPrototypeOf2.default)(RotationMap)).call(this, props));

        _this.arrowChangeState = function (type) {
            if (type === 'up' && _this.state.index < _this.props.children.length - 1) {
                _this.setState({
                    index: _this.state.index + 1
                });
            } else if (type === 'up' && _this.state.index === _this.props.children.length - 1) {
                _this.setState({
                    index: 0
                });
            } else if (type === 'down' && _this.state.index > 0) {
                _this.setState({
                    index: _this.state.index - 1
                });
            } else if (type === 'down' && _this.state.index === 0) {
                _this.setState({
                    index: _this.props.children.length - 1
                });
            }
        };

        _this.choiceChangeState = function (val) {
            if (!val && val !== 0) return;
            if (Object.prototype.toString.call(val) === '[object Number]') {
                if (val >= 0 && val < _this.props.children.length) {
                    _this.setState({
                        index: val
                    });
                }
            }
        };

        _this.state = {
            index: 0
        };
        return _this;
    }

    (0, _createClass3.default)(RotationMap, [{
        key: 'render',
        value: function render() {
            var ChoiceNavProps = {
                choiceChangeState: this.choiceChangeState,
                num: this.props.children.length,
                index: this.state.index
            };
            return _react2.default.createElement(
                'div',
                { className: 'root' },
                _react2.default.createElement(_choiceNav2.default, ChoiceNavProps),
                _react2.default.createElement(
                    _pictureRotation2.default,
                    { index: this.state.index },
                    this.props.children
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

/***/ "./src/icon/icon-left-00.svg":
/*!***********************************!*\
  !*** ./src/icon/icon-left-00.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4MjEyNjk5OTc0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2NyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MzIuNTI2NDk5IDkwNC44MTc1NzRMMTM5LjUwNjMxMSA1MTEuNzk3Mzg1IDUzMi41MjY0OTkgMTE4Ljc3NzE5N2MxMi4yNTgxODUtMTIuMjU4MTg1IDEyLjQzMjE0Ny0zMi44OTIxMzEtMC4xODcyNjUtNDUuNTEwNTItMTIuNzA3NDE2LTEyLjcwNzQxNi0zMi45OTU0ODUtMTIuNzAzMzIzLTQ1LjUxMTU0My0wLjE4NzI2NUw3NS4xNjY5NTcgNDg0LjczOTEyM2MtNy4xMjAxNjUgNy4xMjAxNjUtMTAuMTYzNDc3IDE3LjA2NTY3Ny04Ljk5MDc2OCAyNi42MjQzODEtMS41MDAxNjcgOS43NTUxNzggMS41MTA0IDIwLjAxMDc1MyA4Ljk5MDc2OCAyNy40OTExMjFsNDExLjY2MDczNCA0MTEuNjYwNzM0YzEyLjI1ODE4NSAxMi4yNTgxODUgMzIuODkyMTMxIDEyLjQzMjE0NyA0NS41MTE1NDMtMC4xODcyNjUgMTIuNzA3NDE2LTEyLjcwNzQxNiAxMi43MDIzLTMyLjk5NTQ4NSAwLjE4NzI2NS00NS41MTA1MnoiIHAtaWQ9Ijk2OCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/icon/icon-left-51.svg":
/*!***********************************!*\
  !*** ./src/icon/icon-left-51.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4MjEyODc5MzUyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTMyLjUyNjQ5OSA5MDQuODE3NTc0TDEzOS41MDYzMTEgNTExLjc5NzM4NSA1MzIuNTI2NDk5IDExOC43NzcxOTdjMTIuMjU4MTg1LTEyLjI1ODE4NSAxMi40MzIxNDctMzIuODkyMTMxLTAuMTg3MjY1LTQ1LjUxMDUyLTEyLjcwNzQxNi0xMi43MDc0MTYtMzIuOTk1NDg1LTEyLjcwMzMyMy00NS41MTE1NDMtMC4xODcyNjVMNzUuMTY2OTU3IDQ4NC43MzkxMjNjLTcuMTIwMTY1IDcuMTIwMTY1LTEwLjE2MzQ3NyAxNy4wNjU2NzctOC45OTA3NjggMjYuNjI0MzgxLTEuNTAwMTY3IDkuNzU1MTc4IDEuNTEwNCAyMC4wMTA3NTMgOC45OTA3NjggMjcuNDkxMTIxbDQxMS42NjA3MzQgNDExLjY2MDczNGMxMi4yNTgxODUgMTIuMjU4MTg1IDMyLjg5MjEzMSAxMi40MzIxNDcgNDUuNTExNTQzLTAuMTg3MjY1IDEyLjcwNzQxNi0xMi43MDc0MTYgMTIuNzAyMy0zMi45OTU0ODUgMC4xODcyNjUtNDUuNTEwNTJ6IiBwLWlkPSIxNDY2IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ "./src/icon/icon-right-00.svg":
/*!************************************!*\
  !*** ./src/icon/icon-right-00.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4MjEyNzQyNTA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDkyLjY3NTg4NiA5MDQuODE3NTc0TDg4NS42OTYwNzQgNTExLjc5NzM4NSA0OTIuNjc1ODg2IDExOC43NzcxOTdjLTEyLjI1ODE4NS0xMi4yNTgxODUtMTIuNDMyMTQ3LTMyLjg5MjEzMSAwLjE4NzI2NS00NS41MTA1MiAxMi43MDc0MTYtMTIuNzA3NDE2IDMyLjk5NTQ4NS0xMi43MDMzMjMgNDUuNTExNTQzLTAuMTg3MjY1bDQxMS42NjA3MzQgNDExLjY2MDczNGM3LjEyMDE2NSA3LjEyMDE2NSAxMC4xNjM0NzcgMTcuMDY1Njc3IDguOTkwNzY4IDI2LjYyNDM4MSAxLjUwMDE2NyA5Ljc1NTE3OC0xLjUxMDQgMjAuMDEwNzUzLTguOTkwNzY4IDI3LjQ5MTEyMUw1MzguMzc0Njk0IDk1MC41MTUzNTljLTEyLjI1ODE4NSAxMi4yNTgxODUtMzIuODkyMTMxIDEyLjQzMjE0Ny00NS41MTE1NDMtMC4xODcyNjUtMTIuNzA3NDE2LTEyLjcwNzQxNi0xMi43MDMzMjMtMzIuOTk1NDg1LTAuMTg3MjY1LTQ1LjUxMDUyeiIgcC1pZD0iMTMzNyI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/icon/icon-right-51.svg":
/*!************************************!*\
  !*** ./src/icon/icon-right-51.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4MjEyODkyODA0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDkyLjY3NTg4NiA5MDQuODE3NTc0TDg4NS42OTYwNzQgNTExLjc5NzM4NSA0OTIuNjc1ODg2IDExOC43NzcxOTdjLTEyLjI1ODE4NS0xMi4yNTgxODUtMTIuNDMyMTQ3LTMyLjg5MjEzMSAwLjE4NzI2NS00NS41MTA1MiAxMi43MDc0MTYtMTIuNzA3NDE2IDMyLjk5NTQ4NS0xMi43MDMzMjMgNDUuNTExNTQzLTAuMTg3MjY1bDQxMS42NjA3MzQgNDExLjY2MDczNGM3LjEyMDE2NSA3LjEyMDE2NSAxMC4xNjM0NzcgMTcuMDY1Njc3IDguOTkwNzY4IDI2LjYyNDM4MSAxLjUwMDE2NyA5Ljc1NTE3OC0xLjUxMDQgMjAuMDEwNzUzLTguOTkwNzY4IDI3LjQ5MTEyMUw1MzguMzc0Njk0IDk1MC41MTUzNTljLTEyLjI1ODE4NSAxMi4yNTgxODUtMzIuODkyMTMxIDEyLjQzMjE0Ny00NS41MTE1NDMtMC4xODcyNjUtMTIuNzA3NDE2LTEyLjcwNzQxNi0xMi43MDMzMjMtMzIuOTk1NDg1LTAuMTg3MjY1LTQ1LjUxMDUyeiIgcC1pZD0iMTgzNSIgZmlsbD0iIzUxNTE1MSI+PC9wYXRoPjwvc3ZnPg=="

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

/***/ })

/******/ });