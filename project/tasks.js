// JavaScript code for task management application
// This code handles task creation, filtering, and viewing tasks.
// It also manages the display of task-related elements on the page.


let ct_btn = document.getElementById("ct_btn");
let team_btn = document.getElementById("team_btn");
let view_btn = document.getElementById("vt_btn");
let sf_btn=document.getElementById("sf_btn");
let add_task_btn = document.getElementById("add_task_btn");
let add_task_form = document.getElementById("add_task_form");


let task_Name = document.getElementById("task_name");
let task_description = document.getElementById("taskDescription");
let task_due_date = document.getElementById("taskDueDate");
let taskAssigned_to = document.getElementById("assignedTo");

let taskLists1 = []
console.log("taskLists1", taskLists1);
// let taskLists= localStorage.setItem("taskListsDetails", JSON.stringify(taskLists1));


// const Task_form=()=>{
//     add_task_form.style.display = "inline-block";
// }

const createtask=()=>{
   if(!(task_Name.value.trim()|| task_description.value.trim()||
    task_due_date.value.trim()|| taskAssigned_to.value.trim()))
    {
        alert("Please fill all the fields");
        return;
    
    }
    else{
        let tasks={
            name: task_Name.value.trim(),
            description: task_description.value.trim(),
            due_date: task_due_date.value.trim(),
            assigned_to: taskAssigned_to.value.trim()
        }
        taskLists1.push(tasks);
        task_Name.value = "";   
        task_description.value = "";
        task_due_date.value = "";
        taskAssigned_to.value = "";
        add_task_form.style.display = "none";
        alert("Task Created Successfully");
        viewTasks();
    }
    
}

// const filter=()=>{
// const filteredTasks=taskLists.filter(TaskName=>
//         TaskName.includes(filter_item.value.trim())      
// )
// if(filteredTasks.length>0){
// filter_display.innerText=filteredTasks.join("\n")

// }
// else{
//     filter_display.innerText="NO Records Found"
// }
// filter_item.value=""
// }

const viewTasks=()=>{
    alert("Viewing Tasks");
    // add_task_form.style.display="none"
    // let taskDisplay = document.getElementById("task_display");
    // taskDisplay.innerHTML = ""; // Clear previous tasks

    // if (taskLists.length === 0) {
    //     taskDisplay.innerText = "No tasks available.";
    //     return;
    // }
    // taskLists.forEach((task, index) => {
    //     let taskItem = document.createElement("div");
    //     taskItem.className = "task-item";
    //     taskItem.innerHTML = `
    //         <h3>Task ${index + 1}</h3>
    //         <p><strong>Name:</strong> ${task.name}</p>
    //         <p><strong>Description:</strong> ${task.description}</p>
    //         <p><strong>Due Date:</strong> ${task.due_date}</p>
    //         <p><strong>Assigned To:</strong> ${task.assigned_to}</p>
    //         <button onclick="deleteTask(${index})">Delete Task</button>
    //     `;
    //     taskDisplay.appendChild(taskItem);  

    // });

}
// filter_item.addEventListener("focus",()=>{
//     filter_display.innerText=""
// })