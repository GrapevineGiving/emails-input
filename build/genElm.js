var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// a helper to create DOM element in one step. it accepts properties and children;
export var genElm = function (type) { return function (_a) {
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
    if (children) {
        append.apply(void 0, __spreadArrays([elm], children));
    }
    // removes event listeners from an element and its children.
    // we need this functionality at removing nodes.
    // because some old browser doesn't do it automatically.
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
// some handy helper to generate elements
export var div = genElm('div');
export var span = genElm('span');
export var input = genElm('input');
export var text = function (str) { return document.createTextNode(str); };
// removes a node element from dom and clears event listeners
export function removeNode(node) {
    if (node.clearListeners) {
        node.clearListeners();
    }
    node.parentElement.removeChild(node);
}
// appends children to an element
export var append = function (elm) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    children.forEach(function (child) { return elm.appendChild(child); });
};
