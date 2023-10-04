const userURL = "https://jsonplaceholder.typicode.com/users/";
const userContainer = document.querySelector(".users-container");

async function logUsers() {
    const response = await fetch(userURL);
    const users = await response.json();
    userName(users);
}

function userName(array) {
    const userData = array.map(user => {
        return `<h1>${user.name}</h1>
        <h2>${user.username}</h2>
        <p>${user.email}</p>
        <p>Address:</p>
        <ul>
            <li>${user.address.street}</li>
            <li>${user.address.suite}</li>
            <li>${user.address.city}</li>
            <li>${user.address.zipcode}</li>
            <ul>
                <li>${user.address.geo.lat}</li>
                <li>${user.address.geo.lng}</li>
            </ul>
        </ul>
        <p>${user.phone}</p>
        <p>${user.website}</p>`
    }).join("")
    userContainer.innerHTML = userData;
}

logUsers()