import EmailsInput from './EmailInput';
import { generateRandomEmail } from './utils';
// add EmailsInput to using as global var
window.EmailsInput = EmailsInput;
// add generateRandomEmail util to use in the demo app
window.generateRandomEmail = generateRandomEmail;
// exporting the lib for using as module.
export default EmailsInput;
