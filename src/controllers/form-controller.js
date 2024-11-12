import { Project } from "../models/project";
import TodoList from "../models/todo-list";
import NavView from "../views/nav-view";

export class FormController {
    constructor(formID) {
        this.form = document.getElementById(formID);
        this.submitButton = this.form.querySelector("button");

        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            const title = this.form.querySelector('input[type="text"');
            title.classList.remove("invalid");
            if (!title.value) {
                title.classList.add("invalid");
            } else {
                this.handleNewProjectSubmit();
            }
        })
    }

    handleNewProjectSubmit() {
        const dialog = document.querySelector("dialog");
        const data = new FormData(this.form);
        const title = data.get("title");

        let project;
        if (title in TodoList.projects) {
            project = TodoList.projects[title];
        } else {
            project = new Project(title);
        }

        data.getAll("tasks").forEach(taskID => {
            const task = TodoList.projects["My Tasks"].tasks[taskID];
            project.add(task);
            TodoList.projects["My Tasks"].remove(taskID);
        })

        if (!(title in TodoList.projects)) {
            TodoList.newProject(project);
        }
        dialog.close();
        NavView.display();
    }
}