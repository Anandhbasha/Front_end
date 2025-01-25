// //Hoisting

// //var
// //function scope
// var x =10;

// var x = 20;

// console.log(x);
// //let 
// //local scope
// let b =30;
// b= 50;
// console.log(b);

// //const
// //local scope
// const s = 40;

// console.log(s);


// function add(){
//     if(s<b){
//         const j = 60;
//     }
//     console.log(j);
    
// }
// add()

//Data types
    //premitive data types
        //number
        // let z = 50;
        // //string
        // let name= "xyz";
        // //Boolean
        // let isAlive = true
        //     // true or false
        // //Undifined
        // let d;
        // //null
        // let f = null;

    //non premitive data types
        //array
        // let arr = ["xyz",20,40,80,60]
        
        // console.log(typeof(arr));
        // console.log(arr[1]);
        
        //object
            const person = {
                name:"xyz",
                age:20,                               
            }
            // console.log(person.age);
            
            // console.log(typeof(person));

        //function
            // function add(a,b){
            //     console.log(a+b);
            // }
            // add(10,20)
            // add(40,50)
            // add(60,20)
            // add(5,8)
            // add(9,1)

            // let button = document.getElementById("btn");
            // button.addEventListener('click',()=>{
            //     add(10,20);
            // })

            //opertors
                //arithmetic operators
                    // +,-,*,/,%,++,--
                    // let a = 25;
                    // let b=20;
                    // console.log(a+b);
                    // console.log(a-b);
                    // console.log(a*b);
                    // console.log(a/b);
                    // console.log(a%b);
                    // console.log(++a); //a=26
                    // console.log(a--); //a=25

                    // b=a;
                    // console.log(b);
                //logical operators
                    // conditional operator
                        // And &&
                        if(10<20 && 20<30 && 50>100){
                            console.log("And Operator");
                            
                        }else{
                            console.log("Not an And operation");
                            
                        }

                        // OR  ||
                        if(10>20 || 20<30 || 50>100){
                            console.log("OR Operator");
                            
                        }else{
                            console.log("Not an OR operation");
                            
                        }
                        //Not Equal !=
                        console.log(10!=10);

                        let name = 10
                        let name1 = "10"
                        
                        console.log(name==name1);
                        console.log(name1===name);
                        
                        
                        //<,><=,>=,==,===
                    //ternary operators
                    let age = 18;
                    let adult = age>=18?"Adult":"Teenage";
                    console.log(adult);
                    
                    //statement
                    if(10>20){
                        console.log("if is working");
                        
                    }else if(50>100){
                        console.log("else if is working");
                        
                    }
                    else{
                        console.log("else is working");
                        
                    }
                    //switch
                    let day = "4444"

                    switch (day) {
                        case "Monday":
                            console.log("Today is Monday");                            
                            break;
                        case "Tuesday":
                            console.log("Today is Tuesday");                            
                            break;
                        case "Wednesday":
                            console.log("Today is Wednesday");                            
                            break;
                        case "Thursday":
                            console.log("Today is Thursday");                            
                            break;
                        case "Friday":
                            console.log("Today is Friday");                            
                            break;
                    
                        default:
                            console.log("Today is Saturday");
                            
                    }
                    
                    
                    