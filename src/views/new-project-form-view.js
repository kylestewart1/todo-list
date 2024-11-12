export function newProjectForm(todoList) {
    const form = document.createElement("form");
    form.id="new-project-form";
    const titleLabel = document.createElement("label");
    titleLabel.for = "new-project-title";
    titleLabel.textContent = "Project Title:";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "new-project-title";
    titleInput.name = "title";
    titleInput.required = true;

    const selectLabel = document.createElement("label");
    selectLabel.for = "select-tasks";
    selectLabel.innerText = "Choose tasks to add:";
    selectLabel.id = "select-tasks-label";

    const selectTasks = document.createElement("select");
    selectTasks.id = "select-tasks";
    selectTasks.name = "tasks";
    selectTasks.appendChild(document.createElement("option"));
    for (const taskID in todoList.projects["My Tasks"].tasks) {
        const option = document.createElement("option");
        const taskName = todoList.projects["My Tasks"].tasks[taskID].title;
        option.value = taskID;
        option.innerText = taskName;
        selectTasks.appendChild(option);
    }

    selectTasks.multiple = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Create Project";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(selectLabel);
    form.appendChild(selectTasks);
    form.appendChild(submitButton);

    return form;
}