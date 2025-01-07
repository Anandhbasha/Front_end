//Callback
// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data fetched!');
//     }, 1000);
// }

// fetchData((data) => {
//     console.log(data); 
// });

//Hell
// setTimeout(() => {
//     console.log('Step 1');
//     setTimeout(() => {
//         console.log('Step 2');
//         setTimeout(() => {
//             console.log('Step 3');
//         }, 1000);
//     }, 1000);
// }, 1000);


//promise

// const promise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve('Operation succeeded');
//     } else {
//         reject('Operation failed');
//     }
// });

// promise.then((result) => {
//         console.log(result); 
//     })
//     .catch((error) => {
//         console.error(error);
//     }).finally((finish)=>{
//         console.log("Cleared succesfully");
        
//     });



//Promises
   
    // const ticket = new Promise ((resolve,reject)=>{
    //     let confirmed = true;
    //     if(confirmed){
    //         resolve(220);
    //     }
    //     else{
    //         reject();
    //     }
    // })
    // ticket.then((amount)=>{
    //     console.log("Ticked Booked Succesfully You have to Pay" + amount);
        
    // }).catch(()=>{
    //     console.log("Failure");
    // })

    // const friend1 = new Promise ((resolve,reject)=>{
    //     let status = false;
    //     if(status){
    //         resolve("I am reached Home: xyz");
    //     }
    //     else{
    //         setTimeout(()=>{
    //             reject("He is Not Reached: xyz");                
    //         },5000);
    //     }
    // })
    // const friend2 = new Promise ((resolve,reject)=>{
    //     let status = true;
    //     if(status){
    //             resolve("I am reached Home: abc");;                
    //     }
    //     else{
    //         reject("He is Not Reached: abc")
    //     }
    // })
    // const friend3 = new Promise ((resolve,reject)=>{
    //     let status = false;
    //     if(status){
    //         setTimeout(()=>{
    //             resolve("I am reached Home: 123");               
    //         },10000);
    //     }
    //     else{
    //         reject("He is Not Reached: 123")
    //     }
    // })

    // setTimeout(()=>{
    //     console.log("Hello");
        
    // },5000);

    // friend3.then(()=>{

    // })
    // Promise.all([friend1,friend2,friend3]).then((message)=>{
    //     console.log(message);        
    // }).catch((err)=>{
    //     console.log(err);
        
    // })   
//aysnc


// const getData = async()=> {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();


//return promise
// async function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Data fetched!');
//         }, 1000);
//     });
// }
// async function getData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getData();

//fetch

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             console.log(`status: ${response.status}`);
            
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchData();











///Promise Example

const friend = new Promise((resolve,reject)=>{
    let Reached = false;
    if(Reached){
        resolve("He is Reached Safely");
    }
    else{
        setTimeout(()=>{
            reject("He is not reached")
        },2000)        
    }
})

const friends2 = new Promise((resolve,reject)=>{
    let reached = true;
    if(reached){
        resolve("He is Reached Home")
    }
    else{
        reject("He is not yet reached")
    }
})

Promise.allSettled([friend,friends2]).then((x)=>{
    console.log(x);
    
}).catch((error)=>{
    console.log(error);    
})