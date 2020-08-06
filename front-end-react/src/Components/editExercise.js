import React from 'react'
import ExerciseFormFields from './Partials/exerciseFormFields'

export default function EditExercise() {
    return (
        <>
            <form>
                <ExerciseFormFields />
                <button className="button submit-button">Update</button>
            </form>
        </>
    )
}
