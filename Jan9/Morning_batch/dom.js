// let h1 = document.querySelector("#head");
// let h2 = document.getElementsByTagName("h1")[0];
// h2.innerHTML = "We are not good"
// let x = document.querySelectorAll(".head");

// let button = document.getElementById("btn");

// button.addEventListener("click",()=>{
//     let input = document.getElementById("input").value;
//     console.log(input);
    
// })

// for(let y of x){
//     y.innerHTML = "How are you"
// }

// h1.innerHTML = "Hello Welcome";

let docs = document.createElement("h1");
docs.innerHTML = "Welcome";
docs.setAttribute("id","Head")
docs.style.backgroundColor = "Blue";
docs.style.color = "White";
document.body.appendChild(docs);


function values(){
    let input = document.getElementById("input").value;
    console.log(input);
    
}