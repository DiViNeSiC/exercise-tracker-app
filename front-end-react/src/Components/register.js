import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <div className="login-container">
            <h2>Register</h2>
            <form className="login-form">
                <div className="login-form-row">
                    <input type="text" />
                    <input type="password" />
                </div>
                <div className="login-form-row">
                    <button type="submit" >Register</button>
                </div>
                <div className="login-form-row">
                    Already Have An Account ? 
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    )
}
