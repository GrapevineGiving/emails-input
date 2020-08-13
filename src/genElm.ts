import { genElmType, ExtendedHTMLElement } from './types';

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

  if (children) {
    append(elm, ...children);
  }

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

export const div = genElm('div');
export const span = genElm('span');
export const input = genElm('input');
export const text = (str: string): Text => document.createTextNode(str);

export function removeNode(node: Node | ExtendedHTMLElement): void {
  if ((node as ExtendedHTMLElement).clearListeners) {
    (node as ExtendedHTMLElement).clearListeners();
  }
  node.parentElement.removeChild(node);
}

export const append = (elm: HTMLElement, ...children: Node[]): void => {
  children.forEach((child) => elm.appendChild(child));
};
