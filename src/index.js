// index.js
import "./styles.css"
//import { TodoList } from "./todo-list";
import { Project } from "./project";
import { Item } from "./item";
import { Content } from "./DOM";

const body = document.querySelector("body");
const navBar = document.querySelector("nav");
const contentDiv = document.querySelector("#content");

const testItem = new Item("do stuff", "do stuff but like the long version", "eventually", "meh");

//const td = new TodoList();
//td.addItem(testItem, "default");


const defaultProject = new Project("default");
defaultProject.add(testItem);
const td = {default: defaultProject};


let currentContent = new Content(td);

console.log(currentContent); 

body.appendChild(currentContent.display);

