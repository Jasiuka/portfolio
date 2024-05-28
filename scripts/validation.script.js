import { createNotification } from "./notifications.script.js";

export function validator(inputName, inputValue, length, pattern) {
  let isValid = false;
  let regex;
  switch (pattern) {
    case "email":
      // allow only email patterns
      regex = new RegExp(
        /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
      );
      isValid = regex.test(inputValue);
      break;
    case "name":
      // Allow only letters and spaces
      regex = new RegExp(/^[a-zA-Z\s]*$/);
      isValid = regex.test(inputValue);
      break;
    default:
      isValid = true;
  }

  if (!isValid) {
    createNotification({
      text: `Input field ${inputName} is not valid!`,
      type: "error",
    });
    return;
  }

  //   If input value valid, then check length
  if (inputValue.trim().length > length) {
    createNotification({
      text: `Input field ${inputName} length is not valid! [Max: ${length}]`,
      type: "error",
    });
    return;
  }

  // If input value empty
  if (inputValue.trim().length < 1) {
    createNotification({
      text: `Input field ${inputName} should not be empty!`,
      type: "error",
    });
    return;
  }

  return isValid;
}

export function recaptchaValidation(recaptcha) {
  if (!recaptcha) {
    createNotification({
      text: `Confirm that you're not a robot with recaptcha`,
      type: "error",
    });
    return;
  }

  return true;
}
