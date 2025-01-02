import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    text :"",
}
const NameSlice = createSlice({
    name :'Name',
    initialState : initialState,
    reducers:{
        setText :(state,{payload})=>{
            state.text = payload
        }
    }
})
export const {setText} = NameSlice.actions;
export default NameSlice.reducer;