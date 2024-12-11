
import './App.css'
import ButtonComponent from "./components/ButtonComponent.tsx";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);

    function handleClick(type:number) {
        setCount(count+type);
    }


  return (
      <>
          <h2>Count is {count}</h2>
          <ButtonComponent onClick={handleClick} name={1}>Add +1</ButtonComponent>
          <ButtonComponent onClick={handleClick} name={-1}>Add -1</ButtonComponent>
      </>
  )
}

export default App
