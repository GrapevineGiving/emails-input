export function cleanEmail(email: string): string {
  const regex = /[^ \sa-zA-Z0-9!#$%&@'*+-/=?^_`{|}~.]+/g;
  return email.replace(regex, '');
}

export function validateEmail(email: string): boolean {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[^\s@]+\.[^\s@]+$/i;
  return regex.test(email);
}

function randomChar() {
  const charCode = 97 + Math.random() * 26;
  return String.fromCharCode(charCode);
}

export function randomString(length: number): string {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += randomChar();
  }
  return str;
}

export function generateRandomEmail(): string {
  return `${randomString(5)}@${randomString(7)}.${randomString(3)}`;
}

export const counter = (start = 1) => {
  let count = start;
  return () => count++;
};
