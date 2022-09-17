// Exercise 1
// Write a function toUpper that takes 1 parameter, an array of strings, and console.logs a new array with all the strings capitalized.

// (Hint: create a new array and push onto the array. Use google to learn the code for converting a string to uppercase in Javascript.

// Example: toUpper(['hello', 'world']); will console.log(['HELLO', 'WORLD'])

function toUpper(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
toUpper(['hello', 'world']);