import { projectPageGenerator } from "./generator.script.js";
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");
const footer = document.querySelector(".footer");
const body = document.getElementById("project-page");
projectPageGenerator(footer, projectId, body);
