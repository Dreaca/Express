
import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";
export function DeleteCustomer(){
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    function handleSubmit(){
        setCustomers((customers: Customer[]): Customer[] =>customers.filter((customer) => customer.email !== email));
        navigate("/");
    }
    return (
        <div>
            <h1 style={{"color": "aqua"}}>Delete Customer</h1>
            <br/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Delete Customer</button>
            <br/>
            <Link to="/">GO BACK</Link>
        </div>
    );
};

export default DeleteCustomer;