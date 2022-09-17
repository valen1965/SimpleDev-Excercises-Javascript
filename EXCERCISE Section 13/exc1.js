// Exercise 1
// Write a function named max that takes an array of numbers and returns the largest number in the array.
// Example: max([1, 5, -2, 4, 3, 5, 0]); will return 5

function max(numArray) {
  let max = -Infinity;

  numArray.forEach(function (num) {
    // You can have an if statement without the else
    if (num > max) {
      max = num;
    }
  });

  return max;
}
max([1, 5, -2, 4, 3, 5, 0]);