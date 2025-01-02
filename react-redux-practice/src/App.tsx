
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {
    // const count = useSelector(state=>state.count)
    const customer = useSelector(state => state.customer)
    const item = useSelector(state => state.item)
    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState<string>();
    const [itemName, setItemName] = useState<string>();
    // const visible = useSelector(state=>state.visibility)
  return (
    <>
        <input type="text" placeholder="Customer name" onChange={(e) => setCustomerName(e.target.value)} value={customerName} />
        <button onClick={()=> {
            dispatch({type: "ADD_CUSTOMER", payload: customerName});
            setCustomerName("");
        }}>Submit</button>
        <br/>
        <input type="text" placeholder="Item Name" onChange={(e) => setItemName(e.target.value)} value={itemName} />
        <button onClick={()=> {
            dispatch({type: "ADD_ITEM", payload: itemName});
            setItemName("")
        }}>Submit</button>
        <br/>
        {customer}
        <br/>
        {item}
    </>
  )
}

export default App
