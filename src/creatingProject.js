import {Project} from "./project.js";

//function to create project
function createProject(name){
    const newProject = new Project(name);
    return newProject;
}

//function to create the new html page and add to the header 
function addHeader(name, projectID){
    const header = document.querySelector("header");
    const newItem = document.createElement("div");
    newItem.classList.add("project");
    newItem.value = projectID;
    newItem.textContent = name;
    header.appendChild(newItem);
}

//add the task button
function addTaskButton(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const addBtn = document.createElement("button");
    addBtn.classList.add("taskAdd");
    addBtn.textContent = "Add Task";
    content.appendChild(addBtn);
}

//function for task loader
function projectTaskContainer(project){
    const content = document.getElementById("content");
    const taskContainer = document.createElement("taskContainer");
    taskContainer.classList.add("taskContainer");
    content.appendChild(taskContainer);
}

//create form
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
            addTaskButton();
            projectTaskContainer(project);
        });
    });
}
