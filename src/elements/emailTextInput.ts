import { input } from '../lib/genElm';
import { emailTextInputProps, emailTextInputTuple } from '../type/types';

// create text input element
export default function emailTextInput({ addEmail, placeholder }: emailTextInputProps): emailTextInputTuple {
  const elm = input({
    className: 'ei-text-input',
    attributes: { type: 'text', placeholder },
    events: {
      paste: (e: ClipboardEvent) => {
        // IE11 doesn't support input event so we have to use paste event too
        const value = (e.clipboardData || (window as any).clipboardData).getData('text');
        if (value) {
          e.preventDefault();
          addEmail(value);
        }
      },
      input: (e: InputEvent) => {
        // in some android devices keypress event doesn't fire for all keys
        // so input event could cover the functionality
        const value = (e.target as HTMLInputElement).value;
        if (value && value.search(',') >= 0) {
          addEmail(value);
        }
      },
      keypress: (e: KeyboardEvent) => {
        const keyCode = e.keyCode || e.which;
        const value = (e.target as HTMLInputElement).value;
        if (keyCode === 13 || keyCode === 44) {
          e.preventDefault(); // preventing to add comma into the input;
          if (value) {
            addEmail(value);
          }
          return false;
        }
      },
      blur: (e: Event) => {
        if ((e.target as HTMLInputElement).value) {
          addEmail((e.target as HTMLInputElement).value);
        }
      },
    },
  }) as HTMLInputElement;
  return [
    elm,
    () => {
      elm.value = '';
    },
  ];
}
