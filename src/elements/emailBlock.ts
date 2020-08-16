import { div, removeNode, span, text } from '../lib/genElm';
import { StoreRemoverType } from '../type/types';

// create email block
export default function emailBlock(
  email: string,
  { remove, setOnRemoveCb }: StoreRemoverType,
  isValid: boolean,
): HTMLDivElement {
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
          remove();
        },
      },
    }),
  ) as HTMLDivElement;

  setOnRemoveCb(() => {
    removeNode(block);
  });

  return block;
}
