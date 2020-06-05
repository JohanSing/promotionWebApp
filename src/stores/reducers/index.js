import { combineReducers } from 'redux'

import global from './global'
import searchPage from './searchPage'
import createPage from './createPage'
import auth from './auth'

export default combineReducers({
  global,
  searchPage,
  createPage,
  auth
})
