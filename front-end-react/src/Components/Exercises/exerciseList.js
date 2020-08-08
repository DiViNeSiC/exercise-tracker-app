import React from 'react'
import Exercise from './exercise'

export default function ExerciseList({ exercises, axiosConnection }) {
    return (
        <div>
            {exercises.length > 0 ? exercises.map(exercise => {
                return <Exercise
                            key={exercise.id} 
                            exercise={exercise} 
                            axiosConnection={axiosConnection} 
                        />
            }) : <div>Your exercises are empty !</div> }
        </div>
    )
}
