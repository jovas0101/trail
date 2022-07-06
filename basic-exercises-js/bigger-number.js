// Start a program to read 3 values ​​(consider that equal values ​​will not be informed)
//and write the largest of them.
const number = (a, b, c) => {
  if (a === b || a === c || b === a || b === c || c === a || c === b) {
    return ` It is not possible to compare the same numbers! `;
  }
  if (a > b && a > c) {
    return ` Number ${a} is greater than ${b} and ${c}`;
  }
  if (b > a && b > c) {
    return ` Number ${b} is greater than ${a} and ${c}`;
  } else {
    return ` Number ${c} is greater than ${a} and ${b}`;
  }
};

console.log(number(40, 40, 40));
console.log(number(45, 50, 55));
