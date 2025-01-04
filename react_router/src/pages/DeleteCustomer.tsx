import {useNavigate} from "react-router";
import {useState} from "react";

import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {deleteCustomer} from "../reducer/CustomerSlice.ts";
import {Customer} from "../models/Customer.ts";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handleSubmit() {
        // setCustomers((customers: Customer[]) => customers.slice(0,-1));
       const del = new Customer(name,email,phone)
        dispatch(deleteCustomer(del));
        navigate('/');
    }

    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Delete Customer</Modal>
        </>
    );
}