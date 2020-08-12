import { span, div, text, input, removeNode, append } from './genElm';
import { validateEmail } from './validation';
import { emailStore } from './store';

type Props = {
  name: string;
  list: string[];
};

export default function EmailsInput(container: Node, { name, list }: Props): any {
  // email store to manage adding an removing emails
  const { pushEmail, getEmails } = emailStore((emails: string[]) => {
    setEmailInput(emails.join(', '));
    clearTextInput();
  });

  function addEmail(text: string) {
    append(emailsWrapper, emailBlock(text, pushEmail(text)));
  }

  // defined text input
  const [textInput, clearTextInput] = emailTextInput(addEmail);

  // hidden email input fo using on forms
  const [emailInput, setEmailInput] = hiddenEmailInput(name);

  // a wrapper element to render email blocks
  const emailsWrapper = div(
    { className: 'emails-wrapper' },
    ...list.map((email) => emailBlock(email, pushEmail(email))),
  );

  container.appendChild(div({ className: 'component-wrapper' }, emailInput, emailsWrapper, textInput));

  return {
    getEmails,
    addEmail,
  };
}

// create email block
function emailBlock(email: string, remove: any) {
  const block = div(
    {
      className: `email-block ${validateEmail(email) ? '' : 'invalid'}`,
    },
    span({ className: 'text' }, text(email)),
    span(
      {
        className: 'close-icon',
        events: {
          click(e: any) {
            removeNode(block);
            remove(e);
          },
        },
      },
      text('x'),
    ),
  );
  return block;
}

function emailTextInput(addEmail): any {
  const elm = input({
    className: 'text-input',
    attributes: { type: 'text', placeholder: 'Enter email' },
    events: {
      input: (e) => {
        const { value } = e.target;
        if (e.inputType === 'insertFromPaste' && value) {
          if (e.target.value) {
            addEmail(e.target.value);
          }
          return;
        }
      },
      keypress: (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode == '13' || keyCode == '44') {
          e.preventDefault(); // preventing to add comma into the input;
          if (e.target.value) {
            addEmail(e.target.value);
          }
          return false;
        }
      },
    },
  });
  const clear = () => {
    elm.value = '';
  };
  return [elm, clear];
}

function hiddenEmailInput(name: string): any {
  const elm = input({
    className: 'email-input',
    attributes: { type: 'email', multiple: '', name },
  });
  return [
    elm,
    (value: string) => {
      elm.value = value;
    },
  ];
}
