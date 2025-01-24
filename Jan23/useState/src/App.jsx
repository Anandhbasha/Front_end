import React from 'react'
import { useState } from 'react'

const App = () => {
  let [c,setC] = useState(0)
  function handleAdd(){
    setC(++c);
  }
  const handleMinus = ()=>{
    setC(--c);
  }
  const handleReset = ()=>{
    setC(0)
  }
  return (
    <div className='App'>
        <button onClick={handleAdd}>Adding Count{c}</button>
        <button onClick={handleMinus}>Minus Count{c}</button>
        <button onClick={handleReset}>Reset Count{c}</button>
    </div>
  )
}

export default App