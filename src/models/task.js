
export class Task {
    static taskCount = 0;
    static generateID() {
        Task.taskCount++
        return Task.taskCount;
    }

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate + " 00:00:00");
        this.priority = priority;
        this.complete = false;
        this.selected = false;
        this.ID = Task.generateID();
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

}