import React, { useState } from 'react';
import { Switch , Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './Components/navbar'
import Register from './Components/Authenticate/register'
import Login from './Components/Authenticate/login'
import IndexPage from './Components/indexPage'
import CreateExercise from './Components/Exercises/createExercise'
import EditExercise from './Components/Exercises/editExercise'
import ErrorHandler from './Components/Handlers/errorHandler'
import Default from './Components/default'

function App() {
  const [error, setError] = useState({ show: false, status: null, message: null })
  const token = localStorage.getItem('JWT_TOKEN')
  const accessToken = token ? `Bearer ${token}` : ''
  
  const axiosConnection = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      authorization: accessToken
    }
  })

  return (
    <div className="app-container">
      <Navbar axiosConnection={axiosConnection} setError={setError} />
      <ErrorHandler 
        setError={setError}
        show={error.show}
        status={error.status}
        message={error.message}
      />
      <Switch>
        <Route exact path='/exercises' component={() => <IndexPage axiosConnection={axiosConnection} setError={setError} />} />
        <Route path='/register' component={() => <Register axiosConnection={axiosConnection} setError={setError} />} />
        <Route path='/login' component={() => <Login axiosConnection={axiosConnection} setError={setError} />} />
        <Route path='/exercises/create' component={() => <CreateExercise axiosConnection={axiosConnection} setError={setError} />} />
        <Route path='/exercises/:id' component={() => <EditExercise axiosConnection={axiosConnection} setError={setError} />} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
