import React from 'react'
import Routes from './config/router'
import { Provider } from 'react-redux'

import { store } from './config/store'
import './config/translations'

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
