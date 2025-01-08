//1  DOM By ID
const name = document.getElementById('myId');

// By Class
const name1 = document.getElementsByClassName('myClass');

// By Tag
const name3 = document.getElementsByTagName('div');


// Query Selectors
const element = document.querySelector('.myClass'); // Single element
const elements = document.querySelectorAll('.myClass'); // NodeList of elements



// 2.Traversing the DOM
// You can navigate through the DOM tree using:

// Parent
// const parent = element.parentElement;


// Children
// const children = element.children;


// Siblings
// const next = element.nextElementSibling;
// const previous = element.previousElementSibling;


// Root
const root = document.documentElement; // `<html>` element



// 3.Manipulating the DOM

// Changing Content
let h1 = document.getElementsByName('h1')
h1.textContent = 'New text';  // Changes inner text
h1.innerHTML = '<strong>Bold Text</strong>'; // Changes inner HTML


// Changing Attributes
element.setAttribute('id', 'newId');
const id = element.getAttribute('id');
element.removeAttribute('class');


// Changing Styles
element.style.color = 'red';
element.style.backgroundColor = 'yellow';


// Adding/Removing Classes
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('toggleClass'); // Adds if not present, removes if present

// 4.Creating and Removing Elements

// Create Elements
const newElement = document.createElement('div');
newElement.textContent = 'I am new!';


// Append Elements
document.body.appendChild(newElement); // Adds to the body
parentElement.insertBefore(newElement, referenceElement); // Adds before a specific element


// Remove Elements
parentElement.removeChild(childElement);
element.remove(); // Directly removes the element


// 5.Event Handling

// Adding Event Listeners
element.addEventListener('click', () => {
  console.log('Element clicked!');
});


// Removing Event Listeners**
const handleClick = () => console.log('Clicked!');
element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick);


// Common Events
// `click`: When an element is clicked.
// - `mouseover`: When the mouse hovers over an element.
//  `keydown`: When a key is pressed.
//  `submit`: When a form is submitted.


// 6. DOM Properties

// Accessing Input Values
const inputValue = document.querySelector('input').value;


// Accessing Attributes
const hasClass = element.hasAttribute('class'); // Returns true/false


// Accessing Styles
const backgroundColor = window.getComputedStyle(element).backgroundColor;


// 7.Examples

// Creating a New List Item**
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li);


// Form Validation**
document.querySelector('form').addEventListener('submit', (event) => {
  const input = document.querySelector('input');
  if (!input.value) {
    event.preventDefault(); // Prevent form submission
    alert('Input cannot be empty!');
  }
});


// Dynamic Styling
document.querySelector('button').addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightblue';
});



// Advanced DOM Manipulation**

// Using Templates**

const template = document.getElementById('myTemplate').content.cloneNode(true);
document.body.appendChild(template);

// Using Fragment for Performance
const fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i + 1}`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);