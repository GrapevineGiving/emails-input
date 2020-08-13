declare type subscribeType = (list: string[]) => void;
declare type Store = {
    push: (data: string) => () => void;
    get: () => string[];
};
export declare function store(subscribe: subscribeType): Store;
export {};
