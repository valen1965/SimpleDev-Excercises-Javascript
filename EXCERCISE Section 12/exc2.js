// Exercise 2
// Write a function aboveFreezing that takes an array of numbers temps and returns an array with only temperatures that are above the freezing point of water. Temperature can be in Celsius or Fahrenheit, you decide.

function aboveFreezing(temps) {
  // Assume we're using Fahrenheit
  const tempsAboveFreezing = temps.filter(function (temp) {
    return temp > 32;
  });

  return tempsAboveFreezing;
}
aboveFreezing([40, 67, 8, 29, 100, -3, 0]);