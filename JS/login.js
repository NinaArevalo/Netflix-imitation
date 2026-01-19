const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("formulario enviado");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = getUsers();

    const usersFound = users.find(user => user.email === email && users.password === password     
    );

    if(!usersFound) {
        errorMessage.textContent = "invalid user or password";
        return;
    }

    sessionStorage.setItem("currentUser", email);

    window.location.href = "../html/profiles.html";
});