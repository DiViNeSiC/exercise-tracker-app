import React from 'react'
import { Link } from 'react-router-dom'
import DeleteForm from '../Partials/deleteForm'

export default function Exercise({ exercise, axiosConnection }) {
    const {
        title,
        duration, 
        date,
        _id
    } = exercise
    
    return (
        <div className="exercise-item-container">
            <div className="exercise-title">{title}</div>
            <div className="exercise-duration">{duration}</div>
            <div className="exercise-date">{date.split('T')[0]}</div>
            <div className="exercise-buttons">
                <Link to={`exercises/${_id}`}>Edit</Link>
                <DeleteForm axiosConnection={axiosConnection} url={`exercises/${_id}`} method="Delete" />
            </div>
        </div>
    )
}
