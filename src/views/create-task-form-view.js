export function createTaskForm() {
    const form = document.createElement("form");
    form.id = "create-task-form";

    const formHeading = document.createElement("h3");
    formHeading.innerText = "New Task";

    const titleLabel = document.createElement("label");
    titleLabel.innerText = "Title:";
    titleLabel.for = "task-title";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "task-title";
    titleInput.name = "title";
    titleInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerText = "Description:";
    descriptionLabel.for = "task-description";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = 5;
    descriptionInput.cols = 30;
    descriptionInput.id = "task-description";
    descriptionInput.name = "description";
    descriptionInput.required = true;

    const dateLabel = document.createElement("label");
    dateLabel.innerText = "Due:";
    dateLabel.for = "task-due-date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "task-due-date";
    dateInput.name = "due-date";
    dateInput.required = true;

    const priorityFieldset = document.createElement("fieldset");
    priorityFieldset.innerHTML = `
        <legend>Priority</legend>
        <input type="radio" id="low" value="low" name="priority" checked>
        <label for="low">Low</label>
        <input type="radio" id="medium" value="medium" name="priority">
        <label for="medium">Medium</label>
        <input type="radio" id="high" value="high" name="priority">
        <label for="high">High</label>
    `;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Create Task";

    form.appendChild(formHeading);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(priorityFieldset);
    form.appendChild(submitButton);

    return form;
}