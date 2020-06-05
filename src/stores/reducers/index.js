import { combineReducers } from 'redux'

import global from './global'
import searchPage from './searchPage'
import auth from './auth'

export default combineReducers({
  global,
  searchPage,
  auth
})
