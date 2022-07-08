// Write the results on the screen.

// Create a function called convertCelsiusFahrenheit.
// She must:
// - Store a Celsius temperature in a variable.
// - Convert it to Fahrenheit and write the message "X° C equals Y° F". (X and Y are the values ​​that should be substituted.)

const convertCelsiusFahrenheit = (celsius) => {
  let fahrenheit = (9 * celsius) / 5 + 32;

  return ` The result of converting ${celsius} °C to Fahrenheit is ${fahrenheit} °F`;
};

console.log(convertCelsiusFahrenheit(60));

// Create a function called convertFahrenheitCelsius.
// She must:
// - Now store a fahrenheit temperature in a variable.
// - Convert it to Celsius and write the message "X° F equals Y° C." (X and Y are the values ​​that should be substituted.)

const convertFahrenheitCelsius = (fahrenheit) => {
  let celsius = (5 * (fahrenheit - 32)) / 9;

  return ` The result of converting ${fahrenheit} °F to Celsius is ${celsius} °C`;
};

console.log(convertFahrenheitCelsius(60));

// ------ CLASSES ------
// using classes for celsius to fahrenheit conversion!

class Fahrenheit {
  constructor(celsius) {
    this.celsius = celsius;
  }
  convertcelsius() {
    let valueFahrenheit = (9 * this.celsius) / 5 + 32;

    return ` The result of converting ${this.celsius} °C to Fahrenheit is ${valueFahrenheit} °F`;
  }
}

let fahrenheit = new Fahrenheit(60);
console.log(fahrenheit.convertcelsius());

// ------ CLASSES ------
// using classes for fahrenheit to celsius conversion!

class Celsius {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  convertFahrenheit() {
    let valueCelsius = (5 * (this.fahrenheit - 32)) / 9;

    return ` The result of converting ${this.fahrenheit} °F to Celsius is ${valueCelsius} °C`;
  }
}

let celsius = new Celsius(60);
console.log(celsius.convertFahrenheit());
