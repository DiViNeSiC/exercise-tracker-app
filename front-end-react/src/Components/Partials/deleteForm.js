import React from 'react'

export default function DeleteForm({ url, formAction }) {
    return (
        <form className={`delete-form ${formAction}`}>
            <button type="submit" className="delete-form-button">{ formAction }</button>
        </form>
    )
}
