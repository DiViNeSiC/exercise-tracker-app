import React, { useEffect, useState } from 'react'
import ExerciseForm from '../Partials/exerciseForm'

export default function EditExercise({ setError, axiosConnection }) {
    const [title, setTitle] = useState()
    const [duration, setDuration] = useState()
    const [date, setDate] = useState()
    
    const exerciseId = window.location.pathname.split('/')[2]
    
    useEffect(() => {
        authorization()
        getExercise()
    }, [])

    async function authorization () {
        try {
            await axiosConnection.get('/exercises')
        } catch (err) {
            const errorNotAuth = err.response ? err.response.status : null
            if (errorNotAuth === 401) {
                return window.location = '/login'
            }
            const errorMessage = err.response ? err.response : err
            setError({ 
                show: true,
                status: 'danger',
                message: errorMessage
            })
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

    const getExercise = async () => {
        try {
            const result = await axiosConnection.get(`/exercises/${exerciseId}`)
            const exercise = result.data.exercise
            const { title, duration, date } = exercise
            setTitle(title)
            setDuration(duration)
            setDate(date)
        } catch (err) {
            const errorMessage = err.response ? err.response : err
            setError({ 
                show: true,
                status: 'danger',
                message: errorMessage
            })
        }
    }

    const editExercise = (e) => {
        e.preventDefault()
        const exerciseUpdate = {
            title,
            duration,
            date: new Date(date)
        }
        postExerciseInfo(exerciseUpdate)
    }

    const postExerciseInfo = async (exerciseUpdate) => {
        try {
            await axiosConnection.put(`/exercises/${exerciseId}`, exerciseUpdate)
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
        <div>
            <form onSubmit={editExercise}>
                <ExerciseForm
                    titleInputOnChange={titleInputOnChange}
                    durationInputOnChange={durationInputOnChange}
                    dateInputOnChange={dateInputOnChange}
                    titleInputValue={title}
                    durationInputValue={duration}
                    dateInputValue={date}
                />
                <div>
                    <button type="submit" >Update</button>
                </div>
            </form>
        </div>
    )
}
