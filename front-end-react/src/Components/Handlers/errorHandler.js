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
            }, 5000)
        }
    }

    errShowTimeout()
    
    return (
        <>
            { show && 
                <div className={`error-message ${status ? status : ''}`}>
                    {errorMessage}
                </div>
            }
        </>
    )
}


// Error: ValidationError: username: Path `username` (`dd`) is shorter than the minimum allowed length (3).
