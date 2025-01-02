import {combineReducers, createStore} from "redux";
// import {CountReducer} from "../reducers/CountReducer.ts"
import {CustomerReducer} from "../reducers/CustomerReducer.ts"
import {ItemReducer} from "../reducers/ItemReducer.ts"
const rootReducer = combineReducers({
    customer:CustomerReducer,
    item:ItemReducer
})
export const store = createStore(rootReducer);