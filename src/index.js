// index.js
import "./styles.css";
import TodoList from "./models/todo-list";
import { work, fitness, party } from "./example-todo-list";
import { ProjectView } from "./views/project-view";
import NavView from "./views/nav-view";

TodoList.newProject(work);
TodoList.newProject(fitness);
TodoList.addTask(party, "My Tasks");

NavView.display();

let pv = new ProjectView(TodoList.projects["My Tasks"]);
pv.display();



