import {Customer} from "../models/Customer.ts";
import {useSelector} from "react-redux";

export function Dashboard() {

    const customers = useSelector(state => state.customer.customers)
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="p-10 text-4xl font-light mb-6 text-gray-900">Dashboard</h1>
            </div>
            <table className="table-auto border-2 border-sky-400 w-full">
                <thead className="bg-sky-200">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer: Customer) => (
                    <tr key={customer.email}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>

        </>
    );
}