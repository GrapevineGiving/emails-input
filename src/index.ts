import EmailsInput from './EmailInput';
import { generateRandomEmail } from './utils';

type ExtWindow = Window & typeof globalThis & { EmailsInput: any; generateRandomEmail: any };

// add EmailsInput to using as global var
(window as ExtWindow).EmailsInput = EmailsInput;

// add generateRandomEmail util to use in the demo app
(window as ExtWindow).generateRandomEmail = generateRandomEmail;

// exporting the lib for using as module.
export default EmailsInput;
