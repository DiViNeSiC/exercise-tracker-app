import React from 'react'
import Exercise from './exercise'

export default function ExerciseList({ exercises, axiosConnection, setError, error, loading }) {
    return (
        <div className="exercise-container">
            <div className="exercise-sample-container">
                <div className="sample-title">Title</div>
                <div className="sample-duration">Duration</div>
                <div className="sample-date">Date</div>
            </div>
            {exercises.length > 0 ? exercises.map(exercise => {
                return <Exercise
                            key={exercise.id} 
                            exercise={exercise} 
                            setError={setError}
                            axiosConnection={axiosConnection} 
                        />
            }) : <>{(!loading && !error) && <div className="empty-message">Your exercises are empty !</div>}</> }
        </div>
    )
}
