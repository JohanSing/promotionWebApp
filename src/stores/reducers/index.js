import { combineReducers } from 'redux'

import global from './global'
import searchPage from './searchPage'
import createPage from './createPage'

export default combineReducers({
  global,
  searchPage,
  createPage
})
