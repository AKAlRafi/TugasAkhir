let login = document.getElementById("login");
let main = document.getElementById("main");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.style.display = "none";
main.style.display = "none";

function onLogin() { 
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    logoutBtn.style.display = "block";
    login.style.display = "none";
    main.style.display = "block";
}

if(localStorage.getItem("Username")) {
    logoutBtn.style.display = "block";
    login.style.display = "none";
    main.style.display = "block";
}

function onLogout() {
    localStorage.clear();
    location.reload();
}