// Loop Assignments (Don’t use arrays)

// 1.  Make a program that prints all positive numbers that are odd and smaller
//     than 100 starting from 1. (1 3 5 7 9 11...)

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// 2.  Make a program that prints all positive numbers that are smaller than
//     100 and even, in this order: 2 98 4 96 6 94... Print result in one line.

// REMEMBER TO MAKE A VERSION WITH NESTED WITH THIS. You need to write a function which returns the numbers in a single line


// let printResult = "";
// let deduction = 100;
// function loopResultPrinter() {

//     for (let i = 2; i < deduction; i+=2) {
//         deduction -= 2;
//         printResult += i + " " + deduction + " ";
//     }
//     return console.log(printResult);
// }
// loopResultPrinter();
    

// 3.  Make a program that asks repeatedly from the user the distance (km) and
//     time (h) and calculates average speed. The program ends when user gives
//     0 for the distance. (After getting 0, the program does not ask anything
//     from the user.)

// while(true) {
//     let userDistance = parseInt(prompt("Please enter a distane in (km)"));

//     if (userDistance === 0) {
//         break;
//     }
//     let userTime = parseInt(prompt("Please enter time (h)"));
    
//         alert(`Your average speed is ${userDistance/userTime}km/h`)
// }

// 4.  Make a program that asks 20 numbers from user. After that the program
//     prints out how many of those numbers were even.

// let evenNumbers = 0;

// for (let i = 20; i > 0; i--) {
//     let userInput = parseInt(prompt(`Please enter a number (${i} numbers to go)`));
//     if (userInput % 2 === 0) {
//         evenNumbers++;
//     }
// }
// alert(`Out of 20 numbers there were ${evenNumbers} even numbers`);

// 5.  Make a program that asks numbers from the user, until user gives 0 and
//     then program ends. In the end program prints out average of the numbers.

// let sum = 0;
// let count = 0;

// while(true) {
//     let userInput = parseInt(prompt("Please enter a number or enter 0 to quit"))

//     if (userInput === 0) {
//         break;
//     }
//     if (isNaN(userInput) === true) {
//         alert("Enter a number please!");
//     }
//     else {
//         sum += userInput;
//         count++;
//     }
// }

// alert(`The average of numbers is ${(sum/count).toFixed(2)}`);

// 6.  Make a program that asks 25 numbers form the user. In the end program
//     printsout average of the numbers.

// let userSum = 0;

// for (let i = 25; i>0; i--) {
//    let userNum = parseInt(prompt(`Please enter a number (${i} numbers left)`));
//     userSum += userNum;
// }

// alert(`The average of numbers is ${userSum/25}`);

// 7.  Make a program that ask first one number from the user. After that the
//     program asks: "Do you want to continue giving numbers?(y/n)". If user
//     answers y, the program continues to ask another number. If user answers
//     n, program ends. In the end program prints out average of the numbers.

// let sum = 0;
// let count = 0;
// do {
//     let userNum = parseInt(prompt("Please enter a number"));
//     if (isNaN(userNum) === false) {
//         sum += userNum;
//         count++;
//     }
//     else {
//         alert("Please enter a number")
//     }
//     userInput = prompt("Do you want to continue giving numbers?(y/n)");
// } while (userInput !== "n");
// alert(`Average of numbers is ${sum/count}`);

// 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.

// while(true) {

// let amountOfNum = parseInt(prompt("How many numbers do you want to enter?"));
// let userNum = 0;
// let smallest = Infinity;

//     if (isNaN(amountOfNum) === false) {
//         for (let i = 0; i < amountOfNum; i++) {
//             while(true) {
//                 userNum = parseInt(prompt(`Please enter a number ${i}/${amountOfNum}`));
//                 if (isNaN(userNum) === false) { //Evaluate if input is a number
//                     if (userNum < smallest) {
//                         smallest = userNum;
//                     }
//                     break; //Break out from for loop until a valid input is received
//                 }
//                 alert("Please enter a number") // Throw alert if the input isn't a number
//             }
//         }
//         alert(`Smallest number was ${smallest}`);
//         break;
//     }
//     else {
//         alert("Please enter a number");
//         continue;
//     }
// }

// 9.  Make a program that asks ten numbers and in the end prints out two
//     biggest numbers.

// let userNum = 0;
// let biggest = 0;
// let secondBiggest = 0;

// for (let i = 10; i > 0; i--) {
//     userNum = parseInt(prompt(`Please enter a number. Numbers left: ${i})`));
//     if (biggest < userNum) {
//         biggest = userNum;
//     }

//     if (secondBiggest < userNum && userNum < biggest) {
//         secondBiggest = userNum;
//     }
// }

// alert(`Biggest number ${biggest}. Second biggest ${secondBiggest}`);

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.

// let biggest = 0;
// let secondBiggest = 0;
// let sum = 0;

// for (let i = 10; i > 0; i--) {
//     userNum = parseInt(prompt(`Please enter a number. Numbers left: ${i})`));
//     if (biggest < userNum) {
//         biggest = userNum;
//     }
//     if (secondBiggest < userNum && userNum < biggest) {
//         secondBiggest = userNum;
//     }
//     sum += userNum;
// }

// alert(`Biggest number: ${biggest}. Second biggest: ${secondBiggest}. Sum: ${sum}. Average: ${sum/10}.`);