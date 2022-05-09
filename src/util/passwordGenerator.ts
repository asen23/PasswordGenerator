const lowercaseSet = Array.from(Array(26)).map((x, i) =>
  String.fromCharCode(i + 97)
);
const uppercaseSet = Array.from(Array(26)).map((x, i) =>
  String.fromCharCode(i + 65)
);
const numberSet = Array.from(Array(10)).map((x, i) => (i + 1).toString());
const specialCharSet = Array.from("-_+*!@#$%^&");

export const generatePassword = (
  length: number,
  lowercase: boolean,
  uppercase: boolean,
  number: boolean,
  specialChar: boolean
) => {
  const set: string[] = [];
  if (lowercase) set.push(...lowercaseSet);
  if (uppercase) set.push(...uppercaseSet);
  if (number) set.push(...numberSet);
  if (specialChar) set.push(...specialCharSet);
  return Array.from(Array(length))
    .map(() => set[Math.round(Math.random() * set.length)])
    .join("");
};
