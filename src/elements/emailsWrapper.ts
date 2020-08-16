import { div, append } from '../lib/genElm';
import emailBlock from './emailBlock';
import { StoreRemoverType } from '../type/types';

type appendEmailType = (email: string, storeRemover: StoreRemoverType, isValid: boolean) => void;

export default function emailsWrapper(): [HTMLDivElement, appendEmailType] {
  const emailsWrapper = div({ className: 'ei-emails-wrapper' }) as HTMLDivElement;

  const appendEmail: appendEmailType = (email, storeRemover, isValid) => {
    const block = emailBlock(email, storeRemover, isValid);
    append(emailsWrapper, block);
  };

  return [emailsWrapper, appendEmail];
}
