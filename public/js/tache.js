let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let timeInput = document.getElementById("timeInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let typeInput = document.getElementById("typeInput");
let tdGroupInput = document.getElementById("tdGroupInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    time: timeInput.value,
    description: textarea.value,
    type: typeInput.value,
    tdGroup: tdGroupInput.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
      <span class="fw-bold">${x.text}</span>
      <span class="small text-secondary">${x.date} ${x.time}</span>
      <p>${x.description}</p>
      <p>Type: ${x.type}</p>
      <p>Groupe de TD: ${x.tdGroup}</p>

      <span class="options">
        <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML.split(' ')[0];
  timeInput.value = selectedTask.children[1].innerHTML.split(' ')[1];
  textarea.value = selectedTask.children[2].innerHTML;
  typeInput.value = selectedTask.querySelector("p:nth-child(4)").innerHTML.replace("Type: ", "");
  tdGroupInput.value = selectedTask.querySelector("p:nth-child(5)").innerHTML.replace("Groupe de TD: ", "");

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  textarea.value = "";
  typeInput.value = "";
  tdGroupInput.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTasks();
})();
