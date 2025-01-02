
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const count = useSelector(state=>state.count)
    const dispatch = useDispatch();
    const visible = useSelector(state=>state.visibility)
  return (
    <>
        <div>
            {visible && count}
        </div>
        <br/>
      <button onClick={()=>dispatch({type:"ADD_COUNTER"})}>Increment</button>
      <button onClick={()=>dispatch({type:"REMOVE_COUNT"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>Toggle</button>
    </>
  )
}

export default App
