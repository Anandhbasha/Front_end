
//for of
    let arr = [1,2,3,4,5,6];
    // for(let z = 0;z<arr.length;z++){
    //     console.log(arr[z]);
        
    // }
    // for(let x of arr){
    //     console.log(x);        
    // }
    const students = [{
            studentName:"Arun",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"bala",
            rollNumber:1254422,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"pranav",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"mithun",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"anandh",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"raja",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        },
        {
            studentName:"mano",
            rollNumber:1254421,
            marks:[50,70,80,30,100]
        }]
//for in
    // for(let y in students){
    //     for(let o in students[y].marks)
    //         console.log(students[y].marks[o]);            
    // }
//Constructor Function

function person (name){
    this.name;
    console.log(name);
    
    
}

let name = new person ("Hello")
let World = new person ("world")

//MRF
//map
// students.map((x)=>
//     console.log(x))
// students[0]
// students[1]
// students[2]
// Comparison operators
// and
if(10<20 && 5 >10){
    console.log("Hi");
    
}
// or
if(10<20 || 5 >10){
    console.log("Hi");
    
}
// not
if(10!=8){
    console.log("Bye");
    
}
//if
let age = 20;
if(age<18){
    console.log("He is minor");    
}
else if(age==18){
    console.log("He is major")

}
else{
    console.log("he is nothing ");
    
}
//ternary operator
console.log(age<=18?"he is not adult":"he is an adult");

let a=5;
let b=10;

