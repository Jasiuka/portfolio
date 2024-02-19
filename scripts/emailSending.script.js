export const sendEmail = function (event) {
  event.preventDefault();
  const form = event.target;

  const user_name = form.user_name.value;
  const email = form.email.value;
  const message = form.message.value;
  const params = {
    user_name,
    email,
    message,
  };

  emailjs.send("service_4545aik", "template_epir69j", params);
};
