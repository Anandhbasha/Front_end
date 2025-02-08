// setTimeout
// setTimeout(()=>{
//     console.log("Hello");
    
// },5000)
//setInterval
// setInterval(()=>{
//     console.log("World");
// },5000)

//addEventlistener
// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         btn.style.backgroundColor="red"
//         btn.style.color="white"
        
//     },5000)
// })
// callback
// const sub = (c)=>{
//     console.log(c);
    
// }

// const adding = ()=>{
//     let c = 20+30;
//     // sub(c)
//     return c
// }
// // adding()
// console.log(adding());

//Async
    //Promise
        // const booking = ()=>{
        //     return new Promise ((reject,resolved)=>{
        //         let success = true;
        //         if(success){
        //             resolved("Ticket is Booked Amount of the Ticket :230")
        //         }
        //         else{
        //             reject("Unable to Book the Ticket")
        //         }
        //     }).then((result)=>{
        //         console.log(result);            
        //     }).catch((error)=>{
        //         console.log(error);
                
        //     })
        // }
        // console.log(booking());
        

        // const bookingTicket =  new Promise ((reject,resolved)=>{
        //             let success = true;
        //             if(success){
        //                 resolved("Ticket is Booked Amount of the Ticket :230")
        //             }
        //             else{
        //                 reject("Unable to Book the Ticket")
        //             }
        //         })

        //     bookingTicket.then((result)=>{
        //         console.log(result);            
        //     }).catch((error)=>{
        //         console.log(error);
                
        //     })
        // const Employee1 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(()=>{
        //             resolved("He is working Today")
        //         },2000)
        //     }
        //     else{
        //         reject("He is Absent")
        //     }
        // })
        // const Employee2 = new Promise ((reject,resolved)=>{
        //     const Present = false;
        //     if(Present){
        //         setTimeout(()=>{
        //             resolved("Employee2 is working Today")
        //         },1000)
        //     }
        //     else{
        //         reject("Employee2 is Absent")
        //     }
        // })
        // const Employee3 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(() => {
        //             resolved("Employee3 is working Today")
        //         }, 10000);
        //     }
        //     else{
        //         reject("Employee3 is Absent")
        //     }
        // })
        // const Employee4 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(() => {
        //             resolved("Employee4 is working Today")
        //         }, 1000);
        //     }
        //     else{
        //         reject("Employee4 is Absent")
        //     }
        // })
        
        // Promise.allSettled([Employee1,Employee2,Employee3,Employee4]).then((res)=>{
        //     console.log(res);            
        // }).catch((err)=>{
        //     console.log(err);
            
        // })

// Aysnc/await
// async function names(){

// }
//fetch
// const APIS = new Promise ((resolved,reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         if(!res.ok){
//             reject("Unable to conncet")
//         }
//         else{
//             resolved(res)
//         }
        
//     })})
//     APIS.then(async(succ)=>{
//         let data = await succ.json()
//         data.map((item)=>{
//             console.log(item.userId);
//             console.log(item.id);
//             console.log(item.title);
//             console.log(item.body);
            
//         })
//         console.log(data);        
//     }).catch((err)=>{
//         console.log(err);
        
//     })

// const datas = async()=>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/10',{
//             method:"DELETE",
//             headers:{
//                 "content-Type":"application/json"
//             },
//             body:JSON.stringify({
              
//         //     })
//         // }
//         // {
//         //     method:"PUT",
//         //     headers:{
//         //         "Content_type":"application/json"
//         //     },
//         //         body:JSON.stringify({
//         //             userID:10,
//         //             userName:"XYZ"
//         //         })
//         // }
//         )
//     // console.log(response);
//         if(!response.ok){
//             console.log("Unale to connect API");        
//         }
//         let data = await response.json()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
        
//     }
    
// }
// datas();


//DOM
// Document Object Module

    // let btn = document.querySelectorAll('.btn')
    // for(let i=0;i<btn.length;i++){
    //     btn[i].addEventListener('click',()=>{
    //         console.log("Button Clicked");
            
    //     })
    // }
    // let div = document.createElement('div')
    // let h1 = document.createElement('h1')
    // let text = document.createElement('input')
    // div.setAttribute("id","Box")
    // text.setAttribute("type","number")
    // h1.innerText = "Hello"
    // div.appendChild(text)
    // div.appendChild(h1)
    // document.body.append(div)

    // let heading = ["SNo","Name","Age"]

    // let table = document.createElement('table')
    // let thead = document.createElement('thead')
    // for(let x of heading){
    //     let th = document.createElement('th')
    //     th.innerHTML = x
    //     thead.appendChild(th)
    // }
    // let tbody = document.createElement('tbody')
    // table.appendChild(thead)
    // table.appendChild(tbody)
    // document.body.append(table)
    

// const API = new Promise((reject,resolved)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').then((success)=>{
//         if(!success.ok){
//            reject("unable ");
            
//         }
//         else{
//             resolved(success);
//         }
        
        
        
//     }).catch((error)=>{
//         reject("Unable to connect")
//     })
// })
// APIS.then(async(res)=>{
//     // console.log(res);
//     let data = await res.json()
//     console.log(data);
    
    
// }).catch((err)=>{
//     console.log(err);
    
// })




///DOM

//function
// function functionname(paramas){

// }
// functionname();
//arrow function
// const functionname = ()=>{console.log("Hello")}
// functionname();
// //iffi
// const iffi = function(){

// }
// iffi()
// // anonoums
// const ananoums = (function (){

// })
// ananoums();

// while
// a = 10;
// while(a<15){
//     a++;
//     console.log(a);
    
// }
//do while
// do{
//     console.log("dowhile");
    
// }while(a>15)
///for

//lenth = 4
//index = 0,1,2,3
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// for(let x = 0;x<arr.length;x++){
//     console.log(arr[x]);    
// }
//for of
// for(let x of arr){
//     // x=0
//     // x=1
//     console.log(x);
    
// }
//for in
// for (let y in arr){
//     console.log(arr[y]);
    
// }
//foreach
// arr.forEach((item)=>console.log(item))
//map
// arr.map((item)=>console.log(item))
//reduce
// let red = arr.reduce((acc,sum)=>acc+sum)
// console.log(red);

//filter
// let fill = arr.filter((item)=>item%4===0)
// console.log(fill);

// arr.push(500)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(1000)
// console.log(arr);
// arr.shift()
// console.log(arr);
// let finds = arr.find((item)=>item===50)
// console.log(finds);
// console.log(arr.includes(50));
// console.log(arr.indexOf(50));

//spread
// let arr = [10,20,40,50]
// let arr1 = [10,20,40,50]
// let arr2 = [10,20,40,50]
// let array = [...arr,...arr1,...arr2]
// console.log(array);

// //rest
// let [first,sec,...rest_oper] = array
// console.log("First Mark" + first);
// console.log("sec Mark" + sec);
// console.log("Others Mark" + rest_oper);

// const person = {
//     firstname:"xyx",
//     lastname:"abc",
//     parents:{
//         dad:"bhjk",
//         mom:"vjghj"
//     }
// }

// const names  = person
// console.log(names);

// const firstname = {...person}
// console.log(firstname);


// setTimeout
// setTimeout(()=>{
//     console.log("Hello");
    
// },5000)
// setInterval
// setInterval(() => {
//     console.log("Hello");
// }, 2000);

//callback
// function minus (c){
//     console.log(c-2);
    
// }
// function add (){
//     let a = 10;
//     let b = 20
//     // minus(c)
//     return a+b
// }
// console.log(add());

//Promise
// const drinks = new Promise ((resolved,reject)=>{
//     let drunk = false;
//     if(drunk){
//         resolved("He is drunked")
//     }else{
//         reject("He is not Drunkard")
//     }
// })
// drinks.then((result)=>{
//     console.log(result);
    
// }).catch((err)=>{
//     console.log(err);
    
// })
// const pro = ()=>{
//     return new Promise ((resolved,reject)=>{
//         let drunk = false;
//         if(drunk){
//             resolved("He is drunked")
//         }else{
//             reject("He is not Drunkard")
//         }
//     }).then((result)=>{
//         console.log(result);
        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
    
// }

// console.log(pro());

//error handling
//fetch
// const drinks = new Promise ((resolved,reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         if(!res.ok){
//             reject("unable to connect")          
//         }else{
//             let data = res.json()
//             resolved(data)
//         }
//     })
//     })
//     drinks.then((result)=>{
        
//         console.log(result);
        
        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
//async
const pro = async()=>{
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:"dddggdh"
            })
        })
        if(!res.ok){
            throw Error ("Unable to connect")       
        }
        else{
            let data = await res.json()
            console.log(data);
            
        }
    }
    catch(err){
        console.log(err);
        
    }
    
    
}
// pro()
//error handling
//DOM

// let btn = document.querySelectorAll('.btn')
// for(let x=0;x<btn.length;x++){
//     btn[x].addEventListener('click',()=>{
//         btn.style.padding = "20px"
//         btn.innerText = "Clicked"
//     })
// }



// let div = document.createElement('div')
// let button = document.createElement('button')
// button.innerHTML = "Submit"
// button.setAttribute("class","btn")
// div.appendChild(button)
// document.body.append(div)

let headings  = ["SNO","Names","Age"]

let table = document.createElement("table")
let thead  = document.createElement("thead")
headings.map((item)=>{
    let th = document.createElement("th")
    th.textContent  = item;
    thead.appendChild(th)
})
let tbody  = document.createElement("tbody")
table.appendChild(thead)
table.appendChild(tbody)
document.body.append(table)