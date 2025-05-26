// let filter_item=document.getElementById("filter_item")
// let filter_display=document.getElementById("filter_display")
// let ct_btn=document.getElementById("ct_btn")
// let team_btn=document.getElementById("team_btn")
// let vt_btn=document.getElementById("vt_btn")
// let add_task_form=document.getElementById("add_task_form")
// let task_display=document.getElementById("task_display")
// let task_Name=document.getElementById("task_Name")
// let task_Status=document.getElementById("task_Status")
// let taskLists=[]

// const filter=()=>{
// filter_display.innerText=filter_item.value
// }

// const createTask=()=>{
//     add_task_form.style.display="block"
// }
// const taskList=()=>{
// taskLists.push(`TaskName:${task_Name.value} Status:${task_Status.value}`)
// task_display.innerText=taskLists.join("\n")
// }
// const taskList = () => {
//     taskLists.push(`TaskName: ${task_Name.value} Status: ${task_Status.value}`);
//     task_display.innerText = taskLists.join("\n");
// };
// Select DOM elements
let filter_item = document.getElementById("filter_item");
let filter_display = document.getElementById("filter_display");
let ct_btn = document.getElementById("ct_btn");
let team_btn = document.getElementById("team_btn");
let vt_btn = document.getElementById("vt_btn");
let add_task_form = document.getElementById("add_task_form");
let task_display = document.getElementById("task_display");
let task_Name = document.getElementById("task_name");
let task_Status = document.getElementById("task_status");

// Task list array
let taskLists = [];

// Filter tasks by user input
const filter = () => {
  const filteredTasks = taskLists.filter((task) =>
    task.toLowerCase().includes(filter_item.value.toLowerCase())
  );
  filter_display.innerText = filteredTasks.length
    ? filteredTasks.join("\n")
    : "No matching tasks found.";
};

// Show task creation form
const createTask = () => {
  add_task_form.style.display = "block";
};

// Add a task to the task list
const taskList = () => {
  if (task_Name.value.trim() && task_Status.value.trim()) {
    taskLists.push(`Task Name: ${task_Name.value}, Status: ${task_Status.value}`);
    task_display.innerText = taskLists.join("\n");
    task_Name.value = ""; // Clear input fields
    task_Status.value = "";
  } else {
    alert("Please provide both task name and status.");
  }
};

// View all tasks
const viewTasks = () => {
  task_display.innerText = taskLists.length
    ? taskLists.join("\n")
    : "No tasks available.";
};

// Placeholder for Team functionality
const team = () => {
  alert("Team functionality coming soon!");
};