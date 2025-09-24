// Selecting elements
let ct_btn = document.getElementById("ct_btn");
let team_btn = document.getElementById("team_btn");
let view_btn = document.getElementById("view_btn");
let sf_btn = document.getElementById("sf_btn");
let add_task_btn = document.getElementById("add_task_btn");

let form_container = document.getElementById("form_container");
let taskName = document.getElementById("taskName");
let taskDescription = document.getElementById("taskDescription");
let dueDate = document.getElementById("dueDate");
let assignedTo = document.getElementById("assignedTo");
let resultsContainer = document.getElementById("resultsContainer");

// Load tasks from localStorage if available
let taskList = JSON.parse(localStorage.getItem("taskDetails")) || [];

ct_btn.addEventListener("click", () => {
  form_container.style.display = "block";
  resultsContainer.style.display = "none";
});

add_task_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    !taskName.value ||
    !taskDescription.value ||
    !assignedTo.value ||
    !dueDate.value
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Create task object and add to taskList array
  let taskDetails = {
    Task: taskName.value,
    Description: taskDescription.value,
    AssignedTo: assignedTo.value,
    DueDate: dueDate.value,
  };
  // Add the new task to the taskList array
  taskList.push(taskDetails);

  //save to localStorage
  localStorage.setItem("taskDetails", JSON.stringify(taskList));
  alert("Task Added Successfully");

  // cleraing the form
  taskName.value = "";
  taskDescription.value = "";
  assignedTo.value = "";
  dueDate.value = "";
});

view_btn.addEventListener("click", () => {
  resultsContainer.style.display = "block";
  form_container.style.display = "none";

  if (taskList.length === 0) {
    resultsContainer.innerHTML =
      "<p>No tasks available. Please add a task.</p>";
  } else {
    let Data = JSON.parse(localStorage.getItem("taskDetails"));
    resultsContainer.innerHTML = ""; // Clear previous results

    Data.forEach((task, index) => {
      resultsContainer.innerHTML = " "; // Clear previous results
      resultsContainer.innerHTML += `

        <h3>Task ${index + 1}: ${task.Task}</h3>
        <p><strong>Description:</strong> ${task.Description}</p>
        <p><strong>Assigned To:</strong> ${task.AssignedTo}</p>
        <p><strong>Due Date:</strong> ${task.DueDate}</p>
        <button id="edit_btn">Edit</button>
        <button id="dlt_btn">Delete</button>
      `;
      let edit_btn = document.getElementById("edit_btn");
      // let dlt_btn = document.getElementById("dlt_btn");
      edit_btn.addEventListener("click", () => {
        

      });
      
    });
  }
});
