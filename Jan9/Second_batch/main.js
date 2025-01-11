// // Hoisting
// let div = document.createElement("div");
// let p = document.createElement("p")
// let input = document.createElement("input")
// let btn = document.createElement("button");
// btn.innerText = "Submit"

// //style
// div.style.backgroundColor = "Purple";
// div.style.color = "white";
// div.style.height = "500px";

// btn.style.padding = "10px 25px";
// btn.addEventListener("click",()=>{
//     console.log(input.value);
    
// })

// //attributes
// input.setAttribute("id","input")
// input.setAttribute("type","text")
// input.setAttribute("class","input")
// p.innerHTML = "Welcome to JS"

// //append
// div.appendChild(input)
// div.appendChild(btn)
// div.appendChild(p);
// document.body.append(div)

//getelement

// let h1 = document.getElementsByTagName("h1")[0]
// setTimeout(()=>{
//     h1.innerHTML = "I am a devloper"
// },2000)



let btn = document.getElementById("btn");



btn.addEventListener("click", () => {    // let input = document.querySelectorAll(".input");
    // for(let x of input){
    //     console.log(x.value);
        
    // }
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    // console.log(username,email,mobile,password);   

const newOne = async()=>{
    try {
        const success = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                email:email,
                mobile:mobile,
                password:password,
            })
        }
    )
        if(!success.ok){
            throw new Error("Error")
        }
        const data = await success.json();
        console.log(data);

        
    } catch (error) {
        
    }
}
newOne();
});




