import Btn from "./Btn";
import './App.css';
import Input from "./Input";

const App=()=>{
  return (
    <div>
        <Btn lue="Delete"/>        
        <Btn lue="edit"/>        
        <Btn lue="Submit"/>        
        <Btn lue="Login"/>        
        <Btn lue="Signup"/>        
        <Btn lue="info"/>
        <Input letters="Hello"/>
    </div>
  )
}
export default App; 