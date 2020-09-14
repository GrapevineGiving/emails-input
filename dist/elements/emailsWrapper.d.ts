import { StoreRemoverType } from '../type/types';
declare type appendEmailType = (email: string, storeRemover: StoreRemoverType, isValid: boolean) => void;
export default function emailsWrapper(): [HTMLDivElement, appendEmailType];
export {};
