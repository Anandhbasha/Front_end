import Info from "./Info";

const App = ()=>{
  const details = {
    name:"sathosh",
    age:26,
    Gender:"Male",
    Location:"CBE"
  }
  
  
  return (
    <div className="App">
      {/* <Button value="click"/>
      <Button value="Delete"/>
      <Button value="Edit"/>
      <Button value="Save"/>
      <Button value="Update"/>
      <Button value="Cancel"/>
      <Button value="Sign IN"/> */}
      {/* <Info name={details.name} a={details.age} g={details.Gender} l = {details.Location}/> */}
     <Info  {...details} />
       
    </div>
    
  )
}
export default App;