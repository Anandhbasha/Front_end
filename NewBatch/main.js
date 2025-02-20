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
const person = {
    name:"xyz",
    age:20,
    place:"Cbe"
}
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
let numbers = [10,20,30,40,50,60]
//map
numbers.map((y)=>console.log(y))
//reduce
let total = numbers.reduce((acc,curr)=>acc+curr)
//acc = 0 //curr = 10 = 0+10 = 10
//acc=10 curr = 20 20+10 = 30
//acc = 30 curr = 30 60
// 60+40
//100+50
//150+60
//210 
console.log(total);

//filter
let fill = numbers.filter((num)=>num%4==0)
console.log(fill);

