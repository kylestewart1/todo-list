import { newProjectForm } from "../views/new-project-form-view";
import { FormController } from "./form-controller";
import TodoList from "../models/todo-list";
import { createTaskForm } from "../views/create-task-form-view";
import { ProjectView } from "../views/project-view";
import { TaskView } from "../views/task-view";
import { sameDay } from "../util";
import { createTodayProject, createUpcomingProject } from "./timeline-controller";


class NavController {
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

    handleProjectDisplay() {
        const projectButtons = document.querySelectorAll(".project-btn");
        projectButtons.forEach(button => {
            button.addEventListener("click", () => {
                const projectName = button.dataset.project;
                const projectView = new ProjectView(TodoList.projects[projectName]);
                projectView.display();
            })
        })
    }

    handleTaskDisplay() {
        const taskButtons = document.querySelectorAll(".task-btn");
        taskButtons.forEach(button => {
            button.addEventListener("click", () => {
                const taskID = button.dataset.task;
                const task = TodoList.getTask(taskID);
                if (task) {
                    const taskView = new TaskView(task);
                    taskView.display();
                }
            })
        })
    }

    handleTodayButton() {
        const todayButton = document.getElementById("today");
        todayButton.addEventListener("click", () => {
            const today = createTodayProject();
            const view = new ProjectView(today);
            view.display();
        })        
    }

    handleUpcomingButton() {
        const upcomingButton = document.getElementById("upcoming");
        upcomingButton.addEventListener("click", () => {
            const upcoming = createUpcomingProject();
            const view = new ProjectView(upcoming);
            view.display();
        })
    }
}

export default new NavController();

