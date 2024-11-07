export class Content {
    constructor(todoList) {
        this.display = document.createElement("div");
        this.display.id = "content";
        for (const project in todoList) {
            const projDisplay = Content.createProjectDisplay(todoList[project]);
            this.display.appendChild(projDisplay);
        }
    }

    static createItemDisplay(item) {
        const itemDisplay = document.createElement("li");
        itemDisplay.classList.add("item");

        const title = document.createElement("p");
        title.textContent = item.title;
        title.classList.add("title");
        itemDisplay.appendChild(title);

        const dueDate = document.createElement("div");
        dueDate.textContent = item.dueDate;
        dueDate.classList.add("dueDate");
        itemDisplay.appendChild(dueDate);

        return itemDisplay;
    }

    static createProjectDisplay(project) {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project");
        projectContainer.id = project.name;

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.name;
        projectContainer.appendChild(projectTitle);

        const projectBody = document.createElement("ul");

        for (const item in project.items) {
            const itemDisplay = Content.createItemDisplay(project.items[item]);
            projectBody.appendChild(itemDisplay);
        }
        projectContainer.appendChild(projectBody);

        return projectContainer;
    }
}

