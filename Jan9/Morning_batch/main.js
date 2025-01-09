const async = async()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers:{
                "Content-type":"application/JSON"
            },
            body:JSON.stringify({
                userid:10,
                name:"sarath"
            })
        });
        console.log(response);
        if(!response.ok){
            throw new Error ("Unable to reach api:" ,response.status )
        }
        const newData = await response.json();
        console.log(newData);
        
    
    } catch (err) {
        console.log(err);
        
    }
}

async()
