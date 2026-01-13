//selecting elements
let container_l = document.querySelector(".container-l");
let container_r = document.querySelector(".container-r");
let clicToRegister = document.getElementById("clic-to-register");
let clicToLogin = document.getElementById("clic-to-login");

//clic link to register
clicToRegister.onclick = function () {
    container_r.classList.add("show");
    container_l.classList.remove("show");
    title.innerText = "Register";
}
//clic link to register
clicToLogin.onclick = function () {
    container_r.classList.remove("show");
    container_l.classList.add("show");
    title.innerText = "Login";
}

let yearsSpan = document.getElementById("years");
let currentYear = new Date().getFullYear();
yearsSpan.textContent = currentYear;