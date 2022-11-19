import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../ctx/AuthProvider";

import axios from "axios";
const LOGIN_URL = '/auth'

const Login = () => {

    const {setAuth} = useContext(AuthContext)

    const userRef = useRef()
    const errRef = userRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), {headers: {'Content-Type': 'application/json'}, withCredentials: true})

            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
            setAuth({user, pwd, roles, accessToken})
            setUser('')
            setPwd('')
            setSuccess(true)
        } catch(error) {
            setErrMsg('Login unsuccessful')
            errRef.current.focus()
        } 
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
                    <h1>Sign in</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" ref={userRef} autoComplete="off" onChange={(e) => { setUser(e.target.value) }} value={user} required></input>

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={(e) => { setPwd(e.target.value) }} value={pwd} required></input>

                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*router link*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login