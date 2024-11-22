import icon from "../assets/icons/add-task-icon.png";
import highPriority from "../assets/icons/high-priority.png";
import mediumPriority from "../assets/icons/medium-priority.png";
import lowPriority from "../assets/icons/low-priority.png";
import deleteImg from "../assets/icons/delete.png";
import deleteProjectIcon from "../assets/icons/fire.png";
import ContentController from "../controllers/content-controller";
import TodoList from "../models/todo-list";

export class ProjectView {
  constructor(project) {
    this.project = project;
  }

  buildTaskDisplay(task) {
    const taskDisplay = document.createElement("div");
    taskDisplay.classList.add("task");

    const deleteButton = document.createElement("button");
    deleteButton.dataset.task = task.ID;
    deleteButton.dataset.project = task.project;
    deleteButton.classList.add("delete-button");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = deleteImg;
    const deleteText = document.createElement("h4");
    deleteText.innerText = "Delete";
    deleteButton.appendChild(deleteIcon);
    deleteButton.appendChild(deleteText);
    taskDisplay.appendChild(deleteButton);

    const priority = task.priority;
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority");
    const icon = document.createElement("img");
    if (priority === "High") {
      icon.src = highPriority;
    } else if (priority === "Medium") {
      icon.src = mediumPriority;
    } else {
      icon.src = lowPriority;
    }

    const priorityLabel = document.createElement("p");
    priorityLabel.innerText = `${priority} Priority`;
    priorityContainer.appendChild(icon);
    priorityContainer.appendChild(priorityLabel);
    taskDisplay.appendChild(priorityContainer);

    const title = document.createElement("button");
    title.dataset.task = task.ID;
    title.textContent = task.title;
    title.classList.add("task-title");
    taskDisplay.appendChild(title);

    const dueDate = document.createElement("div");
    dueDate.textContent = task.dueDate.toDateString();
    dueDate.classList.add("due-date");
    taskDisplay.appendChild(dueDate);

    return taskDisplay;
  }

  display() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.add("project-view");

    const projectViewHeader = document.createElement("div");
    projectViewHeader.classList.add("project-view-header");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = this.project.name;
    projectViewHeader.appendChild(projectTitle);

    if (
      this.project.name !== "Today" &&
      this.project.name !== "Upcoming" &&
      this.project.name !== "My Tasks"
    ) {
      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.classList.add("delete-project-btn");
      deleteProjectButton.dataset.project = this.project.name;
      const deleteProjectImg = document.createElement("img");
      deleteProjectImg.src = deleteProjectIcon;
      const deleteText = document.createElement("h4");
      deleteText.innerText = "Delete Project";
      deleteProjectButton.appendChild(deleteProjectImg);
      deleteProjectButton.appendChild(deleteText);
      projectViewHeader.appendChild(deleteProjectButton);
    }

    content.appendChild(projectViewHeader);

    const projectBody = document.createElement("div");
    projectBody.classList.add("project");

    for (const task in this.project.tasks) {
      const taskDisplay = this.buildTaskDisplay(this.project.tasks[task]);
      projectBody.appendChild(taskDisplay);
    }

    content.appendChild(projectBody);

    if (this.project.name !== "Today" && this.project.name !== "Upcoming") {
      const addtaskButton = document.createElement("button");
      addtaskButton.id = "add-task-btn";
      addtaskButton.dataset.project = this.project.name;

      const addTaskIcon = document.createElement("img");
      addTaskIcon.src = icon;

      const addTaskLabel = document.createElement("h4");
      addTaskLabel.innerText = "Add Task";

      addtaskButton.appendChild(addTaskIcon);
      addtaskButton.appendChild(addTaskLabel);
      content.appendChild(addtaskButton);

      ContentController.handleAddTaskButton();
    }
    ContentController.handleSelectTaskButtons();
    ContentController.handleDeleteTaskButtons();
    ContentController.handleDeleteProjectButton();
  }
}
