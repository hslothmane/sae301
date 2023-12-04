// public/js/tache.js

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
    let currentUserType = localStorage.getItem("userType");

    data.push({
        text: textInput.value,
        date: dateInput.value,
        time: timeInput.value,
        description: textarea.value,
        type: typeInput.value,
        tdGroup: tdGroupInput.value,
        creatorType: currentUserType, // Ajout de l'information sur le créateur
    });

    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";

    data.forEach((task, index) => {
        tasks.innerHTML += `
            <div id="task_${index}" class="task">
                <span class="fw-bold">${task.text}</span>
                <span class="small text-secondary">${task.date} ${task.time}</span>
                <p>${task.description}</p>
                <p>Type: ${task.type}</p>
                <p>Groupe de TD: ${task.tdGroup}</p>
                <span class="options">
                    <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                    <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                </span>
            </div>
        `;
    });

    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id.split('_')[1], 1);
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

    // Ajout du gestionnaire d'événements pour le lien de déconnexion
    let logoutLink = document.getElementById("logout");
    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            // Supprimer les données de l'utilisateur lors de la déconnexion
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("userType");

            // Rediriger vers la page de connexion
            // Rediriger vers la page de connexion en utilisant une route Symfony
window.location.href = "{{ path('connexion') }}";

        });
    }
})();
