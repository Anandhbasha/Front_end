//loops
// while
let b= 10;

// while(b<20){
//     b++;
//     console.log("Hello");
    
// }
//do while
// do{
//     console.log("Welcome");
//     b++;
// }while(b<2)

let arr = [10,20,30,40,50,60]
//for
// for(let x=0;x<arr.length;x++){
//     console.log(arr[x]);
    
// }

let a = 0
// while(a<arr.length){
//         console.log(arr[a]);        
//         a++;
        
//     }
// do{
//     console.log(arr[a]);        
//         a++;
// }while(a<arr.length)
//for of
// for(let x of arr){
//     console.log(x);
    
// }
//for in 

// for(let x in arr){
//     console.log(x);
    
// }

const person = {
    name:"anandh",
    age:32,
    postition:"Trainer"
}


// console.log(person.name);
Object.values(person).forEach((value)=> console.log(value))

Object.keys(person).forEach((y)=>console.log(y))
//foreach
// arr.forEach((x)=>console.log(x))