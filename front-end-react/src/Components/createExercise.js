import React from 'react'
import ExerciseFormFields from './Partials/exerciseFormFields'

export default function CreateExercise() {
    return (
        <>
            <form>
                <ExerciseFormFields />
                <button className="button submit-button">Create</button>
            </form>
        </>
    )
}
