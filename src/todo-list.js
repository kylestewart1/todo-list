export class TodoList {
    constructor() {
        this.projects = {
            'default': {}
        };
    }

    add(project) {
        let name = project.name;
        let num = 1;
        while (name in this.projects) {
            name = `${name}${num}`;
            num++;
        }
        this.projects[name] = project;
    }

    remove(projectName) {
        delete this.projects[projectName];
    }
}