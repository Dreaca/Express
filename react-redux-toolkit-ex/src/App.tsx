import { useState } from 'react'

import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {setText} from "./reducer/NameSlice.ts";

function App() {
    const [name,setname] = useState('')

    const printName = useSelector(state => state.name.text)

    const dispatch = useDispatch()
  return (
    <>
        <input type="text" placeholder="Enter name " onChange={e => setname(e.target.value)} />
        <button onClick={()=>dispatch(setText(name))}>Submit</button>
        <br/>
        {printName}
    </>
  )
}

export default App
