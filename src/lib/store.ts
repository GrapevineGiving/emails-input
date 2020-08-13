const counter = (start = 1) => {
  let count = start;
  return () => count++;
};

type subscribeType = (list: string[]) => void;
type Store = {
  push: (data: string) => () => void;
  get: () => string[];
};

export function store(subscribe: subscribeType): Store {
  // simple uid generator;
  const uid = counter();

  const data: { [key: string]: string } = {};

  const get = () => Object.keys(data).map((id: string) => data[id]);

  // pushes an item to the store ans returns the remover
  function push(email: string) {
    const id = uid();
    data[id] = email;
    subscribe(get());

    return function remove() {
      delete data[id];
      subscribe(get());
    };
  }

  // runs subscribe after first tick
  setTimeout(() => subscribe(get()), 0);

  return {
    push,
    get,
  };
}
