import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./reducer/CounterSlice.ts";

function App() {
    const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch();

    return (
        <>
            <h2>
            {count}
            </h2>

            <br />
            <br />

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default App