import { EmailItem, subscribeType, Store } from '../type/types';
import { counter } from './utils';

// A simple store that only takes care about adding and removing items.
// it reduces the complexity of code in presentation layer.
export function store(onChange: subscribeType): Store {
  // simple uid generator;
  const uid = counter();

  const data: { [key: string]: EmailItem } = {};

  // return valid emails as a string array;
  const getValidEmails = () =>
    Object.keys(data)
      .filter((id) => data[id].isValid)
      .map((id: string) => data[id].email);

  // pushes an item to the store and returns the remover
  function pushEmail(item: EmailItem) {
    const id = uid();
    data[id] = { ...item, remove };
    // a callback to call after removing an item
    let onRemoveCB: () => void;

    // a function to removing the item from store
    function remove() {
      delete data[id];
      if (onRemoveCB) {
        onRemoveCB();
      }
      onChange(getValidEmails());
    }

    // we need to notify consumers about removing an itrm.
    function setOnRemoveCb(cb: () => void) {
      onRemoveCB = onRemoveCB || cb;
    }

    onChange(getValidEmails());

    return {
      remove,
      setOnRemoveCb,
    };
  }

  // exposed API
  return {
    pushEmail,
    getItems: () => Object.keys(data).map((id: string) => data[id]),
    getValidEmails,
    getValidEmailsCount: () => getValidEmails().length,
  };
}
