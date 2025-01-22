import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice, {saveCustomer} from "../reducer/CustomerSlice.ts";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        customer : CustomerSlice
    }
})
export type AppDispatch =typeof store.dispatch
