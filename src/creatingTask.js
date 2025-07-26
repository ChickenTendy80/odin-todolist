import {Task} from "./task.js";

function addForm(){
    //Create a form
    const formContainer = document.getElementById("taskFormContainer");
    const form = document.createElement("form");
    form.setAttribute("id", "taskForm");

    //create inut fields
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "nameInput";
    nameInput.name = "projectName";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    descriptionInput.name = "taskDescription";

    const deuDateLabel = document.createElement("label");
    deuDateLabel.textContent = "Due Date: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "text";
    dueDateInput.id = "dueDateInput";
    dueDateInput.name = "taskDueDate";

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("input");
    priorityInput.type = "text";
    priorityInput.id = "prioirtyInput";
    priorityInput.name = "taskPriority";
    
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(deuDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    form.appendChild(submitBtn);

    //Add form to container
    formContainer.innerHTML = "";
    formContainer.appendChild(form);
}

export function addTask(projectID){
    const taskBtn = document.querySelector("taskAdd");
    console.log("button found");

    taskBtn.addEventListener("click", () => {
        console.log("button clicked");
        addForm();
        console.log("form added");
        //create a new task and add it to the project
        form.addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("taskForm");
            const name = document.getElementById("nameInput").value;
            const description = document.getElementById("descriptionInput").value;
            const dueDate = document.getElementById("dueDateInput").value;
            const priority = document.getElementById("priorityInput").value;

            const task = new Task(name, description, dueDate, priority, false, projectID)
            form.remove();

            console.log(task)
        })
    })
}
