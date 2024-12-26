
// // function add (){
// //     let x = 10;
// //     x+=20;
// //     alert(x);
// //     console.log(x);    
// // }

// // //loop for.while do while

// // let y = 150;
// // let x = 120;

// // while (y > x) {

// //     console.log("The value is Grater then"); 
// //     break  
// // // }
// // function add(a){
// //     // let x =20;
// //     // x+=x;
// //     a+=a;
// //     alert(a);
// //     // x = x+20
// //     console.log(a);
    
// // }

// // let cars = ["bmw","tata","audi","kia"]
// // console.log(cars[0]);
// // console.log(cars[3]);

// // const dharani={
// //     name:"dharani",
// //     color:"white",
// //     height:5, 
// //     age:25,
// //     occupation:{
// //         degree:"agri",
// //         job:"developer",
// //         status:{
// //             commited :true,
// //         }
// //     }

// // }

// // console.log(typeof(dharani))

// // arr=[1,2,3,3,4,4,55,6]
// // for(let a=0;a<=arr.length;a++){
    
// //     console.log(arr[a] + "im always right");

// // }

// // let x=60;
// // let y=60;
// // while(x==y){
// // console.log("values are equal");
// // break;

// // }

// do{
// console.log("im useless");

// }while(5!=10)

// var b = 30;
// console.log(b);

// let a = 40;
// a = 80;
// a=b;
// console.log(a+b);




function days(x){
    switch (x) {
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
        case "Saturday":
            console.log("Today is Saturday");
            break;
    
        default:
            console.log("Today is Sunday");
            
    }
}


// let number = [10,20,30,40,50,22];

// for(let i =0;i<number.length;i++){
//     console.log(number[i]);
    
// }


// for (let x of number) {
//     console.log(x);
    
// }

// const person = [{
//     name:"xyz",
//     age:24,
//     gender:"female"
// },
// const person = {
//     name:"abc",
//     age:20,
//     gender:"male",
//     degree:[10,20,30]
// }

// console.log(person.degree);


// for(let z of person){
//     console.log(z);
    
// }
// for (const y in number) {
//     console.log(number[y]);
    
// }

let names = ["M","u","t","h","u"];
let x = "";
for (const char of names) {
    x+=char;
    console.log(x);
    
}