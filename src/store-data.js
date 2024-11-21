import { Task } from "./models/task";
import { Project } from "./models/project";

export function storeTask(task) {
    localStorage.setItem(`task;${task.ID}`, Task.toJSON(task));
}

export function storeProject(project) {
    localStorage.setItem(`project;${project.name}`, Project.toJSON(project));
}

export function deleteTaskFromStorage(taskID) {
    localStorage.removeItem(`task;${taskID}`);
}

export function deleteProjectFromStorage(projectName) {
    localStorage.removeItem(`project;${projectName}`);
}

export function readData() {
    const tasks = {};
    const projects = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const json = localStorage.getItem(key);

        const [ objType, id ] = key.split(";");
        if ( objType === "task") {
            const task = Task.from(json);
            tasks[id] = task;
        } else if (objType == "project") {
            const project = Project.from(json);
            projects[id] = project;
        }
    }
    return [ tasks, projects ];
}