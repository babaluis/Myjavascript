const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAlldBtn = document.getElementById("clearAlldBtn");

let tasks = [];
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
        }

function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }
            function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();
        }
            function clearAllTasks() {
                  if (confirm("Are you sure you want to delete all tasks?")) {
        tasks = [];
        displayTasks();
    }
        }
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAlldBtn.addEventListener("click", clearAllTasks);

