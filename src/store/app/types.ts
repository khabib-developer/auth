
export enum AppActionTypes {
    APP_TOKEN = "APP_TOKEN",
    APP_USER = "APP_USER",
    APP_LOADING = "APP_LOADING",
    APP_ERROR = "APP_ERROR",
    APP_WARNING = "APP_WARNING",
    APP_INFO = "APP_INFO",
    APP_SUCCESS = "APP_SUCCESS",
}

export interface AppTokenAction {
    type: AppActionTypes.APP_TOKEN
    payload: string
}

export interface AppLoadingAction {
    type: AppActionTypes.APP_LOADING
    payload: boolean
}

export interface AppErrorAction {
    type: AppActionTypes.APP_ERROR
    payload: string | null
}

export interface AppInfoAction {
    type: AppActionTypes.APP_INFO
    payload: string | null
}

export interface AppSuccessAction {
    type: AppActionTypes.APP_SUCCESS
    payload: string | null
}

export interface AppWarningAction {
    type: AppActionTypes.APP_WARNING
    payload: string | null
}



export type AppAction = AppTokenAction | AppWarningAction | AppLoadingAction | AppErrorAction | AppInfoAction | AppSuccessAction



