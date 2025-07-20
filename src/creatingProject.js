import {Project} from "./project.js";
import {Task} from "./task.js";

//function to creae project
function createProject(name){
    const newProject = new Project(name);
    return newProject;
}

//function to create the new html page and add to the header 
function addHeader(name, projectID){
    const header = document.querySelector("header");
    const newItem = document.createElement("project");
    newItem.classList.add("project");
    newItem.value = projectID;
    newItem.textContent = name;
    header.appendChild(newItem);
}

//function for task loader
function projectTaskLoader(project){
    const taskArray = project.taskArray;
    taskArray.forEach((task) => {
        console.log(task);
    });
}

function createForm(){
    const formContainer = document.getElementById("formContainer");

    //create form element
    const form = document.createElement("form");
    form.setAttribute("id", "form");

    //create inut fields
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "nameInput";
    nameInput.name = "projectName";

    //submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(submitBtn);

    //Add form to container
    formContainer.innerHTML = "";
    formContainer.appendChild(form);
}

export function addingProject(){
    const addButton = document.getElementById("createFormBtn");

    addButton.addEventListener("click", () => {
        createForm();
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = document.getElementById("form");
            const name = document.getElementById("nameInput").value;
            const project = createProject(name);
            const projectID = project.projectID;
            form.remove();
            console.log(project);
            addHeader(name, projectID);
            projectTaskLoader(project);
        });
    });
}
