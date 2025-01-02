import {useReducer} from 'react'

import './App.css'
import { CountReducer } from './reducers/CountReducer.ts'
const initialState = 0

function App() {
  const [count, dispatch] = useReducer(CountReducer, initialState)

  return (
    <>
        <h1>{count}</h1>
        <br/>
        <button onClick={():void => dispatch({type: 'ADD_COUNTER', payload:1})}>Increment</button>
        <button onClick={():void => dispatch({type:'REMOVE_COUNT',payload:1})}>Decrement</button>
    </>
  )
}

export default App
