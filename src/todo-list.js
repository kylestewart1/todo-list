export class TodoList {
    constructor() {
        this.projects = {
            'default': {}
        };
    }

    newProject(project) {
        let name = project.name;
        let num = 1;
        while (name in this.projects) {
            name = `${name}${num}`;
            num++;
        }
        this.projects[name] = project;
    }

    removeProject(projectName) {
        delete this.projects[projectName];
    }

    addItem(item, projectName) {
        this.projects[projectName].add(item);
    }

    removeItem(itemID, projectName) {
        this.projects[projectName].remove(itemID);
    }
    
}