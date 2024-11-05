export class Project {
    constructor(listName, items={}) {
        this.name = listName;
        this.items = items;
    }

    add(item) {
        this.items[item.ID] = item;
    }

    remove(ID) {
        delete this.items[ID];
    }

    clear() {
        this.items = {};
    }
}