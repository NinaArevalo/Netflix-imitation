const USERS_KEY = "users";

function getUsers() {
    return JSON.parse (localStorage.getItem(USERS_KEY)) || [];
} // "give me a list with save users, if there aren't anything get me an array empty”

function saveUsers (users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
} // save the users array in the localstorage