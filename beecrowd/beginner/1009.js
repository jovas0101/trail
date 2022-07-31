// Write a program that reads a salesperson's name, his fixed salary and the total sales made by him in the month (in cash).
// Knowing that this seller earns 15% commission on his sales, inform the total receivable at the end of the month, to two decimal places

// Input Examples: ------------

// JOAO
// 500.00
// 1230.30

// Output Examples: ------------

// TOTAL = R$ 684.54

const input = require("fs").readFileSync("ex-1009", "utf-8");
const lines = input.split("\n");

const employee = lines.shift();
const salary = parseFloat(lines.shift());
const sales = parseFloat(lines.shift());

const bonus = sales * 0.15;
const result = salary + bonus;

console.log(`TOTAL = R$ ${result.toFixed(2)}`);
