import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../components/pages/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
