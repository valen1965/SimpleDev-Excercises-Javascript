// Exercise 1
// Write a function cartTotal that takes an array of objects cartArray where each object contains a name, price, and quantity. console.log the total price of the items in the cart. For example:

cartTotal([
  { name: 'Apple', price: 4, quantity: 2 },
  { name: 'Orange', price: 3, quantity: 3 }
]);
console.log(17);

answer.js
function cartTotal(cartArray) {
  let total = 0;

  cartArray.forEach(function (item) {
    total = total + item.price * item.quantity;
  });

  console.log(total);
}
cartTotal([
  { name: 'Apple', price: 4, quantity: 2 },
  { name: 'Orange', price: 3, quantity: 3 }
]);