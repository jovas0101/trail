// Write the results on the screen.

// Create a function called convertCelsiusFahrenheit.
// She must:
// - Store a Celsius temperature in a variable.
// - Convert it to Fahrenheit and write the message "X° C equals Y° F". (X and Y are the values ​​that should be substituted.)

const convertCelsiusFahrenheit = (celsius) => {
  let fahrenheit = (9 * celsius) / 5 + 32;

  return ` The result of converting ${celsius} °C to Fahrenheit is ${fahrenheit} °F;`;
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
