// Read two integer values, in this case for variables A and B. Next, calculate the sum between them and assign to the variable SUM.
// Then write the value of this variable.

// Input Examples: ------------

// 30
// 10

// Output Examples: ------------

// SOMA = 40


const input = require("fs").readFileSync("ex-1003", "utf-8");
const lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

const result = a + b

console.log(`SOMA = ${result}`);    