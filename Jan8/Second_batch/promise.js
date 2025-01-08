// const diamond = new Promise((resolve,reject)=>{
//     let platinum = true;
//     if(platinum){
//         resolve("I Brought a Necklace")
//     }else{
//         reject("I am going to buy tommorow")
//     }
// })
// diamond.then((result)=>{
//     console.log(result);    
// }).catch((err)=>{
//     console.log(err);
// })


// function add(a,b){
//     let c = a+b;
//     return c;
// }

// console.log(add(10,20));

// const y = `[{
//     "name":"xyz",
//     "age":"20"
// }]`

// let z = JSON.parse(y)
// console.log(z);

//   fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({
//         title: 'Sports',
//         body: 'Cricket',
//         userId: 2
//     })
//   }).then((response)=>{
//     if(!response.ok){
//         throw new Error (`HTTP error! status: ${response.status}`)
//     }
//     return response.json()
//     }).then((data)=>{
//         console.log('Success:' ,data);
        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           id: 1,
//           title: 'Updated title',
//           body: 'Updated body',
//           userId: 1
//         })
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Updated:', data);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });

// fetch('https://jsonplaceholder.typicode.com/posts/10', {
//   method: 'DELETE'
// })
//   .then(response => {
//     if (response.ok) {
//       console.log('Deleted successfully!');
//     } else {
//       console.error('Failed to delete.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


