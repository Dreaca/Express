
import './App.css'
import ButtonComponent from "./components/ButtonComponent.tsx";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }
  return (
      <>
          <ButtonComponent onClick={handleClick}>Count is {count}</ButtonComponent>
      </>
  )
}

export default App
