// Write a program that receives four values ​​informed by the user, but informs only the:
// first, the last and the largest of them all (consider that all the numbers informed will be different)

const numbers = (a, b, c, d) => {
  if (a === b || a === c || b === a || b === c || c === a || c === b || d === a || d === b) {
    return ` Cannot repeat numbers! \n`;
  }
  if (a > b && a > c) {
    return ` The first number is: ${a}; \n last number: ${d}; \n largest number: ${a}.`;
  }
  if (b > a && b > c) {
    return ` The first number is: ${a};  \n last number: ${d}; \n largest number: ${b}.`;
  }
  if (c > a && c > b) {
    return ` The first number is: ${a};  \n last number: ${d}; \n largest number: ${c}.`;
  } else {
    return ` The first number is: ${a}; \n last number: ${d}; \n largest number: ${d}.`;
  }
};

console.log(numbers(56, 23, 78, 23));
console.log(numbers(10, 177, 7, 45));
