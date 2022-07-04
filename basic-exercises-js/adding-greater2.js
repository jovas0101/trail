// Write a program that reads two values ​​informed by the user and displays one of the following three messages:
//'Equal numbers', if the numbers are equal 'First is greater', if the first is greater than the second;
//‘Second greater’ if the second is greater than the first.

const numbers = (a, b) => {
  if (a === b && b === a) {
    return `Equal numbers!`;
  }
  if (a > b) {
    return `First number is bigger!`;
  }
  if (b > a) {
    return `Second number is bigger!`;
  }
};

console.log(numbers(90, 90));
console.log(numbers(45, 89));
