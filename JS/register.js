const form = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("formulario enviado")

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are empty, please complete the information requested";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "The password do not match";
        return;
    }

    const users = getUsers ();

    const userExist = users.some (users => users.email === email);
    if (userExist) {
        errorMessage.textContent = "This user already exists";
        return;
    }

    const defaultProfileId =Date.now(); // this date.now create a unique ID.

    const newUser = {
        email,
        password,
        profiles: [ 
            {id:defaultProfileId,name:"Main"}
        ],
        favorites: {
            [defaultProfileId]: []
        }
    };

    users.push(newUser); // add the user
    saveUsers(users); //save the array in the localstorage

    window.location.href = "login.html"; // send the user to the login page
});

