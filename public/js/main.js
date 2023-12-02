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

