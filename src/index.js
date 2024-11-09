// index.js
import "./styles.css"
import { TodoList } from "./todo-list";
import { Project } from "./project";
import { Item } from "./item";
import { ProjectView } from "./project-view";
import { NavView } from "./nav-view";

const body = document.querySelector("body");
const navBar = document.querySelector("nav");
const contentDiv = document.querySelector("#content");

const testItem = new Item("do stuff", "do stuff but like the long version", "eventually", "meh");

const td = new TodoList();
td.addItem(testItem, "My Tasks");

const nv = new NavView(td);
nv.display();

let pv = new ProjectView(td.projects["My Tasks"]);
pv.display();
console.log(pv); 

