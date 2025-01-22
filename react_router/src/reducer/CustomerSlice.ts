import {Customer} from "../models/Customer.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    customers:[],
}
const api = axios.create({
    baseURL: 'http://localhost:3000',
})
export const saveCustomer = createAsyncThunk(
    "customer/saveCustomer",
    async (customer:Customer)=>{
        try{
            const response = await api.post('/add',customer)
            return response.data;
        }catch (err){
            console.log(err)
        }
    }
)
const CustomerSlice = createSlice({
    name: "Customer",
    initialState : initialState,
    reducers:{
        addCustomer (state, action){
            state.customers.push(action.payload)
        },
        deleteCustomer (state,action){
            const index = state.customers.findIndex((customer:Customer) => customer.email === action.payload.email);
            if (index !== -1) {
                state.customers.splice(index, 1);
            }
        },
        updateCustomer (state, action){
            const index = state.customers.findIndex((customer:Customer) => customer.email === action.payload.email);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        }
    },extraReducers:(builder)=>{
        builder
        .addCase(saveCustomer.pending, (state, action)=>{
            console.log("Customer is loading")
        })
        .addCase(saveCustomer.rejected, (state, action)=>{
            console.log("Customer is rejected")
        })
            .addCase(saveCustomer.fulfilled, (state, action)=>{
               state.customers.push(action.payload)
            })
    }
})
export const {addCustomer, deleteCustomer,updateCustomer} = CustomerSlice.actions;
export default CustomerSlice.reducer;