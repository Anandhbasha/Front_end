function add (){
    return new Promise ((resolved,reject)=>{
        let reached = false;
        if(reached){
            resolved("He is Reached Safely Home:Student2")
        }else{
            reject("Not Yet Reached Home : Student2")
        }
    })
}

console.log(add());



//allSettled
//all
//race
//any
Promise.any([student1,student2]).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})
