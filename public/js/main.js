const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function toggleSideNav() {
    var sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('nav-open');

    var toggleBtn = document.querySelector('.toggle-btn');

    if (sideNav.classList.contains('nav-open')) {
        toggleBtn.style.left = '260px';
    } else {
        toggleBtn.style.left = '20px';
    }
}

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Vos informations sont enregistrées dans le localStorage");
});

window.addEventListener('load', () => {
    // Remplissez automatiquement les champs du formulaire avec les informations du localStorage
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        document.getElementById('username').value = storedUsername;
        document.getElementById('password').value = storedPassword;
    }
});

