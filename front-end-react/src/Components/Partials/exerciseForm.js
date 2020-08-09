import React from 'react'

export default function ExerciseForm(props) {
    const {
        titleInputOnChange, 
        durationInputOnChange, 
        dateInputOnChange, 
        titleInputValue, 
        durationInputValue, 
        dateInputValue 
    } = props
    
    const date = dateInputValue == null ? '' : dateInputValue.toString().split('T')[0]
    
    return (
        <>
            <div className="exercise-form-row">
                <input
                    type="text" 
                    onChange={titleInputOnChange} 
                    value={titleInputValue} 
                    placeholder="Title"
                />
            </div>
            <div className="exercise-form-row column">
                <input
                    type="number"
                    onChange={durationInputOnChange} 
                    value={durationInputValue}
                    placeholder="Duration(min)"
                />
                <input 
                    type="date" 
                    onChange={dateInputOnChange} 
                    value={date}
                />
            </div>
        </>
    )
}
