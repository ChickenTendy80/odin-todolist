import {Task} from "./task.js";

function createTask(title, description, dueDate, priority, completed, projectID){
    const newTask = new Task(title, description, dueDate, priority, completed, projectID);
    return newTask;
}

