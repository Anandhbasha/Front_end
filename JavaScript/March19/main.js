// //Hoisting
// //var
//     console.log(a);
//     var a = 10;
//     a = 30;
//     var a = 50;    
//     console.log(a);
// //let

// // let b = 50;
// // b=70;
// // let b = 20
// let b;
// console.log(b);
// //const
// const c =60;
// c=80;
// console.log(c);

//function scope 
//local scope

// function add(){
    
//     if(10<15){
//         var b = 60     
//     }
//     console.log(b);
// }
// add()

// //operators
//     //arithmetic operator
//         // +,-,*,/,%,++,--,=
//         let a = 20;
//         let b = 10;
//         console.log(a+b);
//         console.log(a-b);
//         console.log(a*b);
//         console.log(a/b);
//         console.log(a%b);
//         console.log(++a);
        // console.log(a);
    //logical opetrator
        // &&,||,!
        // if(10>20 && 5<6 && 50<100){
        //     console.log("And is working");            
        // }
        // if(10>20 || 5<6){
        //     console.log("Or is working");            
        // }
        // if(10!=10){
        //     console.log("Not Equal");
            
        // }
// >=,<=,>,<,==,===
if(10>=10){
    console.log("Working");    
}

if(10=="20"){
    console.log("Double");    
}
// if(10==="10"){
//     console.log("Triple");    
// }else{
//     console.log("Not");
    
// }

//Ternary operator
let age = 10;
console.log(age>=18?"Adult":"Teenager");
