//for
// let names = ["xyz","abc","def"]

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);


// for(let i = 0;i<names.length;i++){
//     console.log(names[i]);
    
// }
// //for of
// for(let i of names){
//     console.log(i);
    
// }
// //for in 
// for(let i in names){
//     console.log(names[i]);
    
// }
// //foreach
// names.forEach((item)=>console.log(item))
//map
// names.map((item)=>console.log(item))
// //reduce
// let marks = [100,90,80,70,65]
// let total = marks.reduce((acc,sum)=>acc+sum)
// console.log(total);

// //filter
// let fill = marks.filter((item)=>item%2===0)
// console.log(fill);

//setTimeout
// setTimeout(()=>{
//     console.log("Working");
    
// },5000)
// //setInterval
// setInterval(()=>{
//     console.log("Working");
    
// },5000)

const person = {
    name:"xyz",
    age:25,
    place:"CBE"
}
const values  = [
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
    {
    name:"xyz",
    age:25,
    place:"CBE"
},
]
// values.map((item)=>console.log(Object.values(item)))
// Object.entries(person).map((item)=>console.log(item))
// Object.keys(person).map((item)=>console.log(item))
// Object.values(person).map((item)=>console.log(item))

let numbers  = [10,20,30,40,50]
//push
numbers.push(100)
console.log(numbers);

//pop
numbers.pop()
console.log(numbers);
// shift
numbers.shift()
console.log(numbers);
// unshift
numbers.unshift(200)
console.log(numbers);

//find
let findes = numbers.find((item)=>item===5)
console.log(findes);

//indexof
console.log(numbers.indexOf(200));

//includes
console.log(numbers.includes(2));
//slice
console.log(numbers.slice(1,3));

//split

let name = "Hello/world"
console.log(name.split("/"));

