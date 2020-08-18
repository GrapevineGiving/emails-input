var emailInput =
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailsInput; });\n/* harmony import */ var _elements_emailsWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/emailsWrapper */ \"./src/elements/emailsWrapper.ts\");\n/* harmony import */ var _elements_emailTextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/emailTextInput */ \"./src/elements/emailTextInput.ts\");\n/* harmony import */ var _elements_hiddenEmailInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/hiddenEmailInput */ \"./src/elements/hiddenEmailInput.ts\");\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/genElm */ \"./src/lib/genElm.ts\");\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/store */ \"./src/lib/store.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/style */ \"./src/style/style.ts\");\n\n\n\n\n\n\n\n// appending style to DOM and returning base class\nvar defaultBaseClass = Object(_style_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n// EmailInput Component\n// list: initial list of emails\n// validator: for overriding default email validator function\n// baseClass: for applying custom style to the component.\n// if you pass it you should handel styling yourself\n// it returns a tuple of functions to control the component\nfunction EmailsInput(container, _a) {\n    var name = _a.name, list = _a.list, _b = _a.placeholder, placeholder = _b === void 0 ? 'add more people…' : _b, _c = _a.validator, validator = _c === void 0 ? _lib_utils__WEBPACK_IMPORTED_MODULE_5__[\"validateEmail\"] : _c, _d = _a.baseClass, baseClass = _d === void 0 ? defaultBaseClass : _d, onChange = _a.onChange;\n    // email store to manage adding and removing emails\n    var _e = Object(_lib_store__WEBPACK_IMPORTED_MODULE_4__[\"store\"])(function (emails) {\n        // updates email input element - we need this input in forms.\n        setEmailInput(emails.join(', '));\n        clearTextInput();\n        if (onChange) {\n            // notify the consumer about changes;\n            onChange(emails);\n        }\n    }), pushEmail = _e.pushEmail, getItems = _e.getItems, getValidEmails = _e.getValidEmails, getValidEmailsCount = _e.getValidEmailsCount;\n    // add an email item to the store and append the email block\n    function addEmailItem(email) {\n        var isValid = validator(email);\n        var itemRemover = pushEmail({ email: email, isValid: isValid });\n        appendEmail(email, itemRemover, isValid);\n    }\n    // split text to emails\n    function addEmail(text) {\n        text\n            .split(',')\n            .map(function (str) { return str.trim(); })\n            .filter(Boolean)\n            .forEach(addEmailItem);\n    }\n    // get text input instance\n    var _f = Object(_elements_emailTextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ addEmail: addEmail, placeholder: placeholder }), textInput = _f[0], clearTextInput = _f[1];\n    // hidden email input fo using on forms\n    var _g = Object(_elements_hiddenEmailInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(name), emailInput = _g[0], setEmailInput = _g[1];\n    // wrapper element to render emails blocks\n    var _h = Object(_elements_emailsWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), emailsWrapperElm = _h[0], appendEmail = _h[1];\n    // main wrapper of the component\n    var wrapper = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_3__[\"div\"])({\n        className: baseClass + \" ei-component-wrapper\",\n        events: {\n            click: function () {\n                textInput.focus();\n            },\n        },\n    }, emailInput, emailsWrapperElm, textInput);\n    // clear container to remove fallback\n    container.textContent = '';\n    // append wrapper to the container\n    container.appendChild(wrapper);\n    // adding initial list to the component;\n    addEmail(list.join(','));\n    // exposed APIs\n    return {\n        getItems: getItems,\n        getValidEmails: getValidEmails,\n        getValidEmailsCount: getValidEmailsCount,\n        addEmail: addEmail,\n    };\n}\n\n\n//# sourceURL=webpack://emailInput/./src/EmailInput.ts?");

/***/ }),

/***/ "./src/elements/emailBlock.ts":
/*!************************************!*\
  !*** ./src/elements/emailBlock.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return emailBlock; });\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/genElm */ \"./src/lib/genElm.ts\");\n\n// create email block\nfunction emailBlock(email, _a, isValid) {\n    var remove = _a.remove, setOnRemoveCb = _a.setOnRemoveCb;\n    var block = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: \"ei-email-block \" + (isValid ? '' : 'ei-invalid'),\n        events: {\n            click: function (e) {\n                // we need this lin to prevent to focus on input\n                e.stopPropagation();\n            },\n        },\n    }, Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({ className: 'ei-text' }, Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(email)), Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({\n        className: 'ei-close',\n        events: {\n            click: function (e) {\n                e.stopPropagation();\n                remove();\n            },\n        },\n    }));\n    setOnRemoveCb(function () {\n        Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"removeNode\"])(block);\n    });\n    return block;\n}\n\n\n//# sourceURL=webpack://emailInput/./src/elements/emailBlock.ts?");

/***/ }),

/***/ "./src/elements/emailTextInput.ts":
/*!****************************************!*\
  !*** ./src/elements/emailTextInput.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return emailTextInput; });\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/genElm */ \"./src/lib/genElm.ts\");\n\n// create text input element\nfunction emailTextInput(_a) {\n    var addEmail = _a.addEmail, placeholder = _a.placeholder;\n    var elm = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'ei-text-input',\n        attributes: { type: 'text', placeholder: placeholder },\n        events: {\n            paste: function (e) {\n                // IE11 doesn't support input event so we have to use paste event too\n                var value = (e.clipboardData || window.clipboardData).getData('text');\n                if (value) {\n                    e.preventDefault();\n                    addEmail(value);\n                }\n            },\n            input: function (e) {\n                // in some android devices keypress event doesn't fire for all keys\n                // so input event could cover the functionality\n                var value = e.target.value;\n                if (value && value.search(',') >= 0) {\n                    addEmail(value);\n                }\n            },\n            keypress: function (e) {\n                var keyCode = e.keyCode || e.which;\n                var value = e.target.value;\n                if (keyCode === 13 || keyCode === 44) {\n                    e.preventDefault(); // preventing to add comma into the input;\n                    if (value) {\n                        addEmail(value);\n                    }\n                    return false;\n                }\n            },\n            blur: function (e) {\n                if (e.target.value) {\n                    addEmail(e.target.value);\n                }\n            },\n        },\n    });\n    return [\n        elm,\n        function () {\n            elm.value = '';\n        },\n    ];\n}\n\n\n//# sourceURL=webpack://emailInput/./src/elements/emailTextInput.ts?");

/***/ }),

/***/ "./src/elements/emailsWrapper.ts":
/*!***************************************!*\
  !*** ./src/elements/emailsWrapper.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return emailsWrapper; });\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/genElm */ \"./src/lib/genElm.ts\");\n/* harmony import */ var _emailBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailBlock */ \"./src/elements/emailBlock.ts\");\n\n\nfunction emailsWrapper() {\n    var emailsWrapper = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ className: 'ei-emails-wrapper' });\n    var appendEmail = function (email, storeRemover, isValid) {\n        var block = Object(_emailBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(email, storeRemover, isValid);\n        Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(emailsWrapper, block);\n    };\n    return [emailsWrapper, appendEmail];\n}\n\n\n//# sourceURL=webpack://emailInput/./src/elements/emailsWrapper.ts?");

/***/ }),

/***/ "./src/elements/hiddenEmailInput.ts":
/*!******************************************!*\
  !*** ./src/elements/hiddenEmailInput.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hiddenEmailInput; });\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/genElm */ \"./src/lib/genElm.ts\");\n\n// creating email input element\nfunction hiddenEmailInput(name) {\n    var elm = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'ei-email-input',\n        attributes: { type: 'hidden', name: name },\n    });\n    return [\n        elm,\n        function (value) {\n            elm.value = value;\n        },\n    ];\n}\n\n\n//# sourceURL=webpack://emailInput/./src/elements/hiddenEmailInput.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInput */ \"./src/EmailInput.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\n\n\n// add EmailsInput to window for using as global var\nwindow.EmailsInput = _EmailInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n// add generateRandomEmail util to use in the demo app\nwindow.generateRandomEmail = _lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateRandomEmail\"];\n// exporting the lib for using as module.\n/* harmony default export */ __webpack_exports__[\"default\"] = (_EmailInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://emailInput/./src/index.ts?");

/***/ }),

/***/ "./src/lib/genElm.ts":
/*!***************************!*\
  !*** ./src/lib/genElm.ts ***!
  \***************************/
/*! exports provided: genElm, div, span, input, text, removeNode, append */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genElm\", function() { return genElm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNode\", function() { return removeNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n// a helper to create DOM elements in one step. it accepts properties and children;\n// it helps to write more declarative code.\nvar genElm = function (type) { return function (_a) {\n    var _b = _a === void 0 ? {} : _a, className = _b.className, events = _b.events, attributes = _b.attributes;\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    var elm = document.createElement(type);\n    if (className) {\n        className.split(' ').forEach(function (cl) { return cl && elm.classList.add(cl); });\n    }\n    if (attributes) {\n        Object.keys(attributes).forEach(function (name) {\n            elm.setAttribute(name, attributes[name]);\n        });\n    }\n    if (events) {\n        Object.keys(events).forEach(function (name) {\n            elm.addEventListener(name, events[name]);\n        });\n    }\n    // append all children to the element\n    if (children) {\n        append.apply(void 0, __spreadArrays([elm], children));\n    }\n    // we need this functionality at removing nodes.\n    // because some old browser doesn't removing event listeners automatically.\n    elm.clearListeners = function () {\n        if (events) {\n            Object.keys(events).forEach(function (name) {\n                elm.removeEventListener(name, events[name]);\n            });\n        }\n        if (children) {\n            if (Array.isArray(children)) {\n                children.forEach(function (child) { return child.clearListeners && child.clearListeners(); });\n            }\n        }\n    };\n    return elm;\n}; };\n// some handy helpers to generate elements\nvar div = genElm('div');\nvar span = genElm('span');\nvar input = genElm('input');\nvar text = function (str) { return document.createTextNode(str); };\n// removes a node element from DOM and clears its event listeners\nfunction removeNode(node) {\n    if (node.clearListeners) {\n        node.clearListeners();\n    }\n    node.parentElement.removeChild(node);\n}\n// appends all children to an element\nvar append = function (elm) {\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    children.forEach(function (child) { return elm.appendChild(child); });\n};\n\n\n//# sourceURL=webpack://emailInput/./src/lib/genElm.ts?");

/***/ }),

/***/ "./src/lib/store.ts":
/*!**************************!*\
  !*** ./src/lib/store.ts ***!
  \**************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/lib/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n// A simple store that only takes care about adding and removing items.\n// it reduces the complexity of code in presentation layer.\nfunction store(onChange) {\n    // simple uid generator;\n    var uid = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"counter\"])();\n    var data = {};\n    // return valid emails as a string array;\n    var getValidEmails = function () {\n        return Object.keys(data)\n            .filter(function (id) { return data[id].isValid; })\n            .map(function (id) { return data[id].email; });\n    };\n    // pushes an item to the store and returns the remover\n    function pushEmail(item) {\n        var id = uid();\n        data[id] = __assign(__assign({}, item), { remove: remove });\n        // a callback to call after removing an item\n        var onRemoveCB;\n        // a function to removing the item from store\n        function remove() {\n            delete data[id];\n            if (onRemoveCB) {\n                onRemoveCB();\n            }\n            onChange(getValidEmails());\n        }\n        // we need to notify consumers about removing an itrm.\n        function setOnRemoveCb(cb) {\n            onRemoveCB = onRemoveCB || cb;\n        }\n        onChange(getValidEmails());\n        return {\n            remove: remove,\n            setOnRemoveCb: setOnRemoveCb,\n        };\n    }\n    // exposed API\n    return {\n        pushEmail: pushEmail,\n        getItems: function () { return Object.keys(data).map(function (id) { return (__assign({}, data[id])); }); },\n        getValidEmails: getValidEmails,\n        getValidEmailsCount: function () { return getValidEmails().length; },\n    };\n}\n\n\n//# sourceURL=webpack://emailInput/./src/lib/store.ts?");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: validateEmail, randomString, generateRandomEmail, counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return randomString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomEmail\", function() { return generateRandomEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\nfunction validateEmail(email) {\n    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;\n    return regex.test(email);\n}\nfunction randomChar() {\n    var charCode = 97 + Math.random() * 26;\n    return String.fromCharCode(charCode);\n}\nfunction randomString(length) {\n    var str = '';\n    for (var i = 0; i < length; i++) {\n        str += randomChar();\n    }\n    return str;\n}\nfunction generateRandomEmail() {\n    return randomString(5) + \"@\" + randomString(7) + \".\" + randomString(3);\n}\nvar counter = function (start) {\n    if (start === void 0) { start = 1; }\n    var count = start;\n    return function () { return count++; };\n};\n\n\n//# sourceURL=webpack://emailInput/./src/lib/utils.ts?");

/***/ }),

/***/ "./src/style/style.ts":
/*!****************************!*\
  !*** ./src/style/style.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appendStye; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ \"./src/lib/utils.ts\");\n\n// returns component style that wrapped into a root selector\nfunction generateStyle(rootSelector) {\n    if (rootSelector === void 0) { rootSelector = ''; }\n    // generating unique selectors by adding baseSelector;\n    var baseSelector = rootSelector + \".ei-component-wrapper\";\n    var emailBlock = baseSelector + \" .ei-emails-wrapper .ei-email-block\";\n    return \"\\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');\\n\\n    \" + baseSelector + \"{\\n        background: #FFFFFF;\\n        border: 1px solid #C3C2CF;\\n        box-sizing: border-box;\\n        border-radius: 4px;\\n        font-size: 14px;\\n        padding: 8px;\\n        padding-bottom: 4px;\\n        font-family: 'Open Sans';\\n        height: 100%;\\n        width: 100%;\\n        overflow: auto;\\n    }\\n    \" + baseSelector + \" .ei-email-input{\\n        display: none;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper {\\n        display: inline;\\n    }\\n    \" + baseSelector + \" .ei-text-input {\\n        border: none;\\n        outline: none;\\n        min-width: 200px;\\n        padding: 3px;\\n        margin: 0 4px 4px 0;\\n        line-height: 1.6;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper .ei-email-block {\\n        background: rgba(102, 153, 255, 0.2);\\n        border-radius: 100px;\\n        display: inline-block;\\n        padding: 3px 10px;\\n        margin: 0 4px 4px 0;\\n        white-space: nowrap;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper .ei-email-block.ei-invalid {\\n        background: white;\\n        border-bottom: dashed red 1px;\\n        border-radius: 0;\\n        padding: 3px 3px;\\n        margin-left: 4px;\\n        margin-right: 4px\\n    }\\n    \" + emailBlock + \" .ei-text {\\n        padding-right: 8px;\\n    }\\n    \" + emailBlock + \" .ei-close {\\n        position: relative;\\n        padding: 0 4px;\\n        cursor: pointer;\\n    }\\n    \" + emailBlock + \" .ei-close:before, .ei-close:after {\\n        position: absolute;\\n        left: 6;\\n        top: 4px;\\n        content: ' ';\\n        height: 12px;\\n        width: 1px;\\n        background-color: #050038;\\n    }\\n    \" + emailBlock + \" .ei-close:before {\\n        transform: rotate(45deg);\\n    }\\n    \" + emailBlock + \" .ei-close:after {\\n        transform: rotate(-45deg);\\n    }\\n    \";\n}\nfunction appendStye() {\n    // generates random class name;\n    var bastClass = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomString\"])(16);\n    // generates style and appends it to the DOM;\n    var style = document.createElement('style');\n    style.textContent = generateStyle(\".\" + bastClass);\n    document.body.appendChild(style);\n    // returns baseClass for adding to the wrapper element;\n    return bastClass;\n}\n\n\n//# sourceURL=webpack://emailInput/./src/style/style.ts?");

/***/ })

/******/ });