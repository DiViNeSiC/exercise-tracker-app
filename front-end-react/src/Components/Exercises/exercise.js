import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteModal from '../Partials/deleteWarnModal'

export default function Exercise({ exercise, axiosConnection, setError }) {
    const [showModal, setShowModal] = useState(false)
    
    const {
        title,
        duration, 
        date,
        _id
    } = exercise

    function handleShowModal (toggleMethod) {
        if (toggleMethod === 'open') 
            return setShowModal(true)
        if (toggleMethod === 'close')
            return setShowModal(false)
    }
    
    return (
        <>
            <div className="exercise-item-container">
                <div className="exercise-title">{title}</div>
                <div className="exercise-duration">{duration}</div>
                <div className="exercise-date">{date.split('T')[0]}</div>
                <div className="exercise-buttons">
                    <Link to={`exercises/${_id}`}>Edit</Link>
                    <button onClick={() => handleShowModal('open')}>Delete</button>
                </div>
            </div>
            <DeleteModal 
                show={showModal} 
                message={'Are You Sure To Delete This Exercise ?'}
                url={`exercises/${_id}`} 
                method={'Delete'}  
                axiosConnection={axiosConnection} 
                setError={setError}
                handleShowModal={handleShowModal}
            />
        </>
    )
}
