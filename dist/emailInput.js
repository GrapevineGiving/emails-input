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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailsInput; });\n/* harmony import */ var _lib_genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/genElm */ \"./src/lib/genElm.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/store */ \"./src/lib/store.ts\");\n/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/style */ \"./src/style/style.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\n\n\n\n// appends style to DOM and returns base class\nvar defaultBaseClass = Object(_style_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n// Renders a rich emails input to the element\n// for flexibility it accepts\n// name: that will be added to a normal input email for using in submitting forms\n// list: initial list of emails\n// validator: for overriding default email validator function\n// baseClass: for applying custom style to the component.\n// if you pass it you should handel styling yourself\n// it returns a tuple of function to control the component\nfunction EmailsInput(container, _a) {\n    var name = _a.name, list = _a.list, _b = _a.placeholder, placeholder = _b === void 0 ? 'add more people…' : _b, _c = _a.validator, validator = _c === void 0 ? _lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"] : _c, _d = _a.baseClass, baseClass = _d === void 0 ? defaultBaseClass : _d, onChange = _a.onChange;\n    // email store to manage adding an removing emails\n    var _e = Object(_lib_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"])(function (emails) {\n        setEmailInput(emails.join(', '));\n        clearTextInput();\n        if (onChange) {\n            onChange(emails);\n        }\n    }), pushEmail = _e.push, getEmails = _e.get;\n    function addEmail(text) {\n        var add = function (email) { return Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(emailsWrapper, emailBlock(email, pushEmail(email), validator)); };\n        text\n            .split(',')\n            .map(function (str) { return str.trim(); })\n            .filter(Boolean)\n            .forEach(add);\n    }\n    // defined text input\n    var _f = emailTextInput({ addEmail: addEmail, placeholder: placeholder }), textInput = _f[0], clearTextInput = _f[1];\n    // hidden email input fo using on forms\n    var _g = hiddenEmailInput(name), emailInput = _g[0], setEmailInput = _g[1];\n    // a wrapper element to render email blocks\n    var emailsWrapper = _lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"].apply(void 0, __spreadArrays([{ className: 'ei-emails-wrapper' }], list.map(function (email) { return emailBlock(email, pushEmail(email), validator); })));\n    // main wrapper of the component\n    var wrapper = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: baseClass + \" ei-component-wrapper\",\n        events: {\n            click: function () {\n                textInput.focus();\n            },\n        },\n    }, emailInput, emailsWrapper, textInput);\n    // clear container to remove fallback\n    container.textContent = '';\n    // append wrapper to the container\n    container.appendChild(wrapper);\n    return {\n        getEmails: getEmails,\n        addEmail: addEmail,\n        getEmailsCount: function () { return getEmails().length; },\n    };\n}\n// create email block\nfunction emailBlock(email, remove, validator) {\n    var block = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: \"ei-email-block \" + (validator(email) ? '' : 'ei-invalid'),\n        events: {\n            click: function (e) {\n                // we need this lin to prevent to focus on input\n                e.stopPropagation();\n            },\n        },\n    }, Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({ className: 'ei-text' }, Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(email)), Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({\n        className: 'ei-close',\n        events: {\n            click: function (e) {\n                e.stopPropagation();\n                Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"removeNode\"])(block);\n                remove();\n            },\n        },\n    }));\n    return block;\n}\n// create text input element\nfunction emailTextInput(_a) {\n    var addEmail = _a.addEmail, placeholder = _a.placeholder;\n    var elm = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'ei-text-input',\n        attributes: { type: 'text', placeholder: placeholder },\n        events: {\n            paste: function (e) {\n                // IE11 doesn't support input event so we have to use pase event too\n                var value = (e.clipboardData || window.clipboardData).getData('text');\n                console.log(e, value);\n                if (value) {\n                    e.preventDefault();\n                    addEmail(value);\n                }\n            },\n            input: function (e) {\n                // in some android devices keypress event doesn't fire for all keys\n                // so input event could cover the functionality\n                var value = e.target.value;\n                if (value && value.search(',') >= 0) {\n                    console.log('input event');\n                    addEmail(value);\n                }\n            },\n            keypress: function (e) {\n                var keyCode = e.keyCode || e.which;\n                var value = e.target.value;\n                if (keyCode === 13 || keyCode === 44) {\n                    e.preventDefault(); // preventing to add comma into the input;\n                    if (value) {\n                        addEmail(value);\n                    }\n                    return false;\n                }\n            },\n            blur: function (e) {\n                if (e.target.value) {\n                    addEmail(e.target.value);\n                }\n            },\n        },\n    });\n    return [\n        elm,\n        function () {\n            elm.value = '';\n        },\n    ];\n}\n// creating email input element\nfunction hiddenEmailInput(name) {\n    var elm = Object(_lib_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'ei-email-input',\n        attributes: { type: 'email', multiple: '', name: name },\n    });\n    return [\n        elm,\n        function (value) {\n            elm.value = value;\n        },\n    ];\n}\n\n\n//# sourceURL=webpack://emailInput/./src/EmailInput.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genElm\", function() { return genElm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNode\", function() { return removeNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n// a helper to create DOM element in one step. it accepts properties and children;\nvar genElm = function (type) { return function (_a) {\n    var _b = _a === void 0 ? {} : _a, className = _b.className, events = _b.events, attributes = _b.attributes;\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    var elm = document.createElement(type);\n    if (className) {\n        className.split(' ').forEach(function (cl) { return cl && elm.classList.add(cl); });\n    }\n    if (attributes) {\n        Object.keys(attributes).forEach(function (name) {\n            elm.setAttribute(name, attributes[name]);\n        });\n    }\n    if (events) {\n        Object.keys(events).forEach(function (name) {\n            elm.addEventListener(name, events[name]);\n        });\n    }\n    if (children) {\n        append.apply(void 0, __spreadArrays([elm], children));\n    }\n    // removes event listeners from an element and its children.\n    // we need this functionality at removing nodes.\n    // because some old browser doesn't do it automatically.\n    elm.clearListeners = function () {\n        if (events) {\n            Object.keys(events).forEach(function (name) {\n                elm.removeEventListener(name, events[name]);\n            });\n        }\n        if (children) {\n            if (Array.isArray(children)) {\n                children.forEach(function (child) { return child.clearListeners && child.clearListeners(); });\n            }\n        }\n    };\n    return elm;\n}; };\n// some handy helper to generate elements\nvar div = genElm('div');\nvar span = genElm('span');\nvar input = genElm('input');\nvar text = function (str) { return document.createTextNode(str); };\n// removes a node element from dom and clears event listeners\nfunction removeNode(node) {\n    if (node.clearListeners) {\n        node.clearListeners();\n    }\n    node.parentElement.removeChild(node);\n}\n// appends children to an element\nvar append = function (elm) {\n    var children = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        children[_i - 1] = arguments[_i];\n    }\n    children.forEach(function (child) { return elm.appendChild(child); });\n};\n\n\n//# sourceURL=webpack://emailInput/./src/lib/genElm.ts?");

/***/ }),

/***/ "./src/lib/store.ts":
/*!**************************!*\
  !*** ./src/lib/store.ts ***!
  \**************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nvar counter = function (start) {\n    if (start === void 0) { start = 1; }\n    var count = start;\n    return function () { return count++; };\n};\nfunction store(subscribe) {\n    // simple uid generator;\n    var uid = counter();\n    var data = {};\n    var get = function () { return Object.keys(data).map(function (id) { return data[id]; }); };\n    // pushes an item to the store ans returns the remover\n    function push(email) {\n        var id = uid();\n        data[id] = email;\n        subscribe(get());\n        return function remove() {\n            delete data[id];\n            subscribe(get());\n        };\n    }\n    // runs subscribe after first tick\n    setTimeout(function () { return subscribe(get()); }, 0);\n    return {\n        push: push,\n        get: get,\n    };\n}\n\n\n//# sourceURL=webpack://emailInput/./src/lib/store.ts?");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: validateEmail, randomString, generateRandomEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return randomString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomEmail\", function() { return generateRandomEmail; });\nfunction validateEmail(email) {\n    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;\n    return regex.test(email);\n}\nfunction randomChar() {\n    var charCode = 97 + Math.random() * 26;\n    return String.fromCharCode(charCode);\n}\nfunction randomString(length) {\n    var str = '';\n    for (var i = 0; i < length; i++) {\n        str += randomChar();\n    }\n    return str;\n}\nfunction generateRandomEmail() {\n    return randomString(5) + \"@\" + randomString(7) + \".\" + randomString(3);\n}\n\n\n//# sourceURL=webpack://emailInput/./src/lib/utils.ts?");

/***/ }),

/***/ "./src/style/style.ts":
/*!****************************!*\
  !*** ./src/style/style.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appendStye; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ \"./src/lib/utils.ts\");\n\n// returns component style that wrapped into a root selector\nfunction generateStyle(rootSelector) {\n    if (rootSelector === void 0) { rootSelector = ''; }\n    // generating uniq selectors by adding baseSelector;\n    var baseSelector = rootSelector + \".ei-component-wrapper\";\n    var emailBlock = baseSelector + \" .ei-emails-wrapper .ei-email-block\";\n    return \"\\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');\\n\\n    \" + baseSelector + \"{\\n        background: #FFFFFF;\\n        border: 1px solid #C3C2CF;\\n        box-sizing: border-box;\\n        border-radius: 4px;\\n        font-size: 14px;\\n        padding: 8px;\\n        padding-bottom: 4px;\\n        font-family: 'Open Sans';\\n        height: 100%;\\n        width: 100%;\\n        overflow: auto;\\n    }\\n    \" + baseSelector + \" .ei-email-input{\\n        display: none;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper {\\n        display: inline;\\n    }\\n    \" + baseSelector + \" .ei-text-input {\\n        border: none;\\n        outline: none;\\n        min-width: 200px;\\n        padding: 3px;\\n        margin: 0 4px 4px 0;\\n        line-height: 1.6;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper .ei-email-block {\\n        background: rgba(102, 153, 255, 0.2);\\n        border-radius: 100px;\\n        display: inline-block;\\n        padding: 3px 10px;\\n        margin: 0 4px 4px 0;\\n        white-space: nowrap;\\n    }\\n    \" + baseSelector + \" .ei-emails-wrapper .ei-email-block.ei-invalid {\\n        background: white;\\n        border-bottom: dashed red 1px;\\n        border-radius: 0;\\n        padding: 3px 3px;\\n        margin-left: 4px;\\n        margin-right: 4px\\n    }\\n    \" + emailBlock + \" .ei-text {\\n        padding-right: 8px;\\n    }\\n    \" + emailBlock + \" .ei-close {\\n        position: relative;\\n        padding: 0 4px;\\n        cursor: pointer;\\n    }\\n    \" + emailBlock + \" .ei-close:before, .ei-close:after {\\n        position: absolute;\\n        left: 6;\\n        top: 4px;\\n        content: ' ';\\n        height: 12px;\\n        width: 1px;\\n        background-color: #050038;\\n    }\\n    \" + emailBlock + \" .ei-close:before {\\n        transform: rotate(45deg);\\n    }\\n    \" + emailBlock + \" .ei-close:after {\\n        transform: rotate(-45deg);\\n    }\\n    \";\n}\nfunction appendStye() {\n    // generates random class name;\n    var bastClass = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomString\"])(16);\n    // generates style and appends it to the DOM;\n    var style = document.createElement('style');\n    style.textContent = generateStyle(\".\" + bastClass);\n    document.body.appendChild(style);\n    // returns baseClass for adding to the wrapper element;\n    return bastClass;\n}\n\n\n//# sourceURL=webpack://emailInput/./src/style/style.ts?");

/***/ })

/******/ });