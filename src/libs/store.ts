export const initialState = {
    authenticated: false,
    token: null
}

export function reducer(state:any, action:any) {
    switch(action.type) {
        case 'SET_TOKEN': return { ...state, token: action.token, authenticated: action.result }
        default: return state
    }
}