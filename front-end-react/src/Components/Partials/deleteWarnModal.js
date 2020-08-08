import React from 'react'
import { createPortal } from 'react-dom'
import DeleteForm from './deleteForm'

const modalEl = document.getElementById('modal-root')

export default function deleteWarnModal({ show, message, axiosConnection, url, method, setError, handleShowModal }) {
    return createPortal(
        <>
        { show && 
            <div>
                <div>
                    <div>{message}</div>
                    <div>
                        <button onClick={() => handleShowModal('close')}>No</button>
                        <DeleteForm 
                            axiosConnection={axiosConnection}
                            url={url}
                            method={method}
                            setError={setError}
                        />
                    </div>
                </div>
            </div>
        }
        </>
        ,
        modalEl
    )
}
