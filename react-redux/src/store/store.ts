import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "../reducer/CounterSlice.ts";

export const store = configureStore(
    {
        reducer: {
            counter: CounterSlice
        }
    }
)