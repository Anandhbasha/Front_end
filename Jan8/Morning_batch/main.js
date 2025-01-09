fetch('https://jsonplaceholder.typicode.com/posts').then((success)=>{
    console.log(success);
    
    if(!success.ok){
        throw new Error ("Server is Not Connected"+success.status )
    }
    return success.json();
}).then((data)=>{
    
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})

// const json = `[{
// "name":"xyz"}]`;
// let x = JSON.parse(json)
// console.log(x);



//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); 
//   })
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

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



// async function getData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('GET:', data);
//     } catch (error) {
//       console.error('GET Error:', error);
//     }
//   }
  
//   async function createData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: 'Sports',
//           body: 'Football',
//           userId: 3,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('POST:', data);
//     } catch (error) {
//       console.error('POST Error:', error);
//     }
//   }
  
//   async function updateData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: 1,
//           title: 'Updated Title',
//           body: 'Updated Body',
//           userId: 1,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('PUT:', data);
//     } catch (error) {
//       console.error('PUT Error:', error);
//     }
//   }
  
//   async function patchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title: 'Partially Updated Title',
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('PATCH:', data);
//     } catch (error) {
//       console.error('PATCH Error:', error);
//     }
//   }
  

//   async function deleteData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       console.log('DELETE: Resource deleted successfully');
//     } catch (error) {
//       console.error('DELETE Error:', error);
//     }
//   }
  
//   getData();      
//   createData();  
//   updateData();  
//   patchData();  
//   deleteData(); 
  