import {createContext, useState} from "react";
import {Customer} from "../Model/Customer.ts";

export const CustomerContext = createContext();

export function CustomerProvider  ({children}) {

    const [customers, setCustomer] = useState<Customer[]>([]);
    return (
        <div>
            <CustomerContext.Provider value={[customers, setCustomer]}>
                {children}
            </CustomerContext.Provider>
        </div>
    );
};

