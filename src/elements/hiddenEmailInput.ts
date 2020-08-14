import { input } from '../lib/genElm';
import { hiddenEmailInputTuple } from '../type/types';

// creating email input element
export default function hiddenEmailInput(name: string): hiddenEmailInputTuple {
  const elm = input({
    className: 'ei-email-input',
    attributes: { type: 'hidden', name },
  }) as HTMLInputElement;
  return [
    elm,
    (value: string) => {
      elm.value = value;
    },
  ];
}
