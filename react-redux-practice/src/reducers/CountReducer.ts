const initialState = 0

export function CountReducer(state = initialState, action : {type: string, payload : number}) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return state + 1
        case 'REMOVE_COUNT':
            return state - 1
        default:
            return state
    }
}