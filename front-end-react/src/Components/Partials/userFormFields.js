import React from 'react'

export default function UserFormFields({ usernameInputRef, passwordInputRef }) {
    return (
        <div className="form-row form-field">
            <div>
                <label>Username</label>
                <input placeholder='Username' ref={usernameInputRef} type="text" />
            </div>
            <div>
                <label>Password</label>
                <input placeholder='Password' ref={passwordInputRef} type="password" />
            </div>
        </div>
    )
}
