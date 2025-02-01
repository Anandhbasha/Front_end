//loops
//while
// let a = 10;
let b = 20
// while(a<b){
//     console.log("Hello");
//     a++
// }

//do while
// do{
//     console.log("Welcome");
//     a++
// }while(a<b)
//for


// for(let a= 0;a<arr.length;a++){
//     console.log(arr[a]);    
// }

//function

// function
function name(params) {
    console.log();
    
}
// ES6 Concepts
//arrow function
const arrow = ()=>console.log("Arrow");
// arrow()
//IIFI
const IFFI = (function(){
    console.log("IFFi");
    
})
// IFFI()
//ananonums
const ana = function(){}

//MRF

//Map
let arr = [10,20,30,40,55]
// arr.map((item)=>{
//     console.log(item)}
// )
//for of
// for(let x of arr){
//     console.log(x);
    
// }
//for in
// for(let x in arr){
//         console.log(arr[x]);        
//     }
//foreach
// arr.forEach((item)=>console.log(item))

//Reduce
// let red = arr.reduce((acc,num1)=>acc+num1)
// console.log(red);

// //filter
// let fill = arr.filter((item)=>item%2===0)
// console.log(fill);

// //array Methods
// let find = arr.find((x)=>x==10)
// console.log(find);
// console.log(arr.indexOf(20));
//pop
// arr.pop();
// console.log(arr);
// //push
// arr.push(100)
// console.log(arr);

// //unshift
// arr.unshift(50)
// console.log(arr);

// // shift
// arr.shift();
// console.log(arr);

// arr[2]=70;
// console.log(arr);

// //object
// const person = {
//     name:"xyz",
//     age:20,
//     gender:"Male"
// }

// person.education="Bacehlors";

// Object.values(person).map((x)=>console.log(x))

// Object.entries(person).map((d)=>console.log(d))

// console.log(arr.includes(15));

// let word = "Hello-world"
// let newWord = word.split("-")
// console.log(newWord);

// console.log(arr.slice(4,5));

// console.log(Math.random());

// //spread operators
let arr1 = [80,95,128,155,525,8555] 
// let arr4 = arr1
// let arr2 = [...arr,...arr1]
// console.log(arr2);

// let new_person = {...person}

//rest operators
let [h,n,...y] = arr1;
// console.log("H value is:" + h);
// console.log("N value is:" + n);
// console.log("Y value is:" + y);

//destructure

const person = {
    username:"xyz",
    age:20,
    gender:"Male"
}

let {username,gender} = person;

console.log(username,gender);






