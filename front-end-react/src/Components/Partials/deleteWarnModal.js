import React from 'react'
import { createPortal } from 'react-dom'
import DeleteForm from './deleteForm'

const modalEl = document.getElementById('modal-root')

export default function deleteWarnModal({ show, message, axiosConnection, url, method, setError, handleShowModal }) {
    return createPortal(
        <>
        { show && 
            <div className="modal-container">
                <div className="modal">
                    <div className="message">{message}</div>
                    <div className="buttons">
                        <DeleteForm 
                            axiosConnection={axiosConnection}
                            url={url}
                            method={method}
                            setError={setError}
                        />
                        <button className="btn no-btn" onClick={() => handleShowModal('close')}>No</button>
                    </div>
                </div>
            </div>
        }
        </>
        ,
        modalEl
    )
}
