import { div, append } from '../lib/genElm';
import emailBlock from './emailBlock';

type appendEmailType = (email: string, remover: () => void, isValid: boolean) => void;

export default function emailsWrapper(): [HTMLDivElement, appendEmailType] {
  const emailsWrapper = div({ className: 'ei-emails-wrapper' }) as HTMLDivElement;

  function appendEmail(email: string, remover: () => void, isValid: boolean) {
    const block = emailBlock(email, remover, isValid);
    append(emailsWrapper, block);
  }

  return [emailsWrapper, appendEmail];
}
