/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Paper, TextField } from "@mui/material"
import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useActions } from "../../hooks/redux/useActions"
import { useTypedSelector } from "../../hooks/redux/useSelectedTypes"
import validator from 'validator'
import { useHttp } from "../../hooks/http"
import { IUserData } from "../../interfaces/intex"
import { setToken } from "../../store/app/action"

export const SignUp: React.FC = (): any => {

    const form = useTypedSelector(s => s.form)

    const navigate = useNavigate()

    const {setEmail, setPassword, setFormError} = useActions()

    const http = useHttp()

    useEffect(() => {
        return () => {
            setEmail('')
            setPassword('')
        }
    }, [])

    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if(!validator.isEmail(form.email)) { 
            return setFormError({...form.error, name: false, email: true}, 'Неверный email')
        }
        setFormError({...form.error, email: null})
        if(!validator.isLength(form.password, {min:4})) {
            return setFormError({name:false, email: false, password: true}, 'Длина пароля должна быть не менее 4 символов')
        }

        setFormError({})

        const res: IUserData = await http('/auth/register', "POST" ,{...form})
        if(res) {
            setToken(res.access_token)
            navigate("/profile")
        }

    }

    return (
        <div className="bg-light w-100 d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            

            <Paper elevation={6} className="w-25 py-5 px-4">
                <h2 className="py-3 text-muted text-center">
                    Регистрация
                </h2>
                <form className="d-flex flex-column"
                    onSubmit={handleRegister}
                 >
                    <TextField error={form.error.email} id="standard-basic12" type="email" value={form.email} onChange={e => setEmail(e.target.value)} label="Email" className="mt-3" variant="standard" />
                    <TextField error={form.error.password} id="standard-basic23" type="password" value={form.password} onChange={e => setPassword(e.target.value)} label="Пароль" className="mt-3" variant="standard" />
                    <Button variant="contained" type="submit" className="mt-4 bg-dark" onClick={handleRegister}>
                        Регистрация
                    </Button>
                    <Link 
                        to="/"
                        className="text-end text-muted d-flex justify-content-end w-100 pt-1"
                        style={{fontSize:"0.9rem", fontWeight:200}}
                        >Уже есть аккаунт?</Link> 
                </form>

            </Paper>

        </div>
    )
}