import React from 'react'

export default function LoadingHandler({ show, message }) {
    return (
        <>
            { show && 
                <div className='loading-message'>
                    {message}
                </div>
            }
        </>
    )
}
