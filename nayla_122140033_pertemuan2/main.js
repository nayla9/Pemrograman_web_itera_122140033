import { Dashboard } from "./dashboard.js";

const dashboard = new Dashboard();

const scheduleForm = document.getElementById("schedule-form");
const taskForm = document.getElementById("task-form");
const scheduleList = document.getElementById("schedule-list");
const taskList = document.getElementById("task-list");

const renderSchedule = () => {
  scheduleList.innerHTML = "";
  dashboard.schedule.forEach(({ course, time }, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${course} - ${time} <button onclick="deleteSchedule(${i})">Hapus</button>`;
    scheduleList.appendChild(li);
  });
};

const renderTasks = () => {
  taskList.innerHTML = "";
  dashboard.tasks.forEach(({ task, deadline }, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} (Deadline: ${deadline}) <button onclick="deleteTask(${i})">Hapus</button>`;
    taskList.appendChild(li);
  });
};

window.deleteSchedule = (index) => {
  dashboard.deleteSchedule(index);
  renderSchedule();
};

window.deleteTask = (index) => {
  dashboard.deleteTask(index);
  renderTasks();
};

scheduleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const course = document.getElementById("course").value;
  const time = document.getElementById("time").value;
  dashboard.addSchedule(course, time);
  scheduleForm.reset();
  renderSchedule();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const deadline = document.getElementById("deadline").value;
  dashboard.addTask(task, deadline);
  taskForm.reset();
  renderTasks();
});

renderSchedule();
renderTasks();
