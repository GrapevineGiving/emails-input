var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { span, div, text, input, removeNode, append } from './genElm';
import { validateEmail } from './utils';
import { store } from './store';
import appendStye from './style';
// appends style to DOM and returns base class
var defaultBaseClass = appendStye();
// Renders a rich emails input to the element
// for flexibility it accepts
// name: that will be added to a normal input email for using in submitting forms
// list: initial list of emails
// validator: for overriding default email validator function
// baseClass: for applying custom style to the component.
// if you pass it you should handel styling yourself
// it returns a tuple of function to control the component
export default function EmailsInput(container, _a) {
    var name = _a.name, list = _a.list, _b = _a.placeholder, placeholder = _b === void 0 ? 'add more people…' : _b, _c = _a.validator, validator = _c === void 0 ? validateEmail : _c, _d = _a.baseClass, baseClass = _d === void 0 ? defaultBaseClass : _d, onChange = _a.onChange;
    // email store to manage adding an removing emails
    var _e = store(function (emails) {
        setEmailInput(emails.join(', '));
        clearTextInput();
        if (onChange) {
            onChange(emails);
        }
    }), pushEmail = _e.push, getEmails = _e.get;
    function addEmail(text) {
        append(emailsWrapper, emailBlock(text, pushEmail(text), validator));
    }
    // defined text input
    var _f = emailTextInput({ addEmail: addEmail, placeholder: placeholder }), textInput = _f[0], clearTextInput = _f[1];
    // hidden email input fo using on forms
    var _g = hiddenEmailInput(name), emailInput = _g[0], setEmailInput = _g[1];
    // a wrapper element to render email blocks
    var emailsWrapper = div.apply(void 0, __spreadArrays([{ className: 'ei-emails-wrapper' }], list.map(function (email) { return emailBlock(email, pushEmail(email), validator); })));
    // main wrapper of the component
    var wrapper = div({
        className: baseClass + " ei-component-wrapper",
        events: {
            click: function () {
                textInput.focus();
            },
        },
    }, emailInput, emailsWrapper, textInput);
    // clear container to remove fallback
    container.textContent = '';
    // append wrapper to the container
    container.appendChild(wrapper);
    return {
        getEmails: getEmails,
        addEmail: addEmail,
        getEmailsCount: function () { return getEmails().length; },
    };
}
// create email block
function emailBlock(email, remove, validator) {
    var block = div({
        className: "ei-email-block " + (validator(email) ? '' : 'ei-invalid'),
    }, span({ className: 'ei-text' }, text(email)), span({
        className: 'ei-close',
        events: {
            click: function () {
                removeNode(block);
                remove();
            },
        },
    }));
    return block;
}
// create text input element
function emailTextInput(_a) {
    var addEmail = _a.addEmail, placeholder = _a.placeholder;
    var elm = input({
        className: 'ei-text-input',
        attributes: { type: 'text', placeholder: placeholder },
        events: {
            input: function (e) {
                var target = e.target;
                if (e.inputType === 'insertFromPaste' && target.value) {
                    if (target.value) {
                        target.value
                            .split(',')
                            .map(function (str) { return str.trim(); })
                            .filter(Boolean)
                            .forEach(addEmail);
                    }
                }
            },
            keypress: function (e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13 || keyCode === 44) {
                    e.preventDefault(); // preventing to add comma into the input;
                    if (e.target.value) {
                        addEmail(e.target.value);
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
        attributes: { type: 'email', multiple: '', name: name },
    });
    return [
        elm,
        function (value) {
            elm.value = value;
        },
    ];
}
