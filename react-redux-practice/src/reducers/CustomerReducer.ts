const initialState = ''

export function CustomerReducer(state = initialState, action: { type: string; payload: string }) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return action.payload
        default:
            return state
    }
}