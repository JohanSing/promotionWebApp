import { createStore } from 'redux'
import reducers from '../stores/reducers'

export const store = createStore(reducers)
