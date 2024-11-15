import addIcon from "../assets/icons/add.png";
import projectIcon from "../assets/icons/tree.png";
import taskIcon from "../assets/icons/leaf.png";
import addTaskIcon from "../assets/icons/add-task-icon.png";
import TodoList from "../models/todo-list";
import ScreenController from "../controllers/screen-controller";

class NavView {
    constructor(todoList) {
        this.todoList = todoList;
    }

    static buildTaskNav(task) {
        const container = document.createElement("button");
        container.classList.add("task-btn");

        const icon = document.createElement("img");
        icon.src = taskIcon;
        icon.classList.add("task-icon");
        container.appendChild(icon);

        const title = document.createElement("p");
        title.textContent = task.title;
        container.appendChild(title);

        return container;
    }

    static buildProjectNav(project) {
        const container = document.createElement("div");
        container.id = `nav-${project.name}`;
        container.classList.add("project-nav");

        const projectHeader = document.createElement("button");
        projectHeader.classList.add("project-btn");
        const icon = document.createElement("img");
        icon.src = projectIcon;
        icon.classList.add("project-icon");
        projectHeader.appendChild(icon);
        const title = document.createElement("h4");
        title.textContent = project.name;
        projectHeader.appendChild(title);
        container.appendChild(projectHeader);

        for (const taskID in project.tasks) {
            const taskNav = NavView.buildTaskNav(project.tasks[taskID]);
            container.appendChild(taskNav);
        }

        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("task-btn");
        addTaskButton.classList.add("add-task");
        addTaskButton.id = `add-task-to-${project.name}`;
        const addTaskImg = document.createElement("img");
        addTaskImg.classList.add("task-icon");
        addTaskImg.src = addTaskIcon;
        addTaskButton.appendChild(addTaskImg);
        const addTaskText = document.createElement("p");
        addTaskText.innerText = "Add Task";
        addTaskButton.appendChild(addTaskText);

        container.appendChild(addTaskButton);

        return container;
    }

    timeline() {
        const timelineDiv = document.createElement("div");
        timelineDiv.id = "timeline";
        timelineDiv.classList.add("project-nav");

        const newProjectButton = document.createElement("button");
        newProjectButton.id = "new-project";
        newProjectButton.classList.add("project-btn");
        const newImg = document.createElement("img");
        newImg.class="project-icon";
        newImg.src = "../assets/icons/add.png"
        newProjectButton.innerHTML += `<h4>New Project</h4>`;

        const todayButton = document.createElement("button");
        todayButton.id = "today";
        todayButton.classList.add("project-btn");
        todayButton.innerHTML += `<h4>Today</h4>`;

        const upcomingButton = document.createElement("button");
        upcomingButton.id = "upcoming";
        upcomingButton.classList.add("project-btn");
        upcomingButton.innerHTML += `<h4>Upcoming</h4>`;

        timelineDiv.appendChild(newProjectButton);
        timelineDiv.appendChild(todayButton);
        timelineDiv.appendChild(upcomingButton);

        return timelineDiv;
    }

    display() {
        const navBar = document.querySelector("nav");
        navBar.innerHTML = `<div id="timeline" class="project-nav">
        <button id="new-project" class="project-btn"><img class="project-icon" src=${addIcon}><h4>New Project</h4></button>
        <button id="today" class="project-btn"><img class="project-icon" src=${projectIcon}><h4>Today</h4></button>
        <button id="upcoming" class="project-btn"><img class="project-icon" src=${projectIcon}><h4>Upcoming</h4></button>
    </div>`;


        for (const project in this.todoList.projects) {
            navBar.appendChild(NavView.buildProjectNav(this.todoList.projects[project]));
        }
        ScreenController.handleNewProjectButton();
    }
}

export default new NavView(TodoList);