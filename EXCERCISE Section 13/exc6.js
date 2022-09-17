// Exercise 6
// Write a function pickLastApples similar to above that removes the last 2 apples from the array. (Use Google to get the code for reversing an array.)

function pickLastApples(fruitArray) {
  let applesPicked = 0;

  const reversedArray = fruitArray.reverse();

  const filteredArray = reversedArray.filter(function (fruit) {
    if (applesPicked >= 2) {
      return true;
    } else if (fruit === 'apple') {
      applesPicked = applesPicked + 1;
      return false;
    } else {
      return true;
    }
  });

  // Remember to reverse the array back.
  return filteredArray.reverse();
}
pickLastApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);