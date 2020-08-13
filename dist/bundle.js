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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmailsInput; });\n/* harmony import */ var _genElm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genElm */ \"./src/genElm.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/style.ts\");\n\n\n\n\n// appends style to DOM and returns base class\nconst defaultBaseClass = Object(_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nfunction EmailsInput(container, { name, list, placeholder = 'add more people…', validator = _utils__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"], baseClass = defaultBaseClass, }) {\n    // email store to manage adding an removing emails\n    const { push: pushEmail, get: getEmails } = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"])((emails) => {\n        setEmailInput(emails.join(', '));\n        clearTextInput();\n    });\n    function addEmail(text) {\n        Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(emailsWrapper, emailBlock(text, pushEmail(text), validator));\n    }\n    // defined text input\n    const [textInput, clearTextInput] = emailTextInput({ addEmail, placeholder });\n    // hidden email input fo using on forms\n    const [emailInput, setEmailInput] = hiddenEmailInput(name);\n    // a wrapper element to render email blocks\n    const emailsWrapper = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({ className: 'emails-wrapper' }, ...list.map((email) => emailBlock(email, pushEmail(email), validator)));\n    // main wrapper of the component\n    const wrapper = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: `${baseClass} component-wrapper`,\n        events: {\n            click: () => {\n                textInput.focus();\n            },\n        },\n    }, emailInput, emailsWrapper, textInput);\n    // clear container to remove fallback\n    container.textContent = '';\n    // append wrapper to the container\n    container.appendChild(wrapper);\n    return {\n        getEmails,\n        addEmail,\n        getEmailsCount: () => getEmails().length,\n    };\n}\n// create email block\nfunction emailBlock(email, remove, validator) {\n    const block = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"div\"])({\n        className: `email-block ${validator(email) ? '' : 'invalid'}`,\n    }, Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({ className: 'text' }, Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(email)), Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"span\"])({\n        className: 'close',\n        events: {\n            click() {\n                Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"removeNode\"])(block);\n                remove();\n            },\n        },\n    }));\n    return block;\n}\nconst emailTextInput = function emailTextInput({ addEmail, placeholder }) {\n    const elm = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'text-input',\n        attributes: { type: 'text', placeholder },\n        events: {\n            input: (e) => {\n                const target = e.target;\n                if (e.inputType === 'insertFromPaste' && target.value) {\n                    if (target.value) {\n                        target.value\n                            .split(',')\n                            .map((str) => str.trim())\n                            .filter(Boolean)\n                            .forEach(addEmail);\n                    }\n                }\n            },\n            keypress: (e) => {\n                const keyCode = e.keyCode || e.which;\n                if (keyCode === 13 || keyCode === 44) {\n                    e.preventDefault(); // preventing to add comma into the input;\n                    if (e.target.value) {\n                        addEmail(e.target.value);\n                    }\n                    return false;\n                }\n            },\n            blur: (e) => {\n                if (e.target.value) {\n                    addEmail(e.target.value);\n                }\n            },\n        },\n    });\n    return [\n        elm,\n        () => {\n            elm.value = '';\n        },\n    ];\n};\nconst hiddenEmailInput = function hiddenEmailInput(name) {\n    const elm = Object(_genElm__WEBPACK_IMPORTED_MODULE_0__[\"input\"])({\n        className: 'email-input',\n        attributes: { type: 'email', multiple: '', name },\n    });\n    return [\n        elm,\n        (value) => {\n            elm.value = value;\n        },\n    ];\n};\n\n\n//# sourceURL=webpack://emailInput/./src/EmailInput.ts?");

/***/ }),

/***/ "./src/genElm.ts":
/*!***********************!*\
  !*** ./src/genElm.ts ***!
  \***********************/
/*! exports provided: genElm, div, span, input, text, removeNode, append */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genElm\", function() { return genElm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input\", function() { return input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNode\", function() { return removeNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\nconst genElm = (type) => ({ className, events, attributes } = {}, ...children) => {\n    const elm = document.createElement(type);\n    if (className) {\n        className.split(' ').forEach((cl) => cl && elm.classList.add(cl));\n    }\n    if (attributes) {\n        Object.keys(attributes).forEach((name) => {\n            elm.setAttribute(name, attributes[name]);\n        });\n    }\n    if (events) {\n        Object.keys(events).forEach((name) => {\n            elm.addEventListener(name, events[name]);\n        });\n    }\n    if (children) {\n        append(elm, ...children);\n    }\n    elm.clearListeners = function () {\n        if (events) {\n            Object.keys(events).forEach((name) => {\n                elm.removeEventListener(name, events[name]);\n            });\n        }\n        if (children) {\n            if (Array.isArray(children)) {\n                children.forEach((child) => child.clearListeners && child.clearListeners());\n            }\n        }\n    };\n    return elm;\n};\nconst div = genElm('div');\nconst span = genElm('span');\nconst input = genElm('input');\nconst text = (str) => document.createTextNode(str);\nfunction removeNode(node) {\n    if (node.clearListeners) {\n        node.clearListeners();\n    }\n    node.parentElement.removeChild(node);\n}\nconst append = (elm, ...children) => {\n    children.forEach((child) => elm.appendChild(child));\n};\n\n\n//# sourceURL=webpack://emailInput/./src/genElm.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailInput */ \"./src/EmailInput.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n\n// add EmailsInput to using as global var\nwindow.EmailsInput = _EmailInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n// add generateRandomEmail util to use in the demo app\nwindow.generateRandomEmail = _utils__WEBPACK_IMPORTED_MODULE_1__[\"generateRandomEmail\"];\n// exporting the lib for using as module.\n/* harmony default export */ __webpack_exports__[\"default\"] = (_EmailInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://emailInput/./src/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nconst counter = (start) => {\n    let count = start;\n    return () => count++;\n};\nfunction store(subscribe) {\n    // simple uid generator;\n    const uid = counter(1);\n    const data = {};\n    const get = () => Object.keys(data).map((id) => data[id]);\n    // pushes an item to the store ans returns the remover\n    function push(email) {\n        const id = uid();\n        data[id] = email;\n        subscribe(get());\n        return function remove() {\n            delete data[id];\n            subscribe(get());\n        };\n    }\n    // runs subscribe after first tick\n    setTimeout(() => subscribe(get()), 0);\n    return {\n        push,\n        get,\n    };\n}\n\n\n//# sourceURL=webpack://emailInput/./src/store.ts?");

/***/ }),

/***/ "./src/style.ts":
/*!**********************!*\
  !*** ./src/style.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appendStye; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n// returns component style that wrapped into a root selector\nfunction generateStyle(rootSelector = '') {\n    // generating uniq selectors by adding baseSelector;\n    const baseSelector = `${rootSelector}.component-wrapper`;\n    const emailBlock = `${baseSelector} .emails-wrapper .email-block`;\n    return `\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');\n\n    ${baseSelector}{\n        background: #FFFFFF;\n        border: 1px solid #C3C2CF;\n        box-sizing: border-box;\n        border-radius: 4px;\n        font-size: 14px;\n        padding: 8px;\n        padding-bottom: 4px;\n        font-family: 'Open Sans';\n        height: 100%;\n        width: 100%;\n        overflow: auto;\n    }\n    ${baseSelector} .email-input{\n        display: none;\n    }\n    ${baseSelector} .emails-wrapper {\n        display: inline;\n    }\n    ${baseSelector} .text-input {\n        border: none;\n        outline: none;\n        min-width: 200px;\n        padding: 3px;\n        margin: 0 4px 4px 0;\n        line-height: 1.6;\n    }\n    ${baseSelector} .emails-wrapper .email-block {\n        background: rgba(102, 153, 255, 0.2);\n        border-radius: 100px;\n        display: inline-block;\n        padding: 3px 10px;\n        margin: 0 4px 4px 0;\n        white-space: nowrap;\n    }\n    ${baseSelector} .emails-wrapper .email-block.invalid {\n        background: white;\n        border-bottom: dashed red 1px;\n        border-radius: 0;\n        padding: 3px 3px;\n        margin-left: 4px;\n        margin-right: 4px\n    }\n    ${emailBlock} .text {\n        padding-right: 8px;\n    }\n    ${emailBlock} .close {\n        position: relative;\n        padding: 0 4px;\n        cursor: pointer;\n    }\n    ${emailBlock} .close:before, .close:after {\n        position: absolute;\n        left: 6;\n        top: 4px;\n        content: ' ';\n        height: 12px;\n        width: 1px;\n        background-color: #050038;\n    }\n    ${emailBlock} .close:before {\n        transform: rotate(45deg);\n    }\n    ${emailBlock} .close:after {\n        transform: rotate(-45deg);\n    }\n    `;\n}\nfunction appendStye() {\n    // generates random class name;\n    const bastClass = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomString\"])(16);\n    // generates style and appends it to the DOM;\n    const style = document.createElement('style');\n    style.textContent = generateStyle(`.${bastClass}`);\n    document.body.appendChild(style);\n    // returns baseClass for adding to the wrapper element;\n    return bastClass;\n}\n\n\n//# sourceURL=webpack://emailInput/./src/style.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: validateEmail, randomString, generateRandomEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return randomString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomEmail\", function() { return generateRandomEmail; });\nfunction validateEmail(email) {\n    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;\n    return regex.test(email);\n}\nfunction randomChar() {\n    const charCode = 97 + Math.random() * 26;\n    return String.fromCharCode(charCode);\n}\nfunction randomString(length) {\n    let str = '';\n    for (let i = 0; i < length; i++) {\n        str += randomChar();\n    }\n    return str;\n}\nfunction generateRandomEmail() {\n    return `${randomString(5)}@${randomString(7)}.${randomString(3)}`;\n}\n\n\n//# sourceURL=webpack://emailInput/./src/utils.ts?");

/***/ })

/******/ });