type ElementProps = {
  className?: string;
  attributes?: {
    [key: string]: string;
  };
  events?: {
    [key: string]: any;
  };
};

type ElementTypes = keyof HTMLElementTagNameMap;

export type ExtendedHTMLElement = HTMLElement & {
  clearListeners?: () => void;
};

export type genElmType = (type: ElementTypes) => (props?: ElementProps, ...children: Node[]) => ExtendedHTMLElement;
