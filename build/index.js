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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    ResponsiveWrappertitle = _wp$components.ResponsiveWrappertitle,
    SelectControl = _wp$components.SelectControl;
registerBlockType('stingless/custom-slider', {
  title: 'Slider',
  description: 'Custom slider',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    slideCount: {
      type: 'number',
      default: 0
    },
    autoplay: {
      type: 'string',
      default: 'no-autoplay'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var _wp$data = wp.data,
        select = _wp$data.select,
        dispatch = _wp$data.dispatch,
        subscribe = _wp$data.subscribe;
    var parentBlock = select('core/block-editor').getBlocks()[0];
    var childBlocks = parentBlock.innerBlocks;
    var ALLOWED_BLOCKS = ['stingless/custom-slider-slide'];
    var slideCount = attributes.slideCount,
        autoplay = attributes.autoplay;
    var isParentOfSelectedBlock = select('core/block-editor').hasSelectedInnerBlock(parentBlock.clientId, true);
    childBlocks.forEach(function (child, index) {
      if (isParentOfSelectedBlock) {
        if (index == 0) {
          dispatch('core/block-editor').updateBlockAttributes(childBlocks[index].clientId, {
            active: 'slide-image active'
          });
        } else {
          dispatch('core/block-editor').updateBlockAttributes(childBlocks[index - 1].clientId, {
            active: 'slide-image'
          });
          dispatch('core/block-editor').updateBlockAttributes(childBlocks[index].clientId, {
            active: 'slide-image active'
          });
        }
      }
    });
    setAttributes({
      slideCount: childBlocks.length
    });

    function onClickImage(event) {
      var position = event.currentTarget.id;
      var removeDotClass = document.querySelector('.slider__indicator.clicked').classList.remove('clicked');
      var addDotClass = document.querySelectorAll('.slider__indicator')[position].classList.add('clicked');
      var removeClass = document.querySelector('.slide-image.active').classList.remove('active');
      var addClass = document.querySelectorAll('.slide-image')[position].classList.add('active');
    }

    function onAutoplayChange(newAutoplay) {
      setAttributes({
        autoplay: newAutoplay
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Background image settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Autoplay:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: 'Enable Autoplay:',
      value: autoplay,
      onChange: onAutoplayChange,
      options: [{
        value: 'no-autoplay',
        label: 'Disable'
      }, {
        value: 'autoplay',
        label: 'Enable'
      }]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, "Custom slider"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "slider__dots"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, childBlocks.map(function (link, index) {
      if (childBlocks.length === index + 1) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          onClick: onClickImage,
          id: index,
          className: "slider__indicator clicked"
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          onClick: onClickImage,
          id: index,
          className: "slider__indicator"
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        clear: 'both'
      }
    })))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var slideCount = attributes.slideCount,
        autoplay = attributes.autoplay;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: autoplay
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, "Custom slider"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "slider__dots"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      icon: "arrow-left-alt2",
      className: "test1",
      style: {
        width: '10%',
        float: 'left'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(slideCount)).map(function (link, index) {
      if (_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(slideCount)).length === index + 1) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          id: index,
          className: "slider__indicator clicked"
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          id: index,
          className: "slider__indicator"
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      icon: "arrow-right-alt2",
      className: "test2",
      style: {
        width: '10%',
        float: 'left'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        clear: 'both'
      }
    })));
  }
});
registerBlockType('stingless/custom-slider-slide', {
  title: 'Slide',
  description: 'Custom slider slide',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    image: {
      type: 'string',
      default: ''
    },
    overlayColor: {
      type: 'string',
      default: 'black'
    },
    overlayOpacity: {
      type: 'number',
      default: 0.3
    },
    active: {
      type: 'string',
      default: 'slide-image'
    }
  },
  edit: function edit(_ref3) {
    var attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes;
    var image = attributes.image,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        active = attributes.active;

    function onSelectImage(newImage) {
      setAttributes({
        image: newImage.sizes.full.url
      });
    }

    function onOverlayColorChange(newOverlayColor) {
      setAttributes({
        overlayColor: newOverlayColor
      });
    }

    function onOverlayOpacityChange(newOverlayOpacity) {
      setAttributes({
        overlayOpacity: newOverlayOpacity
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Background image settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Upload Image:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: image,
      render: function render(_ref4) {
        var open = _ref4.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          onClick: open,
          icon: "upload",
          className: "editor-media-placeholder__button is-button is-default is-large"
        }, "Choose Image");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Overlay Color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: 'Overlay Opacity',
      value: overlayOpacity,
      onChange: onOverlayOpacityChange,
      min: 0,
      max: 1,
      step: 0.05
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(image, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      },
      className: active
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        background: overlayColor,
        opacity: overlayOpacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        padding: '2% 4%'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, null)))];
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var image = attributes.image,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity,
        active = attributes.active;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(image, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      },
      className: active
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        background: overlayColor,
        opacity: overlayOpacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        padding: '2% 4%'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map