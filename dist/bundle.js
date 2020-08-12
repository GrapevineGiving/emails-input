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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/EmailInput.ts":
/*!***************************!*\
  !*** ./src/EmailInput.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailsInput; });\n/* harmony import */ var _genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genElm */ \"./src/genElm.ts\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ \"./src/validation.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\n\n\nfunction EmailsInput(container, _a) {\n    var name = _a.name, list = _a.list;\n    // email store to manage adding an removing emails\n    var _b = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"emailStore\"])(function (emails) {\n        setEmailInput(emails.join(', '));\n        clearTextInput();\n    }), pushEmail = _b.pushEmail, getEmails = _b.getEmails;\n    function addEmail(text) {\n        Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(emailsWrapper, emailBlock(text, pushEmail(text)));\n    }\n    // defined text input\n    var _c = emailTextInput(addEmail), textInput = _c[0], clearTextInput = _c[1];\n    // hidden email input fo using on forms\n    var _d = hiddenEmailInput(name), emailInput = _d[0], setEmailInput = _d[1];\n    // a wrapper element to render email blocks\n    var emailsWrapper = _genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"].apply(void 0, __spreadArrays([{ className: 'emails-wrapper' }], list.map(function (email) { return emailBlock(email, pushEmail(email)); })));\n    container.appendChild(Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ className: 'component-wrapper' }, emailInput, emailsWrapper, textInput));\n    return {\n        getEmails: getEmails,\n        addEmail: addEmail,\n    };\n}\n// create email block\nfunction emailBlock(email, remove) {\n    var block = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: \"email-block \" + (Object(_validation__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"])(email) ? '' : 'invalid'),\n    }, Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({ className: 'text' }, Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(email)), Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({\n        className: 'close-icon',\n        events: {\n            click: function (e) {\n                Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"removeNode\"])(block);\n                remove(e);\n            },\n        },\n    }, Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"text\"])('x')));\n    return block;\n}\nfunction emailTextInput(addEmail) {\n    var elm = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'text-input',\n        attributes: { type: 'text', placeholder: 'Enter email' },\n        events: {\n            input: function (e) {\n                var value = e.target.value;\n                if (e.inputType === 'insertFromPaste' && value) {\n                    if (e.target.value) {\n                        addEmail(e.target.value);\n                    }\n                    return;\n                }\n            },\n            keypress: function (e) {\n                var keyCode = e.keyCode || e.which;\n                if (keyCode == '13' || keyCode == '44') {\n                    e.preventDefault(); // preventing to add comma into the input;\n                    if (e.target.value) {\n                        addEmail(e.target.value);\n                    }\n                    return false;\n                }\n            },\n        },\n    });\n    var clear = function () {\n        elm.value = '';\n    };\n    return [elm, clear];\n}\nfunction hiddenEmailInput(name) {\n    var elm = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'email-input',\n        attributes: { type: 'email', multiple: '', name: name },\n    });\n    return [\n        elm,\n        function (value) {\n            elm.value = value;\n        },\n    ];\n}\n\n\n//# sourceURL=webpack:///./src/EmailInput.ts?");

/***/ }),

/***/ "./src/genElm.ts":
/*!***********************!*\
  !*** ./src/genElm.ts ***!
  \***********************/
/*! exports provided: genElm, div, span, input, text, removeNode, append */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genElm\", function() { return genElm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNode\", function() { return removeNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\nvar genElm = function (type) { return function (_a) {\n    var _b = _a === void 0 ? {} : _a, className = _b.className, events = _b.events, attributes = _b.attributes;\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    var elm = document.createElement(type);\n    if (className) {\n        className.split(' ').forEach(function (cl) { return cl && elm.classList.add(cl); });\n    }\n    if (attributes) {\n        Object.keys(attributes).forEach(function (name) {\n            elm.setAttribute(name, attributes[name]);\n        });\n    }\n    if (events) {\n        Object.keys(events).forEach(function (name) {\n            elm.addEventListener(name, events[name]);\n        });\n    }\n    if (children) {\n        children.forEach(function (child) { return elm.appendChild(child); });\n    }\n    elm.clearListeners = function () {\n        if (events) {\n            Object.keys(events).forEach(function (name) {\n                elm.removeEventListener(name, events[name]);\n            });\n        }\n        if (children) {\n            if (Array.isArray(children)) {\n                children.forEach(function (child) { return child.clearListeners && child.clearListeners(); });\n            }\n        }\n    };\n    return elm;\n}; };\nvar div = genElm('div');\nvar span = genElm('span');\nvar input = genElm('input');\nvar text = function (str) { return document.createTextNode(str); };\nfunction removeNode(node) {\n    if (node.clearListeners) {\n        node.clearListeners();\n    }\n    node.parentElement.removeChild(node);\n}\nvar append = function (elm) {\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    children.forEach(function (child) { return elm.appendChild(child); });\n};\n\n\n//# sourceURL=webpack:///./src/genElm.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInput */ \"./src/EmailInput.ts\");\n\nwindow['EmailsInput'] = _EmailInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: emailStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailStore\", function() { return emailStore; });\nvar counter = function (start) {\n    var count = start;\n    return function () { return count++; };\n};\nfunction emailStore(subscribe) {\n    var uid = counter(1);\n    var emails = {};\n    var getEmails = function () { return Object.keys(emails).map(function (id) { return emails[id]; }); };\n    function pushEmail(email) {\n        var id = uid();\n        emails[id] = email;\n        subscribe(getEmails());\n        return function () {\n            console.log('delete', id);\n            delete emails[id];\n            subscribe(getEmails());\n        };\n    }\n    // run subscribe after first tick\n    setTimeout(function () { return subscribe(getEmails()); }, 0);\n    return {\n        pushEmail: pushEmail,\n        getEmails: getEmails,\n    };\n}\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/validation.ts":
/*!***************************!*\
  !*** ./src/validation.ts ***!
  \***************************/
/*! exports provided: validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\nfunction validateEmail(email) {\n    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;\n    return regex.test(email);\n}\n\n\n//# sourceURL=webpack:///./src/validation.ts?");

/***/ })

/******/ });