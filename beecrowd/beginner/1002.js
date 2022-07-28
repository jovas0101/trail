// The formula for calculating the area of ​​a circle is: area = π . radius2. Considering for this problem that π = 3.14159:
// Calculate the area by squaring the radius value and multiplying by π.

// Input Examples: ------------
// The input contains a floating point value (double precision), in this case, the variable radius.

// 100.64

// Output Examples: ------------
// !! with 4 places after the decimal point. Use double precision variables

// A = 31819.3103

const input = require("fs").readFileSync("ex-1002", "utf-8");
const lines = input.split("\n");

const raio = lines.shift();
const pi = 3.14159;
const area = pi * Math.pow(raio, 2)

console.log(`A = ${area.toFixed(4)}`);