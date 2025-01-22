import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

  const api= axios.create({
    baseURL: 'http://localhost:3000',
  })

    // async function getAPI(){
    //   const response = await fetch('http://localhost:3000/get')
    //     const data = await response.text()
    //     console.log(data)
    // }
    async function getAPI(){
      const response = await api.get('/get')
      console.log(response.data)
    }
    async function postAPI(){

      const customer = {
        'name':"Buddhika",
        'email':"buddhika@gmail.com",
        'phone':"1234567890"
      };

      const response = await api.post('/post',customer);

      console.log(response.data)
    }

    useEffect(() => {
        getAPI();
        postAPI();
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
