// Exercise 2
// Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.

// Example: arrayDouble(['bark', 'meow']); will console.log(['bark', 'bark', 'meow', 'meow'])

function arrayDouble(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str);
    result.push(str);
  });

  console.log(result);
}
arrayDouble(['bark', 'meow']);