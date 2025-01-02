import {Customer} from "../models/Customer.ts";

const initialState : Customer[] = []

export function NameReducer(state = initialState, action: {type: string; payload: Customer})
{
        switch (action.type) {
            case "ADD_CUSTOMER":
                return [...state, action.payload]
            case "REMOVE_CUSTOMER":
                return state.slice(0, state.length - 1)
            case "UPDATE_CUSTOMER":
                state.forEach((customer: Customer) => {
                    if (customer.name === action.payload.name) {
                        customer = action.payload
                        state.push(customer)
                    }
                })
                return state;
            default:
                return state;
        }
}
