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
 
const createTask=()=>{
add_task_form.style.display="inline-Block";
}
const taskList=()=>{
    if(!task_Name.value.trim()||!task_Status.value.trim())
    {
        alert("Provide Both TaskName And Status")
    }
    else{
    taskLists.push(`TaskName:${task_Name.value} Status:${task_Status.value}`)
    task_display.innerText=taskLists.join("\n")
    task_Name.value=""
    task_Status.value=""
    } 
}

const filter=()=>{
const filteredTasks=taskLists.filter(TaskName=>
        TaskName.includes(filter_item.value.trim())      
)
if(filteredTasks.length>0){
filter_display.innerText=filteredTasks.join("\n")

}
else{
    filter_display.innerText="NO Records Found"
}
filter_item.value=""
}

const viewTasks=()=>{
    add_task_form.style.display="none"
    if(taskLists.length==0){
        task_display.innerText="No Previous Tasks"
    }
    else{
    task_display.innerText=taskLists.join("\n")
    }
    

}
filter_item.addEventListener("focus",()=>{
    filter_display.innerText=""
})