// Read 2 double-precision floating point values ​​A and B, which correspond to 2 grades of a student. Next, calculate the student's average, knowing that grade 
// A has a weight of 3.5 and grade B has a weight of 7.5 (the sum of the weights is therefore 11).
// Assume that each grade can go from 0 to 10.0, always with one decimal place.

// Input Examples: ------------

// 5.0
// 7.1

// Output Examples: ------------

// MEDIA = 6.43182

const input = require("fs").readFileSync("ex-1005", "utf-8");
const lines = input.split("\n");

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());

const media = ((3.5 * a) + (7.5 * b))/11;

console.log(`MEDIA = ${media.toFixed(5)}`);