const currentUserEmail = sessionStorage.getItem("currentUser");
const activeProfileId = sessionStorage.getItem("activeProfile");

if (!currentUserEmail || !activeProfileId) {
    window.location.href="../html/login.html";
}

const users = getUsers();
const currentUserIndex = users.findIndex (
    user => user.email === currentUserEmail
);

if (currentUserIndex === -1) {
    window.location.href="../html/login.html";
}
const currentUser = users [currentUserIndex];

const catalog = [
    { id: 1, title: "Stranger Things", category: "Series" },
    { id: 2, title: "Breaking Bad", category: "Series" },
    { id: 3, title: "The Crown", category: "Series" },
    { id: 4, title: "Dark", category: "Series" },
    { id: 5, title: "Money Heist", category: "Series" },
    { id: 6, title: "Interstellar", category: "Movie" },
    { id: 7, title: "Inception", category: "Movie" },
    { id: 8, title: "The Matrix", category: "Movie" },
    { id: 9, title: "Parasite", category: "Movie" },
    { id: 10, title: "Black Mirror", category: "Series" }
];

const container = document.getElementById("catalogContainer");

catalog.forEach (item =>  {
    const div= document.createElement("div");
    div.textContent=`${item.title} (${item.category})`;

    const btn = document.createElement("button");

    const favorites = currentUser.favorites[activeProfileId] || [];
    const isFavorite = favorites.includes(item.id)

    btn.textContent = isFavorite ? "Remove from my list" : "Add to my list";
    
    btn.addEventListener("click", function() {
        let favs = currentUser.favorites[activeProfileId] || [];
        
        if(favs.includes(item.id)) {
            favs =favs.filter(id => id !== item.id);
        } else {
            favs.push(item.id);
        }
        
        currentUser.favorites[activeProfileId] = favs;
        users[currentUserIndex] = currentUser;
        saveUsers(users);

        window.location.reload();
    });

    div.appendChild(btn);
    container.appendChild(div);

});