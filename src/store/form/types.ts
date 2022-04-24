
export enum FormActionTypes {
    FORM_EMAIL = "FORM_EMAIL",
    FORM_PASSWORD = "FORM_PASSWORD",
    FORM_ERROR = 'FORM_ERROR'
}

interface FormEmailAction {
    type: FormActionTypes.FORM_EMAIL
    payload: string
}

interface FormPasswordAction {
    type: FormActionTypes.FORM_PASSWORD
    payload: string
}

interface FormErrorAction {
    type: FormActionTypes.FORM_ERROR
    payload: string
}

export type FormAction =  FormEmailAction | FormPasswordAction | FormErrorAction


