
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const count = useSelector(state=>state)
    const dispatch = useDispatch();
  return (
    <>
        {count}
        <br/>
      <button>Increment</button>
      <button>Decrement</button>
    </>
  )
}

export default App
