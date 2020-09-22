declare type ElementProps = {
    className?: string;
    attributes?: {
        [key: string]: string;
    };
    events?: {
        [key: string]: any;
    };
};
declare type ElementTypes = keyof HTMLElementTagNameMap;
export declare type ExtendedHTMLElement = HTMLElement & {
    clearListeners?: () => void;
};
export declare type genElmType = (type: ElementTypes) => (props?: ElementProps, ...children: Node[]) => ExtendedHTMLElement;
export declare type cleanerType = (str: string) => string;
export declare type validatorType = (str: string) => boolean;
export declare type EmailsInputProps = {
    name: string;
    list: string[];
    placeholder: string;
    cleaner: cleanerType;
    validator: validatorType;
    baseClass: string;
    onChange?: (emails: string[]) => void;
};
export declare type EmailsInputObj = {
    getValidEmails: () => string[];
    addEmail: (email: string) => void;
    getValidEmailsCount: () => number;
    getItems: () => EmailItem[];
};
export declare type hiddenEmailInputTuple = [HTMLInputElement, (value: string) => void];
export declare type emailTextInputProps = {
    addEmail: (email: string) => void;
    placeholder: string;
};
export declare type emailTextInputTuple = [HTMLInputElement, () => void];
export declare type EmailItem = {
    email: string;
    isValid: boolean;
    remove?: () => void;
};
export declare type subscribeType = (list: string[]) => void;
export declare type StoreRemoverType = {
    remove: () => void;
    setOnRemoveCb: (cb: () => void) => void;
};
export declare type Store = {
    pushEmail: (data: EmailItem) => StoreRemoverType;
    getItems: () => EmailItem[];
    getValidEmails: () => string[];
    getValidEmailsCount: () => number;
};
export {};
