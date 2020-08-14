import { EmailItem } from '../type/types';

const counter = (start = 1) => {
  let count = start;
  return () => count++;
};

type subscribeType = (list: string[]) => void;

type Store = {
  pushEmail: (data: EmailItem) => () => void;
  getItems: () => EmailItem[];
  getValidEmails: () => string[];
  getValidEmailsCount: () => number;
};

// A simple store function that only takes care about adding and removing items.
// it reduces the complexity of code in presentation layer.
export function store(subscribe: subscribeType): Store {
  // simple uid generator;
  const uid = counter();

  const data: { [key: string]: EmailItem } = {};

  // get valid emails as a string array;
  const getValidEmails = () =>
    Object.keys(data)
      .filter((id) => data[id].isValid)
      .map((id: string) => data[id].email);

  // pushes an item to the store ans returns the remover
  function pushEmail(item: EmailItem) {
    const id = uid();
    data[id] = item;
    subscribe(getValidEmails());

    // a function to removing the item from store
    return function remove() {
      delete data[id];
      subscribe(getValidEmails());
    };
  }

  // runs subscribe after first tick
  setTimeout(() => subscribe(getValidEmails()), 0);

  // exposed API
  return {
    pushEmail,
    getItems: () => Object.keys(data).map((id: string) => data[id]),
    getValidEmails,
    getValidEmailsCount: () => getValidEmails().length,
  };
}
