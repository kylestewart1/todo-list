// index.js
import "./styles.css";
import TodoList from "./models/todo-list";
import { Project } from "./models/project";
import { Task } from "./models/task";
import { ProjectView } from "./views/project-view";
import NavView from "./views/nav-view";

const body = document.querySelector("body");
const navBar = document.querySelector("nav");
const content = document.querySelector("#content");

const testTask = new Task("do stuff", "do stuff but like the long version", "2024-11-21", "Medium");

TodoList.addTask(testTask, "My Tasks");
TodoList.addTask(new Task("whatever", "meh", "2026-10-30", "Low"), "My Tasks");
TodoList.addTask(new Task("not die", "obvious", "2024-11-17", "High"), "My Tasks");

NavView.display();

let pv = new ProjectView(TodoList.projects["My Tasks"]);
pv.display();



