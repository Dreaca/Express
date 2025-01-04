import {configureStore} from "@reduxjs/toolkit";
import NameSlice from "../reducer/NameSlice.ts";

export const store = configureStore({
    reducer: {
        test : NameSlice
    }
    }
)