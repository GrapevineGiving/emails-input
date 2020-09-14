import { genElmType, ExtendedHTMLElement } from '../type/types';
export declare const genElm: genElmType;
export declare const div: (props?: {
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    events?: {
        [key: string]: any;
    };
}, ...children: Node[]) => ExtendedHTMLElement;
export declare const span: (props?: {
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    events?: {
        [key: string]: any;
    };
}, ...children: Node[]) => ExtendedHTMLElement;
export declare const input: (props?: {
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    events?: {
        [key: string]: any;
    };
}, ...children: Node[]) => ExtendedHTMLElement;
export declare const text: (str: string) => Text;
export declare function removeNode(node: Node | ExtendedHTMLElement): void;
export declare const append: (elm: HTMLElement, ...children: Node[]) => void;
