// let h1 = document.createElement("h1");
// h1.innerHTML = "Welocome to DOM"
// h1.setAttribute("id","head")
// h1.setAttribute("class","head")
// h1.style.backgroundColor = "Red";
// h1.style.color = "white";
// h1.style.padding = "10px 20px";

// let div = document.createElement("div");
// document.body.appendChild(div);
// div.appendChild(h1);


let y = document.querySelectorAll(".head");
for(let x of y){
    x.innerHTML = "Welcome"
}

