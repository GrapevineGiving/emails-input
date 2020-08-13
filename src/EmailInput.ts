import { span, div, text, input, removeNode, append } from './genElm';
import { validateEmail } from './utils';
import { store } from './store';
import appendStye from './style';
import {
  EmailsInputObj,
  validatorType,
  EmailsInputProps,
  hiddenEmailInputTuple,
  emailTextInputProps,
  emailTextInputTuple,
} from './types';

// appends style to DOM and returns base class
const defaultBaseClass = appendStye();

// Renders a rich emails input to the element
// for flexibility it accepts
// name: that will be added to a normal input email for using in submitting forms
// list: initial list of emails
// validator: for overriding default email validator function
// baseClass: for applying custom style to the component.
// if you pass it you should handel styling yourself
// it returns a tuple of function to control the component
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
  // email store to manage adding an removing emails
  const { push: pushEmail, get: getEmails } = store((emails: string[]) => {
    setEmailInput(emails.join(', '));
    clearTextInput();
    if (onChange) {
      onChange(emails);
    }
  });

  function addEmail(text: string) {
    append(emailsWrapper, emailBlock(text, pushEmail(text), validator));
  }

  // defined text input
  const [textInput, clearTextInput] = emailTextInput({ addEmail, placeholder });

  // hidden email input fo using on forms
  const [emailInput, setEmailInput] = hiddenEmailInput(name);

  // a wrapper element to render email blocks
  const emailsWrapper = div(
    { className: 'ei-emails-wrapper' },
    ...list.map((email) => emailBlock(email, pushEmail(email), validator)),
  );

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

  return {
    getEmails,
    addEmail,
    getEmailsCount: () => getEmails().length,
  };
}

// create email block
function emailBlock(email: string, remove: () => void, validator: validatorType) {
  const block = div(
    {
      className: `ei-email-block ${validator(email) ? '' : 'ei-invalid'}`,
    },
    span({ className: 'ei-text' }, text(email)),
    span({
      className: 'ei-close',
      events: {
        click() {
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
      input: (e: InputEvent) => {
        const target = e.target as HTMLInputElement;
        if (e.inputType === 'insertFromPaste' && target.value) {
          if (target.value) {
            (target.value as string)
              .split(',')
              .map((str) => str.trim())
              .filter(Boolean)
              .forEach(addEmail);
          }
        }
      },
      keypress: (e: KeyboardEvent) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13 || keyCode === 44) {
          e.preventDefault(); // preventing to add comma into the input;
          if ((e.target as HTMLInputElement).value) {
            addEmail((e.target as HTMLInputElement).value);
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
