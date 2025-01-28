//ES6 
//MRF
//Map
let array = [10,20,30,40,55]
let a = 0;
// for(let x of array){
//     //x=10
//     //x=20
//     //x=30
//     //x=40
//     //x=50
//     a+=x
//     // a=10
//     // 30 
//     // 60
//     // 100
//     //150
//     // console.log(a);
    
        
// }
// console.log(a);

// array.map((x)=>console.log(x))
//Reduce
let total = array.reduce((acc,value)=>acc+value)
//0+10
// acc= 10


// console.log(total);


//Filter

let fill = array.filter((add)=>add%2==0)
console.log(fill);

console.log(array.pop());
console.log(array.push(60));
console.log(array.unshift(100));
console.log(array.shift());

console.log(array.indexOf(60));
let find = array.find((x)=>x===55)
console.log(find);

// console.log(array.find(60));

let b= 55.60;
console.log(Math.sqrt(b));

//slice

console.log(array.slice(0,4));
// console.log(array.splice(","));

let name = "Mydeen/abdul/Kather"
let newVar= name.split("/")
console.log(newVar);




console.log(array);
