// Exercise 3
// Write a function that returns the smallest number that’s greater or equal to 0.

function minNonNegative(numArray) {
  let min = Infinity;

  numArray.forEach(function (num) {
    if (num < 0) {
      return;
    } else if (num < min) {
      min = num
    }
  });

  return min;
}
minNonNegative([1, 5, -2, 4, 3, 5, 0]);