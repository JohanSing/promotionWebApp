import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../components/pages/Home'
import Search from '../components/pages/Search'
import CreateProject from '../components/pages/CreateProject'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/projects/create' component={CreateProject} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
