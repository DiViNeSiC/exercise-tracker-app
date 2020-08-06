import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForm from './Partials/deleteForm'

export default function Exercise({ title, duration, date, id }) {
    return (
        <div className="exercise-item-container">
            <div className="exercise-title">{title}</div>
            <div className="exercise-duration">{duration}</div>
            <div className="exercise-date">{date.split('T')[0]}</div>
            <div className="exercise-buttons">
                <Link to={`exercises/${id}`}>Edit</Link>
                <DeleteForm url="/exercises" formAction="Delete" />
            </div>
        </div>
    )
}
