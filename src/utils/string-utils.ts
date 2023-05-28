import { Constants } from "../globals";
import { parsePhoneNumberFromString } from 'libphonenumber-js';


export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\+?[0-9]{1,3}?[- .]?\(?[0-9]{3}\)?[- .]?[0-9]{3}[- .]?[0-9]{4}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return false;
  }

  const parsedNumber = parsePhoneNumberFromString(phoneNumber);
  return parsedNumber !== undefined && parsedNumber.isValid();
}


/**
 * capitalize() is a function that takes in a string as an argument and returns the same string with the first character capitalized.
 * It uses the optional chaining operator (?.) to check if the string exists before attempting to access its properties or methods.
 * The function uses charAt() to get the first character of the string and toUpperCase() to capitalize it, then combines it with the
 * rest of the string using slice().
 * Finally, it returns the modified string.
 */
export const capitalize = (string: string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

export const isEmailValid = (userEmail: string): boolean => {
  return Constants.REGEX_EMAIL.test(userEmail);
};

export const generateRandomId = () => {
  const timestamp = new Date().getTime(); // get current timestamp
  const uniqueId = timestamp.toString(36); // convert timestamp to base36 string

  // add a random number between 0 and 9999 to the end of the string
  const randomNumber = Math.floor(Math.random() * 10000);
  const randomId = uniqueId + randomNumber.toString().padStart(4, "0");

  return randomId;
};


export const createWebStyles = (styles) => {
  if (typeof styles === 'string') {
    return { className: styles };
  } else if (Array.isArray(styles)) {
    let classes = '';
    let mergedStyles = {};

    for (let style of styles) {
      const merged = createWebStyles(style);

      if (merged.className) {
        classes += ` ${merged.className}`;
      }

      if (merged.style) {
        mergedStyles = { ...mergedStyles, ...merged.style };
      }
    }

    return { className: classes.trim(), style: mergedStyles };
  } else if (typeof styles === 'object') {
    return { style: styles };
  }

  return {};
};