export const generator = (skillsWrapper, projectsWrapper, footer) => {
  generateSkills(skillsWrapper);
  generateProjects(projectsWrapper);
  generateFooterText(footer);
};

function generateSkills(skillsWrapper) {
  const skills = [
    "JavaScript",
    "React",
    "Vue",
    "Node",
    "HTML",
    "CSS",
    "SQL",
    "Ruby",
    "Git",
    "Ruby on Rails",
  ];

  skills.forEach((skill) => {
    const newSkillElement = document.createElement("img");
    const newSkillWrapper = document.createElement("div");
    const newSkillWrapperInner = document.createElement("div");
    const display = document.createElement("span");
    const displayText = document.createElement("p");

    const splittedSkill = skill.split(" ");
    // add required classes
    newSkillWrapper.classList.add("skill-wrapper");
    newSkillWrapperInner.classList.add("skill-wrapper-inner");
    newSkillElement.classList.add("skill");
    // add content / attributes
    if (skill === "Ruby on Rails") {
      newSkillElement.src = `./assets/skills/${splittedSkill[2].toLowerCase()}-icon.svg`;
    } else {
      newSkillElement.src = `./assets/skills/${splittedSkill[0].toLowerCase()}-icon.svg`;
    }
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
  const projects = [
    {
      id: 1,
      title: "Contacts application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "./assets/projects/contacts-app.png",
      code: "https://github.com/Jasiuka/contacts-application",
      live: "https://contacts-app-lj.netlify.app/",
    },
    {
      id: 2,
      title: "Veterinary Clinic System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "./assets/projects/vet-app.png",
      code: "https://github.com/Jasiuka/vet-clinic",
      live: null,
    },
    {
      id: 3,
      title: "Weather application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "./assets/projects/weather-app.png",
      code: "https://github.com/Jasiuka/VanillaJS_Weather-app",
      live: "jasiuka.github.io/VanillaJS_Weather-app/",
    },
    {
      id: 4,
      title: "Todo application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "./assets/projects/todo-app.png",
      code: "https://github.com/Jasiuka/VanillaJS_Todo",
      live: "jasiuka.github.io/VanillaJS_Todo/",
    },
    {
      id: 5,
      title: "My Portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "./assets/projects/portfolio-app.png",
      code: "https://github.com/Jasiuka/portfolio",
      live: null,
    },
  ];

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    const projectTopElement = document.createElement("div");
    const projectBottomElement = document.createElement("div");
    const projectDescription = document.createElement("p");
    const projectImageElement = document.createElement("img");

    // Adding required classes
    projectBottomElement.classList.add("project-bottom");
    projectDescription.classList.add("project-description");
    projectTopElement.classList.add("project-top");
    projectElement.classList.add("project");
    projectImageElement.classList.add("project-image");

    // Adding content / attributes
    projectDescription.textContent = project.description;
    projectImageElement.src = project.image;
    projectImageElement.alt = `${project.title} project image`;

    // Appending elements
    projectBottomElement.appendChild(projectDescription);
    const projectDetails = generateProjectTopDetails(
      project.title,
      project.live,
      project.code
    );
    projectTopElement.append(projectDetails, projectImageElement);
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

function generateProjectTopDetails(projectTitle, projectLive, projectCode) {
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
  projectDetails.classList.add("project-details");
  projectButtons.classList.add("project-buttons");

  // Appending elements
  generateAndAppendButtons(projectButtons, buttons, projectLive, projectCode);
  projectDetails.append(projectTitleElement, projectButtons);
  return projectDetails;
}

function generateFooterText(footer) {
  const newElement = document.createElement("h5");
  newElement.classList.add("footer-text");
  const thisYear = new Date().getFullYear();
  newElement.textContent = `Copyright © ${thisYear} Lukas Jasiukaitis All rights reserved`;
  footer.appendChild(newElement);
}
