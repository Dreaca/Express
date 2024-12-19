
import {useContext} from "react";
import {CustomerContext} from "../component/CustomerProvider.tsx";
import {Customer} from "../Model/Customer.ts";

export function Dashboard(){
    const [customers, setCustomer] = useContext(CustomerContext);
    return (
        <div>
            <h1 style={{"color":"aqua"}}>Dashboard</h1>
            <br/>
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </div>
    );
};

export default Dashboard;