//non-premetive data types
//function

// function funcion name(parameter){

// }

// function name()

//array
let num = [10,20,30,40,50]

// console.log(num[4]);

let x = 10;

let b = "name"

let isAdult = true;

let z;

let d = null;



//object

const person = {
    name:"xyz",
    age:20,
    Gender:"Male",
    Mobile:9999999999,
    AadhaarNumber:154456547566,
    family:{
        dad:"hhhh",
        mom:"kjjj",
        siblings:{
            brother:"kijk",
            sister:null
        }
    }
}

// console.log(person.family.siblings);
///json

const students = [{
    studentName:"xxxxx",
    studentAge:25,
    studentClass:"8th"
},
{
    studentName:"xxxxx",
    studentAge:25,
    studentClass:"8th" 
},
{
    studentName:"xxxxx",
    studentAge:25,
    studentClass:"8th" 
},
{
    studentName:"xxxxx",
    studentAge:25,
    studentClass:"8th" 
},
{
    studentName:"xxxxx",
    studentAge:25,
    studentClass:"8th" 
},
{
    studentName:"xxxxx",
    studentAge:20,
    studentClass:"8th" 
},
]

// console.log(students[0].studentName);


//if statement
if(students[0].studentAge>20){
    console.log("Hello");
    
}else if(students.studentAge>20){
    console.log("True");
    
}
else{
    console.log("False");    
}

let day = "Saturday"
switch(day){
    case "Sunday":
        console.log("Today is sunday");
        break
    case "Monday":
        console.log("Today is Monday");
        break
    case "Tuesday":
        console.log("Today is Tuesday");
        break
    case "Wednesday":
        console.log("Today is Wednesday");
        break
    case "Thursday":
        console.log("Today is Thursday");
        break
    case "Friday":
        console.log("Today is Friday");
        break
    default :
    console.log("Today is Saturday");    
    
}


function add(a,b){
    c=a+b;
    console.log(c);
    alert(c)
    
}