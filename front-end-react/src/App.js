import React from 'react';
import { Switch , Route } from 'react-router-dom'

import Navbar from './Components/navbar'
import Register from './Components/register'
import Login from './Components/login'
import IndexPage from './Components/indexPage'
import CreateExercise from './Components/createExercise'
import EditExercise from './Components/editExercise'


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/exercises/create' component={CreateExercise} />
        <Route path='/exercises/:id' component={EditExercise} />
      </Switch>
    </div>
  );
}

export default App;
