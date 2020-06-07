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
import UserProjects from '../components/pages/UserProjects'
import CreatePost from '../components/pages/CreatePost'

const Routes = () => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <Router>
      <Navbar theme={themeState}></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/projects/create' component={CreateProject} />
        <Route exact path='/user/projects' component={UserProjects} />
        <Route exact path='/posts/create' component={CreatePost} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
