// import Cards from "./Cards";
// import   "./App.css";
// import Info from "./Info";
// const person = {
//   name:"Poomani",
//   age:23,
//   Degree:"B.TECH IT",
//   Location:"Aalathu Kombai"
// }
// const arr = [10,20,30,40,50]
// const name ="Muthu"
//rest operator
// const {name,age,...other} = person;
// console.log(other);

import { useState } from "react";


// const newSpread = {...person}
// console.log(newSpread);


const [d,setD]= useState(0);
function handleClick(){    
  setD(2);
  
}

const App = ()=>{
 
  return (
    <div className="App">
      {/* <Info name={person.name} a={person.age} d={person.Degree} l={person.Location} marks1= {arr[0]} names= {name}/> */}
      {/* <Info {...person}/> */}
        <button onClick={handleClick}>{d}</button>
  </div>
  )
}
export default App;