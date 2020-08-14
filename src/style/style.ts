import { randomString } from '../lib/utils';

// returns component style that wrapped into a root selector
function generateStyle(rootSelector = ''): string {
  // generating unique selectors by adding baseSelector;
  const baseSelector = `${rootSelector}.ei-component-wrapper`;
  const emailBlock = `${baseSelector} .ei-emails-wrapper .ei-email-block`;
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
    ${baseSelector} .ei-email-input{
        display: none;
    }
    ${baseSelector} .ei-emails-wrapper {
        display: inline;
    }
    ${baseSelector} .ei-text-input {
        border: none;
        outline: none;
        min-width: 200px;
        padding: 3px;
        margin: 0 4px 4px 0;
        line-height: 1.6;
    }
    ${baseSelector} .ei-emails-wrapper .ei-email-block {
        background: rgba(102, 153, 255, 0.2);
        border-radius: 100px;
        display: inline-block;
        padding: 3px 10px;
        margin: 0 4px 4px 0;
        white-space: nowrap;
    }
    ${baseSelector} .ei-emails-wrapper .ei-email-block.ei-invalid {
        background: white;
        border-bottom: dashed red 1px;
        border-radius: 0;
        padding: 3px 3px;
        margin-left: 4px;
        margin-right: 4px
    }
    ${emailBlock} .ei-text {
        padding-right: 8px;
    }
    ${emailBlock} .ei-close {
        position: relative;
        padding: 0 4px;
        cursor: pointer;
    }
    ${emailBlock} .ei-close:before, .ei-close:after {
        position: absolute;
        left: 6;
        top: 4px;
        content: ' ';
        height: 12px;
        width: 1px;
        background-color: #050038;
    }
    ${emailBlock} .ei-close:before {
        transform: rotate(45deg);
    }
    ${emailBlock} .ei-close:after {
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
