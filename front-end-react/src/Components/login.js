import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="login-form-row">
                    <input type="text" />
                    <input type="password" />
                </div>
                <div className="login-form-row">
                    <button type="submit" >Login</button>
                </div>
                <div className="login-form-row">
                    Don't Have An Account ? 
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}
