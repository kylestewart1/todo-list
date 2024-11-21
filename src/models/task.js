
export class Task {
    static taskCount = 0;
    static generateID() {
        Task.taskCount++
        return Task.taskCount;
    }

    constructor(title, description, dueDate, priority, ID=null) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate + " 00:00:00");
        this.priority = priority;
        this.complete = false;
        this.project = "";
        if (ID) {
            this.ID = ID;
        } else {
            this.ID = Task.generateID();
        }
    }

    checkComplete() {
        this.complete = true;
    }

    select() {
        this.selected = true;
    }    

    unselect() {
        this.selected = false;
    }

    setDueDateFromString(dateString) {
        this.dueDate = new Date(dateString + " 00:00:00");
    }

    static toJSON(task) {
        return JSON.stringify(task);
    }

    static from(json) {
        const object = JSON.parse(json);
        const task = new Task(object.title, 
                        object.description,
                        object.dueDate.split("T")[0],
                        object.priority,
                        object.ID);
        task.project = object.project;
        return task;
    }
}