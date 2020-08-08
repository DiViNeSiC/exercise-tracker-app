import React from 'react'

export default function DeleteForm({ axiosConnection, url, method, setError }) {
    const deleteMethod = async (e) => {
        e.preventDefault()
        try {
            await axiosConnection.delete(`/${url}`)
            window.location.reload()

            if (method === 'Logout') {
                localStorage.removeItem('JWT_TOKEN')
                window.location = '/login'
            }

        } catch (err) {
            const errorMessage = err.response ? err.response : err
            const errorNotAuth = err.response ? err.response.status : null

            if (errorNotAuth === 401) {
                return window.location = '/login'
            }

            setError({ 
                show: true,
                status: 'danger',
                message: errorMessage
            })
        }
        
    }

    return (
        <form onSubmit={deleteMethod} >
            <button type="submit" >{method}</button>
        </form>
    )
}
