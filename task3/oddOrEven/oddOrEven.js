//Make a program that asks for one number from the user
//Then the program finds out if the number is positive and if the positive is divisble by 2
//If the number is positive message "Number ... is even" or "Number ... is odd" is printed as suitabale
//Replace the ... with the number user gave
//If the number is negative "Please enter a positive number" is displayed and a new prompt is given
// Make the program looop until the user gives zero as input


while (true) {
    let userNumber = parseInt(prompt("Please enter a positive number or 0 to close"));

    if (userNumber === 0) {
        break;
    }
    else if (userNumber % 2 === 0 && userNumber > 0) {
        alert(`Number ${userNumber} is even`);
    }
    else if (userNumber % 2 !== 0 && userNumber > 0) {
        alert(`Number ${userNumber} is odd`);
    } 
    else {
        alert("Please enter a positive number");
    }
}
