// Exercise 3
// Write a function arraySum that takes an array of numbers and console.logs the sum of the numbers. (Hint: create a variable and increase its value like this):

// let total = 0;
// total = total + 10;
// Example: arraySum([1, 2, 3]); = 6 and arraySum([5, -2, 7, 0]); = 10

function arraySum(numArray) {
  let total = 0;

  numArray.forEach(function (num) {
    total = total + num;
  });

  console.log(total);
}
arraySum([1, 2, 3]);
arraySum([5, -2, 7, 0]);