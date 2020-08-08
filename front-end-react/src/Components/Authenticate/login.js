import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from '../Partials/userFormFields'
import userInfoPost from './userInfoPost'

export default function Login({ setError, axiosConnection }) {
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    useEffect(() => {
        authorization()
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()

        const username = usernameInputRef.current.value
        const password = passwordInputRef.current.value

        const response = await userInfoPost(axiosConnection, username, password, 'login')
        
        usernameInputRef.current.value = ''
        passwordInputRef.current.value = ''
        
        if (response.error) {
            return setError({
                show: true,
                status: 'danger',
                message: response.error
            })
        }

        if (response.success.data.token) {
            return onSuccess(response.success.data.token)
        }
    }

    async function authorization() {
        try {
            await axiosConnection.get('/login')
            window.location = '/exercises'    
        } catch {}
    }

    function onSuccess(token) {
        localStorage.setItem('JWT_TOKEN', token)
        window.location = '/exercises'
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <UserFormFields
                    usernameInputRef={usernameInputRef} 
                    passwordInputRef={passwordInputRef} 
                />
                <div>
                    <button type="submit" >Login</button>
                </div>
                <div>
                    Don't Have An Account ? 
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}
