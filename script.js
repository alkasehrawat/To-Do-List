function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let category = document.getElementById("categorySelect").value;
    let priority = document.getElementById("prioritySelect").value;
    let dueDate = document.getElementById("dueDate").value;
    if (taskText.trim() === "") return;

    let taskList = document.querySelector(`#${category} .task-list`);
    let taskItem = document.createElement("div");
    taskItem.classList.add("task");

    let priorityClass = `priority-${priority}`;
    taskItem.innerHTML = `
        <input type="checkbox" onchange="updateProgress()">
        <span class="${priorityClass}">${taskText} (${priority.toUpperCase()}) <br> <small>Due: ${dueDate || "No deadline"}</small></span>
        <button onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(taskItem);
    document.getElementById("taskInput").value = "";
    updateProgress();
}

function removeTask(button) {
    button.parentElement.remove();
    updateProgress();
}

function updateProgress() {
    let totalTasks = document.querySelectorAll(".task input").length;
    let completedTasks = document.querySelectorAll(".task input:checked").length;
    let progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}
