import { div, removeNode, span, text } from '../lib/genElm';

// create email block
export default function emailBlock(email: string, remove: () => void, isValid: boolean): HTMLDivElement {
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
  ) as HTMLDivElement;
  return block;
}
