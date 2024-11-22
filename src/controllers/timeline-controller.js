import { Project } from "../models/project";
import TodoList from "../models/todo-list";
import { sameDay, withinOneWeekOfToday } from "../util";

export function createTodayProject() {
  const todayProject = new Project("Today");
  const currentDate = new Date();
  const allTasks = TodoList.getAllTasks();
  allTasks.forEach((task) => {
    if (sameDay(task.dueDate, currentDate)) {
      todayProject.add(task);
    }
  });
  return todayProject;
}

export function createUpcomingProject() {
  const upcomingProject = new Project("Upcoming");
  const allTasks = TodoList.getAllTasks();
  allTasks.forEach((task) => {
    if (withinOneWeekOfToday(task.dueDate)) {
      upcomingProject.add(task);
    }
  });
  return upcomingProject;
}
