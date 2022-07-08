// Write the results on the screen.

// Create 2 functions that calculate properties of a circle.
// Do you know the formulas? Shall we search?

// Create a function called calculateCircumference:
// - Pass the radius to the function as an argument.
// - Calculate the circumference based on the radius and generate "The circumference is X".

const calculateCircumference = (radius) => {
  let circumferenceCalculation = 2 * Math.PI * radius;

  return ` The calculated circumference is ${circumferenceCalculation}`;
};

console.log(calculateCircumference(60));

// Create a function called calculateArea:
// - Pass the radius to the function as an argument.
// - Calculate area based on radius and generate "Area is Y".

const calculateArea = (base, height) => {
  let area = base * height;

  return ` The area measures ${area}`;
};

console.log(calculateArea(45, 45));

// ------ CLASSES ------
// using classes to calculate circumference!

class Circumference {
  constructor(radius) {
    this._radius = radius;
  }
  calcCircumference() {
    let valueCircumference = 2 * Math.PI * this._radius;

    return ` The calculated circumference is ${valueCircumference}`;
  }
}

let circumference = new Circumference(60);
console.log(circumference.calcCircumference());

// ------ CLASSES ------
// using classes to calculate area!

class Area {
  constructor(base, hight) {
    this._base = base;
    this._hight = hight;
  }
  calcArea() {
    let valueArea = this._base * this._hight;

    return ` The area measures ${valueArea}`;
  }
}

let area = new Area(45, 45);
console.log(area.calcArea());
