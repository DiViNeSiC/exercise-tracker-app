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
            <div>
                <input
                    type="text" 
                    onChange={titleInputOnChange} 
                    value={titleInputValue} 
                />
            </div>
            <div>
                <input
                    type="number" 
                    onChange={durationInputOnChange} 
                    value={durationInputValue}
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
