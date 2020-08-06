import React from 'react'

export default function ExerciseFormFields({ exercise }) {
    return (
        <>
            <div className="form-row">
                <label for="title" >Title</label>
                <input type="text" id="title" />
            </div>
            <div className="form-row">
                <label for="duration" >Duration</label>
                <input type="number" id="duration" />
            </div>
            <div className="form-row">
                <label for="date" >Date</label>
                <input type="date" id="date" />
            </div>
        </>
    )
}
