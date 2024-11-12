export class ProjectView {
    constructor(project) {
        this.project = project;
    }

    static buildTaskDisplay(task) {
        const taskDisplay = document.createElement("li");
        taskDisplay.classList.add("task");

        const title = document.createElement("p");
        title.textContent = task.title;
        title.classList.add("title");
        taskDisplay.appendChild(title);

        const dueDate = document.createElement("div");
        dueDate.textContent = task.dueDate;
        dueDate.classList.add("dueDate");
        taskDisplay.appendChild(dueDate);

        return taskDisplay;
    }

    display() {
        const content = document.querySelector("#content");
        content.classList.add("project");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = this.project.name;
        content.appendChild(projectTitle);

        

        const projectBody = document.createElement("ul");

        for (const task in this.project.tasks) {
            const taskDisplay = ProjectView.buildTaskDisplay(this.project.tasks[task]);
            projectBody.appendChild(taskDisplay);
        }

        const addtaskButton = document.createElement("button");
        addtaskButton.id = "add-task-btn";
        addtaskButton.textContent = "+";
        content.appendChild(projectBody);
        content.appendChild(addtaskButton);
    }
}


