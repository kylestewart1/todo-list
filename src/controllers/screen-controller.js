import { newProjectForm } from "../views/new-project-form-view";
import { FormController } from "./form-controller";
import TodoList from "../models/todo-list";
import { createTaskForm } from "../views/create-task-form-view";

class ScreenController {
    handleNewProjectButton() {
        const dialog = document.querySelector("#new-project-modal");
        const newProjectButton = document.getElementById("new-project");
        newProjectButton.addEventListener("click", () => {
            const form = newProjectForm(TodoList);
            dialog.innerHTML = "";
            dialog.appendChild(form);
            dialog.showModal();
            const formControl = new FormController(form.id);
        })
    }

    handleAddTaskButtons() {
        const dialog = document.querySelector("#create-task-modal");
        const addTaskButtons = document.querySelectorAll(".add-task");
        addTaskButtons.forEach(button => {
            button.addEventListener("click", () => {
                const form = createTaskForm();
                form.dataset.project = button.dataset.project;
                dialog.innerHTML = "";
                dialog.appendChild(form);
                dialog.showModal();
                const formControl = new FormController(form.id);
            })
        })
    }
}

export default new ScreenController();

