import React from 'react'
import Exercise from './exercise'

export default function ExerciseList({ exercises, axiosConnection, setError, error, loading }) {
    return (
        <div className="exercise-container">
            {exercises.length > 0 ? exercises.map(exercise => {
                return <>
                            <div className="exercise-sample-container">
                                <div className="sample-title">Title</div>
                                <div className="sample-duration">Duration</div>
                                <div className="sample-date">Date</div>
                            </div>
                            <Exercise
                                key={exercise.id} 
                                exercise={exercise} 
                                setError={setError}
                                axiosConnection={axiosConnection} 
                            />
                    </>
            }) : <>
                    {(!loading.show && !error.show) && 
                        <div className="empty-message">
                            Your exercises are empty !
                        </div>}
                </> 
            }
        </div>
    )
}
