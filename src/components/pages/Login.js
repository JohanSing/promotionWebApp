import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Login = () => {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <Button theme={theme}> Hello </Button>
    </div>
  )
}

const Button = styled.button`
  color: ${props => props.theme.colors.btnFontPrimary};
  background-color: ${props => props.theme.colors.btnBackgroundMain};
  border: 1px solid ${props => props.theme.colors.btnBorderPrimary};
`

export default Login
