/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useTypedSelector } from "../hooks/redux/useSelectedTypes"
import { SignIn } from "../pages/auth/sign-in"
import { SignUp } from "../pages/auth/sign-up"
import { Profile } from "../pages/profile"


export const Pages: React.FC = () => {

    const {token} = useTypedSelector(s => s.app)
    
    useEffect(() => {
        console.log(token)
    }, [token])
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            {

                !token&&
                <>
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </>
            }
        </Routes>
    )
}