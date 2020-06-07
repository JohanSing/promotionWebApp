import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Navbar from '../components/molecules/FullNavbar'
import { useSelector } from 'react-redux'

import Home from '../components/pages/Home'
import Search from '../components/pages/Search'
import CreateProject from '../components/pages/CreateProject'

const Routes = () => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <Router>
      <Navbar theme={themeState}></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/projects/create' component={CreateProject} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
