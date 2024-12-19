
import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(){
        const newCusotomers = customers.map((customer: Customer) => customer.email === email?{...customer,  name:name, email:email, phone:phone}:customer);
        setCustomers(newCusotomers)
        navigate("/");
    }
    return (
        <div>
            <h1 style={{"color": "aqua"}}>Update Customer</h1>
            <div>
                <br/>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                <br/>
                <button onClick={handleSubmit}>Update Customer</button>

                <Link to="/">GO BACK</Link>
            </div>
            <br/>
            <Link to="/">GO BACK</Link>
        </div>
    );
};

export default UpdateCustomer;