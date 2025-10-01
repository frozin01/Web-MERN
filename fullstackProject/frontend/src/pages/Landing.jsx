import { CreateUser } from "../components/CreateUser"
import { Login } from "../components/Login"
import { useState } from "react"

export function Landing() {

    const [view, setView] = useState(0)

    return (
        <>
            {!view ? 
            <>
                <Login/>
                <button onClick={() => setView(!view)}>Create New Account</button>
            </> : 
            <>
                <CreateUser/>
                <button onClick={() => setView(!view)}>Login Existing Account</button>
            </>}
        </>
    )
}