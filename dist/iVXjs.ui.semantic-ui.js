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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Converts an object with attributes and keys into HTML
 * that inputs can be used.
 */
var AttributeTags = exports.AttributeTags = function () {

  /**
   * Pulls all the attribute settings and the attributes 
   * to be rendered.
   * @param {Object} attributeData - settings for all the attributes.
   * @param {Array} attributeKeys - attribute names to be set.
   */
  function AttributeTags() {
    var attributeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var attributeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, AttributeTags);

    /**
     * All attributes to be made.
     * @type {Object}
     */
    this.attributeData = attributeData;

    /**
     * Attribute names to be set.
     * @type {Array}
     */
    this.attributeKeys = attributeKeys;
  }

  /**
   * Renders attributes based on the keys and attribute data.
   * @example
   * attributeData = { required = "true"};
   * attributeKeys = ["required"];
   * 
   * // Becomes: 
   * html = 'required = "true"'
   * 
   * @type {String}
   */


  _createClass(AttributeTags, [{
    key: 'html',
    get: function get() {
      var attributeKeys = this.attributeKeys,
          attributeData = this.attributeData;

      var attributeHTML = attributeKeys.reduce(function (currentAttributeHTML, currentKey) {

        if (attributeData[currentKey]) {
          var attributeTagHTML = attributeData[currentKey] === 'tag-only' ? currentKey : currentKey + '="' + attributeData[currentKey] + '"';

          return currentAttributeHTML + ' ' + attributeTagHTML + ' ';
        }
        return currentAttributeHTML;
      }, '');
      return attributeHTML;
    }
  }]);

  return AttributeTags;
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Indicates errors for each input based on the 
 * attributes created from the various rendering libraries
 * iVXjs uses. 
 */
var ErrorMessages = exports.ErrorMessages = function () {

    /**
     * Brings in all the possible error messages 
     * this input can produce.
     * 
     * @param {Array} errorMessages - list of all possible 
     * error messages with attributes indicating the message 
     * and the conditions in which to show them.
     */
    function ErrorMessages() {
        var errorMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ErrorMessages);

        /**
         * List of all possible error messages.
         * @type {Array}
         */
        this.errorMessages = errorMessages;
    }

    /**
     * Sets the classes for the error message div.
     * @type {String} 
     */


    _createClass(ErrorMessages, [{
        key: 'messageClasses',
        get: function get() {
            return 'error-message';
        }

        /**
         * Set the classes for the container of all error messages.
         * @type {String}
         */

    }, {
        key: 'containerClasses',
        get: function get() {
            return 'error-messages';
        }

        /**
         * Renders the HTML for all error messages and the container with 
         * them. Results:
         * @example
         * <div class="error-messages">
         *    <span class="error-message">MESSAGE</span>
         * </div>
         * @type {String}
         */

    }, {
        key: 'html',
        get: function get() {
            var errorMessages = this.errorMessages,
                messageClasses = this.messageClasses,
                containerClasses = this.containerClasses;

            var errorMessageHTML = errorMessages.reduce(function (errorMessageHTML, errorMessage, index) {
                return errorMessageHTML + '<span class="' + messageClasses + '" ' + errorMessage.attrHTML + '>\n                    ' + errorMessage.message + '\n                </span>';
            }, '');

            if (errorMessageHTML.length > 0) {
                return '<div class=\'' + containerClasses + '\'>\n                ' + errorMessageHTML + '\n            </div>';
            }

            return '';
        }
    }]);

    return ErrorMessages;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = exports.Style = function () {
    function Style() {
        _classCallCheck(this, Style);
    }

    _createClass(Style, [{
        key: 'getWidth',
        value: function getWidth(width) {
            if (width === '1') return 'ivxjs-grid-1-1';

            var gridString = width.replace('/', '-');

            return 'ivxjs-grid-' + gridString;
        }
    }, {
        key: 'addWidthClasses',
        value: function addWidthClasses(inputsHTML) {
            var self = this;
            var _containerClasses = this.containerClasses,
                containerClasses = _containerClasses === undefined ? '' : _containerClasses;

            var contents = inputsHTML.reduce(function (currentHTML, inputHTML) {
                var html = inputHTML.html,
                    _inputHTML$settings = inputHTML.settings,
                    settings = _inputHTML$settings === undefined ? {} : _inputHTML$settings;
                var _settings$width = settings.width,
                    width = _settings$width === undefined ? '1' : _settings$width,
                    _settings$container = settings.container,
                    container = _settings$container === undefined ? {} : _settings$container;
                var _container$classes = container.classes,
                    classes = _container$classes === undefined ? '' : _container$classes;


                classes = classes + ' ' + containerClasses;

                var thisWidth = self.getWidth(width);

                html = html.replace("ivxjs-grid-1-1", thisWidth + ' ' + classes);

                return currentHTML + ' ' + html;
            }, '');

            return contents;
        }
    }, {
        key: 'containerClasses',
        get: function get() {
            return 'input-container';
        }
    }]);

    return Style;
}();

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeValidator = exports.TypeValidator = function () {
    function TypeValidator() {
        _classCallCheck(this, TypeValidator);
    }

    _createClass(TypeValidator, [{
        key: 'isObject',
        value: function isObject(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return value != null && (type == 'object' || type == 'function');
        }
    }, {
        key: 'isUndefined',
        value: function isUndefined(obj) {
            return obj === undefined || obj === null;
        }
    }, {
        key: 'isString',
        value: function isString(obj) {
            return this.toString.call(obj) === '[object String]';
        }
    }, {
        key: 'isFunction',
        value: function isFunction(obj) {
            return obj && this.toString.call(obj) === '[object Function]';
        }
    }, {
        key: 'isNumber',
        value: function isNumber(obj) {
            return !isNaN(obj);
        }
    }, {
        key: 'isBoolean',
        value: function isBoolean(obj) {
            return typeof obj === 'boolean' || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.valueOf() === 'boolean';
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(obj) {
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var isArray = Array.isArray(obj);
            var isString = typeof obj === 'string';
            var checkLength = isArray || isString;

            if (checkLength && obj.length === 0) return true;
            if (checkLength && obj.length > 0) return false;
            if (!isNaN(obj)) return false;
            if (obj === undefined) return true;
            if (obj === null) return true;

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        }
    }, {
        key: 'toString',
        get: function get() {
            return Object.prototype.toString;
        }
    }]);

    return TypeValidator;
}();

var typeValidator = new TypeValidator();

var ObjectParsers = exports.ObjectParsers = function () {
    function ObjectParsers() {
        _classCallCheck(this, ObjectParsers);
    }

    /**
     * Allows you to map an object by the keys of a given object 
     * @param {object} object - object to map;
     * @param {function} callback - function to run by each value and key  
     */


    _createClass(ObjectParsers, [{
        key: 'mapKeys',
        value: function mapKeys(object, callback) {
            if (!object || object === {}) return [];

            var keys = Object.keys(object);
            var entries = keys.reduce(function (currentArray, key) {
                var entry = [key, object[key]];

                currentArray.push(entry);

                return currentArray;
            }, []);
            var reduceMap = new Map(entries);
            var mappedArray = [];

            if (!reduceMap) return [];

            reduceMap.forEach(function (val, key) {
                mappedArray.push(callback(val, key));
            });

            return mappedArray;
        }
    }, {
        key: 'merge',
        value: function merge(base, merged, ignore) {
            var mergedKeys = Object.keys(merged);
            var unionedObject = new Object(base);

            mergedKeys.forEach(function (mergedKey, index) {
                if (ignore && ignore.indexOf(mergedKey) >= 0) return;
                unionedObject[mergedKey] = merged[mergedKey];
            });

            return unionedObject;
        }
    }, {
        key: 'reduce',
        value: function reduce(object, callback, defaultValue) {
            if (!object || object === {}) return;

            var keys = Object.keys(object);
            var entries = keys.reduce(function (currentArray, key) {
                var entry = [key, object[key]];
                currentArray.push(entry);
                return currentArray;
            }, []);
            var reduceMap = new Map(entries);

            reduceMap.forEach(function (val, key) {
                defaultValue = callback(defaultValue, val, key);
            });

            return defaultValue;
        }

        /**
         * Iterates through a collection to find if any of the values 
         * with the keys is empty.
         */

    }, {
        key: 'anyEmpty',
        value: function anyEmpty(collection, keys) {
            var hasElements = {
                isEmpty: false,
                errors: []
            };

            collection.forEach(function (element, index) {
                keys.forEach(function (key) {
                    if (typeValidator.isEmpty(element[key])) {
                        hasElements.isEmpty = true;
                        hasElements.errors.push({
                            key: key,
                            index: index,
                            value: element[key]
                        });
                    }
                });
            });

            return hasElements;
        }
    }, {
        key: 'has',
        value: function has(collection, element) {

            if (Array.isArray(element)) {
                return this.hasSameArray(collection, element);
            }

            if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object') {
                return this.hasSameObject(collection, element);
            }

            return collection.indexOf(element) >= 0;
        }
    }, {
        key: 'hasSameObject',
        value: function hasSameObject(collection, element) {
            var itHas = false;

            collection.forEach(function (checkElement, index) {
                if ((typeof checkElement === 'undefined' ? 'undefined' : _typeof(checkElement)) === 'object') {
                    var checkElementKeys = Object.keys(checkElement);
                    checkElementKeys.forEach(function (key, index) {
                        itHas = checkElement[key] === element[key];
                    });
                }
            });

            return itHas;
        }
    }, {
        key: 'hasSameArray',
        value: function hasSameArray(collection, arrayElement) {
            var itHas = false;

            collection.forEach(function (checkElement, index) {

                if (Array.isArray(checkElement)) {

                    checkElement.forEach(function (testElement, index) {

                        itHas = testElement === arrayElement[index];
                    });
                }
            });

            return itHas;
        }
    }, {
        key: 'setValue',
        value: function setValue(object, path, value) {
            var a = path.split('.');
            var o = object;
            for (var i = 0; i < a.length - 1; i++) {
                var n = a[i];
                if (n in o) {
                    o = o[n];
                } else {
                    o[n] = {};
                    o = o[n];
                }
            }
            o[a[a.length - 1]] = value;
        }
    }, {
        key: 'getValueFromPath',
        value: function getValueFromPath(path, object) {
            var pathParts = path.split(".");
            var oldData = object;
            var currentData = {};
            var returnValue = void 0;

            pathParts.forEach(function (pathPart, index) {
                if (typeValidator.isEmpty(pathPart)) return;
                currentData = oldData[pathPart];

                if (typeValidator.isEmpty(currentData)) {
                    returnValue = currentData;
                    return;
                }

                returnValue = currentData;
                oldData = currentData;
            });

            return returnValue;
        }

        /**
         * Checks in an array of objects to see if the values 
         * at the keys is unique and returns an object indicating 
         * if they are unique and any errors that don't match for 
         * correction.
         */

    }, {
        key: 'isUnique',
        value: function isUnique() {
            var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var hasUnique = {
                isUnique: true,
                errors: []
            };
            var allUniqueValues = {};
            var self = this;

            keys.forEach(function (key) {
                allUniqueValues[key] = [];
                collection.forEach(function (element, index) {
                    var notUnique = self.has(allUniqueValues[key], element[key]);

                    if (notUnique) {
                        hasUnique.errors.push({
                            key: key,
                            index: index,
                            value: element[key]
                        });
                        hasUnique.isUnique = false;
                    } else {
                        allUniqueValues[key].push(element[key]);
                    }
                });
            });

            return hasUnique;
        }
    }]);

    return ObjectParsers;
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorMessages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessages = exports.ErrorMessages = function (_DefaultErrorMessages) {
    _inherits(ErrorMessages, _DefaultErrorMessages);

    function ErrorMessages() {
        var errorMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ErrorMessages);

        return _possibleConstructorReturn(this, (ErrorMessages.__proto__ || Object.getPrototypeOf(ErrorMessages)).call(this, errorMessages));
    }

    _createClass(ErrorMessages, [{
        key: "messageClasses",
        get: function get() {
            return 'ui error message';
        }
    }]);

    return ErrorMessages;
}(_messages.ErrorMessages);

;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.LIBRARY = "iVXjs";
        this.DELIMETER = ":";
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention() {
            return this.LIBRARY;
        }
    }, {
        key: "addNames",
        value: function addNames(nameCollection) {
            var self = this;
            var names = Object.keys(nameCollection);

            names.forEach(function (name, index) {
                self[name] = self.convention(nameCollection[name]);
            });
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createFactoryFunction;
function createFactoryFunction(constructor) {
	var constructorFn = constructor;
	var args = constructorFn.$inject;
	var factoryFunction = function factoryFunction() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return new (Function.prototype.bind.apply(constructorFn, [null].concat(args)))();
	};

	args.push(factoryFunction);

	return args;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class(log) {
		_classCallCheck(this, _class);

		this.log = log;
	}

	_createClass(_class, [{
		key: "assert",
		value: function assert(test, name, message) {
			var log = this.log;
			var debug = log.show;


			if (!test) {
				var errorObj = {
					message: name + " is invalid: " + message + "."
				};

				if (debug) {
					this.log.error(errorObj, "ASSERT");
					throw new Error(errorObj.message);
				}
			}

			return test;
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_iVXjsConstants) {
    _inherits(_class, _iVXjsConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.TRACKS = "tracks";
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention() {
            var DELIMETER = this.DELIMETER,
                TRACKS = this.TRACKS;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + TRACKS;
        }
    }]);

    return _class;
}(_index2.default);

exports.default = _class;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

var Text = exports.Text = function () {
    function Text() {
        var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Text);

        var _inputObj$input = inputObj.input,
            input = _inputObj$input === undefined ? {} : _inputObj$input,
            _inputObj$settings = inputObj.settings,
            settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
            _inputObj$tags = inputObj.tags,
            tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
            _inputObj$errors = inputObj.errors,
            errors = _inputObj$errors === undefined ? {} : _inputObj$errors;


        this.input = input;
        this.settings = settings;
        this.tags = tags;
        this.errors = errors;
        this.errorMessages = errorMessages;
        this.attributeTags = _attributes.AttributeTags;
    }

    _createClass(Text, [{
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }
    }, {
        key: "html",
        get: function get() {
            var input = this.input,
                settings = this.settings,
                tags = this.tags,
                errors = this.errors,
                uiClasses = this.uiClasses,
                uiAttributes = this.uiAttributes;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML,
                _input$name = input.name,
                name = _input$name === undefined ? '' : _input$name,
                _input$id = input.id,
                id = _input$id === undefined ? '' : _input$id;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input,
                _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


            classes = classes + " " + uiClasses;

            var _errors$messages = errors.messages,
                errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                _errors$attributes = errors.attributes,
                errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                _errors$nonValidate = errors.nonValidate,
                nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                _errors$tags = errors.tags,
                errorTags = _errors$tags === undefined ? '' : _errors$tags;

            var errorHTML = new this.errorMessages(errorMessages).html;
            var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

            nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

            if (labelHTML) label = labelHTML;

            var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"  type=\"text\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

            return "" + inputHTML;
        }
    }]);

    return Text;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Anchor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attributes = __webpack_require__(0);

var _typeParsers = __webpack_require__(4);

var _asserts = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var typeCheck = new _typeParsers.TypeValidator();

var Anchor = exports.Anchor = function () {
    function Anchor(anchorInfo) {
        _classCallCheck(this, Anchor);

        this.anchorInfo = anchorInfo;
    }

    _createClass(Anchor, [{
        key: 'anchorClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'html',
        get: function get() {
            var anchorClasses = this.anchorClasses;
            var _anchorInfo = this.anchorInfo,
                _anchorInfo$href = _anchorInfo.href,
                href = _anchorInfo$href === undefined ? '' : _anchorInfo$href,
                _anchorInfo$classes = _anchorInfo.classes,
                classes = _anchorInfo$classes === undefined ? '' : _anchorInfo$classes,
                _anchorInfo$attribute = _anchorInfo.attributes,
                attributes = _anchorInfo$attribute === undefined ? {} : _anchorInfo$attribute,
                _anchorInfo$label = _anchorInfo.label,
                label = _anchorInfo$label === undefined ? labelHTML : _anchorInfo$label,
                labelHTML = _anchorInfo.labelHTML,
                _anchorInfo$id = _anchorInfo.id,
                id = _anchorInfo$id === undefined ? '' : _anchorInfo$id;

            var attributeHTML = new _attributes.AttributeTags(attributes, Object.keys(attributes)).html;

            if (!labelHTML && !label) {
                label = href;
            }

            return '\n             <a id=\'' + id + '\' class="' + classes + ' ' + anchorClasses + '"  href="' + href + '" ' + attributeHTML + ' >' + (labelHTML ? labelHTML : label) + '</a>           \n        ';
        }
    }]);

    return Anchor;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a form wrapper around these inputs and a 
 * submit button to submit the form.
 */
var Form = exports.Form = function () {

    /**
     * Sets up the various data to render this form.
     * @param {array} inputHTML - All input data to be added to this form 
     * @param {string} name - name of this form 
     * @param {string} additionalAttrHTML - Attributes that need to be 
     * added to the form primarily used for validation and submit functions.
     * @param {object} settings - Global settings for this form.
     */
    function Form(inputHTML, name, additionalAttrHTML, settings) {
        var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _style.Style;

        _classCallCheck(this, Form);

        /**
         * All input html information for this 
         * form
         * @type {String}
         */
        this.inputHTML = inputHTML;

        /**
         * Name for this form 
         * @type {String}
         */
        this.name = name;

        /**
         * Additional tags to add to this form 
         * @type {String}
         */
        this.additionalAttrHTML = additionalAttrHTML;

        /**
         * Settings for this entire form 
         * @type {Object}
         */
        this.settings = settings;

        /**
         * Settings for this submit button 
         * @type {Object}
         */
        this.submit = settings.submit;
        this.style = new style();
    }

    /**
     * Any default UI classes to add to this form 
     * @type {String}
     */


    _createClass(Form, [{
        key: 'formClasses',
        get: function get() {
            return 'row';
        }

        /**
         * Renders the HTML to render the 
         * @example
         * Form.settings = {
         *     submit : {
         *         label : "My new submit label",
         *         input : {
         *            classes : "my-submit-input"
         *         },
         *         container : {
         *             classes : "my-submit-container"
         *         }
         *     }
         * };
         * 
         * //Will Render 
         * 
         * <div class="ivxjs-grid-1-1 my-submit-container">
         *     <button class="my-submit-input" type="submit">
         *          My new submit label 
         *     </button>
         * </div>
         * 
         * @type {string}
         */

    }, {
        key: 'submitButtonHTML',
        get: function get() {
            var _submit = this.submit,
                submit = _submit === undefined ? {} : _submit;
            var _submit$label = submit.label,
                submitLabel = _submit$label === undefined ? "Submit" : _submit$label,
                submitLabelHTML = submit.labelHTML,
                _submit$input = submit.input,
                submitInput = _submit$input === undefined ? {} : _submit$input,
                _submit$container = submit.container,
                submitContainer = _submit$container === undefined ? {} : _submit$container,
                _submit$attributes = submit.attributes,
                attributes = _submit$attributes === undefined ? '' : _submit$attributes;
            var _submitInput$classes = submitInput.classes,
                submitInputClasses = _submitInput$classes === undefined ? "" : _submitInput$classes;
            var _submitContainer$clas = submitContainer.classes,
                submitContainerClasses = _submitContainer$clas === undefined ? "" : _submitContainer$clas;


            submitLabel = submitLabelHTML ? submitLabelHTML : submitLabel;

            var submitHTML = submitLabel.length >= 0 ? '\n            <div class="ivxjs-grid-1-1 ' + submitContainerClasses + '">\n            <button class="' + submitInputClasses + '" type=\'submit\' ' + attributes + '>\n                    ' + submitLabel + '\n                </button>\n                </div>\n                ' : '';

            return submitHTML;
        }

        /**
         * Wraps each input's html into a container so they can be formatted correctly
         * utilizing the ivxjs.css's grid system.
         * @type{String} 
         */

    }, {
        key: 'html',
        get: function get() {
            var inputHTML = this.inputHTML,
                name = this.name,
                additionalAttrHTML = this.additionalAttrHTML,
                settings = this.settings,
                formClasses = this.formClasses;
            var _settings$submit = settings.submit,
                submit = _settings$submit === undefined ? {} : _settings$submit,
                _settings$classes = settings.classes,
                configFormClasses = _settings$classes === undefined ? '' : _settings$classes,
                formId = settings.id,
                _settings$label = settings.label,
                label = _settings$label === undefined ? '' : _settings$label,
                labelHTML = settings.labelHTML;


            if (labelHTML) label = labelHTML;

            if (!settings.hideSubmit) {
                inputHTML.push({
                    settings: submit,
                    html: this.submitButtonHTML
                });
            }

            var contents = this.style.addWidthClasses(inputHTML);

            return '\n            ' + label + '\n            <form id="' + formId + '-form" class="' + formClasses + ' ' + configFormClasses + '" novalidate name="' + name + '" ' + additionalAttrHTML + '>                \n                ' + contents + '\n            </form>\n        ';
        }
    }]);

    return Form;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Buttons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

var _typeParsers = __webpack_require__(4);

var _asserts = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();
var typeCheck = new _typeParsers.TypeValidator();

/**
 * Renders a collection of buttons for one click recording of 
 * an input that has multiple options for data recording.
 */

var Buttons = exports.Buttons = function () {

    /**
     * Takes the settings for the buttons, a class that renders the 
     * error messages and a class that renders attributes. 
     * 
     * @param {Object} buttonsInfo - Information to create this button input 
     * @param {Array} buttonsInfo.buttons - each individual button data and settings.
     * @param {Object} buttonsInfo.settings - settings for all buttons 
     * @param {Class} buttonsInfo.errors - an error class that was created by the 
     * rendering library so the errors open and display alongside the library. 
     */
    function Buttons() {
        var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var input = arguments[1];
        var errorMessages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _messages.ErrorMessages;

        _classCallCheck(this, Buttons);

        /**
         * Buttons to be rendered
         * @type {Array}
         */
        this.buttons = buttons;

        /**
         * Settings for all buttons in this group 
         * @type {Object}
         */
        this.input = input;

        /**
         * Error message class that will take the errors from 
         * the rendering library and adds them to this input 
         * @type {Class}
         */
        this.errorMessages = errorMessages;

        /**
         * Creates attribute tags html to be added to this button 
         * inputs.
         * @type {Class}
         */
        this.attributeTags = _attributes.AttributeTags;
    }

    /**
     * Lets users add the same classes to all buttons just in 
     * case buttons share a specific class.
     * 
     * @type {String}
     */


    _createClass(Buttons, [{
        key: "buttonClasses",
        get: function get() {
            return '';
        }

        /**
         * Creates the HTML for every buttons defined in the buttons array and 
         * attaches the error messages attached to this input. 
         * 
         * @example
         * buttonClasses = 'button-class';
         * buttons = [{
         *    label : "Button 1",
         *    attrHTML : "disabled",
         *    classes : "class-1"
         * },{
         *    label : "<h1>Button 2</h1>",
         *    classes " class-2"
         * }];
         * 
         * // Will render:
         * 
         * <button class="button-class class-1" disabled>Button 1</button>
         * <button class="button class class-2"><h1>Button 2</h1></button>
         * 
         * @type {String}
         */

    }, {
        key: "html",
        get: function get() {
            var _errors = this.errors,
                errorClass = _errors === undefined ? {} : _errors,
                _buttons = this.buttons,
                buttons = _buttons === undefined ? [] : _buttons,
                _input = this.input,
                input = _input === undefined ? {} : _input,
                buttonClasses = this.buttonClasses;
            var _errorClass$attribute = errorClass.attributes,
                attributes = _errorClass$attribute === undefined ? {} : _errorClass$attribute,
                _errorClass$errors = errorClass.errors,
                errors = _errorClass$errors === undefined ? {} : _errorClass$errors,
                _errorClass$messages = errorClass.messages,
                messages = _errorClass$messages === undefined ? {} : _errorClass$messages;

            var buttonErrorMessages = Object.keys(attributes).map(function (key, index) {
                return {
                    message: "" + errors[key],
                    attrHTML: ''
                };
            });
            var errorMessages = new this.errorMessages(buttonErrorMessages).html;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                _input$labelHTML = input.labelHTML,
                labelHTML = _input$labelHTML === undefined ? '' : _input$labelHTML,
                _input$showLabel = input.showLabel,
                showLabel = _input$showLabel === undefined ? false : _input$showLabel,
                id = input.id;

            var buttonsHTML = buttons.reduce(function (html, button, index) {
                var label = button.label,
                    _button$attrHTML = button.attrHTML,
                    attrHTML = _button$attrHTML === undefined ? '' : _button$attrHTML,
                    _button$classes = button.classes,
                    classes = _button$classes === undefined ? "" : _button$classes;


                return html + " \n                   <button " + attrHTML + " class=\"" + classes + " " + buttonClasses + "\">\n                       " + label + "\n                   </button>";
            }, '');

            if ((labelHTML.length > 0 || label.length > 0) && showLabel) {
                labelHTML = labelHTML ? labelHTML : label;
                labelHTML = "<label for=\"" + id + "\">" + labelHTML + "</label>";
            }

            return "\n             " + labelHTML + "\n             " + buttonsHTML + "\n             " + errorMessages + "             \n        ";
        }
    }]);

    return Buttons;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

/**
 * Produces html to build a checkbox input for the  
 * various rendering libraries. 
 */

var Checkbox = exports.Checkbox = function () {

    /**
     * Sets up the checkbox's settings from a standard input data 
     * object and sets the type of error messages this class 
     * will render if the checkbox isn't valid.
     * 
     * @param {Object} inputObj - contains all the configurations 
     * to render this input.
     * @param {class} errorMessages - a class that will render the 
     * specific type of error messages based on this UI's settings.
     */
    function Checkbox() {
        var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Checkbox);

        var input = inputObj.input,
            _inputObj$tags = inputObj.tags,
            tags = _inputObj$tags === undefined ? '' : _inputObj$tags,
            _inputObj$settings = inputObj.settings,
            settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
            _inputObj$errors = inputObj.errors,
            errors = _inputObj$errors === undefined ? {} : _inputObj$errors;

        /**
         * This checkbox's input configuration 
         * @type {Object}
         */

        this.input = input;

        /**
         * Any custom tags passed down from the rendering library. 
         * @type {String}
         */
        this.tags = tags;

        /**
         * Settings for this whole input including the container
         * @type {Object}
         */
        this.settings = settings;

        /**
         * A class of errors created by the rendering library to 
         * hide and show various errors.
         * @type {class}
         */
        this.errors = errors;

        /**
         * This UI's rendering of this error messages.
         * @type {class}
         */
        this.errorMessages = errorMessages;
    }

    /**
     * Adds a default class to this checkbox input 
     * @type {String}
     */


    _createClass(Checkbox, [{
        key: "renderCheckboxContainer",


        /**
         * Renders the HTML for this checkbox from the given attributes 
         * and classes.
         * @example
         * uiClasses = "class-1";
         * input.classes = "class-2";
         * requiredAttributes = "id='id-1' name='checkbox-name' type='checkbox'"
         * // Renders To:
         * <label class="class-1 class-2">
         *     <input id='id-1' name='checkbox-name' type='checkbox'>
         * </label>
         * @return {String} - html of the fully created checkbox
         */
        value: function renderCheckboxContainer(classes, attributes) {
            var input = this.input,
                settings = this.settings;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML,
                _input$name = input.name,
                name = _input$name === undefined ? '' : _input$name,
                _input$id = input.id,
                id = _input$id === undefined ? '' : _input$id;
            var _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;


            if (labelHTML) label = labelHTML;

            return "\n            <label for=\"" + id + "\" class=\"" + classes + "\">\n               <input " + attributes + ">\n               " + label + "\n            </label>\n        ";
        }

        /**
         * Sets up and renders all the HTML for this checkbox based on the settings.
         * 
         * @type {String}
         */

    }, {
        key: "uiClasses",
        get: function get() {
            return '';
        }

        /**
         * Any UI specific attributes
         * @type {String}
         */

    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }

        /**
         * Attributes that required for this checkbox input 
         * to be used and rendered properly.
         * @return {String} - A string of all attributes to load 
         * this input including its id, name and type.
         */

    }, {
        key: "requiredAttributes",
        get: function get() {
            var input = this.input;
            var id = input.id,
                name = input.name;


            return "id=\"" + id + "\" name=\"" + name + "\" type=\"checkbox\"";
        }
    }, {
        key: "html",
        get: function get() {
            var tags = this.tags,
                _settings = this.settings,
                settings = _settings === undefined ? {} : _settings,
                errors = this.errors,
                input = this.input,
                uiClasses = this.uiClasses,
                uiAttributes = this.uiAttributes,
                requiredAttributes = this.requiredAttributes;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;
            var id = input.id,
                name = input.name,
                _input$label2 = input.label,
                label = _input$label2 === undefined ? '' : _input$label2;
            var _errors = this.errors,
                _errors$messages = _errors.messages,
                messages = _errors$messages === undefined ? [] : _errors$messages,
                _errors$attributes = _errors.attributes,
                attributes = _errors$attributes === undefined ? {} : _errors$attributes,
                _errors$tags = _errors.tags,
                errorTags = _errors$tags === undefined ? '' : _errors$tags;

            var errorAttributes = attributes;
            var errorHTML = new this.errorMessages(messages).html;
            var allClasses = classes + " " + uiClasses;
            var allAttributes = requiredAttributes + " " + uiAttributes + " " + tags + " " + errorTags;
            var checkboxHTML = this.renderCheckboxContainer(allClasses, allAttributes);
            var inputHTML = " \n            " + checkboxHTML + "\n            " + errorHTML + "\n       ";

            return "" + inputHTML;
        }
    }]);

    return Checkbox;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Options = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

var Options = exports.Options = function () {
    function Options(inputObj) {
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Options);

        var input = inputObj.input,
            _inputObj$defaultDisp = inputObj.defaultDisplay,
            defaultDisplay = _inputObj$defaultDisp === undefined ? '' : _inputObj$defaultDisp,
            _inputObj$settings = inputObj.settings,
            settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
            _inputObj$tags = inputObj.tags,
            tags = _inputObj$tags === undefined ? '' : _inputObj$tags,
            _inputObj$errors = inputObj.errors,
            errors = _inputObj$errors === undefined ? {} : _inputObj$errors;


        this.tags = tags;
        this.input = input;
        this.defaultDisplay = defaultDisplay;
        this.errors = errors;
        this.settings = settings;
        this.errorMessages = errorMessages;
        this.attributeTags = _attributes.AttributeTags;
    }

    _createClass(Options, [{
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }
    }, {
        key: "html",
        get: function get() {
            var tags = this.tags,
                input = this.input,
                defaultDisplay = this.defaultDisplay,
                errors = this.errors,
                settings = this.settings,
                uiClasses = this.uiClasses,
                uiAttributes = this.uiAttributes;
            var id = input.id,
                name = input.name,
                options = input.options,
                _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input,
                _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


            classes = classes + " " + uiClasses;

            var _errors$messages = errors.messages,
                errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                _errors$attributes = errors.attributes,
                errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                _errors$nonValidate = errors.nonValidate,
                nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                _errors$tags = errors.tags,
                errorTags = _errors$tags === undefined ? '' : _errors$tags;

            var defaultOptionTag = "<option value=\"\">Select an option...</option>";
            var errorHTML = new this.errorMessages(errorMessages).html;
            var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

            nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

            if (errorAttributes.required || defaultDisplay && defaultDisplay.length >= 0) {
                defaultOptionTag = defaultDisplay ? "<option value=\"\">" + defaultDisplay + "</option>" : defaultOptionTag;
            }

            if (labelHTML) label = labelHTML;

            var optionsHTML = options.reduce(function (optionHTML, option) {
                return optionHTML + "\n            <option value=\"" + option.value + "\">" + option.display + "</option>";
            }, '');

            var inputHTML = " \n             <label for=\"" + id + "\">" + label + "</label>             \n               <select class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"" + nonValidateAttributesHTML + " " + errorTags + " " + tags + ">\n                  " + defaultOptionTag + "\n                  " + optionsHTML + "\n               </select>\n               " + errorHTML;

            return "" + inputHTML;
        }
    }]);

    return Options;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Textarea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

var Textarea = exports.Textarea = function () {
    function Textarea() {
        var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Textarea);

        var _inputObj$input = inputObj.input,
            input = _inputObj$input === undefined ? {} : _inputObj$input,
            _inputObj$settings = inputObj.settings,
            settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
            _inputObj$tags = inputObj.tags,
            tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
            _inputObj$errors = inputObj.errors,
            errors = _inputObj$errors === undefined ? {} : _inputObj$errors;


        this.input = input;
        this.settings = settings;
        this.tags = tags;
        this.errors = errors;
        this.errorMessages = errorMessages;
        this.attributeTags = _attributes.AttributeTags;
    }

    _createClass(Textarea, [{
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }
    }, {
        key: "html",
        get: function get() {
            var input = this.input,
                settings = this.settings,
                tags = this.tags,
                errors = this.errors,
                uiClasses = this.uiClasses,
                uiAttributes = this.uiAttributes;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML,
                _input$name = input.name,
                name = _input$name === undefined ? '' : _input$name,
                _input$id = input.id,
                id = _input$id === undefined ? '' : _input$id;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input,
                _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;
            var _errors$messages = errors.messages,
                errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                _errors$attributes = errors.attributes,
                errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                _errors$nonValidate = errors.nonValidate,
                nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                _errors$tags = errors.tags,
                errorTags = _errors$tags === undefined ? '' : _errors$tags;

            var errorHTML = new this.errorMessages(errorMessages).html;
            var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

            if (labelHTML) label = labelHTML;

            label = showLabel ? label : '';

            var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <textarea class=\"" + classes + " " + uiClasses + "\"  id=\"" + id + "\" name=\"" + name + "\" " + uiAttributes + "   " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            </textarea>\n            " + errorHTML + "\n       ";

            return "" + inputHTML;
        }
    }]);

    return Textarea;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radio = exports.Radio = function () {
    function Radio(radioInputObj) {
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Radio);

        var _radioInputObj$input = radioInputObj.input,
            input = _radioInputObj$input === undefined ? {} : _radioInputObj$input,
            _radioInputObj$radios = radioInputObj.radios,
            radios = _radioInputObj$radios === undefined ? [] : _radioInputObj$radios,
            _radioInputObj$errors = radioInputObj.errors,
            errors = _radioInputObj$errors === undefined ? {} : _radioInputObj$errors,
            _radioInputObj$settin = radioInputObj.settings,
            settings = _radioInputObj$settin === undefined ? {} : _radioInputObj$settin;


        this.radios = radios;
        this.errors = errors;
        this.settings = settings;
        this.input = input;
        this.errorMessages = errorMessages;
        this.attributeTags = _attributes.AttributeTags;
    }

    _createClass(Radio, [{
        key: "uiRadioGroup",
        value: function uiRadioGroup(radiosHTML) {
            return radiosHTML;
        }
    }, {
        key: "uiRadioButtonContainer",
        value: function uiRadioButtonContainer(radioHTML, uiClasses) {
            var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var id = this.input.id;

            var currentId = "" + id + (value.length > 0 ? '-' + value : '');

            return " \n        <label for=\"" + currentId + "\" class=\"" + uiClasses + "\">\n        " + radioHTML + "\n        </label>";
        }
    }, {
        key: "renderRadioHTML",
        value: function renderRadioHTML(attrHTML, label, value) {
            var id = this.input.id;

            var currentId = "" + id + (value.length > 0 ? '-' + value : '');

            return " \n            <input type=\"radio\" id=\"" + currentId + "\" " + attrHTML + ">\n            " + label;
        }
    }, {
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }
    }, {
        key: "html",
        get: function get() {
            var errors = this.errors,
                radios = this.radios,
                settings = this.settings,
                input = this.input,
                uiClasses = this.uiClasses;
            var errorMessages = errors.messages,
                _errors$tags = errors.tags,
                errorTags = _errors$tags === undefined ? "" : _errors$tags;

            var self = this;
            var inputLabel = input.label,
                inputLableHTML = input.labelHTML;
            var _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;


            if (inputLableHTML) inputLabel = inputLableHTML;

            var radiosHTML = radios.reduce(function (html, radio, index) {
                var label = radio.label,
                    _radio$attrHTML = radio.attrHTML,
                    attrHTML = _radio$attrHTML === undefined ? '' : _radio$attrHTML,
                    _radio$classes = radio.classes,
                    classes = _radio$classes === undefined ? '' : _radio$classes,
                    value = radio.value;


                attrHTML = attrHTML + " " + errorTags;

                var radioHTML = self.renderRadioHTML(attrHTML, label, input.radioButtons[index].value);

                return html + "\n            " + self.uiRadioButtonContainer(radioHTML, uiClasses + " " + classes, input.radioButtons[index].value);
            }, inputLabel);
            var errorHTML = new this.errorMessages(errorMessages).html;
            var allRadioButtonsHTML = "\n             " + radiosHTML + "\n             " + errorHTML;

            return this.uiRadioGroup(allRadioButtonsHTML);
        }
    }]);

    return Radio;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.Number = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a number input that will record numbers  
 * for iVXjs.
 */
var Number = exports.Number = function () {

        /**
         * Accepts an input object with various input settings and UI specific error 
         * messages
         * @param {object} inputObj - various input settings to render this number input box
         * @param {object} inputObj.input - input specific settings for this number input 
         * @param {object} inputObj.settings - global settings for this number input 
         * @param {string} inputObj.tags - input specific attribute tags 
         * @param {class} inputObj.errors - errors from a rendering for validation and 
         * error messaging appearance.
         * @param {object} errorMessages - UI specific Error messages 
         */
        function Number() {
                var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

                _classCallCheck(this, Number);

                var _inputObj$input = inputObj.input,
                    input = _inputObj$input === undefined ? {} : _inputObj$input,
                    _inputObj$settings = inputObj.settings,
                    settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
                    _inputObj$tags = inputObj.tags,
                    tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
                    _inputObj$errors = inputObj.errors,
                    errors = _inputObj$errors === undefined ? {} : _inputObj$errors;

                /**
                 * Input specific settings for this number input
                 * @type {object}  
                 */

                this.input = input;

                /**
                * Input specific settings for this number input
                * @type {object}  
                */
                this.settings = settings;

                /**
                * Tags to be added to this number input
                * @type {String}
                */
                this.tags = tags;

                /**
                * Holds all validation error correcting.
                * @type {Class}
                */
                this.errors = errors;

                /**
                * Renders UI specific error messages by utilizing the 
                * error class passed down to keep it consistent with the 
                * current UI framework.
                * @type {Class}
                */
                this.errorMessages = errorMessages;

                /**
                * Converts attribute data into attribute HTML for 
                * attributes not covered by the errors class.
                * @type {Class}
                */
                this.attributeTags = _attributes.AttributeTags;
        }

        /**
         * Default ui classes to add to all number inputs 
         * @type {String}
         */


        _createClass(Number, [{
                key: "uiClasses",
                get: function get() {
                        return '';
                }

                /**
                * Default ui attributes to add to this email input 
                * that aren't covered by the tags or errors above.
                * @type {String}
                */

        }, {
                key: "uiAttributes",
                get: function get() {
                        return '';
                }

                /**
                 * The HTML to render a number input based on the settings from the 
                 * constructor. 
                 * 
                 * @example 
                 * //Data 
                 * input.label = "<h1>Label</h1>";
                 * settings.classes = "class-1";
                 * errors.tags = "required='true'";
                 * Number.uiClasses = 'ui-classes-1';
                 * input.attributes = {
                 *     "step" : "0.1"
                 * }
                 * // Renders 
                 * <label>
                 *      <h1>Label</h1>
                 * </label>
                 * <input step="0.1" class="class-1 ui-classes-1" type="number" required="true">
                 * @type {String}
                 */

        }, {
                key: "html",
                get: function get() {
                        var input = this.input,
                            settings = this.settings,
                            tags = this.tags,
                            errors = this.errors,
                            uiClasses = this.uiClasses,
                            uiAttributes = this.uiAttributes;
                        var _input$label = input.label,
                            label = _input$label === undefined ? '' : _input$label,
                            _input$name = input.name,
                            name = _input$name === undefined ? '' : _input$name,
                            _input$id = input.id,
                            id = _input$id === undefined ? '' : _input$id,
                            labelHTML = input.labelHTML;
                        var _settings$input = settings.input,
                            inputSettings = _settings$input === undefined ? {} : _settings$input,
                            _settings$showLabel = settings.showLabel,
                            showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
                        var _inputSettings$classe = inputSettings.classes,
                            classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


                        classes = classes + " " + uiClasses;

                        var _errors$messages = errors.messages,
                            errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                            _errors$attributes = errors.attributes,
                            errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                            _errors$nonValidate = errors.nonValidate,
                            nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                            _errors$tags = errors.tags,
                            errorTags = _errors$tags === undefined ? '' : _errors$tags;

                        var errorHTML = new this.errorMessages(errorMessages).html;
                        var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

                        nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

                        if (labelHTML) label = labelHTML;

                        var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + "\"  name=\"" + name + "\"  type=\"number\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

                        return "" + inputHTML;
                }
        }]);

        return Number;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.Email = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

/**
 * Creates an email input that will record emails  
 * for iVXjs.
 */

var Email = exports.Email = function () {

        /**
         * Accepts an input object with various input settings and UI specific error 
         * messages
         * @param {object} inputObj - various input settings to render this email input box
         * @param {object} inputObj.input - input specific settings for this email input 
         * @param {object} inputObj.settings - global settings for this email input 
         * @param {string} inputObj.tags - input specific attribute tags 
         * @param {class} inputObj.errors - errors from a rendering for validation and 
         * error messaging appearance.
         * @param {object} errorMessages - UI specific Error messages 
         */
        function Email() {
                var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

                _classCallCheck(this, Email);

                var _inputObj$input = inputObj.input,
                    input = _inputObj$input === undefined ? {} : _inputObj$input,
                    _inputObj$settings = inputObj.settings,
                    settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
                    _inputObj$tags = inputObj.tags,
                    tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
                    _inputObj$errors = inputObj.errors,
                    errors = _inputObj$errors === undefined ? {} : _inputObj$errors;

                /**
                 * Input specific settings for this email input
                 * @type {object}  
                 */

                this.input = input;

                /**
                * Input specific settings for this email input
                * @type {object}  
                */
                this.settings = settings;

                /**
                 * Tags to be added to this email input
                 * @type {String}
                 */
                this.tags = tags;

                /**
                 * Holds all validation error correcting.
                 * @type {Class}
                 */
                this.errors = errors;

                /**
                 * Renders UI specific error messages by utilizing the 
                 * error class passed down to keep it consistent with the 
                 * current UI framework.
                 * @type {Class}
                 */
                this.errorMessages = errorMessages;

                /**
                 * Converts attribute data into attribute HTML for 
                 * attributes not covered by the errors class.
                 * @type {Class}
                 */
                this.attributeTags = _attributes.AttributeTags;
        }

        /**
        * Default ui classes to add to all email inputs 
        * @type {String}
        */


        _createClass(Email, [{
                key: "uiClasses",
                get: function get() {
                        return '';
                }

                /**
                * Default ui attributes to add to this email input 
                * that aren't covered by the tags or errors above.
                * @type {String}
                */

        }, {
                key: "uiAttributes",
                get: function get() {
                        return '';
                }

                /**
                 * The HTML to render an email input based on the settings from the 
                 * constructor. 
                 * 
                 * @example 
                 * //Data 
                 * input.label = "<h1>Label</h1>";
                 * settings.classes = "class-1";
                 * errors.tags = "required='true'";
                 * Email.uiClasses = 'ui-classes-1';
                 * // Renders 
                 * <label>
                 *      <h1>Label</h1>
                 * </label>
                 * <input class="class-1 ui-classes-1" type="email" required="true">
                 * @type {String}
                 */

        }, {
                key: "html",
                get: function get() {
                        var input = this.input,
                            settings = this.settings,
                            tags = this.tags,
                            errors = this.errors,
                            uiClasses = this.uiClasses,
                            uiAttributes = this.uiAttributes;
                        var _input$label = input.label,
                            label = _input$label === undefined ? '' : _input$label,
                            labelHTML = input.labelHTML,
                            _input$name = input.name,
                            name = _input$name === undefined ? '' : _input$name,
                            _input$id = input.id,
                            id = _input$id === undefined ? '' : _input$id;
                        var _settings$input = settings.input,
                            inputSettings = _settings$input === undefined ? {} : _settings$input,
                            _settings$showLabel = settings.showLabel,
                            showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
                        var _inputSettings$classe = inputSettings.classes,
                            classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


                        classes = classes + " " + uiClasses;

                        var _errors$messages = errors.messages,
                            errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                            _errors$attributes = errors.attributes,
                            errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                            _errors$nonValidate = errors.nonValidate,
                            nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                            _errors$tags = errors.tags,
                            errorTags = _errors$tags === undefined ? '' : _errors$tags;

                        var errorHTML = new this.errorMessages(errorMessages).html;
                        var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

                        nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

                        if (labelHTML) label = labelHTML;

                        var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"  type=\"email\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

                        return "" + inputHTML;
                }
        }]);

        return Email;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Date = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

/**
 * Creates a date input that will record date specific data 
 * for iVXjs.
 */

var Date = exports.Date = function () {

  /**
   * Accepts an input object with various input settings and UI specific error 
   * messages
   * @param {object} inputObj - various input settings to render this date input box
   * @param {object} inputObj.input - input specific settings for this date input 
   * @param {object} inputObj.settings - global settings for this date input 
   * @param {string} inputObj.tags - input specific attribute tags 
   * @param {class} inputObj.errors - errors from a rendering for validation and 
   * error messaging appearance.
   * @param {object} errorMessages - UI specific Error messages 
   */
  function Date() {
    var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

    _classCallCheck(this, Date);

    var _inputObj$input = inputObj.input,
        input = _inputObj$input === undefined ? {} : _inputObj$input,
        _inputObj$settings = inputObj.settings,
        settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
        _inputObj$tags = inputObj.tags,
        tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
        _inputObj$errors = inputObj.errors,
        errors = _inputObj$errors === undefined ? {} : _inputObj$errors;

    /**
     * Input specific settings for this date input
     * @type {object}  
     */

    this.input = input;

    /**
     * Global input settings for this date input 
     * @type {object}
     */
    this.settings = settings;

    /**
     * Tags to be added to this date input
     * @type {String}
     */
    this.tags = tags;

    /**
     * Holds all validation error correcting.
     * @type {Class}
     */
    this.errors = errors;

    /**
     * Renders UI specific error messages by utilizing the 
     * error class passed down to keep it consistent with the 
     * current UI framework.
     * @type {Class}
     */
    this.errorMessages = errorMessages;

    /**
     * Converts attribute data into attribute HTML for 
     * attributes not covered by the errors class.
     * @type {Class}
     */
    this.attributeTags = _attributes.AttributeTags;
  }

  /**
   * Default ui classes to add to all date inputs 
   * @type {String}
   */


  _createClass(Date, [{
    key: "uiClasses",
    get: function get() {
      return '';
    }

    /**
     * Default ui attributes to add to this date input 
     * that aren't covered by the tags or errors above.
     * @type {String}
     */

  }, {
    key: "uiAttributes",
    get: function get() {
      return '';
    }

    /**
     * The HTML to render a date input based on the settings from the 
     * constructor. 
     * 
     * @example 
     * //Data 
     * input.label = "<h1>Label</h1>";
     * settings.classes = "class-1";
     * errors.tags = "required='true'";
     * Date.uiClasses = 'ui-classes-1';
     * // Renders 
     * <label>
     *      <h1>Label</h1>
     * </label>
     * <input class="class-1 ui-classes-1" type="date" required="true">
     * @type {String}
     */

  }, {
    key: "html",
    get: function get() {
      var input = this.input,
          settings = this.settings,
          tags = this.tags,
          errors = this.errors,
          uiClasses = this.uiClasses,
          uiAttributes = this.uiAttributes;
      var label = input.label,
          labelHTML = input.labelHTML,
          _input$name = input.name,
          name = _input$name === undefined ? '' : _input$name,
          _input$id = input.id,
          id = _input$id === undefined ? '' : _input$id;
      var _settings$input = settings.input,
          inputSettings = _settings$input === undefined ? {} : _settings$input,
          _settings$showLabel = settings.showLabel,
          showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
      var _inputSettings$classe = inputSettings.classes,
          classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


      classes = classes + " " + uiClasses;

      var _errors$messages = errors.messages,
          errorMessages = _errors$messages === undefined ? [] : _errors$messages,
          _errors$attributes = errors.attributes,
          errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
          _errors$nonValidate = errors.nonValidate,
          nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
          _errors$tags = errors.tags,
          errorTags = _errors$tags === undefined ? '' : _errors$tags;

      var errorHTML = new this.errorMessages(errorMessages).html;
      var nonValidateAttributesHTML = new _attributes.AttributeTags(errorAttributes, nonValidate).html;

      nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

      var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"  type=\"date\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

      if (labelHTML) label = labelHTML;

      return "" + inputHTML;
    }
  }]);

  return Date;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Url = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

var Url = exports.Url = function () {
    function Url() {
        var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

        _classCallCheck(this, Url);

        var _inputObj$input = inputObj.input,
            input = _inputObj$input === undefined ? {} : _inputObj$input,
            _inputObj$settings = inputObj.settings,
            settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
            _inputObj$tags = inputObj.tags,
            tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
            _inputObj$errors = inputObj.errors,
            errors = _inputObj$errors === undefined ? {} : _inputObj$errors;


        this.input = input;
        this.settings = settings;
        this.tags = tags;
        this.errors = errors;
        this.errorMessages = errorMessages;
        this.attributeTags = _attributes.AttributeTags;
    }

    _createClass(Url, [{
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }, {
        key: "uiAttributes",
        get: function get() {
            return '';
        }
    }, {
        key: "html",
        get: function get() {
            var input = this.input,
                settings = this.settings,
                tags = this.tags,
                errors = this.errors,
                uiClasses = this.uiClasses,
                uiAttributes = this.uiAttributes;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML,
                _input$name = input.name,
                name = _input$name === undefined ? '' : _input$name,
                _input$id = input.id,
                id = _input$id === undefined ? '' : _input$id;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input,
                _settings$showLabel = settings.showLabel,
                showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;
            var _errors$messages = errors.messages,
                errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                _errors$attributes = errors.attributes,
                errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                _errors$nonValidate = errors.nonValidate,
                nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                _errors$tags = errors.tags,
                errorTags = _errors$tags === undefined ? '' : _errors$tags;

            var errorHTML = new this.errorMessages(errorMessages).html;
            var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

            if (labelHTML) label = labelHTML;

            var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + " " + uiClasses + "\" " + uiAttributes + "  id=\"" + id + "\" name=\"" + name + "\"  type=\"url\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

            return "" + inputHTML;
        }
    }]);

    return Url;
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.DatetimeLocal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(2);

var _messages = __webpack_require__(1);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

/**
 * Creates a datetime local input that will record date with timestamp specific data 
 * for iVXjs.
 */

var DatetimeLocal = exports.DatetimeLocal = function () {

        /**
        * Accepts an input object with various input settings and UI specific error 
        * messages
        * @param {object} inputObj - various input settings to render a datetime-local input box
        * @param {object} inputObj.input - input specific settings for this datetime-local input 
        * @param {object} inputObj.settings - global settings for this datetime-local input 
        * @param {string} inputObj.tags - input specific attribute tags 
        * @param {class} inputObj.errors - errors from a rendering for validation and 
        * error messaging appearance.
        * @param {object} errorMessages - UI specific Error messages
        */
        function DatetimeLocal() {
                var inputObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var errorMessages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _messages.ErrorMessages;

                _classCallCheck(this, DatetimeLocal);

                var _inputObj$input = inputObj.input,
                    input = _inputObj$input === undefined ? {} : _inputObj$input,
                    _inputObj$settings = inputObj.settings,
                    settings = _inputObj$settings === undefined ? {} : _inputObj$settings,
                    _inputObj$tags = inputObj.tags,
                    tags = _inputObj$tags === undefined ? {} : _inputObj$tags,
                    _inputObj$errors = inputObj.errors,
                    errors = _inputObj$errors === undefined ? {} : _inputObj$errors;

                /**
                 * Input specific settings for this datetime-local input
                 * @type {object}  
                 */

                this.input = input;

                /**
                 * Global input settings for this datetime-local input 
                 * @type {object}
                 */
                this.settings = settings;

                /**
                 * Tags to be added to this datetime-local input
                 * @type {String}
                 */
                this.tags = tags;

                /**
                * Holds all validation error correcting.
                * @type {Class}
                */
                this.errors = errors;

                /**
                 * Renders UI specific error messages by utilizing the 
                 * error class passed down to keep it consistent with the 
                 * current UI framework.
                 * @type {Class}
                 */
                this.errorMessages = errorMessages;

                /**
                 * Converts attribute data into attribute HTML for 
                 * attributes not covered by the errors class.
                 * @type {Class}
                 */
                this.attributeTags = _attributes.AttributeTags;
        }

        /**
        * Default ui classes to add to all datetime-local inputs 
        * @type {String}
        */


        _createClass(DatetimeLocal, [{
                key: "uiClasses",
                get: function get() {
                        return "";
                }

                /**
                 * Default ui attributes to add to this datetime-local input 
                 * that aren't covered by the tags or errors above.
                 * @type {String}
                 */

        }, {
                key: "uiAttributes",
                get: function get() {
                        return "";
                }

                /**
                * The HTML to render a datetime-local input based on the settings from the 
                * constructor. 
                * 
                * @example 
                * //Data 
                * input.label = "<h1>Label</h1>";
                * settings.classes = "class-1";
                * errors.tags = "required='true'";
                * DatetimeLocal.uiClasses = 'ui-classes-1';
                * // Renders 
                * <label>
                *      <h1>Label</h1>
                * </label>
                * <input class="class-1 ui-classes-1" type="datetime-local" required="true">
                * @type {String}
                */

        }, {
                key: "html",
                get: function get() {
                        var input = this.input,
                            settings = this.settings,
                            tags = this.tags,
                            errors = this.errors,
                            uiClasses = this.uiClasses,
                            uiAttributes = this.uiAttributes;
                        var label = input.label,
                            labelHTML = input.labelHTML,
                            _input$name = input.name,
                            name = _input$name === undefined ? '' : _input$name,
                            _input$id = input.id,
                            id = _input$id === undefined ? '' : _input$id;
                        var _settings$input = settings.input,
                            inputSettings = _settings$input === undefined ? {} : _settings$input,
                            _settings$showLabel = settings.showLabel,
                            showLabel = _settings$showLabel === undefined ? true : _settings$showLabel;
                        var _inputSettings$classe = inputSettings.classes,
                            classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


                        classes = classes + " " + uiClasses;

                        var _errors$messages = errors.messages,
                            errorMessages = _errors$messages === undefined ? [] : _errors$messages,
                            _errors$attributes = errors.attributes,
                            errorAttributes = _errors$attributes === undefined ? '' : _errors$attributes,
                            _errors$nonValidate = errors.nonValidate,
                            nonValidate = _errors$nonValidate === undefined ? [] : _errors$nonValidate,
                            _errors$tags = errors.tags,
                            errorTags = _errors$tags === undefined ? '' : _errors$tags;

                        var errorHTML = new this.errorMessages(errorMessages).html;
                        var nonValidateAttributesHTML = new this.attributeTags(errorAttributes, nonValidate).html;

                        nonValidateAttributesHTML = nonValidateAttributesHTML + " " + uiAttributes;

                        if (labelHTML) label = labelHTML;

                        var inputHTML = " \n            <label for=\"" + id + "\"> " + label + " </label>\n            <input class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"  type=\"datetime-local\" " + nonValidateAttributesHTML + "   " + errorTags + " " + tags + ">\n            " + errorHTML + "\n       ";

                        return "" + inputHTML;
                }
        }]);

        return DatetimeLocal;
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputState = exports.InputState = function () {
    function InputState(formSection, data) {
        _classCallCheck(this, InputState);

        this.formSection = formSection;
        this.data = data;
    }

    _createClass(InputState, [{
        key: 'defaultHeaderClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'defaultFooterClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'defaultSectionClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'html',
        get: function get() {
            var formSection = this.formSection,
                data = this.data,
                defaultFooterClasses = this.defaultFooterClasses,
                defaultHeaderClasses = this.defaultHeaderClasses,
                defaultSectionClasses = this.defaultSectionClasses;
            var _data$header = data.header,
                header = _data$header === undefined ? {} : _data$header,
                _data$footer = data.footer,
                footer = _data$footer === undefined ? {} : _data$footer,
                _data$section = data.section,
                section = _data$section === undefined ? {} : _data$section;
            var _header$classes = header.classes,
                headerClasses = _header$classes === undefined ? '' : _header$classes,
                _header$html = header.html,
                headerHTML = _header$html === undefined ? '' : _header$html;
            var _section$classes = section.classes,
                sectionClasses = _section$classes === undefined ? '' : _section$classes;
            var _footer$classes = footer.classes,
                footerClasses = _footer$classes === undefined ? '' : _footer$classes,
                _footer$html = footer.html,
                footerHTML = _footer$html === undefined ? '' : _footer$html;


            return '\n            <section class="' + sectionClasses + ' ' + defaultSectionClasses + '" id="' + data.id + '">\n                 <header class="' + headerClasses + ' ' + defaultHeaderClasses + '">' + headerHTML + '</header>\n                ' + formSection + '\n                <footer class="' + footerClasses + ' ' + defaultFooterClasses + '">' + footerHTML + '</footer>\n            </section>';
        }
    }]);

    return InputState;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavigationState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationState = exports.NavigationState = function () {
    function NavigationState(data, linkSection) {
        _classCallCheck(this, NavigationState);

        this.data = data;
        this.linkSection = linkSection;
    }

    _createClass(NavigationState, [{
        key: 'defaultHeaderClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'defaultFooterClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'defaultSectionClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'defaultLinkContainerClasses',
        get: function get() {
            return '';
        }
    }, {
        key: 'html',
        get: function get() {
            var data = this.data,
                linkSection = this.linkSection,
                defaultFooterClasses = this.defaultFooterClasses,
                defaultHeaderClasses = this.defaultHeaderClasses,
                defaultSectionClasses = this.defaultSectionClasses,
                defaultLinkContainerClasses = this.defaultLinkContainerClasses;
            var _data$header = data.header,
                header = _data$header === undefined ? {} : _data$header,
                _data$footer = data.footer,
                footer = _data$footer === undefined ? {} : _data$footer,
                _data$section = data.section,
                section = _data$section === undefined ? {} : _data$section,
                _data$linkContainer = data.linkContainer,
                linkContainer = _data$linkContainer === undefined ? {} : _data$linkContainer;
            var _header$classes = header.classes,
                headerClasses = _header$classes === undefined ? '' : _header$classes,
                _header$html = header.html,
                headerHTML = _header$html === undefined ? '' : _header$html;
            var _section$classes = section.classes,
                sectionClasses = _section$classes === undefined ? '' : _section$classes;
            var _footer$classes = footer.classes,
                footerClasses = _footer$classes === undefined ? '' : _footer$classes,
                _footer$html = footer.html,
                footerHTML = _footer$html === undefined ? '' : _footer$html;
            var _linkContainer$classe = linkContainer.classes,
                linkContainerClasses = _linkContainer$classe === undefined ? '' : _linkContainer$classe,
                _linkContainer$attrib = linkContainer.attributes,
                linkContainerAttributes = _linkContainer$attrib === undefined ? {} : _linkContainer$attrib;

            var linkContainerAttributeHTML = new _attributes.AttributeTags(linkContainerAttributes, Object.keys(linkContainerAttributes)).html;

            return '\n            <section class="' + sectionClasses + ' ' + defaultSectionClasses + '" id="' + data.id + '">\n                 <header class="' + headerClasses + ' ' + defaultHeaderClasses + '">' + headerHTML + '</header>\n                 <div class=\'' + defaultLinkContainerClasses + ' ' + linkContainerClasses + '\' ' + linkContainerAttributeHTML + '>\n                    ' + linkSection + '\n                </div>\n                <footer class="' + footerClasses + ' ' + defaultFooterClasses + '">' + footerHTML + '</footer>\n            </section>';
        }
    }]);

    return NavigationState;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(27);

var _element = __webpack_require__(35);

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controls) {
    _inherits(_class, _Controls);

    function _class(container) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        if (container.html instanceof Function) {
            container.html(_this.html);
        } else {
            var div = document.createElement('div');
            div.innerHTML = _this.html;

            container.appendChild(div);
        }

        var playPauseControlsClasses = _this.playPauseControlsClasses,
            totalTimeInfoClasses = _this.totalTimeInfoClasses,
            currentTimeInfoClasses = _this.currentTimeInfoClasses,
            scrubBarClasses = _this.scrubBarClasses,
            muteControlsClasses = _this.muteControlsClasses,
            volumeBarClasses = _this.volumeBarClasses;


        _this.container = container;
        _this.playPauseControls = document.getElementById("video-controls-play-pause");
        _this.totalTimeInfo = document.getElementById("video-controls-total-time");
        _this.currentTimeInfo = document.getElementById("video-controls-current-time");
        _this.scrubBar = document.getElementById("video-controls-scrub-bar");
        _this.muteControls = document.getElementById("video-controls-mute-controls");
        _this.volumeBar = document.getElementById("video-controls-volume-bar");
        return _this;
    }

    _createClass(_class, [{
        key: 'createPlayerSpecificControls',
        value: function createPlayerSpecificControls(opts) {
            var player = opts.player;
            var _player$textTracks = player.textTracks,
                textTracks = _player$textTracks === undefined ? [] : _player$textTracks;

            var html = '';
            var container = this.container,
                chapterButtonClasses = this.chapterButtonClasses,
                chapterListClasses = this.chapterListClasses;


            if (textTracks.length > 0) {
                var chapterElement = this.createChapterContainer(textTracks);
                var trackSelectElement = this.createTrackSelect(textTracks);

                if (chapterElement) {
                    _element2.default.append(container, chapterElement);
                }

                if (trackSelectElement) {
                    _element2.default.append(container, trackSelectElement);
                }
            }
        }
    }, {
        key: 'getTrackArray',
        value: function getTrackArray() {
            var player = this.player;
            var textTracks = player.textTracks;

            var trackArray = Array.from(textTracks);

            return trackArray;
        }
    }, {
        key: 'isLanguageTrack',
        value: function isLanguageTrack(track, trackId) {
            var testTrackId = track.trackId,
                kind = track.kind;


            return testTrackId === trackId && (kind === 'captions' || kind === 'subtitles');
        }
    }, {
        key: 'getTrack',
        value: function getTrack(trackId, predicate) {
            var self = this;
            var trackArray = this.getTrackArray();

            return trackArray.find(function (currentTrack) {
                var currentTrackId = currentTrack.trackId;


                return predicate ? predicate(currentTrack, trackId) : self.isLanguageTrack(currentTrack, trackId);
            });
        }
    }, {
        key: 'updateTrackSelector',
        value: function updateTrackSelector(trackId) {
            var trackListSelectContainerClasses = this.trackListSelectContainerClasses,
                trackListSelectClasses = this.trackListSelectClasses,
                trackListSelectActiveClasses = this.trackListSelectActiveClasses,
                trackListSelectInactiveClasses = this.trackListSelectInactiveClasses,
                closeCaptionButtonIconContent = this.closeCaptionButtonIconContent,
                player = this.player,
                closeCaptionButtonClasses = this.closeCaptionButtonClasses,
                closeCaptionButtonActiveClasses = this.closeCaptionButtonActiveClasses,
                closeCaptionButtonInactiveClasses = this.closeCaptionButtonInactiveClasses,
                closeCaptionButtonIconClasses = this.closeCaptionButtonIconClasses;
            var _trackListSelect = this.trackListSelect,
                trackListSelect = _trackListSelect === undefined ? {} : _trackListSelect,
                _ccToggle = this.ccToggle,
                ccToggle = _ccToggle === undefined ? {} : _ccToggle;

            var selectedLanguageTrack = this.getTrack(trackId);
            var _trackListSelect$chil = trackListSelect.childNodes,
                options = _trackListSelect$chil === undefined ? [] : _trackListSelect$chil;


            if (options.length > 1) {
                var hasOption = Array.from(options).find(function (option) {
                    var currentTrackId = option.value;


                    return trackId === currentTrackId;
                });

                if (hasOption) {
                    Object.assign(trackListSelect, {
                        value: trackId
                    });

                    _element2.default.removeClassesFromElement(trackListSelect, trackListSelectInactiveClasses);
                    _element2.default.addClassesToElement(trackListSelect, trackListSelectActiveClasses);
                } else {
                    _element2.default.removeClassesFromElement(trackListSelect, trackListSelectActiveClasses);
                    _element2.default.addClassesToElement(trackListSelect, trackListSelectInactiveClasses);
                }
            }

            if (selectedLanguageTrack) {
                _element2.default.removeClassesFromElement(ccToggle, closeCaptionButtonInactiveClasses);
                _element2.default.addClassesToElement(ccToggle, closeCaptionButtonActiveClasses);
            } else {
                _element2.default.removeClassesFromElement(ccToggle, closeCaptionButtonActiveClasses);
                _element2.default.addClassesToElement(ccToggle, closeCaptionButtonInactiveClasses);
            }
        }
    }, {
        key: 'createTrackSelect',
        value: function createTrackSelect(textTracks) {
            var self = this;
            var trackListSelectContainerClasses = self.trackListSelectContainerClasses,
                trackListSelectClasses = self.trackListSelectClasses,
                trackListSelectActiveClasses = self.trackListSelectActiveClasses,
                trackListSelectInactiveClasses = self.trackListSelectInactiveClasses,
                closeCaptionButtonIconContent = self.closeCaptionButtonIconContent,
                closeCaptionButtonClasses = self.closeCaptionButtonClasses,
                closeCaptionButtonActiveClasses = self.closeCaptionButtonActiveClasses,
                closeCaptionButtonInactiveClasses = self.closeCaptionButtonInactiveClasses,
                closeCaptionButtonIconClasses = self.closeCaptionButtonIconClasses;

            var languageTracks = Array.from(textTracks).reduce(function (currentLanguageTracks, textTrack) {
                if (textTrack.kind === 'captions' || textTrack.kind === 'subtitles') {
                    currentLanguageTracks = currentLanguageTracks.concat([textTrack]);
                }

                return currentLanguageTracks;
            }, []);

            if (languageTracks.length > 0) {
                var trackListContainer = document.createElement('div');
                var trackListSelect = document.createElement('select');
                var languageSelected = false;
                var ccToggle = document.createElement('button');
                var ccToggleIcon = document.createElement('i');

                _element2.default.addClassesToElement(ccToggle, closeCaptionButtonClasses);
                _element2.default.addClassesToElement(ccToggleIcon, closeCaptionButtonIconClasses);

                ccToggleIcon.innerHTML = closeCaptionButtonIconContent;

                _element2.default.append(ccToggle, ccToggleIcon);

                languageTracks.forEach(function (languageTrack) {
                    var srclang = languageTrack.srclang,
                        label = languageTrack.label,
                        trackId = languageTrack.trackId,
                        mode = languageTrack.mode;

                    var languageTrackOption = document.createElement('option');

                    Object.assign(languageTrackOption, {
                        value: trackId,
                        innerHTML: label && label.length > 0 ? label : srclang
                    });

                    trackListSelect.appendChild(languageTrackOption);

                    if (mode === 'showing') {
                        Object.assign(trackListSelect, {
                            value: trackId
                        });
                        languageSelected = true;
                    }
                });

                trackListSelect.addEventListener('change', function (evt) {
                    var _evt$target = evt.target,
                        target = _evt$target === undefined ? {} : _evt$target;
                    var _target$value = target.value,
                        trackId = _target$value === undefined ? "" : _target$value;


                    self.changeCurrentTrack(trackId);
                });

                ccToggle.addEventListener('click', function (evt) {
                    self.toggleCC();
                });

                this.ccToggle = ccToggle;

                _element2.default.addClassesToElement(trackListSelect, trackListSelectClasses);
                _element2.default.addClassesToElement(trackListSelect, languageSelected ? trackListSelectActiveClasses : trackListSelectInactiveClasses);
                _element2.default.addClassesToElement(trackListContainer, trackListSelectContainerClasses);
                _element2.default.addClassesToElement(ccToggle, languageSelected ? closeCaptionButtonActiveClasses : closeCaptionButtonInactiveClasses);
                _element2.default.append(trackListContainer, ccToggle);

                if (languageTracks.length > 1) {
                    _element2.default.append(trackListContainer, trackListSelect);

                    this.trackListSelect = trackListSelect;
                } else {
                    this.languageSelected = languageTracks[0].trackId;
                }

                return trackListContainer;
            }

            return false;
        }
    }, {
        key: 'toggleCC',
        value: function toggleCC() {
            var trackListSelectContainerClasses = this.trackListSelectContainerClasses,
                trackListSelectClasses = this.trackListSelectClasses,
                trackListSelectActiveClasses = this.trackListSelectActiveClasses,
                trackListSelectInactiveClasses = this.trackListSelectInactiveClasses,
                closeCaptionButtonIconContent = this.closeCaptionButtonIconContent,
                closeCaptionButtonClasses = this.closeCaptionButtonClasses,
                closeCaptionButtonActiveClasses = this.closeCaptionButtonActiveClasses,
                closeCaptionButtonInactiveClasses = this.closeCaptionButtonInactiveClasses,
                closeCaptionButtonIconClasses = this.closeCaptionButtonIconClasses;
            var trackListSelect = this.trackListSelect,
                _ccToggle2 = this.ccToggle,
                ccToggle = _ccToggle2 === undefined ? {} : _ccToggle2,
                languageSelected = this.languageSelected;


            var isInactive = _element2.default.hasClass(ccToggle, closeCaptionButtonInactiveClasses);

            if (isInactive) {
                _element2.default.removeClassesFromElement(ccToggle, closeCaptionButtonInactiveClasses);
                _element2.default.addClassesToElement(ccToggle, closeCaptionButtonActiveClasses);

                if (trackListSelect) {
                    var trackId = trackListSelect.value;


                    _element2.default.addClassesToElement(trackListSelect, trackListSelectActiveClasses);
                    _element2.default.removeClassesFromElement(trackListSelect, trackListSelectInactiveClasses);
                    this.changeCurrentTrack(trackId);
                } else {
                    this.changeCurrentTrack(languageSelected);
                }
            } else {
                _element2.default.removeClassesFromElement(ccToggle, closeCaptionButtonActiveClasses);
                _element2.default.addClassesToElement(ccToggle, closeCaptionButtonInactiveClasses);

                if (trackListSelect) {
                    _element2.default.removeClassesFromElement(trackListSelect, trackListSelectActiveClasses);
                    _element2.default.addClassesToElement(trackListSelect, trackListSelectInactiveClasses);
                }

                this.changeCurrentTrack("");
            }
        }
    }, {
        key: 'createChapterContainer',
        value: function createChapterContainer(textTracks) {
            var chapterButtonClasses = this.chapterButtonClasses,
                chapterListClasses = this.chapterListClasses,
                chapterActiveClasses = this.chapterActiveClasses,
                chapterInActiveClasses = this.chapterInActiveClasses,
                chapterListItemClasses = this.chapterListItemClasses;

            var chapterTrack = Array.from(textTracks).find(function (textTrack) {
                return textTrack.kind === 'chapters';
            });
            var self = this;

            if (chapterTrack) {
                var chapterListEl = document.createElement('ol');
                var _chapterTrack$cues = chapterTrack.cues,
                    cues = _chapterTrack$cues === undefined ? [] : _chapterTrack$cues;


                Array.from(cues).forEach(function (cue, index) {
                    var id = cue.id,
                        text = cue.text,
                        startTime = cue.startTime;

                    var chapterContainerEl = document.createElement('li');
                    var chapterButtonEl = document.createElement('button');

                    chapterButtonEl.id = id + '-select';
                    chapterButtonEl.className = chapterButtonClasses;
                    chapterButtonEl.innerHTML = text;

                    _element2.default.append(chapterContainerEl, chapterButtonEl);

                    chapterContainerEl.id = id;
                    chapterContainerEl.className = chapterListItemClasses + ' ' + (index === 0 ? chapterActiveClasses : chapterInActiveClasses);

                    _element2.default.append(chapterListEl, chapterContainerEl);

                    chapterButtonEl.addEventListener('click', function () {
                        self.seek(startTime);
                        self.play();
                    });
                });

                chapterListEl.className = chapterListClasses;

                return chapterListEl;
            }

            return false;
        }
    }, {
        key: 'playPauseControlsClasses',
        get: function get() {
            return 'play-pause';
        }
    }, {
        key: 'totalTimeInfoClasses',
        get: function get() {
            return 'duration';
        }
    }, {
        key: 'currentTimeInfoClasses',
        get: function get() {
            return 'current-time';
        }
    }, {
        key: 'scrubBarClasses',
        get: function get() {
            return 'scrub-bar';
        }
    }, {
        key: 'muteControlsClasses',
        get: function get() {
            return 'mute';
        }
    }, {
        key: 'volumeBarClasses',
        get: function get() {
            return 'volume-bar';
        }
    }, {
        key: 'playClasses',
        get: function get() {
            return 'fa fa-play';
        }
    }, {
        key: 'pauseClasses',
        get: function get() {
            return 'fa fa-pause';
        }
    }, {
        key: 'unmuteClasses',
        get: function get() {
            return 'fa fa-volume-up';
        }
    }, {
        key: 'muteClasses',
        get: function get() {
            return 'fa fa-volume-off';
        }
    }, {
        key: 'scrubBarTimeLapseClasses',
        get: function get() {
            return 'time-lapsed';
        }
    }, {
        key: 'volumeBarCurrentVolumeClasses',
        get: function get() {
            return 'current-volume';
        }
    }, {
        key: 'chapterButtonClasses',
        get: function get() {
            return 'chapter-button';
        }
    }, {
        key: 'chapterListClasses',
        get: function get() {
            return "chapter-list";
        }
    }, {
        key: 'chapterListItemClasses',
        get: function get() {
            return "chapter-list-item";
        }
    }, {
        key: 'chapterActiveClasses',
        get: function get() {
            return "active";
        }
    }, {
        key: 'chapterInActiveClasses',
        get: function get() {
            return "inactive";
        }
    }, {
        key: 'playPauseButtonHTML',
        get: function get() {
            var play = this.playClasses;
            var playPauseControls = this.playPauseControlsClasses;

            return '\n        <button id="video-controls-play-pause" class="' + playPauseControls + '">\n            <i class=\'' + play + '\'></i>\n        </button>';
        }
    }, {
        key: 'scrubBarHTML',
        get: function get() {
            return '\n             <div id="video-controls-scrub-bar" class="' + this.scrubBarClasses + '">\n                <div class="' + this.scrubBarTimeLapseClasses + '"></div>\n            </div>\n        ';
        }
    }, {
        key: 'timestampHTML',
        get: function get() {
            return '\n        <span id="video-controls-current-time" class="' + this.currentTimeInfoClasses + '"></span>\n        <span id="video-controls-total-time" class="' + this.totalTimeInfoClasses + '"></span>\n        ';
        }
    }, {
        key: 'muteButtonHTML',
        get: function get() {
            var unmute = this.unmuteClasses,
                muteControlsClasses = this.muteControlsClasses;

            return '\n            <button id="video-controls-mute-controls" class="' + muteControlsClasses + '">\n                <i class="' + unmute + '"></i>\n            </button>\n        ';
        }
    }, {
        key: 'volumeBarHTML',
        get: function get() {
            return '\n            <div  id="video-controls-volume-bar" class="' + this.volumeBarClasses + '">\n                <div class="' + this.volumeBarCurrentVolumeClasses + '"></div>\n            </div> \n        ';
        }
    }, {
        key: 'trackListSelectContainerClasses',
        get: function get() {
            return 'track-list-select-container';
        }
    }, {
        key: 'trackListSelectClasses',
        get: function get() {
            return 'track-list-select';
        }
    }, {
        key: 'trackListSelectActiveClasses',
        get: function get() {
            return 'active';
        }
    }, {
        key: 'trackListSelectInactiveClasses',
        get: function get() {
            return 'inactive';
        }
    }, {
        key: 'closeCaptionButtonClasses',
        get: function get() {
            return 'close-caption-button';
        }
    }, {
        key: 'closeCaptionButtonActiveClasses',
        get: function get() {
            return 'active';
        }
    }, {
        key: 'closeCaptionButtonInactiveClasses',
        get: function get() {
            return 'inactive';
        }
    }, {
        key: 'closeCaptionButtonIconClasses',
        get: function get() {
            return 'close-caption-button-icon fa fa-cc';
        }
    }, {
        key: 'closeCaptionButtonIconContent',
        get: function get() {
            return "";
        }
    }, {
        key: 'html',
        get: function get() {
            var playPauseButtonHTML = this.playPauseButtonHTML,
                scrubBarHTML = this.scrubBarHTML,
                timestampHTML = this.timestampHTML,
                muteButtonHTML = this.muteButtonHTML,
                volumeBarHTML = this.volumeBarHTML;

            return '\n           ' + playPauseButtonHTML + '\n           ' + scrubBarHTML + '\n           ' + timestampHTML + '\n           ' + muteButtonHTML + '\n           ' + volumeBarHTML + '                        \n        ';
        }
    }]);

    return _class;
}(_index.Controls);

exports.default = _class;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controls = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(28);

var _events2 = _interopRequireDefault(_events);

var _videoEvents = __webpack_require__(30);

var _videoEvents2 = _interopRequireDefault(_videoEvents);

var _tracksEvents = __webpack_require__(32);

var _tracksEvents2 = _interopRequireDefault(_tracksEvents);

var _tracksCuesEvents = __webpack_require__(33);

var _tracksCuesEvents2 = _interopRequireDefault(_tracksCuesEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = exports.Controls = function (_ControlEvents) {
    _inherits(Controls, _ControlEvents);

    function Controls() {
        _classCallCheck(this, Controls);

        var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this));

        _this.currentVolume = 0.5;
        _this.controlEventNames = new _videoEvents2.default();
        _this.trackEventNames = new _tracksEvents2.default();
        _this.trackCuesEventName = new _tracksCuesEvents2.default();
        return _this;
    }

    _createClass(Controls, [{
        key: "dispose",
        value: function dispose(iVXjsBus) {
            iVXjsBus.removeListener(this.controlEventNames.TIME_UPDATE, this.updateTime);
            iVXjsBus.removeListener(this.controlEventNames.PLAYING, this.whilePlaying);
            iVXjsBus.removeListener(this.controlEventNames.CAN_PLAY, this.canPlayCallback);
            iVXjsBus.removeListener(this.trackCuesEventName.ON_CHAPTER_START, this.chapterChange);
            iVXjsBus.removeListener(this.trackEventNames.CHANGE_CURRENT_TRACK, this.trackChange);
        }
    }, {
        key: "getAbsolutePosition",
        value: function getAbsolutePosition(element) {
            var relativePosition = { x: element.offsetLeft, y: element.offsetTop };

            if (element.offsetParent) {
                var tempPosition = this.getAbsolutePosition(element.offsetParent);

                relativePosition.x += tempPosition.x;
                relativePosition.y += tempPosition.y;
            }

            return relativePosition;
        }
    }, {
        key: "adjustVolume",
        value: function adjustVolume(event) {
            var volumeBar = this.volumeBar,
                muteControls = this.muteControls,
                currentVolume = this.currentVolume,
                volumeBarCurrentVolumeClasses = this.volumeBarCurrentVolumeClasses,
                unmuteClasses = this.unmuteClasses,
                muteClasses = this.muteClasses;
            var width = volumeBar.offsetWidth;

            var currentVolumeSpan = this.getElementByClasses(volumeBar.children, [volumeBarCurrentVolumeClasses]);
            var absolutePosition = this.getAbsolutePosition(volumeBar);
            var absoluteX = absolutePosition.x;
            var x = event.pageX;

            var trueX = x - absoluteX;
            var volumeLevel = trueX / width;
            var muteControlsClasses = [muteClasses, unmuteClasses];
            var muteIcon = this.getElementByClasses(muteControls.children, muteControlsClasses);

            muteIcon.className = unmuteClasses;
            currentVolumeSpan.style.width = volumeLevel * 100 + "%";

            this.currentVolume = volumeLevel;
            this.setVolume(volumeLevel);
        }
    }, {
        key: "scrub",
        value: function scrub(event) {
            var currentTimeInfo = this.currentTimeInfo,
                scrubBar = this.scrubBar,
                scrubBarTimeLapseClasses = this.scrubBarTimeLapseClasses;
            var width = scrubBar.offsetWidth;

            var absolutePosition = this.getAbsolutePosition(scrubBar);
            var absoluteX = absolutePosition.x;
            var x = event.pageX;

            var trueX = x - absoluteX;
            var scrubToTime = this.duration * (trueX / width);
            var currentTimeObject = this.convertSecondsToParts(scrubToTime);
            var currentTimeStamp = this.createTimeStamp(currentTimeObject);
            var searchClasses = [scrubBarTimeLapseClasses];
            var timelapsed = this.getElementByClasses(scrubBar.children, searchClasses);

            currentTimeInfo.innerHTML = "" + currentTimeStamp;
            timelapsed.style.width = trueX / width * 100 + "%";

            this.seek(scrubToTime);
        }
    }, {
        key: "setPlayPause",
        value: function setPlayPause(event) {
            var playPauseControls = this.playPauseControls,
                playClasses = this.playClasses,
                pauseClasses = this.pauseClasses;

            var searchClasses = [playClasses, pauseClasses];
            var playPauseIcon = this.getElementByClasses(playPauseControls.children, searchClasses);

            switch (playPauseIcon.className) {
                case playClasses:
                    playPauseIcon.className = pauseClasses;

                    this.play();
                    break;
                case pauseClasses:
                    playPauseIcon.className = playClasses;

                    this.pause();
                    break;
                default:
                    break;
            }
        }
    }, {
        key: "setMute",
        value: function setMute(event) {
            var muteControls = this.muteControls,
                muteClasses = this.muteClasses,
                unmuteClasses = this.unmuteClasses,
                volumeBar = this.volumeBar,
                volumeBarCurrentVolumeClasses = this.volumeBarCurrentVolumeClasses;

            var muteControlsClasses = [muteClasses, unmuteClasses];
            var muteIcon = this.getElementByClasses(muteControls.children, muteControlsClasses);
            var currentVolumeSpan = this.getElementByClasses(volumeBar.children, [volumeBarCurrentVolumeClasses]);

            switch (muteIcon.className) {
                case unmuteClasses:
                    muteIcon.className = muteClasses;
                    currentVolumeSpan.style.width = "0%";

                    this.setVolume(0);
                    break;
                case muteClasses:
                    muteIcon.className = unmuteClasses;
                    currentVolumeSpan.style.width = this.currentVolume * 100 + "%";

                    this.setVolume(this.currentVolume);
                    break;
                default:
                    break;
            }
        }
    }, {
        key: "onReadyToPlay",
        value: function onReadyToPlay(player, stateData) {
            var volumeBar = this.volumeBar,
                volumeBarCurrentVolumeClasses = this.volumeBarCurrentVolumeClasses;

            var self = this;
            var currentVolumeSpan = this.getElementByClasses(volumeBar.children, [volumeBarCurrentVolumeClasses]);

            currentVolumeSpan.style.width = self.currentVolume * 100 + "%";

            this.setVolume(self.currentVolume);
            this.getDuration(function (duration) {
                var totalTimeInfo = self.totalTimeInfo,
                    currentTimeInfo = self.currentTimeInfo,
                    scrubBar = self.scrubBar;

                var durationTimeObject = self.convertSecondsToParts(duration);
                var durationTimeStamp = self.createTimeStamp(durationTimeObject);

                self.duration = duration;

                if (totalTimeInfo) totalTimeInfo.innerHTML = "/" + durationTimeStamp;
                if (currentTimeInfo) currentTimeInfo.innerHTML = "00:00";
                if (scrubBar) scrubBar.children[0].style.width = "0%";
            });
        }
    }, {
        key: "onTimeUpdate",
        value: function onTimeUpdate(player) {
            var currentTimeInfo = this.currentTimeInfo,
                scrubBar = this.scrubBar,
                scrubBarTimeLapseClasses = this.scrubBarTimeLapseClasses;
            var seconds = player.currentTime;


            seconds = seconds > this.duration ? 0 : seconds;

            var currentTimeObject = this.convertSecondsToParts(seconds);
            var currentTimeStamp = this.createTimeStamp(currentTimeObject);
            var timeLapsed = seconds / this.duration;

            if (currentTimeInfo) currentTimeInfo.innerHTML = "" + currentTimeStamp;

            var searchClasses = [scrubBarTimeLapseClasses];

            if (scrubBar) {
                var timelapsedElement = this.getElementByClasses(scrubBar.children, searchClasses);

                timelapsedElement.style.width = timeLapsed * 100 + "%";
            }
        }
    }, {
        key: "onPlaying",
        value: function onPlaying() {
            var playPauseControls = this.playPauseControls,
                playClasses = this.playClasses,
                pauseClasses = this.pauseClasses;

            var searchClasses = [playClasses, pauseClasses];
            var playPauseIcon = this.getElementByClasses(playPauseControls.children, searchClasses);

            playPauseIcon.className = pauseClasses;

            this.play();
        }
    }, {
        key: "onPaused",
        value: function onPaused() {
            var playPauseControls = this.playPauseControls,
                playClasses = this.playClasses,
                pauseClasses = this.pauseClasses;

            var searchClasses = [playClasses, pauseClasses];
            var playPauseIcon = this.getElementByClasses(playPauseControls.children, searchClasses);

            playPauseIcon.className = playClasses;

            this.pause();
        }
    }, {
        key: "addEventListeners",
        value: function addEventListeners(iVXjsBus) {
            var self = this;
            var scrubBar = this.scrubBar,
                volumeBar = this.volumeBar,
                playPauseControls = this.playPauseControls,
                muteControls = this.muteControls,
                trackCuesEventName = this.trackCuesEventName;


            this.iVXjsBus = iVXjsBus;
            this.updateTime = iVXjsBus.on(this.controlEventNames.TIME_UPDATE, updateTime);
            this.whilePaused = iVXjsBus.on(this.controlEventNames.PAUSED, whilePaused);
            this.whilePlaying = iVXjsBus.on(this.controlEventNames.PLAYING, whilePlaying);
            this.canPlayCallback = iVXjsBus.on(this.controlEventNames.CAN_PLAY, canPlayCallBack);
            this.chapterChange = iVXjsBus.on(this.trackCuesEventName.ON_CHAPTER_START, chapterChange);
            this.trackChange = iVXjsBus.on(this.trackEventNames.CHANGE_CURRENT_TRACK, trackChange);
            this.updateTime = this.updateTime ? this.updateTime : updateTime;

            volumeBar.addEventListener('mousedown', function (event) {
                self.adjustVolume(event);
            });
            scrubBar.addEventListener('click', function (event) {
                self.scrub(event);
            });
            playPauseControls.addEventListener('mouseup', function (event) {
                self.setPlayPause(event);
            });
            muteControls.addEventListener('click', function (event) {
                self.setMute(event);
            });

            this.iVXjsBus.once(this.controlEventNames.CAN_PLAY, function (player) {
                self.createPlayerSpecificControls({ player: player });
                self.player = player;
            });

            function chapterChange(cue) {
                var chapterActiveClasses = self.chapterActiveClasses,
                    chapterListItemClasses = self.chapterListItemClasses,
                    chapterInActiveClasses = self.chapterInActiveClasses;

                var chapterList = Array.from(document.getElementsByClassName(chapterListItemClasses));
                var currentChapterId = cue.chapterId;


                chapterList.forEach(function (chapterListItem) {
                    var chapterId = chapterListItem.id;


                    if (chapterId === currentChapterId) {
                        chapterListItem.classList.remove(chapterInActiveClasses);
                        chapterListItem.classList.add(chapterActiveClasses);
                        return;
                    }

                    chapterListItem.classList.remove(chapterActiveClasses);
                    chapterListItem.classList.add(chapterInActiveClasses);
                });
            };

            function trackChange(opts) {
                var _opts$trackId = opts.trackId,
                    trackId = _opts$trackId === undefined ? "" : _opts$trackId;


                self.updateTrackSelector(trackId);
            }

            function canPlayCallBack(player, _stateData) {
                self.onReadyToPlay(player, _stateData);
            }

            function updateTime(player) {
                self.onTimeUpdate(player);
            }

            function whilePaused(player) {
                self.onPaused(player);
            }

            function whilePlaying() {
                self.onPlaying();
            }
        }
    }, {
        key: "getElementByClasses",
        value: function getElementByClasses(elements, classes) {
            var elementArray = elements instanceof Array ? elements : Array.from(elements);
            var thisElement = void 0;

            classes.forEach(function (className, index) {
                if (!className) return;
                if (thisElement) return;

                thisElement = elementArray.find(function (element, index) {
                    return element.className.indexOf(className) >= 0;
                });
            });

            return thisElement;
        }
    }, {
        key: "createTimeStamp",
        value: function createTimeStamp(timeObject) {
            var hours = timeObject.hours,
                minutes = timeObject.remainingMinutes,
                seconds = timeObject.remainingSeconds;

            var hourString = '';
            var minuteString = minutes < 10 ? "0" + minutes + ":" : minutes + ":";
            var secondString = seconds < 10 ? "0" + seconds : "" + seconds;

            if (hours > 0) {
                hourString = hours < 10 ? "0" + hours + ":" : hours + ":";
            };

            return "" + hourString + minuteString + secondString;
        }
    }, {
        key: "convertSecondsToParts",
        value: function convertSecondsToParts(seconds) {
            var minutes = Math.floor(seconds / 60);
            var timeInformation = {
                minutes: minutes,
                hours: Math.floor(minutes / 60),
                remainingSeconds: Math.floor(seconds % 60),
                remainingMinutes: Math.floor(minutes % 60),
                seconds: seconds
            };

            return timeInformation;
        }
    }]);

    return Controls;
}(_events2.default);

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(29);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: 'contructor',
        value: function contructor() {
            this.volume = 0;
            this.currenttime = 0;
        }
    }, {
        key: 'play',
        value: function play() {
            this.iVXjsBus.emit(this.controlEventNames.PLAY);
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.iVXjsBus.emit(this.controlEventNames.PAUSE);
        }
    }, {
        key: 'getDuration',
        value: function getDuration(cb) {
            this.iVXjsBus.once(this.controlEventNames.SET_DURATION, function (duration) {
                cb(duration);
            });
            this.iVXjsBus.emit(this.controlEventNames.GET_DURATION);
        }
    }, {
        key: 'setVolume',
        value: function setVolume(volume) {
            this.iVXjsBus.emit(this.controlEventNames.SET_VOLUME, volume);
        }
    }, {
        key: 'seek',
        value: function seek(seconds) {
            this.iVXjsBus.emit(this.controlEventNames.SEEK, seconds);
        }
    }, {
        key: 'changeCurrentTrack',
        value: function changeCurrentTrack(trackId) {
            this.iVXjsBus.emit(this.trackEventNames.CHANGE_CURRENT_TRACK, { trackId: trackId });
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);
    }

    _createClass(_class, [{
        key: "PlayerControlEvents",
        get: function get() {
            return {
                "play": 'iVX:video:play',
                "pause": 'iVX:video:pause',
                "seek": 'iVX:video:seeked',
                "playing": "iVX:video:playing",
                "ended": "iVX:video:ended",
                "paused": "iVX:video:paused",
                "setVolume": 'iVX:video:setVolume',
                "duration": "iVX:video:requestDuration",
                "getDuration": "iVX:video:getDuration",
                "canPlay": "iVX:video:canplay",
                "timeUpdate": "iVX:video:timeupdate",
                "dispose": "iVX:video:dispose",
                "volume": 'iVX:video:setVolume'
            };
        }
    }]);

    return _class;
}();

exports.default = _class;
;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _video = __webpack_require__(31);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_VideoConstants) {
    _inherits(_class, _VideoConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        var eventNames = {
            ADD_PLAYING_CLASS: 'add-playing-class',
            BUFFERING: "buffering",
            CAN_PLAY: "can-play",
            DISPOSE: "dispose",
            ENDED: "ended",
            GET_DURATION: "get-duration",
            MUTE: "mute",
            PAUSE: "pause",
            PAUSED: "paused",
            PLAY: "play",
            PLAYING: "playing",
            READY_PLAYER: "ready-player",
            SEEK: "seek",
            SET_DURATION: "set-duration",
            SET_VOLUME: "set-volume",
            TIME_UPDATE: "time-update",
            UNMUTE: "unmute"
        };

        _this.addNames(eventNames);
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention(eventName) {
            var DELIMETER = this.DELIMETER;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + eventName;
        }
    }]);

    return _class;
}(_video2.default);

exports.default = _class;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_iVXjsConstants) {
    _inherits(_class, _iVXjsConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.VIDEO = "video";
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention() {
            var DELIMETER = this.DELIMETER,
                VIDEO = this.VIDEO;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + VIDEO;
        }
    }]);

    return _class;
}(_index2.default);

exports.default = _class;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _tracks = __webpack_require__(10);

var _tracks2 = _interopRequireDefault(_tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_TrackConstants) {
    _inherits(_class, _TrackConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        var eventNames = {
            ON_TRACK_CHANGE: "on-track-change",
            CHANGE_CURRENT_TRACK: "change-current-track"
        };

        _this.addNames(eventNames);
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention(eventName) {
            var DELIMETER = this.DELIMETER;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + eventName;
        }
    }]);

    return _class;
}(_tracks2.default);

exports.default = _class;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _tracksCues = __webpack_require__(34);

var _tracksCues2 = _interopRequireDefault(_tracksCues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_TrackCuesConstants) {
    _inherits(_class, _TrackCuesConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        var eventNames = {
            ON_ENTER: "on-enter",
            ON_EXIT: "on-exit",
            ON_CHAPTER_START: "on-chapter-start",
            ON_CHAPTER_END: "on-chpater-end",
            CHANGE_CHAPTER: "change-chapter"
        };

        _this.addNames(eventNames);
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention(eventName) {
            var DELIMETER = this.DELIMETER;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + eventName;
        }
    }]);

    return _class;
}(_tracksCues2.default);

exports.default = _class;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _tracks = __webpack_require__(10);

var _tracks2 = _interopRequireDefault(_tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_TracksConstants) {
    _inherits(_class, _TracksConstants);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.CUES = "cues";
        return _this;
    }

    _createClass(_class, [{
        key: "convention",
        value: function convention() {
            var DELIMETER = this.DELIMETER,
                CUES = this.CUES;


            return "" + _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "convention", this).call(this) + DELIMETER + CUES;
        }
    }]);

    return _class;
}(_tracks2.default);

exports.default = _class;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    addClassesToElement: function addClassesToElement() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var classes = arguments[1];

        var classList = classes.split(' ');

        if (!element.classList) return;

        classList.forEach(function (currentClass) {
            element.classList.add(currentClass);
        });
    },
    removeClassesFromElement: function removeClassesFromElement() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var classes = arguments[1];

        var classList = classes.split(' ');

        if (!element.classList) return;

        classList.forEach(function (currentClass) {
            element.classList.remove(currentClass);
        });
    },
    hasClass: function hasClass() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var classes = arguments[1];

        return element.className && element.className.indexOf(classes) >= 0;
    },
    append: function append(appendTo, element) {
        if (appendTo.append) {
            appendTo.append(element);
            return;
        }

        if (appendTo.appendChild) {
            appendTo.appendChild(element);
            return;
        }
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputControllerHelper = undefined;

var _typeParsers = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myTypeValidator = new _typeParsers.TypeValidator();

var InputControllerHelper = exports.InputControllerHelper = function InputControllerHelper($scope, iVXjs, iVXjsActions) {
    _classCallCheck(this, InputControllerHelper);

    var input = $scope.inputData;

    var currentExperienceValue = iVXjs.experience.data[input.name];

    if (input.type === 'checkbox') {
        $scope.inputValue = currentExperienceValue;
    } else if (currentExperienceValue) {
        $scope.inputValue = currentExperienceValue;
    }

    $scope.$on('changed', function (input, value) {
        $scope.$apply();
    });

    this.onChange = function (value) {
        if (input.type === 'checkbox') {
            value = value ? 'true' : 'false';
        }

        if (!myTypeValidator.isEmpty(value) || value instanceof Date) {

            if (value === 'true' || value === 'false') {
                value = value === 'true';
            }

            var name = input.name,
                _input$onChange = input.onChange,
                onChange = _input$onChange === undefined ? [] : _input$onChange;


            onChange.unshift({
                eventName: 'setData',
                args: {
                    key: name,
                    value: value
                }
            });

            iVXjs.log.debug('Input ' + input.name + ' On Change Started', {}, { input: input, source: 'onChange', status: 'started', actions: onChange, timestamp: Date.now() });

            iVXjsActions.resolveActions(onChange, function () {
                iVXjs.log.debug('Input ' + input.name + ' On Change Ended', {}, { input: input, source: 'onChange', status: 'completed', actions: onChange, timestamp: Date.now() });
            });
        }
    };
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorMessages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeParsers = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var thisObjectParser = new _typeParsers.ObjectParsers();

var ErrorMessages = exports.ErrorMessages = function () {
    function ErrorMessages(input, errors) {
        var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ErrorMessages);

        var inputName = input.name,
            inputType = input.type;

        this.inputName = inputName;
        this.inputType = inputType;
        this.errors = errors;
        this.attributes = attributes;
    }

    _createClass(ErrorMessages, [{
        key: 'tags',
        get: function get() {
            var attributes = this.attributes;

            var angularErrorMap = this.angularErrorMap;
            var nonAngular = this.nonAngular;
            var nonValidate = this.nonValidate;

            return thisObjectParser.reduce(attributes, function (tags, attributeValue, attributeKey) {
                if (nonValidate.indexOf(attributeKey) >= 0) return tags;
                var tag = nonAngular.indexOf(attributeKey) >= 0 ? attributeKey + '="' + attributeValue + '"' : 'ng-' + angularErrorMap[attributeKey] + ' = "' + attributeValue + '" ';

                return tags + ' ' + tag;
            }, '');
        }
    }, {
        key: 'messages',
        get: function get() {
            var inputName = this.inputName,
                inputType = this.inputType,
                errors = this.errors,
                attributes = this.attributes;

            var angularErrorMap = this.angularErrorMap;
            var defaultMessages = this.defaultErrorMessages;
            var errorMessages = Object.keys(attributes).map(function (attributeKey, index) {
                var message = errors && errors[attributeKey] ? errors[attributeKey] : defaultMessages[attributeKey];
                var attrHTML = 'ng-show="($parent.formInput[\'' + inputName + '\'].$dirty || $parent.formInput.$submitted) && $parent.formInput[\'' + inputName + '\'].$error.' + angularErrorMap[attributeKey] + '"';

                if (inputType === 'radio') {
                    attrHTML = 'ng-show="($parent.formInput.$submitted) && !radioSelected"';
                }

                return {
                    message: message,
                    attrHTML: attrHTML
                };
            });

            if (inputType && inputType !== 'text' && inputType != "options") {
                errorMessages.push(this.inputTypeError);
            }

            return errorMessages;
        }
    }, {
        key: 'inputTypeError',
        get: function get() {
            var inputName = this.inputName,
                inputType = this.inputType,
                errors = this.errors;

            var errorMessage = errors[inputType];

            return {
                message: errorMessage ? errorMessage : "Invalid " + inputType,
                attrHTML: 'ng-show="($parent.formInput[\'' + inputName + '\'].$dirty || $parent.formInput.$submitted) && $parent.formInput[\'' + inputName + '\'].$error.' + inputType + '"'
            };
        }
    }, {
        key: 'nonAngular',
        get: function get() {
            return ['min', 'max', 'readonly', 'placeholder', 'step', 'readonly', 'style'];
        }
    }, {
        key: 'nonValidate',
        get: function get() {
            return ['step', 'placeholder', 'readonly'];
        }
    }, {
        key: 'angularErrorMap',
        get: function get() {
            return {
                minlength: 'minlength',
                min: "min",
                max: "max",
                required: 'required',
                maxlength: 'maxlength'
            };
        }
    }, {
        key: 'defaultErrorMessages',
        get: function get() {
            return {
                minlength: 'Too Short',
                min: "Too Low",
                max: "Too High",
                required: 'Required',
                maxlength: 'Too Long'
            };
        }
    }]);

    return ErrorMessages;
}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = exports.Style = function () {
    function Style() {
        _classCallCheck(this, Style);
    }

    _createClass(Style, [{
        key: 'getInputContainerClassNames',
        value: function getInputContainerClassNames(settings) {
            if (!settings) settings = {};

            var _settings = settings,
                _settings$containerCl = _settings.containerClass,
                containerClass = _settings$containerCl === undefined ? 'field' : _settings$containerCl,
                _settings$classes = _settings.classes,
                classes = _settings$classes === undefined ? '' : _settings$classes;


            return containerClass + ' ' + classes;
        }
    }, {
        key: 'addWidthClasses',
        value: function addWidthClasses(inputHTML) {
            var currentWidthTotal = 0.0;
            var columns = { string: "twelve", number: 12 };
            var columnNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
            var contents = inputHTML.reduce(function (contentHTML, thisInput) {
                var html = thisInput.html,
                    settings = thisInput.settings;
                var _settings$width = settings.width,
                    width = _settings$width === undefined ? "1" : _settings$width,
                    _settings$container = settings.container,
                    container = _settings$container === undefined ? {} : _settings$container;
                var _container$classes = container.classes,
                    classes = _container$classes === undefined ? '' : _container$classes;

                var numericWidth = getNumericWidth(width);

                if (currentWidthTotal <= 0) {
                    contentHTML = contentHTML + '<div class="stackable fields"> ';
                }

                currentWidthTotal += numericWidth;

                var semanticUIwidth = columnNames[Math.round(numericWidth * columnNames.length) - 1];

                html = html.replace('ivxjs-grid-1-1', semanticUIwidth + ' wide field ' + classes);
                contentHTML = '' + contentHTML + html;

                if (currentWidthTotal >= 1) {
                    contentHTML = contentHTML + '</div>';
                    currentWidthTotal = 0;
                }

                return contentHTML;
            }, '');

            if (contents.substring(contents.length - 7) !== "</div>") {
                contents = contents + '</div>';
            }

            return contents;

            function getNumericWidth(widthString) {
                if (widthString === '1') return 1;

                var parsedWidthFormula = widthString.split('/');

                return parseFloat(parsedWidthFormula[0]) / parseFloat(parsedWidthFormula[1]);
            }
        }
    }]);

    return Style;
}();

;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SemanticUI = undefined;

var _form = __webpack_require__(88);

var _anchor = __webpack_require__(89);

var _buttons = __webpack_require__(90);

var _checkbox = __webpack_require__(91);

var _date = __webpack_require__(92);

var _datetimeLocal = __webpack_require__(93);

var _dropdown = __webpack_require__(94);

var _email = __webpack_require__(95);

var _number = __webpack_require__(96);

var _options = __webpack_require__(97);

var _radio = __webpack_require__(98);

var _style = __webpack_require__(39);

var _text = __webpack_require__(99);

var _textarea = __webpack_require__(100);

var _url = __webpack_require__(101);

var _inputDropdown = __webpack_require__(102);

var _inputDropdown2 = _interopRequireDefault(_inputDropdown);

var _elementCard = __webpack_require__(104);

var _elementCard2 = _interopRequireDefault(_elementCard);

var _stateInput = __webpack_require__(107);

var _stateVideo = __webpack_require__(108);

var _stateNavigation = __webpack_require__(109);

var _videoControls = __webpack_require__(110);

var _videoControls2 = _interopRequireDefault(_videoControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Form/Input HTML


//Angular


//States


//Controls 


var SemanticUI = exports.SemanticUI = function SemanticUI() {
    _classCallCheck(this, SemanticUI);

    this.form = _form.Form;
    this.anchor = _anchor.Anchor;
    this.buttons = _buttons.Buttons;
    this.checkbox = _checkbox.Checkbox;
    this.date = _date.Date;
    this.datetimeLocal = _datetimeLocal.DatetimeLocal;
    this.email = _email.Email;
    this.number = _number.Number;
    this.options = _options.Options;
    this.radio = _radio.Radio;
    this.style = new _style.Style();
    this.text = _text.Text;
    this.textarea = _textarea.Textarea;
    this.url = _url.Url;
    this.dropdown = _dropdown.Dropdown;
    this.videoControls = _videoControls2.default;
    this.states = {
        input: _stateInput.InputState,
        video: _stateVideo.VideoState,
        navigation: _stateNavigation.NavigationState
    };
    this.angular = {
        ivxjsSemanticUiDropdownInput: _inputDropdown2.default,
        ivxjsSemanticUiCard: _elementCard2.default

    };
};

;

module.export = initializeSemanticUI;

if (angular && angular.module('ivx-js')) {
    angular.module('ivx-js').constant('iVXjs.ui.semantic-ui', initializeSemanticUI);
}

function initializeSemanticUI() {
    return SemanticUI;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(39);

var _form = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = exports.Form = function (_DefaultForm) {
    _inherits(Form, _DefaultForm);

    function Form(inputHTML, name, additionalAttrHTML, settings) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, inputHTML, name, additionalAttrHTML, settings, _style.Style));
    }

    _createClass(Form, [{
        key: 'formClasses',
        get: function get() {
            return 'ui form error';
        }
    }, {
        key: 'submitButtonHTML',
        get: function get() {
            var _submit = this.submit,
                submit = _submit === undefined ? {} : _submit;
            var _submit$label = submit.label,
                submitLabel = _submit$label === undefined ? "Submit" : _submit$label,
                submitLabelHTML = submit.labelHTML,
                _submit$input = submit.input,
                submitInput = _submit$input === undefined ? {} : _submit$input,
                _submit$container = submit.container,
                submitContainer = _submit$container === undefined ? {} : _submit$container,
                _submit$attributes = submit.attributes,
                attributes = _submit$attributes === undefined ? '' : _submit$attributes;
            var _submitInput$classes = submitInput.classes,
                submitInputClasses = _submitInput$classes === undefined ? "" : _submitInput$classes;
            var _submitContainer$clas = submitContainer.classes,
                submitContainerClasses = _submitContainer$clas === undefined ? "" : _submitContainer$clas;


            submitLabel = submitLabelHTML ? submitLabelHTML : submitLabel;

            var submitHTML = submitLabel.length >= 0 ? '<div class="sixteen field wide ' + submitContainerClasses + '">\n                    <button class="ui button ' + submitInputClasses + '" type=\'submit\'>\n                        ' + submitLabel + '\n                    </button>\n                </div>' : '';

            return submitHTML;
        }
    }]);

    return Form;
}(_form.Form);

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Anchor = undefined;

var _anchor = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anchor = exports.Anchor = function (_DefaultAnchor) {
	_inherits(Anchor, _DefaultAnchor);

	function Anchor(anchorInfo) {
		_classCallCheck(this, Anchor);

		return _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call(this, anchorInfo));
	}

	return Anchor;
}(_anchor.Anchor);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Buttons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttons = __webpack_require__(14);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = exports.Buttons = function (_DefaultButtons) {
    _inherits(Buttons, _DefaultButtons);

    function Buttons(buttons, inputData) {
        _classCallCheck(this, Buttons);

        return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, buttons, inputData, _messages.ErrorMessages));
    }

    _createClass(Buttons, [{
        key: 'buttonClasses',
        get: function get() {
            return 'ui button';
        }
    }]);

    return Buttons;
}(_buttons.Buttons);

;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _checkbox = __webpack_require__(15);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = exports.Checkbox = function (_DefaultCheckbox) {
    _inherits(Checkbox, _DefaultCheckbox);

    function Checkbox(inputObj) {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, inputObj, _messages.ErrorMessages));
    }

    _createClass(Checkbox, [{
        key: 'renderCheckboxContainer',
        value: function renderCheckboxContainer(classes, attributes) {
            var input = this.input;
            var _input$label = input.label,
                label = _input$label === undefined ? '' : _input$label,
                labelHTML = input.labelHTML;

            if (labelHTML) label = labelHTML;
            return '\n         <div class="' + classes + '">\n            <input ' + attributes + ' >\n             <label for="' + input.id + '">    \n                ' + label + '\n            </label>\n         </div>';
        }
    }, {
        key: 'uiClasses',
        get: function get() {
            return 'ui checkbox';
        }
    }, {
        key: 'uiAttributes',
        get: function get() {
            return '';
        }
    }]);

    return Checkbox;
}(_checkbox.Checkbox);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Date = undefined;

var _date = __webpack_require__(21);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = exports.Date = function (_DefaultDate) {
    _inherits(Date, _DefaultDate);

    function Date(inputObj) {
        _classCallCheck(this, Date);

        return _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Date;
}(_date.Date);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DatetimeLocal = undefined;

var _datetimeLocal = __webpack_require__(23);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatetimeLocal = exports.DatetimeLocal = function (_DefaultDatetimeLocal) {
    _inherits(DatetimeLocal, _DefaultDatetimeLocal);

    function DatetimeLocal(inputObj) {
        _classCallCheck(this, DatetimeLocal);

        return _possibleConstructorReturn(this, (DatetimeLocal.__proto__ || Object.getPrototypeOf(DatetimeLocal)).call(this, inputObj, _messages.ErrorMessages));
    }

    return DatetimeLocal;
}(_datetimeLocal.DatetimeLocal);

;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(39);

var _messages = __webpack_require__(5);

var _attributes = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = new _style.Style();

var Dropdown = exports.Dropdown = function () {
    function Dropdown(id, name, label, defaultDisplay) {
        var settings = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var tagHTML = arguments[5];
        var errorMessages = arguments[6];

        _classCallCheck(this, Dropdown);

        this.errorMessages = errorMessages;
        this.name = name;
        this.label = label;
        this.defaultDisplay = defaultDisplay;
        this.tagHTML = tagHTML;
        this.id = id;
        this.settings = settings;
    }

    _createClass(Dropdown, [{
        key: "uiClasses",
        get: function get() {
            return 'ui dropdown';
        }
    }, {
        key: "html",
        get: function get() {
            var id = this.id,
                name = this.name,
                label = this.label,
                defaultDisplay = this.defaultDisplay,
                settings = this.settings,
                uiClasses = this.uiClasses;
            var _settings$dropdown = settings.dropdown,
                dropdown = _settings$dropdown === undefined ? "" : _settings$dropdown;
            var _dropdown$multiple = dropdown.multiple,
                multiple = _dropdown$multiple === undefined ? false : _dropdown$multiple;
            var _settings$input = settings.input,
                inputSettings = _settings$input === undefined ? {} : _settings$input;
            var _inputSettings$classe = inputSettings.classes,
                classes = _inputSettings$classe === undefined ? '' : _inputSettings$classe;


            classes = classes + " " + uiClasses;

            var _errorMessages = this.errorMessages,
                _errorMessages$messag = _errorMessages.messages,
                errorMessages = _errorMessages$messag === undefined ? [] : _errorMessages$messag,
                _errorMessages$attrib = _errorMessages.attributes,
                errorAttributes = _errorMessages$attrib === undefined ? '' : _errorMessages$attrib,
                _errorMessages$nonVal = _errorMessages.nonValidate,
                nonValidate = _errorMessages$nonVal === undefined ? [] : _errorMessages$nonVal,
                _errorMessages$tags = _errorMessages.tags,
                errorTags = _errorMessages$tags === undefined ? '' : _errorMessages$tags;

            var defaultOptionTag = "<option value=\"\">Select an option...</option>";
            var errorHTML = new _messages.ErrorMessages(errorMessages).html;
            var nonValidateAttributesHTML = new _attributes.AttributeTags(errorAttributes, nonValidate).html;

            if (errorAttributes.required || defaultDisplay && defaultDisplay.length >= 0) {
                defaultOptionTag = defaultDisplay ? "<option value=\"\">" + defaultDisplay + "</option>" : defaultOptionTag;
            }

            if (multiple) {
                nonValidateAttributesHTML = nonValidateAttributesHTML + " multiple=\"\"";
            }

            var inputHTML = " \n             <label>" + label + "</label>           \n               <select class=\"" + classes + "\"  id=\"" + id + "\" name=\"" + name + "\"" + nonValidateAttributesHTML + " " + errorTags + " " + this.tagHTML + ">\n                    " + defaultOptionTag + "\n               </select>\n               " + errorHTML;

            return "" + inputHTML;
        }
    }]);

    return Dropdown;
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Email = undefined;

var _email = __webpack_require__(20);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Email = exports.Email = function (_DefaultEmail) {
    _inherits(Email, _DefaultEmail);

    function Email(inputObj) {
        _classCallCheck(this, Email);

        return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Email;
}(_email.Email);

;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Number = undefined;

var _number = __webpack_require__(19);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Number = exports.Number = function (_DefaultNumber) {
    _inherits(Number, _DefaultNumber);

    function Number(inputObj) {
        _classCallCheck(this, Number);

        return _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Number;
}(_number.Number);

;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Options = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _options = __webpack_require__(16);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = exports.Options = function (_DefaultOptions) {
    _inherits(Options, _DefaultOptions);

    function Options(inputObj) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, inputObj, _messages.ErrorMessages));
    }

    _createClass(Options, [{
        key: 'uiClasses',
        get: function get() {
            return 'ui dropdown';
        }
    }]);

    return Options;
}(_options.Options);

;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radio = __webpack_require__(18);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = exports.Radio = function (_DefaultRadio) {
    _inherits(Radio, _DefaultRadio);

    function Radio(inputObj) {
        _classCallCheck(this, Radio);

        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, inputObj, _messages.ErrorMessages));
    }

    _createClass(Radio, [{
        key: "hasCorrectRadioClass",
        value: function hasCorrectRadioClass(classes) {
            var validRadioClasses = ["radio", "toggle", "slider"];
            var hasValidClass = false;

            validRadioClasses.forEach(function (validClass) {
                if (hasValidClass) return;
                hasValidClass = classes.indexOf(validClass) >= 0;
            });

            return hasValidClass;
        }
    }, {
        key: "uiRadioButtonContainer",
        value: function uiRadioButtonContainer(radioHTML, uiClasses) {
            var isValidRadioClass = this.hasCorrectRadioClass(uiClasses);

            if (!isValidRadioClass) uiClasses = uiClasses + " radio";

            return " \n        <div class=\"field\">\n            <div class=\"ui " + uiClasses + " checkbox\">\n                " + radioHTML + "\n            </div>\n        </div>";
        }
    }, {
        key: "renderRadioHTML",
        value: function renderRadioHTML(attrHTML, label, value) {
            var input = this.input;
            var id = input.id;

            var currentId = "" + id + (value.length > 0 ? '-' + value : '');

            return "\n          <input type=\"radio\" id=\"" + currentId + "\" " + attrHTML + ">\n            <label for=\"" + currentId + "\">   \n                     " + label + "\n          </label>\n          ";
        }
    }, {
        key: "uiClasses",
        get: function get() {
            return '';
        }
    }]);

    return Radio;
}(_radio.Radio);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = undefined;

var _text = __webpack_require__(11);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = exports.Text = function (_DefaultText) {
    _inherits(Text, _DefaultText);

    function Text(inputObj) {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Text;
}(_text.Text);

;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Textarea = undefined;

var _textarea = __webpack_require__(17);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = exports.Textarea = function (_DefaultTextarea) {
    _inherits(Textarea, _DefaultTextarea);

    function Textarea(inputObj) {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Textarea;
}(_textarea.Textarea);

;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Url = undefined;

var _url = __webpack_require__(22);

var _messages = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = exports.Url = function (_DefaultUrl) {
    _inherits(Url, _DefaultUrl);

    function Url(inputObj) {
        _classCallCheck(this, Url);

        return _possibleConstructorReturn(this, (Url.__proto__ || Object.getPrototypeOf(Url)).call(this, inputObj, _messages.ErrorMessages));
    }

    return Url;
}(_url.Url);

;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createFactoryFunction = __webpack_require__(8);

var _createFactoryFunction2 = _interopRequireDefault(_createFactoryFunction);

var _inputDropdown = __webpack_require__(103);

var _inputDropdown2 = _interopRequireDefault(_inputDropdown);

var _messagesError = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropdownInput = function () {
    function DropdownInput($rootScope, $compile, $filter, $timeout, iVXjs, iVXjsUIModule, iVXjsBus) {
        _classCallCheck(this, DropdownInput);

        this.template = this.templateHTML;
        this.transclude = true;
        this.restrict = 'E';
        this.require = "^ivxjsFormInput";
        this.scope = {
            inputData: '=inputData'
        };
        this.controller = _inputDropdown2.default;
        this.controllerAs = 'vm';
        this.replace = true;
        this.link = function ($scope, iElm, iAttrs, controller) {
            var input = $scope.inputData;
            var id = input.id,
                _input$errors = input.errors,
                errors = _input$errors === undefined ? {} : _input$errors,
                name = input.name,
                labelHTML = input.labelHTML,
                _input$label = input.label,
                label = _input$label === undefined ? $filter('stringParsers')('startCase', id) : _input$label,
                _input$attributes = input.attributes,
                attributes = _input$attributes === undefined ? {} : _input$attributes,
                options = input.options,
                defaultDisplay = input.defaultDisplay,
                defaultValue = input.defaultValue,
                _input$settings = input.settings,
                settings = _input$settings === undefined ? {} : _input$settings;
            var _settings$directives = settings.directives,
                directives = _settings$directives === undefined ? '' : _settings$directives;

            var errorMessages = new _messagesError.ErrorMessages(name, errors, attributes);
            var defaultOptionTag = '<option value="">Select an option...</option>';
            var tagHTML = directives + '\n                           ng-change=\'vm.onChange(vm.selected)\'\n                           ng-options="option.display for option in inputData.options track by option.value" \n                           ng-model=\'vm.selected\'';

            if (attributes.required || defaultDisplay) {
                defaultOptionTag = defaultDisplay ? '<option value="">' + defaultDisplay + '</option>' : defaultOptionTag;
            }

            var optionsClass = new iVXjsUIModule.dropdown(id, name, label = labelHTML ? labelHTML : label, defaultDisplay, settings, tagHTML, errorMessages);

            iElm.html(optionsClass.html);

            if (typeof $ !== 'undefined') {}

            $compile(iElm.contents())($scope);
            $(iElm.find('select')).dropdown();
            $timeout(function () {
                var experienceValue = iVXjs.experience.data[name];
                $(iElm.find('select')).dropdown('set selected', experienceValue ? experienceValue : '');
            }, 0);
        };
    }

    _createClass(DropdownInput, [{
        key: 'templateHTML',
        get: function get() {
            return '<div></div>';
        }
    }]);

    return DropdownInput;
}();

DropdownInput.$inject = ['$rootScope', '$compile', '$filter', '$timeout', 'iVXjs', 'ivxjs.modules.ui', 'ivxjs.bus'];

exports.default = (0, _createFactoryFunction2.default)(DropdownInput);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createFactoryFunction = __webpack_require__(8);

var _createFactoryFunction2 = _interopRequireDefault(_createFactoryFunction);

var _inputController = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownInputController = function (_InputControllerHelpe) {
    _inherits(DropdownInputController, _InputControllerHelpe);

    function DropdownInputController($scope, $element, iVXjs, iVXjsActions) {
        _classCallCheck(this, DropdownInputController);

        var _this = _possibleConstructorReturn(this, (DropdownInputController.__proto__ || Object.getPrototypeOf(DropdownInputController)).call(this, $scope, iVXjs, iVXjsActions));

        var _$scope$inputData = $scope.inputData,
            defaultValue = _$scope$inputData.defaultValue,
            options = _$scope$inputData.options,
            name = _$scope$inputData.name,
            _$scope$inputData$set = _$scope$inputData.settings,
            settings = _$scope$inputData$set === undefined ? {} : _$scope$inputData$set;
        var _settings$dropdown = settings.dropdown,
            dropdown = _settings$dropdown === undefined ? {} : _settings$dropdown;
        var _dropdown$multiple = dropdown.multiple,
            multiple = _dropdown$multiple === undefined ? false : _dropdown$multiple;

        var self = _this;

        _this.selected = !multiple ? {
            value: iVXjs.experience.data[name] ? iVXjs.experience.data[name] : ''
        } : [{
            value: iVXjs.experience.data[name] ? iVXjs.experience.data[name] : ''
        }];
        _this.onChange = function (value) {
            var _$scope$inputData2 = $scope.inputData,
                name = _$scope$inputData2.name,
                _$scope$inputData2$on = _$scope$inputData2.onChange,
                onChange = _$scope$inputData2$on === undefined ? [] : _$scope$inputData2$on;


            if (Array.isArray(value)) {
                value = selected.reduce(function (selectedVals, currentVal) {
                    if (selectedVals.length <= 0) return '' + currentVal.value;
                    return selectedVals + ', ' + currentVal.value;
                }, '');
            }

            onChange.unshift({ eventName: 'setData', args: { key: name, value: value.value } });
            iVXjsActions.resolveActions(onChange, function () {});
        };
        return _this;
    }

    return DropdownInputController;
}(_inputController.InputControllerHelper);

DropdownInputController.$inject = ['$scope', '$element', 'iVXjs', 'ivxjs.actions'];

exports.default = (0, _createFactoryFunction2.default)(DropdownInputController);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createFactoryFunction = __webpack_require__(8);

var _createFactoryFunction2 = _interopRequireDefault(_createFactoryFunction);

var _elementCard = __webpack_require__(105);

var _elementCard2 = _interopRequireDefault(_elementCard);

var _card = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
    function Card($compile, $timeout) {
        _classCallCheck(this, Card);

        this.template = this.templateHTML;
        this.transclude = true;
        this.restrict = 'E';
        this.require = "^ivxjsFormInput";
        this.scope = {
            settings: '=settings'
        };
        this.controller = _elementCard2.default;
        this.controllerAs = 'vm';
        this.replace = true;
        this.link = function ($scope, iElm, iAttrs, controller) {
            var _$scope$settings = $scope.settings,
                settings = _$scope$settings === undefined ? {} : _$scope$settings;
            var cardType = settings.cardType,
                _settings$classes = settings.classes,
                classes = _settings$classes === undefined ? "" : _settings$classes;

            var html = new _card.CardTemplates($scope.settings)[cardType + "CardHTML"];

            $scope.classes = classes;

            iElm.html(html);
            $compile(iElm.contents())($scope);
            $timeout(function () {
                $('.special.cards .image').dimmer({
                    on: 'hover'
                });
            }, 0);
        };
    }

    _createClass(Card, [{
        key: 'templateHTML',
        get: function get() {
            return '<div class="{{classes}}"></div>';
        }
    }]);

    return Card;
}();

Card.$inject = ['$compile', '$timeout'];

exports.default = (0, _createFactoryFunction2.default)(Card);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createFactoryFunction = __webpack_require__(8);

var _createFactoryFunction2 = _interopRequireDefault(_createFactoryFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card($scope, iVXjsActions) {
    _classCallCheck(this, Card);

    var _$scope$settings = $scope.settings,
        settings = _$scope$settings === undefined ? {} : _$scope$settings;
    var _settings$img = settings.img,
        img = _settings$img === undefined ? '' : _settings$img,
        _settings$title = settings.title,
        title = _settings$title === undefined ? '' : _settings$title,
        _settings$firstName = settings.firstName,
        firstName = _settings$firstName === undefined ? '' : _settings$firstName,
        _settings$description = settings.description,
        description = _settings$description === undefined ? '' : _settings$description,
        _settings$events = settings.events,
        events = _settings$events === undefined ? [] : _settings$events;


    this.img = img;
    this.title = title;
    this.firstName = firstName;
    this.description = description;
    this.buttonPressed = function () {
        iVXjsActions.resolveActions(events, function () {});
    };
};

Card.$inject = ['$scope', 'ivxjs.actions'];

exports.default = (0, _createFactoryFunction2.default)(Card);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardTemplates = exports.CardTemplates = function () {
    function CardTemplates(settings) {
        _classCallCheck(this, CardTemplates);

        this.settings = settings;
    }

    _createClass(CardTemplates, [{
        key: "miniCardHTML",
        get: function get() {
            return "\n        <div class=\"ui cards\">\n          <div class=\"card\">\n            <div class=\"content\">\n                <img class=\"right floated mini ui image\" src=\"{{vm.img}}\">\n                <div class=\"header\">\n                    {{vm.firstName}} {{vm.lastName}}\n                </div>\n                <div class=\"meta\">\n                        {{vm.title}}\n                </div>\n                <div class=\"description\">\n                    {{vm.description}}\n                 </div>\n            </div>\n            <div class=\"extra content\">\n                <div class=\"ui one buttons\">\n                    <div ng-click=\"vm.buttonPressed()\" class=\"ui button\">Buy it</div>\n                </div>\n            </div>\n          </div>\n          </div>";
        }
    }, {
        key: "dimmerCardHTML",
        get: function get() {
            var classes = this.settings.classes;

            return " \n        <div class=\"ui special cards\">  \n          <div class=\"card\">\n            <div class=\"blurring dimmable image\">\n                <div class=\"ui dimmer\">\n                    <div class=\"content\">\n                        <div class=\"center\">\n                            <button ng-click=\"vm.buttonPressed()\" class=\"ui inverted button\">Buy this!</button>\n                        </div>\n                    </div>\n                </div>\n                <img ng-src=\"{{vm.img}}\">\n            </div>\n            <div class=\"content\">\n                <a class=\"header\">{{vm.firstName}} {{vm.lastName}}</a>\n                <div class=\"meta\">\n                    <a>{{vm.title}}</a>\n                </div>\n                <div class=\"description\">\n                    {{vm.description}}\n                </div>\n            </div>\n            </div>\n            \n        </div>";
        }
    }]);

    return CardTemplates;
}();

;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateInput = __webpack_require__(24);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputState = exports.InputState = function (_DefaultInputState) {
    _inherits(InputState, _DefaultInputState);

    function InputState(header, formSection, footer, data) {
        _classCallCheck(this, InputState);

        return _possibleConstructorReturn(this, (InputState.__proto__ || Object.getPrototypeOf(InputState)).call(this, header, formSection, footer, data));
    }

    _createClass(InputState, [{
        key: 'defaultSectionClasses',
        get: function get() {
            return 'ui container';
        }
    }, {
        key: 'defaultHeaderClasses',
        get: function get() {
            return 'ui header';
        }
    }]);

    return InputState;
}(_stateInput.InputState);

;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoState = exports.VideoState = function () {
    function VideoState(playerSection, data) {
        _classCallCheck(this, VideoState);

        this.playerSection = playerSection;
        this.data = data;
    }

    _createClass(VideoState, [{
        key: 'iPhoneInlineClasses',
        get: function get() {
            var _data$isIphone = this.data.isIphone,
                isIphone = _data$isIphone === undefined ? false : _data$isIphone;


            return isIphone ? 'iphone-inline' : '';
        }
    }, {
        key: 'defaultHeaderClasses',
        get: function get() {
            return 'ui header';
        }
    }, {
        key: 'html',
        get: function get() {
            var playerSection = this.playerSection,
                data = this.data,
                iPhoneInlineClasses = this.iPhoneInlineClasses;
            var _data$header = data.header,
                header = _data$header === undefined ? {} : _data$header,
                _data$footer = data.footer,
                footer = _data$footer === undefined ? {} : _data$footer,
                _data$section = data.section,
                section = _data$section === undefined ? {} : _data$section;
            var _header$classes = header.classes,
                headerClasses = _header$classes === undefined ? '' : _header$classes,
                _header$html = header.html,
                headerHTML = _header$html === undefined ? '' : _header$html;
            var _section$classes = section.classes,
                sectionClasses = _section$classes === undefined ? '' : _section$classes;
            var _footer$classes = footer.classes,
                footerClasses = _footer$classes === undefined ? '' : _footer$classes,
                _footer$html = footer.html,
                footerHTML = _footer$html === undefined ? '' : _footer$html;


            return '\n            <section class="ui container ' + sectionClasses + ' ' + iPhoneInlineClasses + '" id="' + data.id + '">\n                <header class="' + headerClasses + ' ' + this.defaultHeaderClasses + '">' + headerHTML + '</header>\n                ' + playerSection + '\n                <footer class="' + footerClasses + '">' + footerHTML + '</footer>\n            </section>';
        }
    }]);

    return VideoState;
}();

;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavigationState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateNavigation = __webpack_require__(25);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationState = exports.NavigationState = function (_DefaultNavigationSta) {
    _inherits(NavigationState, _DefaultNavigationSta);

    function NavigationState(data, linkSection) {
        _classCallCheck(this, NavigationState);

        return _possibleConstructorReturn(this, (NavigationState.__proto__ || Object.getPrototypeOf(NavigationState)).call(this, data, linkSection));
    }

    _createClass(NavigationState, [{
        key: 'defaultSectionClasses',
        get: function get() {
            return 'ui container';
        }
    }, {
        key: 'defaultHeaderClasses',
        get: function get() {
            return 'ui header';
        }
    }]);

    return NavigationState;
}(_stateNavigation.NavigationState);

;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _videoControls = __webpack_require__(26);

var _videoControls2 = _interopRequireDefault(_videoControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_DefaultVideoControls) {
    _inherits(_class, _DefaultVideoControls);

    function _class(container, iVXjsBus) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, container));
    }

    _createClass(_class, [{
        key: 'totalTimeInfoClasses',
        get: function get() {
            return 'duration';
        }
    }, {
        key: 'playClasses',
        get: function get() {
            return 'play icon';
        }
    }, {
        key: 'pauseClasses',
        get: function get() {
            return 'pause icon';
        }
    }, {
        key: 'unmuteClasses',
        get: function get() {
            return 'unmute icon';
        }
    }, {
        key: 'muteClasses',
        get: function get() {
            return 'mute icon';
        }
    }, {
        key: 'playPauseControlsClasses',
        get: function get() {
            return 'ui icon button play-pause';
        }
    }, {
        key: 'muteControlsClasses',
        get: function get() {
            return 'ui icon button mute';
        }
    }, {
        key: 'scrubBarClasses',
        get: function get() {
            return 'ui small progress';
        }
    }, {
        key: 'scrubBarTimeLapseClasses',
        get: function get() {
            return 'bar';
        }
    }, {
        key: 'volumeBarClasses',
        get: function get() {
            return 'ui small progress';
        }
    }, {
        key: 'volumeBarCurrentVolumeClasses',
        get: function get() {
            return 'bar';
        }
    }, {
        key: 'chapterButtonClasses',
        get: function get() {
            return 'ui button chapter-button';
        }
    }, {
        key: 'chapterListClasses',
        get: function get() {
            return "ui ordered list";
        }
    }, {
        key: 'chapterListItemClasses',
        get: function get() {
            return "item";
        }
    }, {
        key: 'trackListSelectContainerClasses',
        get: function get() {
            return 'track-list-select-container';
        }
    }, {
        key: 'trackListSelectClasses',
        get: function get() {
            return 'track-list-select ui dropdown';
        }
    }, {
        key: 'trackListSelectActiveClasses',
        get: function get() {
            return 'active';
        }
    }, {
        key: 'trackListSelectInactiveClasses',
        get: function get() {
            return 'inactive';
        }
    }, {
        key: 'closeCaptionButtonClasses',
        get: function get() {
            return 'close-caption-button ui icon button';
        }
    }, {
        key: 'closeCaptionButtonActiveClasses',
        get: function get() {
            return 'active';
        }
    }, {
        key: 'closeCaptionButtonInactiveClasses',
        get: function get() {
            return 'inactive';
        }
    }, {
        key: 'closeCaptionButtonIconClasses',
        get: function get() {
            return 'close-caption-button-icon closed captioning icon';
        }
    }, {
        key: 'scrubBarHTML',
        get: function get() {
            return '      \n          <div id="video-controls-scrub-bar" class="' + this.scrubBarClasses + '">\n                <div style="min-width:0" class="' + this.scrubBarTimeLapseClasses + '">\n                     \n                </div>\n                  <div class=\'label\'>\n                        ' + this.timestampHTML + '\n                </div>\n           \n            </div>';
        }
    }, {
        key: 'volumeBarHTML',
        get: function get() {
            return '\n            <div id="video-controls-volume-bar" class="progress ' + this.volumeBarClasses + '">\n                <div style="min-width:0" class="' + this.volumeBarCurrentVolumeClasses + '"></div>\n            </div>';
        }
    }, {
        key: 'html',
        get: function get() {
            var playPauseButtonHTML = this.playPauseButtonHTML,
                scrubBarHTML = this.scrubBarHTML,
                timestampHTML = this.timestampHTML,
                muteButtonHTML = this.muteButtonHTML,
                volumeBarHTML = this.volumeBarHTML;


            return '\n        ' + scrubBarHTML + '\n        ' + playPauseButtonHTML + '\n        ' + muteButtonHTML + '\n        ' + volumeBarHTML;
        }
    }]);

    return _class;
}(_videoControls2.default);

exports.default = _class;
;

/***/ })
/******/ ]);