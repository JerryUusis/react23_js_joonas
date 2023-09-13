// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const task1 = document.querySelector("#task1");
const names = ["David", "Leia", "Mathew", "Mark"];
task1.textContent = names;


// Task 2
// Print the second item of the array from the task 1.
const task2 = document.querySelector("#task2");
task2.textContent = names[1];

// Task 3
// Print the length of the array.
const task3 = document.querySelector("#task3");
task3.textContent = names.length;

// Task 4
// Print the last item of the array
const task4 = document.querySelector("#task4");
task4.textContent = names[names.length-1];

// Task 5
// Add Peter as the last item to the array and print the whole array
const task5 = document.querySelector("#task5");
names.push(["Peter"]);
task5.textContent = names;

// Task 6
// Print the array with spaces, not commas
const task6 = document.querySelector("#task6");
task6.textContent = names.join(" ");

// Task 7
// Replace Mathew in the array with Lisa and Abraham 
const task7 = document.querySelector("#task7");
names.splice(2,1,"Lisa", "Abraham");
task7.textContent = names;

// Task 8
// Sort the array in the alphabetical order and print it
const task8 = document.querySelector("#task8");
names.sort();
task8.textContent = names;

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
const task9 = document.querySelector("#task9");
const numbers = [1, 7, 45, 32, 27, 86];
task9.textContent = numbers.sort((a,b) => a - b);

// Task 10
// Randomize the numbers array.
const task10 = document.querySelector("#task10");
task10.textContent = numbers.sort(() => 0.5 - Math.random());

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
const task11 = document.querySelector("#task11");
const smallest = numbers.sort((a,b) => a - b);
task11.textContent = `Smallest value is ${numbers[0]} and biggest value is ${numbers[numbers.length-1]}`;