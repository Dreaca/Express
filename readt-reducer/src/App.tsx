import {useReducer} from 'react'

import './App.css'
const initialState = 0

function CountReducer(state = initialState, action : {type: string, payload : number}) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + action.payload
        case 'REMOVE_COUNT':
            return state - action.payload
        default:
            return state
    }
}
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
