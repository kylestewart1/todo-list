import { createTaskForm } from "../views/create-task-form-view";
import { FormController } from "./form-controller";

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
}

export default new ContentController();