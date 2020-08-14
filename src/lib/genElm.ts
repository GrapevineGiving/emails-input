import { genElmType, ExtendedHTMLElement } from '../type/types';

// a helper to create DOM elements in one step. it accepts properties and children;
// it helps to write more declarative code.
export const genElm: genElmType = (type) => ({ className, events, attributes } = {}, ...children) => {
  const elm: ExtendedHTMLElement = document.createElement(type);

  if (className) {
    className.split(' ').forEach((cl) => cl && elm.classList.add(cl));
  }

  if (attributes) {
    Object.keys(attributes).forEach((name: string) => {
      elm.setAttribute(name, attributes[name]);
    });
  }

  if (events) {
    Object.keys(events).forEach((name: string) => {
      elm.addEventListener(name, events[name]);
    });
  }

  // append all children to the element
  if (children) {
    append(elm, ...children);
  }

  // we need this functionality at removing nodes.
  // because some old browser doesn't removing event listeners automatically.
  elm.clearListeners = function () {
    if (events) {
      Object.keys(events).forEach((name: string) => {
        elm.removeEventListener(name, events[name]);
      });
    }
    if (children) {
      if (Array.isArray(children)) {
        children.forEach((child: ExtendedHTMLElement) => child.clearListeners && child.clearListeners());
      }
    }
  };

  return elm;
};

// some handy helpers to generate elements
export const div = genElm('div');
export const span = genElm('span');
export const input = genElm('input');
export const text = (str: string): Text => document.createTextNode(str);

// removes a node element from DOM and clears its event listeners
export function removeNode(node: Node | ExtendedHTMLElement): void {
  if ((node as ExtendedHTMLElement).clearListeners) {
    (node as ExtendedHTMLElement).clearListeners();
  }
  node.parentElement.removeChild(node);
}

// appends all children to an element
export const append = (elm: HTMLElement, ...children: Node[]): void => {
  children.forEach((child) => elm.appendChild(child));
};
