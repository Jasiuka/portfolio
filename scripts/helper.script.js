// Handles button style / content change when form submitted
export const submitButtonChange = (button, sent = null) => {
  if (sent) {
    button.disabled = false;
    button.innerHTML = "Send";
  } else {
    button.disabled = true;
    // Generate spinner element
    const spinner = document.createElement("span");
    spinner.classList.add("spinner");
    button.textContent = "Sending..";
    button.appendChild(spinner);
  }
};

// Clears all form inputs fields
export const clearFormFields = (form) => {
  const inputs = form.querySelectorAll(".form-input");
  inputs.forEach((input) => (input.value = ""));
};
