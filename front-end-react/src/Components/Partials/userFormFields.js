import React from 'react'

export default function UserFormFields({ usernameInputRef, passwordInputRef }) {
    return (
        <div>
            <input ref={usernameInputRef} type="text" />
            <input ref={passwordInputRef} type="password" />
        </div>
    )
}
