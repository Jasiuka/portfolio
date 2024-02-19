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
    newSkillWrapper.classList.add("skill-wrapper");
    newSkillWrapperInner.classList.add("skill-wrapper-inner");
    if (skill === "Ruby on Rails") {
      newSkillElement.src = `./assets/skills/${splittedSkill[2].toLowerCase()}-icon.svg`;
    } else {
      newSkillElement.src = `./assets/skills/${splittedSkill[0].toLowerCase()}-icon.svg`;
    }
    newSkillElement.classList.add("skill");
    displayText.textContent = skill;
    display.appendChild(newSkillElement);
    display.appendChild(displayText);
    const copyOfDisplay = display.cloneNode(true);
    newSkillWrapperInner.appendChild(display);
    newSkillWrapperInner.appendChild(copyOfDisplay);
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
      image: "",
    },
    {
      id: 2,
      title: "Veterinary Clinic System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "",
    },
    {
      id: 3,
      title: "Weather application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "",
    },
    {
      id: 4,
      title: "Todo application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime harum ratione illo commodi nobis consectetur quibusdam dignissimos porro laudantium, ad unde, nesciunt perspiciatis recusandae dolorem quos aliquid amet ipsa.",
      image: "",
    },
  ];

  projects.forEach((project) => {
    const projectTopElement = document.createElement("div");
    const projectBottomElement = document.createElement("div");
    const projectDetails = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const projectImage = document.createElement("img");
    const projectDescription = document.createElement("p");

    // Add inside project details element
    projectTitle.textContent = project.title;
  });
}

function generateProjectButtons(buttonsParent) {
  const buttons = new Set[
    ({ class: "project-button", content: "Live" },
    { class: "project-button", content: "Code" },
    { class: "project-button project-more", content: "More" })
  ]();

  buttons.forEach((button) => {
    const newButton = document.createElement("button");
    newButton.textContent = button.content;
    newButton.classList.add(button.class);
    buttonsParent.appendChild(newButton);
  });
}

export const generator = (skillsWrapper) => {
  generateSkills(skillsWrapper);
};
