// async function add(){
//     let a = 12;
//     let b = 15;
//     console.log(a+b);    
// }
// add()

// const datas  = async ()=>{
//    setTimeout(()=>{
//     console.log("Hello");
//    },2000)
//     console.log("Welcome");    
// }
// console.log(datas());

// const datas = async()=>{
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         if(!res.ok){
//             throw Error ("Unable to connect")
//         }
//         let data = await res.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// datas()