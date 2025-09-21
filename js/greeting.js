const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME  = "hidden";
const USERNAME_KEY = "username";

function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove("login-form");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
} else {
    loginForm.classList.remove("login-form");
    paintGreetings(savedUsername)
}