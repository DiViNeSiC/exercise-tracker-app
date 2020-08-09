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
        <div className="user-form-container">
            <h2 className="user-form-header">Register</h2>
            <form className="user-form-main" onSubmit={handleRegister}>
                <UserFormFields
                    usernameInputRef={usernameInputRef} 
                    passwordInputRef={passwordInputRef} 
                />
                <div className="form-row">
                    <button className="btn log-btn" type="submit" >Register</button>
                </div>
                <div className="form-row option-selector">
                    Already Have An Account ? 
                    <Link className="form-link" to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}
