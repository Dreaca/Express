import {Customer} from "../model/Customer";

const  customers:Customer[] = []

export function addCustomer (customer:Customer) {
    customers.push(customer)
    console.log(customers)
}
export function showCustomers(){
    return customers;
}