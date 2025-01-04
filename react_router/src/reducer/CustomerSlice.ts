import {Customer} from "../models/Customer.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customers:[],
}
const CustomerSlice = createSlice({
    name: "Customer",
    initialState : initialState,
    reducers:{
        addCustomer (state, action){
            state.customers.push(action.payload)
        },
        deleteCustomer (state, action){
            state.customers.splice(state.customers.indexOf(action.payload), 1)
        },
        updateCustomer (state, action){
            state.customers.map((customer:Customer) =>customer.email === action.payload.email?
            state.customers.push(action.payload):customer)
        }
    }
})
export const {addCustomer, deleteCustomer,updateCustomer} = CustomerSlice.actions;
export default CustomerSlice.reducer;