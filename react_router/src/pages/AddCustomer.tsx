import {useNavigate} from "react-router";
import {useState} from "react";
import {Customer} from "../models/Customer.ts"
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {saveCustomer} from "../reducer/CustomerSlice.ts";
import {AppDispatch} from "../store/Store.ts";

export function AddCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch(saveCustomer(newCustomer));
        navigate('/');
    }

    return (
        <>
            <header className="flex flex-col items-center mt-5"><h2 className="font-light text-4xl">Add Customer</h2></header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} >Add Customer</Modal>
        </>
    );
}