//1  DOM By ID
// const name = document.getElementById('myId');

// By Class
// const name1 = document.getElementsByClassName('myClass');

// By Tag
// const name3 = document.getElementsByTagName('div');


// // Query Selectors
// const element = document.querySelector('.myClass'); // Single element
// const elements = document.querySelectorAll('.myClass'); // NodeList of elements



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
// const root = document.documentElement; // `<html>` element



// 3.Manipulating the DOM

// Changing Content
// let h1 = document.getElementsByName('h1')
// h1.textContent = 'New text';  // Changes inner text
// h1.innerHTML = '<strong>Bold Text</strong>'; // Changes inner HTML


// Changing Attributes
// element.setAttribute('id', 'newId');
// const id = element.getAttribute('id');
// element.removeAttribute('class');


// Changing Styles
// element.style.color = 'red';
// element.style.backgroundColor = 'yellow';


// Adding/Removing Classes
// element.classList.add('newClass');
// element.classList.remove('oldClass');
// element.classList.toggle('toggleClass'); // Adds if not present, removes if present

// 4.Creating and Removing Elements

// Create Elements
// const newElement = document.createElement('div');
// newElement.textContent = 'I am new!';


// Append Elements
// document.body.appendChild(newElement); // Adds to the body
// parentElement.insertBefore(newElement, referenceElement); // Adds before a specific element


// Remove Elements
// parentElement.removeChild(childElement);
// element.remove(); // Directly removes the element


// 5.Event Handling

// Adding Event Listeners
// element.addEventListener('click', () => {
//   console.log('Element clicked!');
// });


// Removing Event Listeners**
// const handleClick = () => console.log('Clicked!');
// element.addEventListener('click', handleClick);
// element.removeEventListener('click', handleClick);


// Common Events
// `click`: When an element is clicked.
// - `mouseover`: When the mouse hovers over an element.
//  `keydown`: When a key is pressed.
//  `submit`: When a form is submitted.


// 6. DOM Properties

// Accessing Input Values
// const inputValue = document.querySelector('input').value;


// Accessing Attributes
// const hasClass = element.hasAttribute('class'); // Returns true/false


// Accessing Styles
// const backgroundColor = window.getComputedStyle(element).backgroundColor;


// 7.Examples

// Creating a New List Item**
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.textContent = 'New Item';
// ul.appendChild(li);


// Form Validation**
// document.querySelector('form').addEventListener('submit', (event) => {
//   const input = document.querySelector('input');
//   if (!input.value) {
//     event.preventDefault(); // Prevent form submission
//     alert('Input cannot be empty!');
//   }
// });


// Dynamic Styling
// document.querySelector('button').addEventListener('click', () => {
//   document.body.style.backgroundColor = 'lightblue';
// });



// Advanced DOM Manipulation**

// Using Templates**

// const template = document.getElementById('myTemplate').content.cloneNode(true);
// document.body.appendChild(template);

// Using Fragment for Performance
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 10; i++) {
//   const div = document.createElement('div');
//   div.textContent = `Item ${i + 1}`;
//   fragment.appendChild(div);
// }
// document.body.appendChild(fragment);




let arr = [10,60,55,41,80];
//find a minimum number in arr
// console.log(Math.max(...arr));

//find a min number in arr
// console.log(Math.min(...arr));


// Clone object

const person = {
  name:"ajay",
  age:25,
  education:{
    sslc:"school name",
    hsc:"school name1",
    ug:"College Name",
    pg:"College Name",
  }
}
//use for in
let clones = {}
for(let key in person){
  clones = person[key];
}
// console.log(clones);

//for of Object.entries
for(let key of Object.entries(person)){
  clones = key;
}
// console.log(clones);

for(let key of Object.keys(person)){
  clones[key] = person[key];
}
// console.log(clones);

//object assign

const newOne = Object.assign({},person)
// console.log(newOne);


//use assign operator
const assign = person
// console.log(person);

//spread operator
const spread = {...person}
// console.log(spread);


//Round a float number
// console.log(Math.round(1.85));

//print a random number
// console.log(Math.random());
//between 10
// console.log(Math.random()*10);

//random number between 1 to 100
// console.log(Math.random() * (100 - 1) +1);
// 100 to 1000 rounded number
// const min = 100;
// const max = 1000;
// const Random = Math.round(Math.random()* (max-min) +min);
// console.log(Random);


// alternative of round is floor
// const min = 100;
// const max = 1000;
// const Random = Math.floor(Math.random()* (max-min) +min);
// console.log(Random);


