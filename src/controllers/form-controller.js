import { Project } from "../models/project";
import { Task } from "../models/task";
import TodoList from "../models/todo-list";
import { storeTask } from "../store-data";
import NavView from "../views/nav-view";
import { ProjectView } from "../views/project-view";

export class FormController {
    constructor(formID) {
        this.form = document.getElementById(formID);
        this.submitButton = this.form.querySelector("button");

        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            const inputs = this.form.querySelectorAll("input");
            let validForm = true;
            inputs.forEach(input => {
                input.classList.remove("invalid");
                if (!input.value) {
                    input.classList.add("invalid");
                    validForm = false;
                }
            })
            if (validForm) {
                if (formID === "new-project-form") {
                    this.handleNewProjectSubmit();
                } else if (formID == "create-task-form") {
                    this.handleCreateTaskSubmit();
                }
            }
            
        })
    }

    handleNewProjectSubmit() {
        const dialog = document.querySelector("#new-project-modal");
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
            if (task) {
                project.add(task);
                TodoList.removeTask(taskID, "My Tasks");
            }
        })

        if (!(title in TodoList.projects)) {
            TodoList.newProject(project);
        }
        dialog.close();
        NavView.display();
    }

    handleCreateTaskSubmit() {
        const dialog = document.querySelector("#create-task-modal");


        const data = new FormData(this.form);

        const title = data.get("title");
        const description = data.get("description");
        const dueDate = data.get("due-date");
        const priority = data.get("priority");

        const taskID = this.form.dataset.taskID;
        let task = TodoList.getTask(taskID);
        if (task) {
            TodoList.removeTask(taskID, task.project);
            task.title = title;
            task.description = description;
            task.setDueDateFromString(dueDate);
            task.priority = priority;
        } else {
            task = new Task(title, description, dueDate, priority);
        }

        TodoList.addTask(task, this.form.dataset.project);

        console.log(TodoList);
        dialog.close();
        NavView.display();
        const projectView = new ProjectView(TodoList.projects[this.form.dataset.project]);
        projectView.display();

    }

}