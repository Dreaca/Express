import {useNavigate} from "react-router";
import {useState} from "react";

import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {Customer} from "../models/Customer.ts";
import {updateCustomer} from "../reducer/CustomerSlice.ts";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch(updateCustomer(updatedCustomer));
        navigate('/');
    }

    return (
        <>
            <header className="flex flex-col items-center mt-5"><h2 className="font-light text-4xl">Update Customer</h2>
            </header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Update Customer</Modal>
        </>
    );
}