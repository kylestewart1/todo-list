export class Task {
    static generateID() {
        return `${Math.random()}`;
    }

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
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