import { createNotification } from "./notifications.script.js";
import { validator } from "./validation.script.js";
export const sendEmail = async function (form) {
  const user_name = form.user_name.value;
  const email = form.email.value;
  const message = form.message.value;
  const params = {
    user_name,
    email,
    message,
  };

  const isNameValid = validator("name", user_name, 15, "name");
  if (!isNameValid) return;
  const isEmailValid = validator("email", email, 60, "email");
  if (!isEmailValid) return;
  const isMessageValid = validator("message", message, 300);
  if (!isMessageValid) return;

  const response = await emailjs.send(
    "service_4545aik",
    "template_epir69j",
    params
  );
  if (response.status === 200) {
    createNotification({ text: "Message sent successfully!", type: "success" });
    return true;
  }
};
