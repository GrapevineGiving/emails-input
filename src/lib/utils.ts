export function validateEmail(email: string): boolean {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i;
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
