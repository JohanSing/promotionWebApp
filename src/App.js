import React from 'react';
import Routes from './config/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
  );
}

export default App;