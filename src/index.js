import {addingProject} from "./creatingProject.js";
import "./style.css";

addingProject();

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        //load project
        console.log("project clicked")
    })
})
