export class Item {
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
        this.ID = Item.generateID();
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