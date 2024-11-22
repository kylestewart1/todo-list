import edit from "../assets/icons/edit.png";
import ContentController from "../controllers/content-controller";

export class TaskView {
  constructor(task) {
    this.task = task;
  }

  display() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.add("task-view");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const editTaskButton = document.createElement("button");
    editTaskButton.classList.add("edit-task-button");
    editTaskButton.dataset.task = this.task.ID;
    const editIcon = document.createElement("img");
    editIcon.src = edit;
    const editLabel = document.createElement("p");
    editLabel.innerText = "Edit";
    editTaskButton.appendChild(editIcon);
    editTaskButton.appendChild(editLabel);
    taskContainer.appendChild(editTaskButton);

    const title = document.createElement("h3");
    title.innerText = this.task.title;
    title.classList.add("task-view-title");
    taskContainer.appendChild(title);

    const description = document.createElement("p");
    description.innerText = this.task.description;
    description.classList.add("task-description");
    taskContainer.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.innerText = this.task.dueDate.toDateString();
    dueDate.classList.add("task-view-due-date");
    taskContainer.appendChild(dueDate);

    const priority = this.task.priority;
    taskContainer.classList.add(priority);

    content.appendChild(taskContainer);

    ContentController.handleEditTaskButton();
  }
}
