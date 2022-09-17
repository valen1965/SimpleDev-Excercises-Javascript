// Exercise 5
// Similarly, write a function pickFruits that removes 2 apples and 1 orange from the array.

function pickFruits(fruitArray) {
  let applesPicked = 0;
  let orangesPicked = 0;

  const filteredArray = fruitArray.filter(function (fruit) {
    if (fruit === 'apple') {
      if (applesPicked >= 2) {
        return true;
      } else {
        applesPicked = applesPicked + 1;
        return false;
      }
    } else if (fruit === 'orange') {
      if (orangesPicked >= 1) {
        return true;
      } else {
        orangesPicked = orangesPicked + 1;
        return false;
      }
    } else {
      return true;
    }
  });

  return filteredArray;
}
pickFruits(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);