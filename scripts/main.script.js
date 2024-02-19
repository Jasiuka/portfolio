import { sendEmail } from "./emailSending.script.js";
import { submitButtonChange, clearFormFields } from "./helper.script.js";
import { removeNotificationWithClick } from "./notifications.script.js";
import { generator } from "./generator.script.js";
("use strict");

// ELEMENTS
const form = document.querySelector(".contact-me__form");
const body = document.querySelector(".body");
const skillsWrapper = document.querySelector(".skills-wrapper");

emailjs.init("KbOBmySIBt9WDRfNy");

// GENERATORS
generator(skillsWrapper);

// LISTENERS
// Body element event listener using js bubbling instead of adding event listener for exact element
body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("notification-close")) {
    const notification = target.closest(".notification");
    const id = notification.dataset.el_id;
    removeNotificationWithClick(id);
  }

  if (target.classList.contains("project-more")) {
    const projectWrapper = target.closest(".project");
    const projectBottom = projectWrapper.querySelector(".project-bottom");
    const projectImage = projectWrapper.querySelector(".project-image");
    const projectTopDetails = projectWrapper.querySelector(".project-details");
    projectTopDetails.classList.toggle("project-details--full");
    projectImage.classList.toggle("project-image--full");
    projectBottom.classList.toggle("open");
    if (target.textContent === "More") {
      target.textContent = "Less";
    } else {
      target.textContent = "More";
    }
  }
});

// Contact me form submit listener
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector(".form-button");
  submitButtonChange(submitButton);
  const isSuccess = await sendEmail(form);
  if (isSuccess) clearFormFields(form);
  submitButtonChange(submitButton, true);
});
