import React, { useState } from 'react'
import Routes from './config/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './config/theme'

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={themeToggler}>Switch Theme</button>
      <Routes></Routes>
    </ThemeProvider>
  )
}

export default App
