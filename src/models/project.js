import { Task } from "./task";


export class Project {
    constructor(listName, tasks={}) {
        this.name = listName;
        this.tasks = tasks;
    }

    add(task) {
        this.tasks[task.ID] = task;
    }

    remove(ID) {
        delete this.tasks[ID];
    }

    clear() {
        this.tasks = {};
    }

    getTask(lookupTaskID) {
        for (const taskID in this.tasks) {
            if (taskID === lookupTaskID) {
                return this.tasks[taskID];
            }
        }
        return null;
    }

    static toJSON(project) {
        return JSON.stringify(project);
    }

    static from(json) {
        const object = JSON.parse(json);
        const project = new Project(object.name,
                                    object.tasks);
        for (const taskID in project.tasks) {
            const json = JSON.stringify(project.tasks[taskID]);
            const task = Task.from(json);
            project.remove(taskID);
            project.add(task);
        }
        return project;
    }
}