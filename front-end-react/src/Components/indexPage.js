import React, { useState, useEffect } from 'react'
import LoadingHandler from './Handlers/loadingHandler'
import ExerciseList from './Exercises/exerciseList'
import ErrorHandler from './Handlers/errorHandler'

export default function IndexPage({ axiosConnection, setErrorMessage }) {
    const [exercises, setExercises] = useState([])
    const [error, setError] = useState({ show: false, status: null, message: null })
    const [loading, setLoading] = useState({ show: false, loadingMessage: '' })

    async function getExercises() {
        try {
            setLoading({ show: true, loadingMessage: 'Loading...' })
            const result = await axiosConnection.get('/exercises')
            const exercises = result.data.exercises
            setLoading({ show: false })
            setExercises(exercises)
        } catch (err) {
            const errorMessage = err.response ? err.response : err
            const errorNotAuth = err.response ? err.response.status : null
            if (errorNotAuth === 401) {
                return window.location = '/login'
            }
            setLoading({ show: false})
            setError({ 
                show: true,
                status: 'danger',
                message: errorMessage
            })
        }
    }

    useEffect(() => {
        getExercises()
    }, [])

    return (
        <>
            <LoadingHandler 
                show={loading.show}
                message={loading.loadingMessage}
            />
            <ErrorHandler 
                setError={setError}
                show={error.show}
                status={error.status}
                message={error.message}
            />
            <ExerciseList
                exercises={exercises} 
                axiosConnection={axiosConnection} 
                setError={setErrorMessage}
            />
        </>
    )
}
