import {Project} from "./project.js";
import {Task} from "./task.js";

import "./style.css";

const home = new Project("name");
const projectID = home.id;
const task1 = new Task("title","description","4/5/2006", "high","false",projectID);
console.log(task1);
const task2 = new Task("something","testing","some date", "low", "false", projectID);
console.log(task2);
home.taskArray = task1;
home.taskArray = task2;
console.log("tasks added");
console.log(home.taskArray);
task1.toggleCompleted();
console.log(task1);
task1.toggleCompleted();
console.log(task1);