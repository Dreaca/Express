
import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";

export function AddCustomer(){
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(){
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers:Customer[]):Customer[] => [...customers,newCustomer]);
        navigate("/");
    }
    return (
        <div>
            <h1 style={{"color": "aqua"}}>Add Customer</h1>
            <br/>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Add Customer</button>

            <Link to="/">GO BACK</Link>
        </div>
    );
};
