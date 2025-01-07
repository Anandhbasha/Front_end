//push
// let arr = [10,20,30,40,50]

// arr.push(80);
// console.log(arr);
// //pop
// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr);
// arr.unshift(10)
// console.log(arr);
// console.log(arr.includes(100));

// console.log(arr.find((x) => x > 25));

let names = "Magudes Wara Muthu"
// let newnames= names.split("/");
// console.log(newnames);

// let sli = arr.slice(0,4);
// console.log(sli);

//setInterval

// setInterval(()=>{
//     console.log(names);
    
// },2000)


// //setTimeOut
// setTimeout(()=>{
//     console.log(arr);
    
// },1000)
//Add event listner

// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
    
// })

// function prints(){
//     console.log("Welcome");    
// }
//optional chaining

// const mens = {
//     name:"Anandh",
//     age:30,
//     family:{
//         dad:"Muthu",
//         mom:"mani",
//         siblings:{
//             brothers:"Null",
//             sisters:"Null"
//         }
//     }
// }

// console.log(mens?.family?.grand);

//spread operator

let arr = [10,20,30,40,50]
let b = [60,70,80,90,100]
let c = [...arr,...b];
console.log(c);

//rest operator

let [d,e,...f] = b;
console.log(d,e,f);


