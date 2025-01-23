import { useState } from "react"

const App = ()=>{
  let [c,setC]= useState(5)

  // const value = [10,15,50] 

function handleClick(){
  setC(++c)
}
const handleMinus=()=>{
  setC(--c);
}
const handleReset=()=>{
  setC(c=0)
}
 return (
  <div className="button">
    <table>

    </table>
    <button onClick={handleClick}>Add is {c}</button>
    <button onClick={handleMinus}>Minus is {c}</button>
    <button onClick={handleReset}>Reset is {c}</button>
  </div>
 )
}
export default App