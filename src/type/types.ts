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

export type validatorType = (str: string) => boolean;

export type EmailsInputProps = {
  name: string;
  list: string[];
  placeholder: string;
  validator: validatorType;
  baseClass: string;
  onChange?: (emails: string[]) => void;
};

export type EmailsInputObj = {
  getValidEmails: () => string[];
  addEmail: (email: string) => void;
  getValidEmailsCount: () => number;
  getItems: () => EmailItem[];
};

export type hiddenEmailInputTuple = [HTMLInputElement, (value: string) => void];

export type emailTextInputProps = {
  addEmail: (email: string) => void;
  placeholder: string;
};

export type emailTextInputTuple = [HTMLInputElement, () => void];

export type EmailItem = {
  email: string;
  isValid: boolean;
};
