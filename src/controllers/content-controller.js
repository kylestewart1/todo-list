import { createTaskForm } from "../views/create-task-form-view";
import { FormController } from "./form-controller";
import TodoList from "../models/todo-list";
import { TaskView } from "../views/task-view";

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
}

export default new ContentController();