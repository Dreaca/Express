import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("render")
    },[count2])
  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          <button onClick={() => setCount2((count2) => count2 + 1)}>
              Button two {count2}
        </button>
      </div>
    </>
  )
}

export default App
