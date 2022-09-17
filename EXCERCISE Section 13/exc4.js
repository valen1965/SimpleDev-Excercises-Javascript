// Exercise 4
// Write a function pickApples that takes an array of strings representing fruits and returns the array with the first 2 occurrences of "apple" removed.

// Example: pickApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);should return ['cherry', 'orange', 'banana', 'apple']

function pickApples(fruitArray) {
  let applesPicked = 0;

  const filteredArray = fruitArray.filter(function (fruit) {
    if (applesPicked >= 2) {
      // Remember, returning true keeps this value in the array.
      return true;
    } else if (fruit === 'apple') {
      applesPicked = applesPicked + 1;
      return false;
    } else {
      return true;
    }
  });

  return filteredArray;
}
pickApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);