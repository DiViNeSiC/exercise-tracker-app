import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForm from './Partials/deleteForm'

export default function Navbar({ setError, axiosConnection }) {    
    return (
        <>
            <div>
                <div>
                    <Link to="/exercises">Exercise Tracker</Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/exercises">Home</Link>
                        </li>
                        <li>
                            <Link to="/exercises/create">Create</Link>
                        </li>
                        <li>
                            <DeleteForm 
                                url={`logout`} 
                                method={'Logout'}  
                                axiosConnection={axiosConnection} 
                                setError={setError}
                            />
                        </li>
                    </ul>
                </div>            
            </div>
        </>
    )
}
