// index.js
import "./styles.css";
import TodoList from "./models/todo-list";
import { work, fitness, party } from "./example-todo-list";
import { ProjectView } from "./views/project-view";
import NavView from "./views/nav-view";
import { Task } from "./models/task";
import { readData } from "./store-data";
import { Project } from "./models/project";



if (localStorage.length === 0) {
    TodoList.newProject(work);
    TodoList.newProject(fitness);
    TodoList.addTask(party, "My Tasks");
} else {
    const [ tasks, projects ] = readData();
    for (const projectName in projects) {
        const project = projects[projectName];
        TodoList.newProject(project);
    }
    for (const taskID in tasks) {
        const task = tasks[taskID];
        TodoList.addTask(task, task.project);
    }
}

NavView.display();

let pv = new ProjectView(TodoList.projects["My Tasks"]);
pv.display();
