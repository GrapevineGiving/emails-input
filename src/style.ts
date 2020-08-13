import { randomString } from './utils';

// returns component style that wrapped into a root selector
function generateStyle(rootSelector = ''): string {
  // generating uniq selectors by adding baseSelector;
  const baseSelector = `${rootSelector}.component-wrapper`;
  const emailBlock = `${baseSelector} .emails-wrapper .email-block`;
  return `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

    ${baseSelector}{
        background: #FFFFFF;
        border: 1px solid #C3C2CF;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 14px;
        padding: 8px;
        padding-bottom: 4px;
        font-family: 'Open Sans';
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    ${baseSelector} .email-input{
        display: none;
    }
    ${baseSelector} .emails-wrapper {
        display: inline;
    }
    ${baseSelector} .text-input {
        border: none;
        outline: none;
        min-width: 200px;
        padding: 3px;
        margin: 0 4px 4px 0;
        line-height: 1.6;
    }
    ${baseSelector} .emails-wrapper .email-block {
        background: rgba(102, 153, 255, 0.2);
        border-radius: 100px;
        display: inline-block;
        padding: 3px 10px;
        margin: 0 4px 4px 0;
        white-space: nowrap;
    }
    ${baseSelector} .emails-wrapper .email-block.invalid {
        background: white;
        border-bottom: dashed red 1px;
        border-radius: 0;
        padding: 3px 3px;
        margin-left: 4px;
        margin-right: 4px
    }
    ${emailBlock} .text {
        padding-right: 8px;
    }
    ${emailBlock} .close {
        position: relative;
        padding: 0 4px;
        cursor: pointer;
    }
    ${emailBlock} .close:before, .close:after {
        position: absolute;
        left: 6;
        top: 4px;
        content: ' ';
        height: 12px;
        width: 1px;
        background-color: #050038;
    }
    ${emailBlock} .close:before {
        transform: rotate(45deg);
    }
    ${emailBlock} .close:after {
        transform: rotate(-45deg);
    }
    `;
}

export default function appendStye(): string {
  // generates random class name;
  const bastClass = randomString(16);

  // generates style and appends it to the DOM;
  const style = document.createElement('style');
  style.textContent = generateStyle(`.${bastClass}`);
  document.body.appendChild(style);

  // returns baseClass for adding to the wrapper element;
  return bastClass;
}
