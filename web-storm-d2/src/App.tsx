import './App.css'
import React from "react";
import {Customer} from "./models/Customer.ts";

function App() {
    // const [customer, setCustomer] = React.useState({
    //     firstName: "",
    //     lastName: "",
    // });
    // const [firstName, setFirstName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");
    //
    // function handleOnChange() {
    //     setCustomer(
    //         {
    //             ...customer,
    //             firstName: firstName,
    //             lastName: lastName,
    //         })
    // }
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    function addCustomer(){
        const newCustomer = new Customer(name, email, phone);
        setCustomers(
            (customers: Customer[]): Customer[] =>[...customers,newCustomer],

        )
    }
    function deleteCustomer(){
      setCustomers((customers: Customer[]): Customer[] =>customers.slice(0,-1))
    }
    function deleteByEmail(){
        setCustomers((customers: Customer[]): Customer[] =>customers.filter((customer) => customer.email !== email));
    }
    function updateByEmail(){
        const newCusotomers = customers.map((customer: Customer) => customer.email === email?{...customer,  name:name, email:email, phone:phone}:customer);
        setCustomers(newCusotomers)

        //setCustomers((customers:Customer[]) =>customers.map((customer)=>customer.email===email?new Customer(name,email,phone):customer));
    }
    return (
        <>
            {/*<input type="text" name="firstName" placeholder="First Name"
                   onChange={(event) => (setFirstName(event.target.value))}/>
            <input type="text" name="lastName" placeholder="Last Name"
                   onChange={(event) => (setLastName(event.target.value))}/>
            <br/>
            <button onClick={handleOnChange}>Submit</button>
            <br/>}
            {{customer.firstName + " " + customer.lastName}*/}
            <input type="text" className='textField' placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}   />
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <br/>
            <button className='button' onClick={addCustomer} key={email}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmail}>Delete By Email</button>
            <button onClick={updateByEmail}>Update Customer</button>
            <br/>
            {customers.map(customer => (
                <div key={customer.email}>
                    {customer.name + " : " + customer.email + " : " + customer.phone}
                </div>
            ))}
        </>
    )
}

export default App
