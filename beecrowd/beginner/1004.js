// Read two integer values. Next, calculate the product between these two values ​​and assign this operation to the variable PROD. 
// Then show the PROD variable with the corresponding message.

// Input Examples: ------------

// 3
// 9


// Output Examples: ------------
// !! The input file contains 2 integer values.

// 27

const input = require("fs").readFileSync("ex-1004", "utf-8");
const lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

const result = a * b;

console.log(`PROD = ${result}`);

