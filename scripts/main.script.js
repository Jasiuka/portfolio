import { sendEmail } from "./emailSending.script.js";
import {
  submitButtonChange,
  clearFormFields,
  togglesMobileMenuAndNavigation,
} from "./helper.script.js";
import { removeNotificationWithClick } from "./notifications.script.js";
import { mainPagegenerator } from "./generator.script.js";
import { observe } from "./observer.script.js";
("use strict");

// ELEMENTS
const form = document.querySelector(".contact-me__form");
const body = document.querySelector(".body");
const mobileMenu = document.querySelector(".mobile-menu");
const navigation = document.querySelector(".navigation");
const skillsWrapper = document.querySelector(".skills-wrapper");
const projectsWrapper = document.querySelector(".projects-content");
const footer = document.querySelector(".footer");

// OTHER
emailjs.init("KbOBmySIBt9WDRfNy");

// GENERATORS
mainPagegenerator(skillsWrapper, projectsWrapper, footer);

// Observer
const projects = document.querySelectorAll(".project");
observe(projects);

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
    const projectTopDetails = projectWrapper.querySelector(
      ".project-top__content"
    );
    projectTopDetails.classList.toggle("project-top__content--full");
    projectImage.classList.toggle("project-image--full");
    projectBottom.classList.toggle("open");
    if (target.textContent === "More") {
      target.textContent = "Less";
      target.title = "Less about project";
    } else {
      target.textContent = "More";
      target.title = "More about project";
    }
  }

  if (
    target.closest(".nav-list__item-link") &&
    navigation.classList.contains("navigation--open")
  ) {
    togglesMobileMenuAndNavigation(mobileMenu, navigation);
  }
});

// Contact me form submit event listener
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector(".form-button");
  submitButtonChange(submitButton);
  const isSuccess = await sendEmail(form);
  if (isSuccess) clearFormFields(form);
  submitButtonChange(submitButton, true);
});

// Mobile menu click hanlder

mobileMenu.addEventListener("click", () =>
  togglesMobileMenuAndNavigation(mobileMenu, navigation)
);
