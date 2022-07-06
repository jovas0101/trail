// Write a program that receives four values ​​informed by the user, but informs only the:
// first, the last and the largest of them all (consider that all the numbers informed will be different)

const numbers = (a, b, c, d) => {
  
  if (a === b || a === c ||
      b === a || b === c ||
      c === a || c === b ||
      d === a || d === b ||d === c) {
    return `Cannot repeat numbers!`;
  }

  if (a > b && a > c && a > d) {
    return ` The first number is: ${a};
    last number: ${d};
    largest number: ${a}.`;
  }
  if (b > a && b > c && b > d) {
    return ` The first number is: ${a}; 
    last number: ${d}; 
    largest number: ${b}.`;
  } else {
    return ` The first number is: ${a};
      last number: ${d}; 
      largest number: ${d}.`;
  }
};

console.log(numbers(34, 1200, 93, 890));
