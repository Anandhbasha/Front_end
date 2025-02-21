// //Hoisting
//     //var
//     console.log(x);

//     var x =10
//     //let 
//     console.log(y);

//     let y = 20;
//     //const

// function add(){
//     let b=20;   
//     if(b<30){
        
        
//     }
//     console.log(b);
// }
// add()

//And &&  Or || Not !=

// if(10<15 && 20>30 && 5<8){
//     console.log("Hello");
    
// }

// if(10>15 || 20>30 || 5<8){
//     console.log("Hello");
    
// }

// if(10!=20){
//     console.log("Hello");
    
// }

//ternary operator ?:
let age = 20;
// if(age<18){
//     console.log("Teenager");
    
// }else{
//     console.log("Adult");
    
// }
// console.log(age<18?"Teenage":"Adult")

//increment

// console.log(age++);
// console.log(age);

//decrement
// console.log(--age);

//data types
    //premitive
        // string
        // numbers
        // Boolean
        // undefined
         //NULL
         //NAN       
        
       
    //non premitive
        //Object
// const person = {
//     name:"xyz",
//     age:20,
//     place:"Cbe"
// }
// console.log(person);

//         //array
//         const numbers = [100,200,300,"names",undefined]
//         console.log(numbers[0]);
//         console.log(numbers[1]);
//         console.log(numbers[2]);
//         console.log(numbers[3]);
//         console.log(numbers[4]);
        
        //function

            //normal function
            // function add(){
            //     console.log("Add is working");
                
            // }
            // add()
            //arrow function
            // const add = ()=>{console.log("Arrow is working")}
            // add()
            // //ananoums function
            // const ananoums = (function(){console.log("Ana is working")})
            // ananoums()
            // //IFFI        
            // const IFFI = function(){console.log("IFFI is working")}
            // IFFI()
// Loops
    //while
    // let a = 10;
    // b=20;
    // while(a<b){
    //     console.log("While");
    //     b--
        
    // }
    //do while
    // do{
    //     console.log("Hello");
        
    // }while(10>15)

    // let numbers = [10,20,30,40,50,60]
    //for
    // for(let b=0;b<numbers.length;b++){
    //     console.log(numbers[b]);
        
    // }
    //for of 
    // for(let x of numbers){
    //     console.log(x);        
    // }
    // //for in //for in for taking the index of array
    // for(let x in numbers){
    //     console.log(numbers[x]);        
    // }
    //foreach
    // numbers.forEach((y)=>console.log(y))

//Es6
// let numbers = [10,20,30,40,50,60]
// //map
// numbers.map((y)=>console.log(y))
// //reduce
// let total = numbers.reduce((acc,curr)=>acc+curr)
// //acc = 0 //curr = 10 = 0+10 = 10
// //acc=10 curr = 20 20+10 = 30
// //acc = 30 curr = 30 60
// // 60+40
// //100+50
// //150+60
// //210 
// console.log(total);

// //filter
// let fill = numbers.filter((num)=>num%4==0)
// console.log(fill);

const person = {
    name:"xyz",
    age:20,
    place:"Cbe",
    parents:{
        dad:"fgfff",
        mom:"klpjkjk",
        siblings:{
            brothers:"jhjh",
            sisters:{
                sis1:"mjhnmn",
                sis2:"kmkjklmkl"
            }
        }
    }
}

person.place = "Coimbatore"

console.log(person.place);

const student = [
    {
        name:"xyz",
        age:20,
        place:"Cbe",
        rollnumber:"54545454",
        marks:[100,80,80,70,50]
    },
    {
        name:"abc",
        age:20,
        place:"Cbe",
        rollnumber:"5455444",
        marks:[100,80,80,70,50]
    },
    {
        name:"xyz",
        age:20,
        place:"Cbe",
        rollnumber:"54554545",
        marks:[100,80,80,70,50]
    },
    {
        name:"fed",
        age:20,
        place:"Cbe",
        rollnumber:"1555554",
        marks:[100,80,80,70,50]
    },
    {
        name:"ggr",
        age:20,
        place:"Cbe",
        rollnumber:"47848",
        marks:[100,80,80,70,50]
    },
    {
        name:"dsff",
        age:20,
        place:"Cbe",
        rollnumber:"24544554",
        marks:[100,80,80,70,50]
    }
]
student.map((item)=>console.log(item.marks.reduce((acc,sum)=>acc+sum)))


//object Iteration
// Object.entries(person).map((item)=>console.log(item))
// Object.values(person).map((item)=>console.log(item))
// Object.keys(person).map((item)=>console.log(item))

// //Destructure

// const {name} = person;
// console.log(name);
let marks = [100,80,80,70,50];
let marks1 = [10,70,50,40,50];

//rest operator
let [a,b,...c] = marks

console.log(a);
console.log(b);
console.log(c);

//spread operator
let marks2 = [...marks,...marks1]
console.log(marks2);

//push
marks2.push(1000)
console.log(marks2);

//pop
marks2.pop()
console.log(marks2);
//shift
marks2.shift()
// marks2[6]=5000;
console.log(marks2);
//unshift
marks2.unshift(557454)
console.log(marks2);
//find
const finding = marks2.find((item)=>item===82)
console.log(finding);

//indexof
console.log(marks2.indexOf(80));

//includes

console.log(marks2.includes(88));

//setTimeout
setTimeout(()=>{
    console.log("Settimeout is working");
    
},2000)
//setInterval
setInterval(()=>{
    console.log("SetInterval is working");
    
},2000)
