// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dispatch } from "redux";
import { AppActionTypes } from "./types";

export const setToken = (payload: string | null) => {
    if(payload) {
        localStorage.setItem('token', payload)
        
    } else {
        localStorage.removeItem("token")
    }
    return {
        type: AppActionTypes.APP_TOKEN,
        payload
    }
}



export const setLoading = (payload: boolean) => {
    return {
        type: AppActionTypes.APP_LOADING,
        payload
    }
}

export const setError = (payload: string | null) => {
    return {
        type: AppActionTypes.APP_ERROR,
        payload
    }
}

export const setInfo = (payload: string | null) => {
    return {
        type: AppActionTypes.APP_INFO,
        payload
    }
}

export const setWarning = (payload: string | null) => {
    return {
        type: AppActionTypes.APP_WARNING,
        payload
    }
}

export const setSuccess = (payload: string | null) => {
    return {
        type: AppActionTypes.APP_SUCCESS,
        payload
    }
}
