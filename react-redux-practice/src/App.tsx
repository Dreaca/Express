
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const count = useSelector(state=>state)
    const dispatch = useDispatch();
  return (
    <>
        {count}
        <br/>
      <button onClick={()=>dispatch({type:"ADD_COUNTER"})}>Increment</button>
      <button onClick={()=>dispatch({type:"REMOVE_COUNT"})}>Decrement</button>
    </>
  )
}

export default App
