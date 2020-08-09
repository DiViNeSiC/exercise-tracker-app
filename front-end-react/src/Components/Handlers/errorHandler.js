import React from 'react'

export default function ErrorHandler({ setError, show, status, message }) {
    let errorMessage
    if (message) {
        errorMessage = 
                message.data ?  
                message.data.errorMessage : 
                message.message
    }

    const errShowTimeout = () => {
        if (show) {
            setTimeout(() => {
                setError({ show: false })
            }, 7000)
        }
    }

    errShowTimeout()
    
    return (
        <div className={`error-message ${status ? status : ''} ${show ? '' : 'hide'}`}>
            {errorMessage}
        </div>
    )
}