import emailsWrapper from './elements/emailsWrapper';
import emailTextInput from './elements/emailTextInput';
import hiddenEmailInput from './elements/hiddenEmailInput';
import { div } from './lib/genElm';
import { store } from './lib/store';
import { validateEmail } from './lib/utils';
import appendStye from './style/style';
import { EmailsInputObj, EmailsInputProps } from './type/types';

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
    const itemRemover = pushEmail({ email, isValid });
    appendEmail(email, itemRemover, isValid);
  }

  // split text to emails
  function addEmail(text: string) {
    text
      .split(/,|\n/)
      .map((str) => str.trim())
      .filter(Boolean)
      .forEach(addEmailItem);
  }

  // get text input instance
  const [textInput, clearTextInput] = emailTextInput({ addEmail, placeholder });

  // hidden email input fo using on forms
  const [emailInput, setEmailInput] = hiddenEmailInput(name);

  // wrapper element to render emails blocks
  const [emailsWrapperElm, appendEmail] = emailsWrapper();

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
    emailsWrapperElm,
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
