import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteModal from './Partials/deleteWarnModal'

export default function Navbar({ setError, axiosConnection }) { 
    const [showModal, setShowModal] = useState(false)
    
    function handleShowModal (toggleMethod) {
        if (toggleMethod === 'open') 
            return setShowModal(true)
        if (toggleMethod === 'close')
            return setShowModal(false)
    }

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-header">
                    <Link to="/exercises">Exercise Tracker</Link>
                </div>
                <div className="navbar-list-container">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className="link" to="/exercises">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="link" to="/exercises/create">Create</Link>
                        </li>
                        <li className="navbar-item">
                            <button className="link" onClick={() => handleShowModal('open')}>Logout</button>
                        </li>
                    </ul>
                </div>            
            </div>
            <DeleteModal 
                show={showModal} 
                message={'Are You Sure That ?'}
                url={`logout`} 
                method={'Logout'}  
                axiosConnection={axiosConnection} 
                setError={setError}
                handleShowModal={handleShowModal}
            />
        </>
    )
}
