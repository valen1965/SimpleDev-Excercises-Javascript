// Exercise 3
// Write a function removeRed that takes an array of objects foodArray with the format: [{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }] and removes all red-colored foods from the array.

function removeRed(foodArray) {
  // Instead of saving the filtered array in a variable,
  // we can return it in the same line.
  return foodArray.filter(function (food) {
    return food.color !== 'red';
  });
}
removeRed([{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }]);