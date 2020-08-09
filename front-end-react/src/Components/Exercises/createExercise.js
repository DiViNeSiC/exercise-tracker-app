import React, { useEffect, useState } from 'react'
import ExerciseForm from '../Partials/exerciseForm'

export default function CreateExercise({ setError, axiosConnection }) {
    const [title, setTitle] = useState()
    const [duration, setDuration] = useState()
    const [date, setDate] = useState()
    
    useEffect(() => {
        authorization()
    }, [])

    async function authorization () {
        try {
            await axiosConnection.get('/exercises')
        } catch (err) {
            const errorNotAuth = err.response ? err.response.status : null
            if (errorNotAuth === 401) {
                return window.location = '/login'
            }
        }
    }

    function titleInputOnChange (e) {
        setTitle(e.target.value)
    }

    function durationInputOnChange (e) {
        setDuration(e.target.value)
    }

    function dateInputOnChange (e) {
        setDate(e.target.value)
    }

    function clearInputs() {
        setTitle(null)
        setDuration(null)
        setDate(null)
    }

    const createExercise = (e) => {
        e.preventDefault()
        const exerciseInfo = { title, duration, date: new Date(date) }
        postExerciseInfo(exerciseInfo)
        clearInputs()
    }

    const postExerciseInfo = async (exerciseInfo) => {
        try {
            await axiosConnection.post('exercises/create', exerciseInfo)
            window.location = '/exercises'
        } catch (err) {
            const errorMessage = err.response ? err.response : err
            setError({ 
                show: true,
                status: 'danger',
                message: errorMessage
            })
        }
    }

    return (
        <div className="exercise-form-container">
            <form className="exercise-form" onSubmit={createExercise}>
                <ExerciseForm
                    titleInputOnChange={titleInputOnChange}
                    durationInputOnChange={durationInputOnChange}
                    dateInputOnChange={dateInputOnChange}
                    titleInputValue={title}
                    durationInputValue={duration}
                    dateInputValue={date}
                />
                <div className="exercise-form-row">
                    <button className='btn create-btn' type="submit" >Create</button>
                </div>
            </form>
        </div>
    )
}
