import { skills, projects } from "../data/data.js";
export const mainPagegenerator = (skillsWrapper, projectsWrapper, footer) => {
  generateSkills(skillsWrapper);
  generateProjectsInMain(projectsWrapper);
  generateFooterText(footer);
};

export const projectPageGenerator = (footerWrapper, projectId, body) => {
  generateProject(projectId, body, footerWrapper);
  generateFooterText(footerWrapper);
};

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
    classes: ["project-button"],
    content: "More",
    type: "a",
    title: "More about project",
  },
];

///////////////////// GENERATORS FOR MAIN PAGE ///////////////////////
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
    newSkillElement.loading = "lazy";
    displayText.textContent = skill;
    // Append elements
    display.append(newSkillElement, displayText);
    const copyOfDisplay = display.cloneNode(true);
    newSkillWrapperInner.append(display, copyOfDisplay);
    newSkillWrapper.appendChild(newSkillWrapperInner);
    skillsWrapper.appendChild(newSkillWrapper);
  });
}

function generateProjectsInMain(projectsWrapper) {
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    const projectImageElement = document.createElement("img");
    const projectTitleWrapper = document.createElement("div");
    const projectTitle = generateProjectTitle(project.title, project.id, "h3");
    const projectButtons = generateButtons(
      buttons,
      { id: project.id, title: project.title },
      project.live,
      project.code
    );

    // Adding required classes
    projectElement.classList.add("project");
    projectImageElement.classList.add("project-image");
    projectTitleWrapper.classList.add("project-title__wrapper");

    // Adding content / attributes
    projectImageElement.src = project.image;
    projectImageElement.alt = `${project.title} project image`;
    projectImageElement.loading = "lazy";

    // Appending elements
    projectTitleWrapper.appendChild(projectTitle);

    projectElement.append(
      projectButtons,
      projectImageElement,
      projectTitleWrapper
    );
    projectsWrapper.appendChild(projectElement);
  });
}

// Generates project title with wrapper
function generateProjectTitle(projectTitle, projectId, titleTag) {
  const projectTitleElement = document.createElement(titleTag);
  const projectNumberElement = document.createElement("span");

  // First should be added span, then content added and class given
  projectTitleElement.appendChild(projectNumberElement);
  projectNumberElement.textContent = "0" + projectId;
  projectNumberElement.classList.add("not-bold", "text-main-color");

  // Adding attributes/content
  projectTitleElement.innerHTML =
    projectTitleElement.innerHTML + ` ${projectTitle}`;

  // Giving required classes
  projectTitleElement.classList.add("project-title");

  // Appending elements
  return projectTitleElement;
}

// Generates project buttons with wrapper

///////////////////// GENERATORS FOR PROJECT PAGE ///////////////////////
function generateProject(projectId, body, footer) {
  const foundProject = projects.find((project) => project.id == projectId);
  // Generate message and title when project with such id does not exist
  if (!foundProject) {
    // Change document title
    document.title = "The project does not exist";
    const content = generateWhenNoProjectExist(projectId);
    body.insertBefore(content, footer);
    return;
  }
  // change document title if project exist
  document.title = foundProject.title;

  const header = generateProjectHeader(
    foundProject.image,
    foundProject.title,
    foundProject.id
  );
  const main = generateProjectMainContent(foundProject);
  body.insertBefore(header, footer);
  body.insertBefore(main, footer);
}

function generateProjectHeader(imageSrc, projectTitle, projectId) {
  const headerElement = document.createElement("header");
  const buttonReturn = document.createElement("a");
  const imageElement = document.createElement("img");
  const titleElement = generateProjectTitle(projectTitle, projectId, "h1");

  // add attributes / content
  imageElement.src = imageSrc;
  imageElement.alt = `${projectTitle} project image`;
  imageElement.role = "img";
  imageElement.loading = "lazy";
  imageElement.classList.add("project-image");
  buttonReturn.href = "index.html";
  buttonReturn.textContent = "Return to main";
  buttonReturn.classList.add("btn-special");
  // Append
  headerElement.append(buttonReturn, imageElement, titleElement);
  return headerElement;
}

function generateProjectMainContent(project) {
  const mainElement = document.createElement("main");
  // Wrappers
  const descriptionWrapper = generateProjectMainContentWrappers(
    "description",
    "Description",
    "p",
    project.description,
    "project-description"
  );
  const toolsWrapper = generateProjectMainContentWrappers(
    "tools",
    "Technologies used",
    "ul",
    project.tools,
    "project-tool"
  );
  const featuresWrapper = generateProjectMainContentWrappers(
    "features",
    "Features",
    "ul",
    project.features,
    "project-feature"
  );

  const buttonsWrapper = generateButtons(
    buttons,
    project.id,
    project.live,
    project.code,
    false
  );

  mainElement.append(
    buttonsWrapper,
    descriptionWrapper,
    toolsWrapper,
    featuresWrapper
  );
  return mainElement;
}

function generateProjectMainContentWrappers(
  wrapperClass,
  wrapperHeading,
  contentTag,
  content,
  contentClass
) {
  const wrapper = document.createElement("div");
  const heading = document.createElement("h2");
  const contentEl = document.createElement(contentTag);

  // adding classes
  wrapper.classList.add(`project-${wrapperClass}__wrapper`);
  contentEl.classList.add(contentClass);

  // adding content
  heading.textContent = wrapperHeading;

  if (typeof content == "object") {
    appendArrayItemsToList(content, contentEl, contentClass);
  } else {
    contentEl.textContent = content;
  }

  // Appending
  wrapper.append(heading, contentEl);
  return wrapper;
}

function generateWhenNoProjectExist(projectId) {
  // Wrapper
  const contentWrapper = document.createElement("main");
  contentWrapper.classList.add("no-project");
  // Title
  const displayText = document.createElement("h1");
  displayText.textContent = `Project with id ${projectId} does not exist`;
  // Return button
  const returnButton = document.createElement("a");
  returnButton.textContent = "Return to main";
  returnButton.href = "index.html";
  returnButton.title = "Return to main page";
  returnButton.classList.add("btn-special");
  returnButton.role = "button";

  contentWrapper.append(displayText, returnButton);
  return contentWrapper;
}

///////////////////// GENERATORS FOR BOTH PAGES ///////////////////////
function generateFooterText(footer) {
  const newElement = document.createElement("h5");
  newElement.classList.add("footer-text", "not-bold");
  const thisYear = new Date().getFullYear();
  newElement.textContent = `Copyright © ${thisYear} Lukas Jasiukaitis All rights reserved.`;
  footer.appendChild(newElement);
}

function generateButtons(
  buttonsArray,
  projectData,
  projectLive = "",
  projectCode = "",
  isMoreAdded = true
) {
  const buttonsWrapper = document.createElement("div");
  const buttonsWrapperInner = document.createElement("div");
  console.log(projectData);
  buttonsArray.forEach((button) => {
    if (!isMoreAdded && button.content === "More") return;
    const buttonElement = document.createElement(button.type);

    if (button.type === "a") {
      switch (button.content) {
        case "Code":
          buttonElement.href = projectCode;
          buttonElement.title = `View ${projectData.title} project code`;
          break;
        case "Live":
          buttonElement.href = projectLive;
          buttonElement.title = `Go to ${projectData.title} project live version`;
          break;
        case "More":
          buttonElement.href = `./project.html?project=${projectData.id}`;
          buttonElement.title = `More about ${projectData.title} project`;
          break;
      }
      const doesHrefExist = buttonElement.getAttribute("href");
      buttonElement.disabled = doesHrefExist == "null" ? true : false;
      if (buttonElement.disabled) {
        buttonElement.classList.add("button-disabled");
      }
      if (button.content != "More") buttonElement.target = "_blank";
    }
    buttonElement.title = buttonElement.title
      ? buttonElement.title
      : button.title;
    buttonElement.textContent = button.content;
    buttonElement.classList.add(button.classes[0]);
    buttonsWrapperInner.appendChild(buttonElement);
  });

  buttonsWrapper.classList.add("project-buttons__wrapper");
  buttonsWrapperInner.classList.add("project-buttons__wrapper-inner");

  buttonsWrapper.appendChild(buttonsWrapperInner);
  return buttonsWrapper;
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
