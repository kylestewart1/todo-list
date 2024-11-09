export class NavView {
    constructor(todoList) {
        this.todoList = todoList;
    }

    static buildProjectNav(project) {
        const container = document.createElement("div");
        container.id = `nav-${project.name}`;
        container.classList.add("project-nav");
        const title = document.createElement("button");
        title.textContent = project.name;
        container.appendChild(title);

        for (const itemID in project.items) {
            const itemNav = document.createElement("button");
            itemNav.textContent = project.items[itemID].title;
            container.appendChild(itemNav);
        }

        return container;
    }

    display() {
        const navBar = document.querySelector("nav");

        const timeline = document.createElement("div");
        timeline.id = "nav-timeline";
        timeline.classList.add("project-nav");
        const today = document.createElement("button");
        today.textContent = "Today";
        timeline.appendChild(today);
        navBar.appendChild(timeline);

        for (const project in this.todoList.projects) {
            navBar.appendChild(NavView.buildProjectNav(this.todoList.projects[project]));
        }
    }
}