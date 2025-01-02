const initialState = {
    count: 0,
    visibility:true
}

export function CountReducer(state = initialState, action : {type: string, payload : string}) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {...state, count: state.count + 1 }
        case 'REMOVE_COUNT':
            return {...state, count: state.count - 1 }
        case 'HIDE':
            return {...state, visibility: !state.visibility}
        default:
            return state
    }
}