//Hoisting
//var 

//function scope
// var x= 20

// var x = 50

// var x = 100;
// x=200;
// console.log(x);

// //let 
// //local scope
// let a = 50;
// console.log(a);


// //const
// //local scope
// const b=100;

// console.log(b);

// function add(){
//     let b=10;
//     if(10<15){
//         var z=50;       
//         console.log(b);
        
//     }
//     console.log(z);
// }
// add()
// console.log(z);

//operators
    //Arithmetic operator
    //     // +,-,*,/,%,++,--
    //     console.log(10+20);
    //     console.log(20-10);
    //     console.log(10*20);
    //     console.log(10/20);
    //     console.log(5%2);
    //     console.log(a--);
    //     console.log(a);

    //     x+=a; // x = x+a
    //     a++
    //     console.log(x);

    // //logical operator
    //     //And
    //         if(10<20 && 50>100){
    //             console.log("And operator");                
    //         }else{
    //             console.log("Not an And");                
    //         }
    //     //OR
    //     if(10>20 || 50>100){
    //         console.log("OR operator");                
    //     }else if(20<50){
    //         console.log("Else if");
            
    //     }
    //     else{
    //         console.log("Not an OR");                
    //     }
    //     //NOT
    //     console.log(10!=10);
    //     //==
    //     let d = "10";
    //     let f = 10;
    //     console.log(f==d);
    //     console.log(f===d);
    //     console.log(10<=20);
    //     console.log(10<20);
    //     console.log(10>20);
    //     console.log(10>=20);

    //     //ternary operator
    //     let age = 10
    //     console.log(age>=18?"Adult":"Teenage");

    //     //switch

    //     let day = "Monday";
        
    //     switch(day){
    //         case "Monday":
    //             console.log("Monday");
                
    //             break
    //         case "Tuesday":
    //             console.log("Tuesday");
                
    //             break
    //         case "Wednesday":
    //             console.log("Wednesday");
                
    //             break
    //         case "Thursday":
    //             console.log("Thursday");
                
    //             break
    //         case "Friday":
    //             console.log("Friday");
            
    //             break
    //         case "Saturday":
    //             console.log("Saturday");
                
        // }
        
//Data types
    //Premitive data types
        //number
        let num = 10;
        //string
        let name = "xyz"
        //undifined
        let g;
        // Boolean
        let isAlive = true
        //null
        let j = null
        //NAN

    //Non-Premitive    
    //array
    let arr = [10,"cft",30,42]
    console.log(arr[1]);
    
    //object
    const person = {
        name:"xyz",
        age:50,
        parents:{
            dad:"hhgg",
            mom:"jhjjkhj",
            siblings:{
                sisters:2,
                brothers:4
            }
        }
    }
    console.log(person.parents.siblings.sisters);
    




