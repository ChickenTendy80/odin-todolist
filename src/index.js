import {Project} from "./project.js";
import {Task} from "./task.js";

import "./style.css";

const home = new Project("name");
const projectID = home.id;
const task1 = new Task("title","description","4/5/2006", "high","false",projectID);
const task2 = new Task("something","testing","some date", "low", "false", projectID);
home.taskArray(task1);
home.taskArray(task2);
console.log(home.taskArray);