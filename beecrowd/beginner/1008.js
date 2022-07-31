// Write a program that reads an employee's number, their number of hours worked, the hourly rate they earn, and calculates that employee's salary. 
// Next, show the employee's number and salary, to two decimal places.

// Input Examples: ------------

// 25
// 100
// 5.50

// Output Examples: ------------

// NUMBER = 25
// SALARY = U$ 550.00

const input = require("fs").readFileSync("ex-1008", "utf-8");
const lines = input.split("\n");

const number = lines.shift();
const hours = parseInt(lines.shift());
const salary = parseFloat(lines.shift());

const result = salary * hours;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${result.toFixed(2)}`);