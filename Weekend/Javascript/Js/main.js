// //var name 
//     //dont use key words of js
//     //it was not starts with number 
//     //underscore and space don't use 
//     //meaning names


// // //Hoisting
// // //var
// // console.log(a);

// // var a  =10;
// // var a =30;
// //  a = 50
// // console.log(a);

// // //let
// // // console.log(b);
// // let b = 20;
// // b = 60;
// // console.log(b);
// // // let b
// //const
// // const c= 20;
// // c=70;
// // console.log(c);

// //function scope
// //local scope
// //var 

// // function add(){
// //     let a = 10;
// //     if(a<15){
// //         var c = a;
// //         console.log(a);        
// //     }
// //     console.log(c);
    
// // }


// // add()

// //data types
//     // premitive data types   
//         //number
//             // let a = 20;
//         //string
//             // let name  = "xyz"
//         //undefined
//             // let x = undefined;
//         //Null
//             // let z = Null;
//         // Nan
//             // Not an number
//         //boolean
//     //Non Premitive
//         //array
//         //Object
//         //function

// //operators
//     //arithmetic Operator
//     //     //+,/,*,-,%,++,--,=
//     // let a = 10;
//     // let b = 5; 
//     // console.log(a+b);
//     // console.log(a-b);
//     // console.log(a*b);
//     // console.log(a/b);
//     // console.log(a%b);
//     // console.log(a++);
//     // console.log(a);
// //comparision opeartors
//     // >,<,>=,<=
// //logical operators
//     // &&,||,!=
// // And
//     // if(10<15 && 20>30 &&){
//     //     console.log("And is working");
        
//     // }

// //OR
//     // if(10<15 || 20>30){
//     //     console.log("Or is working");        
//     // }
// //Not Equal
//     // if(10!=10){
//     //     console.log("Not Equal");
        
//     // }

// // ==,===
// // if(10=="10"){
// //     console.log("Double");
    
// // }
// // if(10==="10"){
// //     console.log("Triple");
    
// // }


// //ternary operator
//     // ?
// // let age = 10;
// // console.log(age>=18?"Adult":"teenager");

// //array
//     // let arr = [10,true,"cbabh",40,50]
//     // console.log(arr);
//     // console.log(arr[0]);
//     // console.log(arr[1]);
//     // console.log(arr[2]);
//     // console.log(arr[3]);
//     // console.log(arr[4]);
    
// //object
//     //key value pair

//     // const person = {
//     //     username:"xyz",
//     //     age:25,
//     //     isAlive:true
//     // }
//     // console.log(person);
//     // console.log(person.username);
//     // console.log(person.age);
//     // console.log(person.isAlive);
// //function
//     // function add(num1,num2,num3,num4,num5){
//     //     alert(num1+num2+num3+num4+num5);
//     //     // console.log(num1-num2-num3-num4-num5);                
//     // }

//     // add(10,20,50,80,70)

//     //types of functions
//     // //basic
//     // function fmname(){console.log("Basic Function")}
//     // fmname()
//     // //arrow function
//     // const arrow = ()=>console.log("Arrow Function")
//     // arrow();
//     // //IFFI
//     // const IFFI = (function(){

//     // })
//     // IFFI
//     // //ananoums
//     // // const ana = ((){

//     // // })
//     // // ana()

// //If
// //if Else
// //Else IF
// // if(10>15){
// //     console.log("if is working");    
// // }
// // else{
// //     console.log("else is working");
    
// // }
// // let age = 9;
// // if(age>18){
// //     console.log("Adult");    
// // }
// // else if(age<=10){
// //     console.log("Child");
    
// // }
// // else{
// //     console.log("Teenage");
    
// // }

// //Switch
// // let today = "Saturday";

// // switch(today){
// //     case "Monday":
// //     console.log("Today is Monday");
// //     break;
// //     case "Tuesday":
// //     console.log("Today is Tuesday");
// //     break;
// //     case "Wednesday":
// //     console.log("Today is Wednesday");
// //     break;
// //     case "Thursday":
// //     console.log("Today is Thursday");
// //     break;
// //     case "Friday":
// //     console.log("Today is Friday");
// //     break;
// //     case "Saturday":
// //     console.log("Today is Saturday");
// //     break;
// //     default:
// //         console.log("Today is Sunday");

// // }

// //loops
// // while
// // a = 0;




// // while(a<arr.length){    
// //     console.log(arr[a]);
// //     ++a;
// // }

// //do while
// // do{
// //     console.log("Do while is working");
// // }while(10<9)


// //for loop
// // for(let b=arr.length-1;b>=0;b--){//5
// //     console.log(arr[b]);    
// // }
// //for loop types
// //for of
// // for(let c of arr){
// //     console.log(c);    
// // }
// // //for in 
// // for(let c in arr){
// //     console.log(arr[c]);    
// // }
// //for each
// // arr.forEach((item)=>console.log(item))

// //akalya
// //a
// //ak
// //aka
// //akal
// //akaly
// //akalya
// // let arr  = [10,50,60,70,82,755]
// // //MRF
// // //Map
// // arr.map((item)=>console.log(item))
// // //reduce
// // let total = arr.reduce((sum,acc)=>sum+acc)
// // console.log(total);

// // //filter
// // let fill = arr.filter((item)=>item%4===0)
// // console.log(fill);


// //array methods
//     //push
//         let a = [100,580,55]
//         a[3]=150;
//         console.log(a);
//         a.push(652)
//         console.log(a);
//     //pop
//         a.pop()
//         console.log(a);       
//     //shift
//         a.shift()
//         console.log(a);        
//     //unshift
//         a.unshift(2458)
//         console.log(a);        
//     //find
//     const finds = a.find((item)=>(item===2458))
//     console.log(finds);
//     //indexof
//     console.log(a.indexOf(2458)); 
//     //split
//     let names = "Anandha Kumar"
//     const newName = names.split(" ")
//     console.log(newName);    
//     //slice
//     console.log(a.slice(1,2));
    

//     //sort
//     console.log(a.sort());
    
//     //spread
//     const b = [1000,154545,54534545]
//     const c = [...a,...b]
//     const d = [a,b]
//     console.log(d);
    
//     console.log(c);
    
//     //rest
//     const [f,...r] = b
//     console.log(f);
//     console.log("Rest Operator value is " +  r);
    
    //destructure
    const person = {
        personName:"xyz",
        age:30
    }
    // console.log(person.personName);
    
    const{personName,age} = person
    console.log(personName);
    console.log(age);
    
    

    //template literals
    // console.log(`Rest Operator value is ${r}`);
