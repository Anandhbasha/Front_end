// // // // //Hoisting
// // // // //var
// // // //     console.log(a);
// // // //     var a = 10;
// // // //     a = 30;
// // // //     var a = 50;    
// // // //     console.log(a);
// // // // //let

// // // // // let b = 50;
// // // // // b=70;
// // // // // let b = 20
// // // // let b;
// // // // console.log(b);
// // // // //const
// // // // const c =60;
// // // // c=80;
// // // // console.log(c);

// // // //function scope 
// // // //local scope

// // // // function add(){
    
// // // //     if(10<15){
// // // //         var b = 60     
// // // //     }
// // // //     console.log(b);
// // // // }
// // // // add()

// // // // //operators
// // // //     //arithmetic operator
// // // //         // +,-,*,/,%,++,--,=
// // // //         let a = 20;
// // // //         let b = 10;
// // // //         console.log(a+b);
// // // //         console.log(a-b);
// // // //         console.log(a*b);
// // // //         console.log(a/b);
// // // //         console.log(a%b);
// // // //         console.log(++a);
// // //         // console.log(a);
// // //     //logical opetrator
// // //         // &&,||,!
// // //         // if(10>20 && 5<6 && 50<100){
// // //         //     console.log("And is working");            
// // //         // }
// // //         // if(10>20 || 5<6){
// // //         //     console.log("Or is working");            
// // //         // }
// // //         // if(10!=10){
// // //         //     console.log("Not Equal");
            
// // //         // }
// // // // >=,<=,>,<,==,===
// // // if(10>=10){
// // //     console.log("Working");    
// // // }

// // // if(10=="20"){
// // //     console.log("Double");    
// // // }
// // // // if(10==="10"){
// // // //     console.log("Triple");    
// // // // }else{
// // // //     console.log("Not");
    
// // // // }

// // // //Ternary operator
// // // let age = 10;
// // // console.log(age>=18?"Adult":"Teenager");

// // //permitive data types
// // var a = 10;
// // var name = "xyz"
// // var isAlive = true
// // var b;
// // var x = null;
// // //Nan---Not a number
// // console.log(typeof(x));

// // console.log(typeof(b));

// // console.log(typeof(a));
// // console.log(typeof(name));
// // console.log(typeof(isAlive));


// // //non premitive data types

// // //array
// // const arr = [10,"gjgjg",true,""]
// // //array-index
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(typeof(arr));

// // //object
// // const person = {
// //     userName:"xyz",
// //     userAge:30,
// //     userLocation:"Cbe",
// //     isAlive:true
// // }
// // console.log(person);
// // console.log(person.userName);
// // // console.log(person.userAge);


// // //functions
// // function add(num1,num2){
// //     console.log(num1+num2);    
// // }
// // add(10,20)
// // add(100,200)
// // let a =10
// // let b=20
// // console.log(a+b);
// // let d = 100;
// // let c = 200;
// // console.log(c+d);

// //IFFI
// // const iifi = (function (){

// // })
// // //Arrow
// // const arrow = ()=>console.log("Hello")

// // arrow();

// // //anonumous
// // const anonu = (){

// // }

// //statements
//     //if
//     // let x = 10;
//     // let g = 30;
//     // // if(g>x){
//     // //     console.log("G is Grater");
        
//     // // }
//     // //if else
//     // if(g<x){
//     //     console.log("X is Grater");        
//     // }
//     // else{
//     //     console.log("G is grater");        
//     // }
//     //elseif
//     let age = 19;
//     if(age<9){
//         console.log("He is Child");
        
//     }
//     else if(age<=18 && age>=9){
//         console.log("Teenager");
        
//     }
//     else{
//         console.log("Adult");        
//     }

//     //switch
//     let day = "wednesday"

//     switch(day){
//         case "monday":
//             console.log("Today is Monday");
//             break
//         case "tuesday":
//             console.log("Today is tuesday");
//             break
//         case "wednesday":
//             console.log("Today is wednesday");
//             break
//         case "Thursday":
//             console.log("Today is Thursday");
//             break
//         case "Friday":
//             console.log("Today is Friday");
//             break
//         case "Saturday":
//             console.log("Today is Saturday");
//             break
//         default:
//             console.log("Today is Sunday");
            
//     }


//     //loops
//     //while
//     let a = 50;
//     let b= 55;
//         // while(a<b){
//         //     a++
//         //     console.log("While is working");            
//         // }

//     //do while
//     // do{
//     //     console.log("Do while is working");
//     //     a++
//     // }while(a>b)

//     // for
   
//     for(let x=10;x<a;x++){
//         console.log("a value is"+a);        
//     }

//     // for(let x=0;x<arr.length;x++){
//     //     console.log("Array value is" + arr[x]);
        
//     // }

//     //for of
//     // for(let x of arr){
//     //     console.log(x);        
//     // }
//     // //for in
//     // for(let x in arr){
//     //     console.log(arr[x]);
        
//     // }
//     //foreach
//     // arr.forEach((x)=>console.log(x))
//     let arr = [50,70,60,80,90]
//     //map
//     arr.map((x)=>console.log(x))
//     //MRF
//     //Reduce
//     let total = arr.reduce((acc,item)=>item+acc)
//     //acc=0;item=50 = 50
//     //acc=50;item=70 = 120
//     //acc=120:item=60 = 180
//     //acc = 180; item = 80 =260
//     //acc = 260; item=90 = 350
//     console.log(total);
    
//     //Filter
//     let fill = arr.filter((item)=>item%3===0)
//     console.log(fill);

//     //array methods
//         //push
//         arr.push(150)
//         console.log(arr);
        
//         //pop
//         arr.pop();
//         console.log(arr);  
//         //shift
//         arr.shift()
//         console.log(arr);
        
//         //unshift
//         arr.unshift(75)
//         console.log(arr);
        
//         //find
//         let finding = arr.find((x)=>x==72)
//         console.log(finding);
        
//         //indexof
//         console.log(arr.indexOf(70));
        
//         //length
//         console.log(arr.length);
        
//         //toString
//         // console.log(arr.toString());
        
//         //join
//         console.log(arr.join(""));
        
//         //split
//         let names  = "Raja mani"
//         let newNames = names.split(" ")
//         console.log(newNames);
        
//         //slice
//         console.log(arr.slice(1,2));
        
//         //setTimeout
//         setTimeout(()=>{
//             console.log("Set Timeout");
            
//         },5000)
//         //setInterval

//         setInterval(()=>{
//             console.log("Set Interval");
            
//         },5000)
    
// //call back function
// const anotherCallback = ()=>{
//     console.log("Working");
    
// }
// const callback = (num1,num2)=>{
//     return num1+num2
//     console.log("Callback is working");
//     anotherCallback()
    
// }
// console.log(callback(10,20));
// async
    //promise
        // const reached = new Promise((resolved,reject)=>{
        //     let success = false;
        //     if(success){
        //         resolved("Reached Home")
        //     }else{
        //         reject("Not yet Reached")
        //     }
        // })
        // reached.then((result)=>{
        //     console.log(result);
            
        // }).catch((err)=>{
        //     console.log(err);
            
        // })

        // const personOneAmount = new Promise((resolved,reject)=>{
        //     let paid = true
        //     if(paid)
        //         resolved("Amount Recived from personOne")
        //     else{
        //         reject("Amount Not Yet Recived from personOne")
        //     }
        // })
        // const personTwoAmount = new Promise((resolved,reject)=>{
        //     let paid = false
        //     if(paid)
        //         resolved("Amount Recived from personTwo")
        //     else{
        //         reject("Amount Not Yet Recived from personTwo")
        //     }
        // })
        // const personThreeAmount = new Promise((resolved,reject)=>{
        //     let paid = true
        //     if(paid)
        //         resolved("Amount Recived from personThree")
        //     else{
        //         reject("Amount Not Yet Recived from personThree")
        //     }
        // })
        // const personFourAmount = new Promise((resolved,reject)=>{
        //     let paid = false
    //     //     setTimeout(()=>{
    //     //         if(paid)
    //     //             resolved("Amount Recived from personFour")
    //     //         else{
    //     //             reject("Amount Not Yet Recived from personFour")
    //     //         }
    //     //     },5000)
    //     // })

    //     // Promise.allSettled([personOneAmount,personTwoAmount,personThreeAmount,personFourAmount]).then((res)=>{
    //     //     console.log(res);
            
    //     // }).catch((er)=>{
    //     //     console.log(er);
            
    //     // })
    //     //race
    //     //any 
    //     //allSetteled
    //     //all


    //     //return Promise
    //    const reached = ()=>{
    //     return(
    //         new Promise((resolved,reject)=>{
    //             let success = false;
    //             if(success){
    //                 resolved("Reached Home")
    //             }else{
    //                 reject("Not yet Reached")
    //             }
    //         })
    //     ).then((result)=>{
    //         console.log(result);
            
    //     }).catch((err)=>{
    //         console.log(err);
            
    //     })
    //    }
       
    //    reached()

    //    const dataFetch = new Promise((resolved,reject)=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    //         if(!response.ok){
    //             console.log("Api is Not Connected");                
    //         }
    //         const data = response.json()
    //         resolved(data)
    //         reject("Not Working")
    //     })
    //    })
    //    dataFetch.then((success)=>{
    //     console.log(success);        
    //    }).catch((err)=>{
    //     console.log(err);        
    //    })
    //async function
    const fetchData = async()=>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
                method:"DELETE",//POST,PUT,PATCH
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    userName: "xyz",
                    userId: 4546
                  })
            })
        if(!res.ok){
            throw Error("Unable to Connect Database")
        }
        const datas = await res.json();
        console.log(datas);
        }
        catch(err){
            console.log(err);
            
        }
        
    }
    fetchData()
    //fetch
    //error handling
