// Exercise 3
// Reverse the order of the three todo items on the webpage by re-arranging the Javascript code. Notice how instructions are run one by one and elements are also created one by one.

let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';

let element = document.createElement('div');
element.innerText = todo3;
document.body.appendChild(element);

element = document.createElement('div');
element.innerText = todo2;
document.body.appendChild(element);

element = document.createElement('div');
element.innerText = todo1;
document.body.appendChild(element);