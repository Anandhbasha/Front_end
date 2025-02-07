// let div = document.createElement('div')
// let h1 = document.createElement('h1')
// let btn = document.createElement('button')
// btn.innerText = "Click"
// h1.innerText = "Hello"
// div.setAttribute('class',"mainclass")
// // div.appendChild(btn)
// div.appendChild(h1)
// document.body.append(div)

// function add(a,b){
//     console.log(a+b);
    
// }

// btn.addEventListener('click',()=>{
//     console.log(10+30);
    
// })

// let button  = document.querySelector('#btn');

// button.addEventListener('click',()=>{
//         button.innerHTML = "Clicked"
//         button.style.backgroundColor = "Purple"
//         button.style.color = "white"
        
//     })

let title = ["S.no","Name",'Age']

let table  = document.createElement('table')
let thead = document.createElement('thead')
for(let x of title){
    let th = document.createElement('th')
    th.innerHTML = x;
    thead.append(th)
}
    


let tbody = document.createElement('tbody')
table.appendChild(thead)
table.appendChild(tbody)
document.body.append(table)
