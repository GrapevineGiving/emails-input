const counter = (start: number) => {
  let count = start;
  return () => count++;
};

type subscribeType = (list: string[]) => void;
type EmailStore = {
  pushEmail: (email: string) => () => void;
  getEmails: () => string[];
};

export function emailStore(subscribe: subscribeType): EmailStore {
  // simple uid generator;
  const uid = counter(1);

  const emails: { [key: string]: string } = {};

  const getEmails = () => Object.keys(emails).map((id: string) => emails[id]);

  // pushes an email to the store ans returns the remover
  function pushEmail(email: string) {
    const id = uid();
    emails[id] = email;
    subscribe(getEmails());

    return () => {
      delete emails[id];
      subscribe(getEmails());
    };
  }

  // runs subscribe after first tick
  setTimeout(() => subscribe(getEmails()), 0);

  return {
    pushEmail,
    getEmails,
  };
}
