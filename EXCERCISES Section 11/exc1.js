// Exercise 1
// There are 2 ways to access a value in an object:

let todo = {
  name: 'Apple',
  price: 3
};

todo.price;       // First way
todo['price'];    // Second way

// The second way allows you to use a variable to access the value
let prop = 'price';
todo[prop];   // prop will be replaced by its value so this is the
              // same as todo['price']
// Write a function createCart that takes an object representing prices of food.
// For example: createCart({ Apple: 3, Orange: 4, Egg: 2 });

// Create a variable: let total = 0;
// Run the code: Object.keys({ ... }); using the object to get a list of its properties. Example: Object.keys({ Apple: 3, Orange: 4, Egg: 2 }); results in ['Apple', 'Orange', 'Egg']
// For each food, render a div containing the name, price, and an "Add" button.
// When pressing the add button, add the price of the food to the total variable. Example: <div>Apple $3<button ...>Add</button></div>, Click button, total = total + 3


let total = 0;

function createCart(foodPrices) {
  const foods = Object.keys(foodPrices);

  foods.forEach(function (food) {
    const cartItem = document.createElement('div');

    // Here we get the food price using the food variable.
    // If food = 'Apple', then foodPrices[food] is the same
    // as foodPrices['Apple'], which is the same as foodPrices.Apple
    const foodPrice = foodPrices[food];
    cartItem.innerText = food + ' $' + foodPrice;

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';

    // Sorry I didn't teach this (I'll revise in the 2022 edition)!
    // You'll have to use a function without a name here. If you
    // create a separate addToCart() function, it will not have
    // access to any of the variables in this function.
    addButton.onclick = function () {
      total = total + foodPrice;
    };

    cartItem.appendChild(addButton);

    // This wil render each food with an "Add" button onto the webpage.
    document.body.appendChild(cartItem);
  });
}

createCart({ Apple: 3, Orange: 4, Egg: 2 })