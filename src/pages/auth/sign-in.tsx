/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Paper, TextField } from "@mui/material"
import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useActions } from "../../hooks/redux/useActions"
import { useTypedSelector } from "../../hooks/redux/useSelectedTypes"
import validator from 'validator'
import { IUserData } from "../../interfaces/intex"
import { useHttp } from "../../hooks/http"


export const SignIn: React.FC = (): any => {

    const form = useTypedSelector(s => s.form)
    const {setEmail,setPassword, setFormError, setToken} = useActions()

    const navigate = useNavigate()

    const http = useHttp()

    useEffect(() => {
        return () => {
            setEmail('')
            setPassword('')
        }
    }, [])

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if(!validator.isEmail(form.email))
            return setFormError({...form.error, email: true}, 'Неверный email')
        if(!validator.isLength(form.password, {min:4}))
            return setFormError({...form.error, password: true}, 'Длина пароля должна быть не менее 4 символов')

        const res: IUserData = await http("/auth/login", "POST", {email: form.email, password: form.password})
        
        if(res) {
            setToken(res.access_token)
            navigate("/profile")
        }
    }

    return (
        <div className="bg-light w-100 d-flex justify-content-center align-items-center" style={{height: "100vh"}}>

            <Paper elevation={6} className="w-25 py-5 px-4">
                <h2 className="py-3 text-muted text-center">
                    Вход
                </h2>
                <form className="d-flex flex-column" onSubmit={handleLogin}>
                    <TextField id="standard-basic" type="email" value={form.email} onChange={e => setEmail(e.target.value)} label="Email"  variant="standard" />
                    <TextField id="standard-basic2" type="password" value={form.password} onChange={e => setPassword(e.target.value)} label="Пароль" className="mt-3" variant="standard" />
                    <Button variant="contained" type="submit" className="mt-4 bg-dark" onClick={handleLogin}>
                        Вход
                    </Button>
                    <Link 
                        to="/register"
                        className="text-end text-muted d-flex justify-content-end w-100 pt-1"
                        style={{fontSize:"0.9rem", fontWeight:200}}
                        >У вас еще нет аккаунта?</Link> 
                </form>

            </Paper>

        </div>
    )
}