import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserFormFields from '../Partials/userFormFields'
import userInfoPost from './userInfoPost'

export default function Register({ setError, axiosConnection }) {
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    useEffect(() => {
        authorization()
    }, [])

    const handleRegister = async (e) => {
        e.preventDefault()

        const username = usernameInputRef.current.value
        const password = passwordInputRef.current.value

        const response = await userInfoPost(axiosConnection, username, password, 'register')
        
        usernameInputRef.current.value = ''
        passwordInputRef.current.value = ''

        if (response.error) {
            return setError({
                show: true,
                status: 'danger',
                message: response.error
            })
        }

        window.location = '/login'
    }

    async function authorization() {
        try {
            const authResult = await axiosConnection.get('/register')
            window.location = '/exercises'    
        } catch {}
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <UserFormFields
                    usernameInputRef={usernameInputRef} 
                    passwordInputRef={passwordInputRef} 
                />
                <div>
                    <button type="submit" >Register</button>
                </div>
                <div>
                    Already Have An Account ? 
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}
