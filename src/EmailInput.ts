import { span, div, text, input, removeNode, append } from './lib/genElm';
import { validateEmail } from './lib/utils';
import { store } from './lib/store';
import appendStye from './style/style';
import {
  EmailsInputObj,
  EmailsInputProps,
  hiddenEmailInputTuple,
  emailTextInputProps,
  emailTextInputTuple,
} from './type/types';

// appending style to DOM and returning base class
const defaultBaseClass = appendStye();

// EmailInput Component
// list: initial list of emails
// validator: for overriding default email validator function
// baseClass: for applying custom style to the component.
// if you pass it you should handel styling yourself
// it returns a tuple of functions to control the component
export default function EmailsInput(
  container: Node,
  {
    name,
    list,
    placeholder = 'add more people…',
    validator = validateEmail,
    baseClass = defaultBaseClass,
    onChange,
  }: EmailsInputProps,
): EmailsInputObj {
  // email store to manage adding and removing emails
  const { pushEmail, getItems, getValidEmails, getValidEmailsCount } = store((emails) => {
    // updates email input element - we need this input in forms.
    setEmailInput(emails.join(', '));

    clearTextInput();

    if (onChange) {
      // notify the consumer about changes;
      onChange(emails);
    }
  });

  // add an email item to the store and append the email block
  function addEmailItem(email: string) {
    const isValid = validator(email);
    append(emailsWrapper, emailBlock(email, pushEmail({ email, isValid }), isValid));
  }

  // split text to emails
  function addEmail(text: string) {
    text
      .split(',')
      .map((str) => str.trim())
      .filter(Boolean)
      .forEach(addEmailItem);
  }

  // get text input instance
  const [textInput, clearTextInput] = emailTextInput({ addEmail, placeholder });

  // hidden email input fo using on forms
  const [emailInput, setEmailInput] = hiddenEmailInput(name);

  // wrapper element to render emails blocks
  const emailsWrapper = div({ className: 'ei-emails-wrapper' });

  // main wrapper of the component
  const wrapper = div(
    {
      className: `${baseClass} ei-component-wrapper`,
      events: {
        click: () => {
          textInput.focus();
        },
      },
    },
    emailInput,
    emailsWrapper,
    textInput,
  );

  // clear container to remove fallback
  container.textContent = '';

  // append wrapper to the container
  container.appendChild(wrapper);

  // adding initial list to the component;
  addEmail(list.join(','));

  // exposed APIs
  return {
    getItems,
    getValidEmails,
    getValidEmailsCount,
    addEmail,
  };
}

// create email block
function emailBlock(email: string, remove: () => void, isValid: boolean) {
  const block = div(
    {
      className: `ei-email-block ${isValid ? '' : 'ei-invalid'}`,
      events: {
        click(e: Event) {
          // we need this lin to prevent to focus on input
          e.stopPropagation();
        },
      },
    },
    span({ className: 'ei-text' }, text(email)),
    span({
      className: 'ei-close',
      events: {
        click(e: Event) {
          e.stopPropagation();
          removeNode(block);
          remove();
        },
      },
    }),
  );
  return block;
}

// create text input element
function emailTextInput({ addEmail, placeholder }: emailTextInputProps): emailTextInputTuple {
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

// creating email input element
function hiddenEmailInput(name: string): hiddenEmailInputTuple {
  const elm = input({
    className: 'ei-email-input',
    attributes: { type: 'email', multiple: '', name },
  }) as HTMLInputElement;
  return [
    elm,
    (value: string) => {
      elm.value = value;
    },
  ];
}
