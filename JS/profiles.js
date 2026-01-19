const currentUserEmail = sessionStorage.getItem("currentUser");

if (!currentUserEmail) { 
    window.location.href = "../html/login.html";
}

const users = getUsers ();
const currentUser = users.find (user => user.email === currentUserEmail);

const container = document.getElementById ("profilesContainer");

currentUser.profiles.forEach(profile => {
    const button = document.createElement("button");
    button.textContent = profile.name;

    button.addEventListener("click", function() {
        sessionStorage.setItem ("activeProfile",profile.id);
        window.location.href ="../html/home.html";
    });

    container.appendChild(button);
});