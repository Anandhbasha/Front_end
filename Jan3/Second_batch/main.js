//functions
//function
function name() {
    
}
name();
//arrow
()=>{}
// const poomani = (name)=>{
    // console.log(name);
    
// }
// var arrow = (name)=>console.log(name);
// poomani("World");
//IIFI
// (funtion ())
//ananoums
// const anonu = function(){

// }
//Construtor Function
function name(value) {
    this.value = value;
    this.execute = function(){
        console.log(`Hello Guys  ${this.value}`);    
    }
    
}

const names = new name("Welcome");
names.execute();


// function person(params) {
//     let y = 10
//     for(let i = 0;i<8;i++){
//         let z=10;
//         console.log(y);
        
//     }
//     console.log(Z);
    
// }
// person();

//MRF
//map
let arr = [10,20,30,45];

arr.map((x)=>{console.log(x)})

//filter
let modules = arr.filter((x)=>(x%2==0))
console.log(modules);

//Reduce
// reduce(()=>{})

let add = arr.reduce((y,a)=>y*a)
console.log(add);

//split
let word = "Hello World"
const Z = word.split(" ")
console.log(Z);




// slice
let fruit = ["monday","tuesday","Wednesday","Thursday","Friday"]
let newFruit = fruit.slice(0,3)
console.log(newFruit);
let nameofFruits = "Apple"
// uppercase
console.log(nameofFruits.toUpperCase());

// lowercase



