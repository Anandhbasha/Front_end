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
        // do{
        //     console.log(arr[newValue]);
        //     newValue++;
        // }while(newValue>arr.length)
    //for
        // for(let x=0;x<arr.length;x++){
        //     console.log(arr[x]);
        //     // x=0,x=1,x=2,x=3
            
        // }
    //for of

    //     for(let i of arr){
    //         //arr[0] = i;
    //         //arr[1]=i
    //         console.log(i);            
    //     }
    // //for in
    // for(let i in arr){
    //     console.log(arr[i]);         
    // }
    //foreach
        // arr.forEach((i,index)=>console.log(i,index))
    //map
    arr.map((i,index)=>console.log(i,index))
    let marks = [60,80,90,70,55]
    //    task 1 //use only for loop
    //    task 2 //for
            //a
            //an
            //ana
            //anan
            //anand
            //anandh
        // task 3 //anandh
        //anand
        //anan
        //ana
        //an
        //a
    //reduce
       let total =  marks.reduce((acc,sum)=>acc+sum)
       //acc = 0
       //sum = 60 60+0 = 60
       //acc=60
       //sum = 80  = 140
       //acc = 140
       //sum = 90 = 230
       //acc = 230
       //sum = 70 = 300
       //acc = 300
       //sum = 55 = 355
       console.log(total);
       

    //filter
        let fill = marks.filter((item)=>item>55)
        console.log(fill);
        
//json
//task number 4
    const persons = [
        {
            personName:"venkat",
            location:"Coimbatore",
            age:24,
            marks :[60,80,90,88,54]
        },
        {
            personName:"sheera",
            location:"Coimbatore",
            age:30,
            marks :[80,62,87,84,51]
        },
        {
            personName:"sundaravarthini",
            location:"Coimbatore",
            age:31,
            marks :[90,56,68,79,77]
        },
    ]
    persons.map((person)=>console.log(person))