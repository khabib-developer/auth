import React, { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import { Navbar } from "../../components/Navbar"
import { useAuth } from "../../hooks/auth"

export const Profile: React.FC = (): any => {

    const [a, seta] = useState<boolean>(false)
    const auth = useAuth()

    useEffect(() => {
        (async function() {
            const res = await auth()
            seta(res)
        }())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(!a) return <Loader />
    
    return (
        <div className="bg-light w-100" style={{minHeight:"100vh"}}>
            <Navbar />            
        </div>
    )
}