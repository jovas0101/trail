// Write a program to read 3 values ​​(consider that equal values ​​will not be informed)
//and write the largest of them.

const number = (a, b, c) => {
  if (a === b || a === c || b === a || b === c || c === a || c === b) {
    return `Cannot repeat numbers`;
  }

  if (a > c && b > c) {
    return a + b;
  } 
  if (a > b && c > b) {
    return a + c;
  }
   else {
    return b + c;
  }
};

console.log(number(23, 23, 67));
console.log(number(23, 28, 67));
