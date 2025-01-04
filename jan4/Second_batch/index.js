let arr = [10,100,200,30,40,5]

let b = arr[0];

for(let x of arr){
    //x=10
    //b= 10;
    //x =100;
    //b=10;
    //b=100
    b = x > b ? b : x;
    
    
}
console.log(b);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};
  
let {firstName, lastName} = person;
console.log(firstName, lastName);
  
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(y=>y>18);
console.log(first);
console.log(Math.round(2.5));
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango"));
const fruit = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruit.indexOf("Apple"));