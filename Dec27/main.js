//varibale should not start with a number
//should not use the js keywords
//Casesesitive
//for declare a variable no Gap and no (-)
//menaingfull names

// var
//function scope variable
// var x = 10;
var X =100;
console.log(X);

//let
let y = 50;
y=200;
console.log(y);

//block scope varibale
//const
const a  = 100;
console.log(a);

//block scope varibale


function add(a,b){
    console.log(a+b);
}


add(505,501);
add(50,50);
add(50,5);
add(10,1);
add(55,11);
add(5,501);


let name = "xyx";
let age = 20
let address = "Cbe";

let person = {
    name:"xyx",
    age:20,
    address:"CBE",
    siblings:{
        brothers:"hjgjkkj",
        sisters:"mnabks"
    }
}

person.qualification = "Bachelors"
delete person.address;
console.log(person);


const colors = ["red","blue","green","yellow"]

colors[4] = "pink"
// console.log(colors[4]);

for(let g=4;g>=0;g--){
    console.log(colors[g]);
    
}

// for(let ux in colors){
//     console.log(colors[ux]);
    
// }
// for(let uv of colors){
//     console.log(uv);
    
// }


if(1>5){
    console.log("hello");
    
}else if(10<15){
    console.log("this is wrong");
    
}
else{
    console.log("nothing");
    
}
i=10;
while (i<15) {
    console.log("Only five times");
    
    i++;
}
do {
    console.log("welocome");
    
} while (10>15);


// console.log(b);

var b =255;

let o = 100;
let m = 250;

let z =505;
let q = 501;

r = z+q;

p = o+m;
console.log(p);
