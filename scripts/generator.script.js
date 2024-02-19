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
      newSkillElement.src = `/assets/skills/${splittedSkill[2].toLowerCase()}-icon.svg`;
    } else {
      newSkillElement.src = `/assets/skills/${splittedSkill[0].toLowerCase()}-icon.svg`;
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

export const generator = (skillsWrapper) => {
  generateSkills(skillsWrapper);
};
