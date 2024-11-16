export class ProjectView {
    constructor(project) {
        this.project = project;
    }

    static buildTaskDisplay(task) {
        const taskDisplay = document.createElement("div");
        taskDisplay.classList.add("task");

        const selectTask = document.createElement("button");
        selectTask.classList.add("select-task");
        taskDisplay.appendChild(selectTask);

        const title = document.createElement("p");
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
        content.innerHTML="";
        content.classList.add("project-view");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = this.project.name;
        content.appendChild(projectTitle);

        

        const projectBody = document.createElement("div");
        projectBody.classList.add("project");

        for (const task in this.project.tasks) {
            const taskDisplay = ProjectView.buildTaskDisplay(this.project.tasks[task]);
            projectBody.appendChild(taskDisplay);
        }

        
        content.appendChild(projectBody);

        if (this.project.name !== "Today" && this.project.name !== "Upcoming") {
            const addtaskButton = document.createElement("button");
            addtaskButton.id = "add-task-btn";
            addtaskButton.textContent = "+";
            content.appendChild(addtaskButton);
        }
    }
}


