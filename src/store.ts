const counter = (start: number) => {
  let count = start;
  return () => count++;
};

export function emailStore(subscribe: any) {
  const uid = counter(1);

  const emails: any = {};

  const getEmails = () => Object.keys(emails).map((id) => emails[id]);

  function pushEmail(email: string) {
    const id = uid();
    emails[id] = email;
    subscribe(getEmails());

    return () => {
      console.log('delete', id);
      delete emails[id];
      subscribe(getEmails());
    };
  }

  // run subscribe after first tick
  setTimeout(() => subscribe(getEmails()), 0);

  return {
    pushEmail,
    getEmails,
  };
}
