import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0,
}

const CounterSlice = createSlice(
    {
        name: 'counter',
        initialState: initialState,
        reducers:{
            increment:(state) => {
                state.count++;
            },
            decrement:(state) => {
                state.count--;
            }
        }
    }
)

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;