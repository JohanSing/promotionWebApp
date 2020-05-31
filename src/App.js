import React from 'react'
import Routes from './config/router'
import { Provider } from 'react-redux'
import { Container } from '@material-ui/core'

import { store } from './config/store'
import Header from './components/Header/Header'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Routes></Routes>
      </Container>
    </Provider>
  )
}

export default App
