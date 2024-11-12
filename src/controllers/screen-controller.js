import { newProjectForm } from "../views/new-project-form-view";
import { FormController } from "./form-controller";
import TodoList from "../models/todo-list";

class ScreenController {
    handleNewProjectButton() {
        const dialog = document.querySelector("dialog");
        const newProjectButton = document.getElementById("new-project");
        newProjectButton.addEventListener("click", () => {
            const form = newProjectForm(TodoList);
            dialog.innerHTML = "";
            dialog.appendChild(form);
            dialog.showModal();
            const formControl = new FormController(form.id);
        })
    }
}

export default new ScreenController();

