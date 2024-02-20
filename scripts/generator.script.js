import { skills, projects } from "../data/data.js";
export const generator = (skillsWrapper, projectsWrapper, footer) => {
  generateSkills(skillsWrapper);
  generateProjects(projectsWrapper);
  generateFooterText(footer);
};

function generateSkills(skillsWrapper) {
  skills.forEach((skill) => {
    const newSkillElement = document.createElement("img");
    const newSkillWrapper = document.createElement("div");
    const newSkillWrapperInner = document.createElement("div");
    const display = document.createElement("span");
    const displayText = document.createElement("p");

    // add required classes
    newSkillWrapper.classList.add("skill-wrapper");
    newSkillWrapperInner.classList.add("skill-wrapper-inner");
    newSkillElement.classList.add("skill");
    // add content / attributes
    newSkillElement.src = `./assets/skills/${skill.toLowerCase()}-icon.svg`;
    newSkillElement.alt = skill + " logo image";
    displayText.textContent = skill;
    // Append elements
    display.append(newSkillElement, displayText);
    const copyOfDisplay = display.cloneNode(true);
    newSkillWrapperInner.append(display, copyOfDisplay);
    newSkillWrapper.appendChild(newSkillWrapperInner);
    skillsWrapper.appendChild(newSkillWrapper);
  });
}

function generateProjects(projectsWrapper) {
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    const projectTopElement = document.createElement("div");
    const projectBottomElement = document.createElement("div");
    const projectImageElement = document.createElement("img");

    // Adding required classes
    projectBottomElement.classList.add("project-bottom");
    projectTopElement.classList.add("project-top");
    projectElement.classList.add("project");
    projectImageElement.classList.add("project-image");

    // Adding content / attributes
    projectImageElement.src = project.image;
    projectImageElement.alt = `${project.title} project image`;

    // Appending elements
    const projectBottomContent = generateProjectBottom({
      features: project.features,
      tools: project.tools,
      description: project.description,
    });
    projectBottomElement.appendChild(projectBottomContent);
    const projectTopContent = generateProjectTopContent(
      project.title,
      project.live,
      project.code
    );
    projectTopElement.append(projectTopContent, projectImageElement);
    projectElement.append(projectTopElement, projectBottomElement);
    projectsWrapper.appendChild(projectElement);
  });
}

function generateAndAppendButtons(
  buttonsParent,
  buttons,
  projectCode,
  projectLive
) {
  buttons.forEach((button) => {
    const newButton = document.createElement(button.type);
    // If button is anchor tag, add href, target attributes and disable live button if no live link exist
    if (button.type === "a") {
      newButton.href = button.content === "Live" ? projectLive : projectCode;
      newButton.target = "_blank";
      if (typeof button.live == "boolean") newButton.classList.add("disabled");
    }
    // Add common content anchor/button
    newButton.textContent = button.content;
    newButton.title = button.title;
    newButton.role = "button";
    button.classes.forEach((cl) => {
      newButton.classList.add(cl);
    });
    buttonsParent.appendChild(newButton);
  });
}

function generateProjectTopContent(projectTitle, projectLive, projectCode) {
  const buttons = [
    {
      classes: ["project-button"],
      content: "Live",
      type: "a",
      title: "Go to live",
    },
    {
      classes: ["project-button"],
      content: "Code",
      type: "a",
      title: "Go to code",
    },
    {
      classes: ["project-button", "project-more"],
      content: "More",
      type: "button",
      title: "More about project",
    },
  ];

  // if project live doesnt exist, add boolean, then use it when generating button
  if (!projectLive) {
    buttons[0].live = false;
  }

  const projectDetails = document.createElement("div");
  const projectTitleElement = document.createElement("h3");
  const projectButtons = document.createElement("div");

  // Adding attributes/content
  projectTitleElement.textContent = projectTitle;

  // Giving required classes
  projectTitleElement.classList.add("project-title");
  projectDetails.classList.add("project-top__content");
  projectButtons.classList.add("project-buttons");

  // Appending elements
  generateAndAppendButtons(projectButtons, buttons, projectCode, projectLive);
  projectDetails.append(projectTitleElement, projectButtons);
  return projectDetails;
}

function generateProjectBottom(projectData) {
  const { features, description, tools } = projectData;
  const projectBottomContent = document.createElement("div");
  const projectDescriptionWrapper = document.createElement("div");
  const projectDescriptionHeading = document.createElement("h4");
  const projectDescription = document.createElement("p");
  const projectFeaturesWrapper = document.createElement("div");
  const projectFeaturesHeading = document.createElement("h4");
  const projectFeatures = document.createElement("ul");
  const projectToolsWrapper = document.createElement("div");
  const projectToolsHeading = document.createElement("h4");
  const projectTools = document.createElement("ul");

  // adding classes
  projectDescriptionWrapper.classList.add("project-description");
  projectBottomContent.classList.add("project-bottom__content");
  projectFeaturesWrapper.classList.add("project-features");
  projectToolsWrapper.classList.add("project-tools");

  // Adding content / attributes
  projectDescription.textContent = description;
  projectDescriptionHeading.textContent = "Description";
  projectFeaturesHeading.textContent = "Features";
  projectToolsHeading.textContent = "Technologies used";
  appendArrayItemsToList(features, projectFeatures, "project-feature");
  appendArrayItemsToList(tools, projectTools, "project-tool");

  // Appending

  projectDescriptionWrapper.append(
    projectDescriptionHeading,
    projectDescription
  );
  projectFeaturesWrapper.append(projectFeaturesHeading, projectFeatures);
  projectToolsWrapper.append(projectToolsHeading, projectTools);
  projectBottomContent.append(
    projectDescriptionWrapper,
    projectFeaturesWrapper,
    projectToolsWrapper
  );
  return projectBottomContent;
}

function appendArrayItemsToList(array, parent, classToAdd) {
  array.forEach((el) => {
    const newElementLi = document.createElement("li");
    const newElementP = document.createElement("p");
    newElementP.classList.add(classToAdd);
    newElementP.textContent = el;
    newElementLi.appendChild(newElementP);
    parent.appendChild(newElementLi);
  });
}

function generateFooterText(footer) {
  const newElement = document.createElement("h5");
  newElement.classList.add("footer-text", "not-bold");
  const thisYear = new Date().getFullYear();
  newElement.textContent = `Copyright © ${thisYear} Lukas Jasiukaitis All rights reserved.`;
  footer.appendChild(newElement);
}
