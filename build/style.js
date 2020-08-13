import { randomString } from './utils';
// returns component style that wrapped into a root selector
function generateStyle(rootSelector) {
    if (rootSelector === void 0) { rootSelector = ''; }
    // generating uniq selectors by adding baseSelector;
    var baseSelector = rootSelector + ".ei-component-wrapper";
    var emailBlock = baseSelector + " .ei-emails-wrapper .ei-email-block";
    return "\n    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');\n\n    " + baseSelector + "{\n        background: #FFFFFF;\n        border: 1px solid #C3C2CF;\n        box-sizing: border-box;\n        border-radius: 4px;\n        font-size: 14px;\n        padding: 8px;\n        padding-bottom: 4px;\n        font-family: 'Open Sans';\n        height: 100%;\n        width: 100%;\n        overflow: auto;\n    }\n    " + baseSelector + " .ei-email-input{\n        display: none;\n    }\n    " + baseSelector + " .ei-emails-wrapper {\n        display: inline;\n    }\n    " + baseSelector + " .ei-text-input {\n        border: none;\n        outline: none;\n        min-width: 200px;\n        padding: 3px;\n        margin: 0 4px 4px 0;\n        line-height: 1.6;\n    }\n    " + baseSelector + " .ei-emails-wrapper .ei-email-block {\n        background: rgba(102, 153, 255, 0.2);\n        border-radius: 100px;\n        display: inline-block;\n        padding: 3px 10px;\n        margin: 0 4px 4px 0;\n        white-space: nowrap;\n    }\n    " + baseSelector + " .ei-emails-wrapper .ei-email-block.ei-invalid {\n        background: white;\n        border-bottom: dashed red 1px;\n        border-radius: 0;\n        padding: 3px 3px;\n        margin-left: 4px;\n        margin-right: 4px\n    }\n    " + emailBlock + " .ei-text {\n        padding-right: 8px;\n    }\n    " + emailBlock + " .ei-close {\n        position: relative;\n        padding: 0 4px;\n        cursor: pointer;\n    }\n    " + emailBlock + " .ei-close:before, .ei-close:after {\n        position: absolute;\n        left: 6;\n        top: 4px;\n        content: ' ';\n        height: 12px;\n        width: 1px;\n        background-color: #050038;\n    }\n    " + emailBlock + " .ei-close:before {\n        transform: rotate(45deg);\n    }\n    " + emailBlock + " .ei-close:after {\n        transform: rotate(-45deg);\n    }\n    ";
}
export default function appendStye() {
    // generates random class name;
    var bastClass = randomString(16);
    // generates style and appends it to the DOM;
    var style = document.createElement('style');
    style.textContent = generateStyle("." + bastClass);
    document.body.appendChild(style);
    // returns baseClass for adding to the wrapper element;
    return bastClass;
}
