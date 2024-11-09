export class ProjectView {
    constructor(project) {
        this.project = project;
    }

    static buildItemDisplay(item) {
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

    display() {
        const content = document.querySelector("#content");
        content.classList.add("project");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = this.project.name;
        content.appendChild(projectTitle);

        const addItemButton = document.createElement("button");
        addItemButton.textContent = "+";
        content.appendChild(addItemButton);

        const projectBody = document.createElement("ul");

        for (const item in this.project.items) {
            const itemDisplay = ProjectView.buildItemDisplay(this.project.items[item]);
            projectBody.appendChild(itemDisplay);
        }
        content.appendChild(projectBody);
    }
}


