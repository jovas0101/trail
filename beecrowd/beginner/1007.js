// Read four integer values ​​A, B, C and D. Then calculate and display the difference between the product of A and B and the product of C and D according to the formula: 
// DIFFERENCE = (A * B - C * D).

// Input Examples: ------------
// 5
// 6
// 7
// 8

// Output Examples: ------------
// - 26

const input = require("fs").readFileSync("ex-1007", "utf-8");
const lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const c = parseInt(lines.shift());
const d = parseInt(lines.shift());

const diferenca = a * b - c * d;

console.log("DIFERENCA = " + diferenca);