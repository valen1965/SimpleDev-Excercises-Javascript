// Exercise 2
// Similarly, write a function min that returns the smallest number in the array.

function min(numArray) {
  let min = Infinity;

  numArray.forEach(function (num) {
    if (num < min) {
      min = num;
    }
  });

  return min;
}
min([1, 5, -2, 4, 3, 5, 0]);