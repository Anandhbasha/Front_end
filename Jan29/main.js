//spread

let a = [10,100,500,600,50,60,70];
// let b= a;
// console.log(b);
const person = {
    name:"xyz",
    age:20
}
let b = [...a,{...person}]
console.log(b);
//rest
let [x,z,...arr] = a
console.log(arr);
//template literals
//string concordination
console.log("a value is "+a);
console.log(`a value is ${a}`);

//destructure
let [d,y]=a
let {name,age} = person
// console.log(person.name);

console.log(name);
console.log(age);

//foreach
a.forEach((x)=>console.log(x))