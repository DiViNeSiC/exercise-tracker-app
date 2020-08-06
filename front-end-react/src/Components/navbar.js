import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForm from './Partials/deleteForm'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-brand">
                <Link to='/'>Exercise Tracker</Link>
            </div>
            <div className="navbar-collapse">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/exercises/create">Create Exercise</Link>
                    </li>
                    <li className="navbar-item">
                        <DeleteForm url="/logout" formAction="Logout" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
