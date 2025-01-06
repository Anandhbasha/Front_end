//push
let arr = [1,2,3]
arr.push(10);
console.log(arr);
//pop
arr.pop();
console.log(arr);
//shift
arr.shift();
console.log(arr);
//unshift
arr.unshift(25)
console.log(arr);
//setInterval
// setInterval(()=>{
//     console.log("Hello");
    
// },5000)
// //setTimeout
// setTimeout(()=>{
//     console.log("Welcome");
    
// },2000)
//addEventListener
const button = document.getElementById("click");
const names = ()=>{
    
const names = document.getElementById("username").value;
console.log(names);
}

// console.log(button.value);

// button.addEventListener((click,)=>{

// })


//destructure
const a = [10,20,30]
const [x,b,c] =a;
console.log(x,b,c);

const person = {
    name:"XYZ",
    age:20,
    gender:"Male",
    
}
const {name,age} = person;
console.log(name,age);


for(let [key,value] of Object.entries(person)){
    console.log(key,value);
    
}
console.log(person);
//optionalchaining
console.log(person?.age);


//spread operator
let ab = [...a]
console.log(ab);


// let [ac,ad,...ae] = [10,20,40,60,70,80]
console.log(ac,ad,ae);
let z = [...ab,...ae]

console.log(z);

//rest operator
let [ac,ad,...ae] = [10,20,40,60,70,80]
console.log(ac,ad,ae);

//callback
//promise
//error handling
//async