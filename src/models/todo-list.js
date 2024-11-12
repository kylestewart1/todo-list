import { Project } from "./project";

class TodoList {
    constructor() {
        this.projects = {
            "My Tasks": new Project("My Tasks"),
        };
    }

    newProject(project) {
        let name = project.name;
        let num = 1;
        while (name in this.projects) {
            name = `${name}${num}`;
            num++;
        }
        project.name = name;
        this.projects[name] = project;
    }

    removeProject(projectName) {
        delete this.projects[projectName];
    }

    addTask(task, projectName) {
        this.projects[projectName].add(task);
    }

    removeTask(taskID, projectName) {
        this.projects[projectName].remove(taskID);
    }



}

export default new TodoList();