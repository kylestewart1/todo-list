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
}