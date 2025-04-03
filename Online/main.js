// //Hoisting
// // //var
// //     console.log(a);
    
// //     var a = 10;
// //     var a = 50;
// //     console.log(a);
    
// // //let
// //     console.log(b);
    
// //     let b=20;
// //     b=30
// //     console.log(b);
    
// // //const
// //     const c =60;
// //     c=80;
// //     console.log(c);
// //local scope
//     function add (){
//         let b = 60;
//         if(b<50){
//             var c = 70
//             // c+=b;            
//         }
//         // console.log(c);
//         // console.log(b);
        
//     }
//     add()
// //function scope

// //operators
//     //arithmetic
//         // +,-,*,/,%,++,--
//             let num1 = 20;
//             let num2 = 30;
//             console.log(num1+num2);
//             console.log(num1-num2);
//             console.log(num1*num2);
//             console.log(num1/num2);
//             console.log(num1%num2);
//             console.log(++num1);
//             // console.log(num1);
            

//     //conditional
//         //!,==,===,>=,<=,>,<
//             console.log(num1!==num2);
//             let a = 10;
//             let b = "10"
//             console.log(a==b);
//             console.log(a===b);
            
            
//     //logical
//         //And && OR
//             if(a==b&&num1<num2&&10>15){
//                 console.log("And Operator is working");                
//             }
//             if(a==b||num1>num2||10>15){
//                 console.log("OR Operator is working");                
//             }
//     //ternary
//             let age = 18;
//                 console.log(age>=18?"Adult":"Teenager");

//     //switch
//             let today = "Thursday";
//             switch(today){
//                 case "Sunday":
//                     console.log("Today is Sunday");
//                     break 
//                 case "Monday":
//                     console.log("Today is Monday");
//                     break  
//                 case "Tuesday":
//                     console.log("Today is Tuesday");
//                     break  
//                 case "Wednesday":
//                     console.log("Today is Wednesday");
//                     break  
//                 case "Thursday":
//                     console.log("Today is Thursday");
//                     break  
//                 case "Friday":
//                     console.log("Today is Friday");
//                     break  
//                 default:
//                     console.log("Today is Saturday");
//                     break  
//             }

// //data types
//     //premitive data types
//         //number
//         let x = 5;
//         console.log(typeof(x));
        
//         //string
//         let names = "xyz"
//         console.log(typeof(names));
        
//         //boolean
//         let isAlive = true
//         console.log(typeof(isAlive));
        
//         //undefined
//         let f;
//         console.log(typeof(f));
        
//         //null
//         let g = null
//         console.log(typeof(g));
        
//         //Nan
//     //non premitive
//         //array
//             let arr = [10,"xyz",true,undefined]//10-0,"xyz-1",true-2,undefined-3
//             console.log(arr[2]);
//             arr[3] = 50
//             console.log(arr);
            
//         //object
//         //     let person = {
//         //         names:"abc",
//         //         age:30,
//         //         isAlive:true,
//         //         add:"Coimbatore"
//         //     }
//         //     person.add = "salem"
//         //     person.work = "Working"
//         //     console.log(person.age);
//         //     console.log(person.add);
//         //     console.log(person);
            
            
//         // //function
//         // function add(a,b){
//         //     console.log(a+b);
//         // }
//         // add(10,230);
        
//         // //arrow
//         // const add = (a,b)=>console.log(a+b)
//         // add(10,230);
//         // //   const arrow = ()=>console.log("Arrow is working")
//         // //     arrow()
//         // //anonumus
//         // const add = function(a,b){console.log(a+b)}
//         // add()
//         // //IFFI
//         // const add = (function(a,b){console.log(a+b)})
//         // add()
// //loops
//     //while
//             //arr

            
//         // let value = 10;
//         // while(value<15){
//         //     ++value;//11//12//13//14//15
//         //     console.log("While is working");
            
//         // }
    let arr = [10,"xyz",true,undefined]
        let newValue = 0
        // while(newValue<arr.length){
        //     console.log(arr[newValue]);
        //     newValue++;
        // }
    //do while
        do{
            console.log(arr[newValue]);
            
        }while(newValue>arr.length)
    //for
    //for of
    //for in
    //foreach

