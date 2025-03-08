//var name 
    //dont use key words of js
    //it was not starts with number 
    //underscore and space don't use 
    //meaning names


// //Hoisting
// //var
// console.log(a);

// var a  =10;
// var a =30;
//  a = 50
// console.log(a);

// //let
// // console.log(b);
// let b = 20;
// b = 60;
// console.log(b);
// // let b
//const
// const c= 20;
// c=70;
// console.log(c);

//function scope
//local scope
//var 

// function add(){
//     let a = 10;
//     if(a<15){
//         var c = a;
//         console.log(a);        
//     }
//     console.log(c);
    
// }


// add()

//data types
    // premitive data types   
        //number
            // let a = 20;
        //string
            // let name  = "xyz"
        //undefined
            // let x = undefined;
        //Null
            // let z = Null;
        // Nan
            // Not an number
        //boolean
    //Non Premitive
        //array
        //Object
        //function

//operators
    //arithmetic Operator
        //+,/,*,-,%,++,--,=
    let a = 10;
    let b = 5; 
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a++);
    console.log(a);
//comparision opeartors
    // >,<,>=,<=
//logical operators
    // &&,||,!=
// And
    // if(10<15 && 20>30 &&){
    //     console.log("And is working");
        
    // }

//OR
    // if(10<15 || 20>30){
    //     console.log("Or is working");        
    // }
//Not Equal
    // if(10!=10){
    //     console.log("Not Equal");
        
    // }

// ==,===
// if(10=="10"){
//     console.log("Double");
    
// }
// if(10==="10"){
//     console.log("Triple");
    
// }


//ternary operator
    // ?
// let age = 10;
// console.log(age>=18?"Adult":"teenager");

//array
    let arr = [10,true,"cbabh",40,50]
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    
//object
    //key value pair

    const person = {
        username:"xyz",
        age:25,
        isAlive:true
    }
    console.log(person);
    console.log(person.username);
    console.log(person.age);
    console.log(person.isAlive);
//function
    function add(num1,num2,num3,num4,num5){
        alert(num1+num2+num3+num4+num5);
        // console.log(num1-num2-num3-num4-num5);                
    }

    // add(10,20,50,80,70)
    