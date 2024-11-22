import { Project } from "./project";
import {
  storeTask,
  storeProject,
  deleteTaskFromStorage,
  deleteProjectFromStorage,
} from "../store-data";

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
    console.log(name);
    project.name = name;
    this.projects[name] = project;
    storeProject(project);
  }

  removeProject(projectName) {
    delete this.projects[projectName];
    deleteProjectFromStorage(projectName);
  }

  addTask(task, projectName) {
    task.project = projectName;
    this.projects[projectName].add(task);
    storeTask(task);
  }

  removeTask(taskID, projectName) {
    this.projects[projectName].remove(taskID);
    deleteTaskFromStorage(taskID);
  }

  getTask(taskID) {
    let task = null;
    for (const projectName in this.projects) {
      task = this.projects[projectName].getTask(taskID);
      if (task) {
        break;
      }
    }
    return task;
  }

  getTaskProject(taskID) {
    let projectName = null;
    for (const project in this.projects) {
      const task = this.projects[project].getTask(taskID);
      if (task) {
        projectName = project;
        break;
      }
    }
    return projectName;
  }

  getAllTasks() {
    const tasks = [];
    for (const projectName in this.projects) {
      const project = this.projects[projectName];
      for (const taskID in project.tasks) {
        const task = project.tasks[taskID];
        tasks.push(task);
      }
    }
    return tasks;
  }
}

export default new TodoList();
