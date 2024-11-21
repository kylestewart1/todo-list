import { createTaskForm } from "../views/create-task-form-view";
import { FormController } from "./form-controller";
import TodoList from "../models/todo-list";
import { TaskView } from "../views/task-view";
import { ProjectView } from "../views/project-view";
import navView from "../views/nav-view";

class ContentController {
    handleAddTaskButton() {
        const dialog = document.getElementById("create-task-modal");
        const addTaskButton = document.getElementById("add-task-btn");
        addTaskButton.addEventListener("click", () => {
            const form = createTaskForm();
            form.dataset.project = addTaskButton.dataset.project;
            dialog.innerHTML = "";
            dialog.appendChild(form);
            dialog.showModal();
            const formControl = new FormController(form.id);
        })
    }

    handleSelectTaskButtons() {
        const selectButtons = document.querySelectorAll(".task-title");
        selectButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const task = TodoList.getTask(btn.dataset.task);
                const taskView = new TaskView(task);
                taskView.display();
            })
        })
    }

    handleDeleteTaskButtons() {
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const taskID = btn.dataset.task;
                const projectName = btn.dataset.project;
                TodoList.removeTask(taskID, projectName);
                const projectView = new ProjectView(TodoList.projects[projectName]);
                projectView.display();
                navView.display();
            })
        })
    }

    handleEditTaskButton() {
        const dialog = document.querySelector("#create-task-modal");
        const editTaskButton = document.querySelector(".edit-task-button");
        editTaskButton.addEventListener("click", () => {
            const taskID = editTaskButton.dataset.task;
            const form = createTaskForm(TodoList.getTask(taskID));
            dialog.innerHTML = "";
            dialog.appendChild(form);
            dialog.showModal();
            const control = new FormController(form.id);
        })
    }

    handleDeleteProjectButton() {
        const deleteButton = document.querySelector(".delete-project-btn");
        if (!deleteButton) {
            return;
        }
        deleteButton.addEventListener("click", () => {
            console.log("yo");
            const projectName = deleteButton.dataset.project;
            TodoList.removeProject(projectName);
            const projectView = new ProjectView(TodoList.projects["My Tasks"]);
            projectView.display();
            navView.display();
        })
    }
}

export default new ContentController();