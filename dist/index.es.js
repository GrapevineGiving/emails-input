/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

// a helper to create DOM elements in one step. it accepts properties and children;
// it helps to write more declarative code.
var genElm = function (type) { return function (_a) {
    var _b = _a === void 0 ? {} : _a, className = _b.className, events = _b.events, attributes = _b.attributes;
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    var elm = document.createElement(type);
    if (className) {
        className.split(' ').forEach(function (cl) { return cl && elm.classList.add(cl); });
    }
    if (attributes) {
        Object.keys(attributes).forEach(function (name) {
            elm.setAttribute(name, attributes[name]);
        });
    }
    if (events) {
        Object.keys(events).forEach(function (name) {
            elm.addEventListener(name, events[name]);
        });
    }
    // append all children to the element
    if (children) {
        append.apply(void 0, __spreadArrays([elm], children));
    }
    // we need this functionality at removing nodes.
    // because some old browser doesn't removing event listeners automatically.
    elm.clearListeners = function () {
        if (events) {
            Object.keys(events).forEach(function (name) {
                elm.removeEventListener(name, events[name]);
            });
        }
        if (children) {
            if (Array.isArray(children)) {
                children.forEach(function (child) { return child.clearListeners && child.clearListeners(); });
            }
        }
    };
    return elm;
}; };
// some handy helpers to generate elements
var div = genElm('div');
var span = genElm('span');
var input = genElm('input');
var text = function (str) { return document.createTextNode(str); };
// removes a node element from DOM and clears its event listeners
function removeNode(node) {
    if (node.clearListeners) {
        node.clearListeners();
    }
    node.parentElement.removeChild(node);
}
// appends all children to an element
var append = function (elm) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    children.forEach(function (child) { return elm.appendChild(child); });
};

// create email block
function emailBlock(email, _a, isValid) {
    var remove = _a.remove, setOnRemoveCb = _a.setOnRemoveCb;
    var block = div({
        className: "ei-email-block " + (isValid ? '' : 'ei-invalid'),
        events: {
            click: function (e) {
                // we need this lin to prevent to focus on input
                e.stopPropagation();
            },
        },
    }, span({ className: 'ei-text' }, text(email)), span({
        className: 'ei-close',
        events: {
            click: function (e) {
                e.stopPropagation();
                remove();
            },
        },
    }));
    setOnRemoveCb(function () {
        removeNode(block);
    });
    return block;
}

function emailsWrapper() {
    var emailsWrapper = div({ className: 'ei-emails-wrapper' });
    var appendEmail = function (email, storeRemover, isValid) {
        var block = emailBlock(email, storeRemover, isValid);
        append(emailsWrapper, block);
    };
    return [emailsWrapper, appendEmail];
}

// create text input element
function emailTextInput(_a) {
    var addEmail = _a.addEmail, placeholder = _a.placeholder;
    var elm = input({
        className: 'ei-text-input',
        attributes: { type: 'text', placeholder: placeholder },
        events: {
            paste: function (e) {
                // IE11 doesn't support input event so we have to use paste event too
                var value = (e.clipboardData || window.clipboardData).getData('text');
                if (value) {
                    e.preventDefault();
                    addEmail(value);
                }
            },
            input: function (e) {
                // in some android devices keypress event doesn't fire for all keys
                // so input event could cover the functionality
                var value = e.target.value;
                if (value && value.search(',') >= 0) {
                    addEmail(value);
                }
            },
            keypress: function (e) {
                var keyCode = e.keyCode || e.which;
                var value = e.target.value;
                if (keyCode === 13 || keyCode === 44) {
                    e.preventDefault(); // preventing to add comma into the input;
                    if (value) {
                        addEmail(value);
                    }
                    return false;
                }
            },
            blur: function (e) {
                if (e.target.value) {
                    addEmail(e.target.value);
                }
            },
        },
    });
    return [
        elm,
        function () {
            elm.value = '';
        },
    ];
}

// creating email input element
function hiddenEmailInput(name) {
    var elm = input({
        className: 'ei-email-input',
        attributes: { type: 'hidden', name: name },
    });
    return [
        elm,
        function (value) {
            elm.value = value;
        },
    ];
}

function validateEmail(email) {
    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i;
    return regex.test(email);
}
function randomChar() {
    var charCode = 97 + Math.random() * 26;
    return String.fromCharCode(charCode);
}
function randomString(length) {
    var str = '';
    for (var i = 0; i < length; i++) {
        str += randomChar();
    }
    return str;
}
function generateRandomEmail() {
    return randomString(5) + "@" + randomString(7) + "." + randomString(3);
}
var counter = function (start) {
    if (start === void 0) { start = 1; }
    var count = start;
    return function () { return count++; };
};

// A simple store that only takes care about adding and removing items.
// it reduces the complexity of code in presentation layer.
function store(onChange) {
    // simple uid generator;
    var uid = counter();
    var data = {};
    // return valid emails as a string array;
    var getValidEmails = function () {
        return Object.keys(data)
            .filter(function (id) { return data[id].isValid; })
            .map(function (id) { return data[id].email; });
    };
    // pushes an item to the store and returns the remover
    function pushEmail(item) {
        var id = uid();
        data[id] = __assign(__assign({}, item), { remove: remove });
        // a callback to call after removing an item
        var onRemoveCB;
        // a function to removing the item from store
        function remove() {
            delete data[id];
            if (onRemoveCB) {
                onRemoveCB();
            }
            onChange(getValidEmails());
        }
        // we need to notify consumers about removing an itrm.
        function setOnRemoveCb(cb) {
            onRemoveCB = onRemoveCB || cb;
        }
        onChange(getValidEmails());
        return {
            remove: remove,
            setOnRemoveCb: setOnRemoveCb,
        };
    }
    // exposed API
    return {
        pushEmail: pushEmail,
        getItems: function () { return Object.keys(data).map(function (id) { return (__assign({}, data[id])); }); },
        getValidEmails: getValidEmails,
        getValidEmailsCount: function () { return getValidEmails().length; },
    };
}

// returns component style that wrapped into a root selector
function generateStyle(rootSelector) {
    if (rootSelector === void 0) { rootSelector = ''; }
    // generating unique selectors by adding baseSelector;
    var baseSelector = rootSelector + ".ei-component-wrapper";
    var emailBlock = baseSelector + " .ei-emails-wrapper .ei-email-block";
    return "\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');\n\n    " + baseSelector + "{\n        background: #FFFFFF;\n        border: 1px solid #C3C2CF;\n        box-sizing: border-box;\n        border-radius: 4px;\n        font-size: 14px;\n        padding: 8px;\n        padding-bottom: 4px;\n        font-family: 'Open Sans';\n        height: 100%;\n        width: 100%;\n        overflow: auto;\n    }\n    " + baseSelector + " .ei-email-input{\n        display: none;\n    }\n    " + baseSelector + " .ei-emails-wrapper {\n        display: inline;\n    }\n    " + baseSelector + " .ei-text-input {\n        border: none;\n        outline: none;\n        min-width: 200px;\n        padding: 3px;\n        margin: 0 4px 4px 0;\n        line-height: 1.6;\n    }\n    " + baseSelector + " .ei-emails-wrapper .ei-email-block {\n        background: rgba(102, 153, 255, 0.2);\n        border-radius: 100px;\n        display: inline-block;\n        padding: 3px 10px;\n        margin: 0 4px 4px 0;\n        white-space: nowrap;\n    }\n    " + baseSelector + " .ei-emails-wrapper .ei-email-block.ei-invalid {\n        background: white;\n        border-bottom: dashed red 1px;\n        border-radius: 0;\n        padding: 3px 3px;\n        margin-left: 4px;\n        margin-right: 4px\n    }\n    " + emailBlock + " .ei-text {\n        padding-right: 8px;\n    }\n    " + emailBlock + " .ei-close {\n        position: relative;\n        padding: 0 4px;\n        cursor: pointer;\n    }\n    " + emailBlock + " .ei-close:before, .ei-close:after {\n        position: absolute;\n        left: 6;\n        top: 4px;\n        content: ' ';\n        height: 12px;\n        width: 1px;\n        background-color: #050038;\n    }\n    " + emailBlock + " .ei-close:before {\n        transform: rotate(45deg);\n    }\n    " + emailBlock + " .ei-close:after {\n        transform: rotate(-45deg);\n    }\n    ";
}
function appendStye() {
    // generates random class name;
    var bastClass = randomString(16);
    // generates style and appends it to the DOM;
    var style = document.createElement('style');
    style.textContent = generateStyle("." + bastClass);
    document.body.appendChild(style);
    // returns baseClass for adding to the wrapper element;
    return bastClass;
}

// appending style to DOM and returning base class
var defaultBaseClass = appendStye();
// EmailInput Component
// list: initial list of emails
// validator: for overriding default email validator function
// baseClass: for applying custom style to the component.
// if you pass it you should handel styling yourself
// it returns a tuple of functions to control the component
function EmailsInput(container, _a) {
    var name = _a.name, list = _a.list, _b = _a.placeholder, placeholder = _b === void 0 ? 'add more people…' : _b, _c = _a.validator, validator = _c === void 0 ? validateEmail : _c, _d = _a.baseClass, baseClass = _d === void 0 ? defaultBaseClass : _d, onChange = _a.onChange;
    // email store to manage adding and removing emails
    var _e = store(function (emails) {
        // updates email input element - we need this input in forms.
        setEmailInput(emails.join(', '));
        clearTextInput();
        if (onChange) {
            // notify the consumer about changes;
            onChange(emails);
        }
    }), pushEmail = _e.pushEmail, getItems = _e.getItems, getValidEmails = _e.getValidEmails, getValidEmailsCount = _e.getValidEmailsCount;
    // add an email item to the store and append the email block
    function addEmailItem(email) {
        var isValid = validator(email);
        var itemRemover = pushEmail({ email: email, isValid: isValid });
        appendEmail(email, itemRemover, isValid);
    }
    // split text to emails
    function addEmail(text) {
        text
            .split(/,|\n/)
            .map(function (str) { return str.trim(); })
            .filter(Boolean)
            .forEach(addEmailItem);
    }
    // get text input instance
    var _f = emailTextInput({ addEmail: addEmail, placeholder: placeholder }), textInput = _f[0], clearTextInput = _f[1];
    // hidden email input fo using on forms
    var _g = hiddenEmailInput(name), emailInput = _g[0], setEmailInput = _g[1];
    // wrapper element to render emails blocks
    var _h = emailsWrapper(), emailsWrapperElm = _h[0], appendEmail = _h[1];
    // main wrapper of the component
    var wrapper = div({
        className: baseClass + " ei-component-wrapper",
        events: {
            click: function () {
                textInput.focus();
            },
        },
    }, emailInput, emailsWrapperElm, textInput);
    // clear container to remove fallback
    container.textContent = '';
    // append wrapper to the container
    container.appendChild(wrapper);
    // adding initial list to the component;
    addEmail(list.join(','));
    // exposed APIs
    return {
        getItems: getItems,
        getValidEmails: getValidEmails,
        getValidEmailsCount: getValidEmailsCount,
        addEmail: addEmail,
    };
}

// add EmailsInput to window for using as global var
window.EmailsInput = EmailsInput;
// add generateRandomEmail util to use in the demo app
window.generateRandomEmail = generateRandomEmail;

export default EmailsInput;
