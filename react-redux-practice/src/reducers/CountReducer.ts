const initialState = 0

export function CountReducer(state = initialState, action : {type: string, payload : number}) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + action.payload
        case 'REMOVE_COUNT':
            return state - action.payload
        default:
            return state
    }
}