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
export declare type validatorType = (str: string) => boolean;
export declare type EmailsInputProps = {
    name: string;
    list: string[];
    placeholder: string;
    validator: validatorType;
    baseClass: string;
    onChange?: (emails: string[]) => void;
};
export declare type EmailsInputObj = {
    getEmails: () => string[];
    addEmail: (email: string) => void;
    getEmailsCount: () => number;
};
export declare type hiddenEmailInputTuple = [HTMLInputElement, (value: string) => void];
export declare type emailTextInputProps = {
    addEmail: (email: string) => void;
    placeholder: string;
};
export declare type emailTextInputTuple = [HTMLInputElement, () => void];
export {};
