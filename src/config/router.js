import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../components/pages/Login'
import Home from '../components/pages/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
