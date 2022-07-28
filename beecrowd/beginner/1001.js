// Read 2 integer values ​​and store them in variables A and B. Add A and B by assigning their result to variable X. Print X as shown below.
// Don't present any message other than what is being specified and don't forget to print the end of line after the result, otherwise you
// will get "Presentation Error".

// Input Examples: ------------

// 10
// 9

// Output Examples: ------------

// X = 19

const input = require("fs").readFileSync("ex-1001", "utf-8");
const lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

const result = a + b;

console.log(`X = ${result}`);