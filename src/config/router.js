import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Navbar from '../components/molecules/FullNavbar'
import { useSelector } from 'react-redux'

import Login from '../components/pages/Login'
import Home from '../components/pages/Home'
import Posts from '../components/pages/Posts'

const Routes = () => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <Router>
      <Navbar theme={themeState}></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
