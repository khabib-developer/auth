import { AppAction, AppActionTypes } from "./types"

interface appState {
    server: string,
    token: string | null,
    loading: boolean,
    info: string | null,
    warning: string | null,
    success: string | null,
    error: string | null,
}

const initialState: appState = {
    server: 'http://localhost:8000',
    token: localStorage.getItem('token'),
    loading: false,
    success: null,
    warning: null,
    info: null,
    error: null
}


export const appReducer = (state = initialState, action: AppAction): appState => {
    switch(action.type) {
        case AppActionTypes.APP_TOKEN:
            return {...state, token: action.payload}
        case AppActionTypes.APP_LOADING:
            return {...state, loading: action.payload}
        case AppActionTypes.APP_INFO:
            return {...state, info: action.payload}
        case AppActionTypes.APP_WARNING:
            return {...state, warning: action.payload}
        case AppActionTypes.APP_SUCCESS:
            return {...state, success: action.payload}
        case AppActionTypes.APP_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}