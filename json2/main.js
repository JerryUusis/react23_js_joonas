const userURL = "https://jsonplaceholder.typicode.com/users/";

//Use fetch API with userURL to request the data stored in a server of URL address
fetch(userURL)
// Fetch returns a Promise object which the .then method evaluates and returns callback functions whether the promise was fulfilled or unsuccesful
//Callback function turns the response into json using .json() method
.then(response => response.json())
// This where actually work with the response data that weas converted to json
.then(data => {
    
    for (let i = 0; i < data.length; i++) {
        const name = document.createElement("h1");
        const userName = document.createElement("h2");
        const userEmail = document.createElement("p");
        const userAddress = document.createElement("p");
        
        name.textContent = data[i].name;
        userName.textContent = data[i].username;
        userEmail.textContent = data[i].email;
        userAddress.textContent = data[i].address;


        document.body.appendChild(name);
        document.body.appendChild(userName);
        document.body.appendChild(userEmail);
        document.body.appendChild(userAddress);
        }
        
        }
    )

