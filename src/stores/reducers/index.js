import { combineReducers } from 'redux'

import global from './global'
import searchPage from './searchPage'
import createProjectPage from './createProjectPage'
import userProjects from './userProjects'
import auth from './auth'
import post from './post'

export default combineReducers({
  global,
  searchPage,
  createProjectPage,
  userProjects,
  auth,
  post
})
