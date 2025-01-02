import {useReducer, useState} from 'react'

import './App.css'
import {NameReducer} from "./reducer/NameReducer.ts";
import {Customer} from "./models/Customer.ts";

const initialState : Customer[] =[]

function App() {
  const [customers, dispatch] = useReducer(NameReducer,initialState)
    const [name, setFirstName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    function handleSubmit(){
        const customer = new Customer(name,address,phone)
      dispatch({type:"ADD_CUSTOMER",payload:customer})
  }
  function handleDelete(){
      dispatch({type:"REMOVE_CUSTOMER",payload:{name:"",address:"",phoneNumber:""}})
  }
  function handleUpdate(){
      const customer = new Customer(name,address,phone)
      dispatch({type:"UPDATE_CUSTOMER",payload:customer})
  }
  return (
    <>
        <input type="text" placeholder="First Name" id="fistName" onChange={(e)=>setFirstName( e.target.value) } />
        <input type="text" placeholder="Address" id="lastName" onChange={(e)=>setAddress( e.target.value) } />
        <input type="text" placeholder="Phone No" id="lastName" onChange={(e)=>setPhone( e.target.value) } />
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
        <br/>
    <h1>{customers.map((customer: Customer) => (
        <div key={customer.name}>{customer.name + ' ' + customer.address + ' ' + customer.phoneNumber}</div>))}</h1>
    </>
  )
}

export default App
