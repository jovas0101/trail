// Read 3 values, in this case, variables A, B and C, which are the three grades of a student. Then, calculate the student's average, knowing that grade A has a weight of 2, grade B has a weight of 3 and grade C 
// has a weight of 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

// Input Examples: ------------

// 5.0
// 6.0
// 7.0

// Output Examples: ------------

// MEDIA = 6.3

const input = require('fs').readFileSync('ex-1006', 'utf8');
const lines = input.split('\n');

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

var media = ((2 * a ) + (3 * b ) +( 5 * c)) / 10;

console.log("MEDIA = " + media.toFixed(1));