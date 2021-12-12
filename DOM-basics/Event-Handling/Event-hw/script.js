
// Select the body element from index.html
const body = document.querySelector('body');

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.setAttribute('style','background-color: coral');

/* -------------------------------------------------------------------------- */

// Create an h1 element
const h1 = document.createElement('h1');

// Append a new h1 element to the body element as a child
body.appendChild(h1);

// Add text to the h1 element 
h1.innerText = 'Hello I am the child of body';

// Assign the background color of this element to something unique
h1.setAttribute ('style', 'background-color: white');

// Set a new style attribute to the h1 element
//h1.setAttribute('style', 'border: 4px double black');
h1.style.border = '4px double black';

// Add font size to the h1Element
h1.style.fontSize = '50px';

// Set the default text to the number zero
h1.innerText = '0';

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const incrementButton = document.createElement('button');

// Append the button element to the body element
body.appendChild(incrementButton);

// Add text to the boxButton
incrementButton.innerText = 'ADD';

// Add a class attribute to boxButton
incrementButton.setAttribute('class', 'boxButton');

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const decrementButton = document.createElement('button');

// Add the button element to the body element
body.appendChild(decrementButton);

// Add text to the button element
decrementButton.innerText = 'DELETE';

// Add a class attribute of style to the button element
decrementButton.setAttribute('class', 'boxButton');

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
incrementButton.addEventListener('click', () =>{
    //h1.innerText ++
    h1.innerText = parseInt(h1.innerText) + 1; 
})

// Create functionality that, when you click this button it decreases the h1 value
decrementButton.addEventListener('click', () =>{
    h1.innerText = parseInt(h1.innerText) -1;
})


/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
const clearButton = document.createElement('button');
body.appendChild(clearButton);
clearButton.innerText = 'CLEAR';
clearButton.setAttribute ('class', 'boxButton');

clearButton.addEventListener('click', () =>{
    h1.innerText= '0';
})


