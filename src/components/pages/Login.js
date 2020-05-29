import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Login = () => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <div>
      <Button theme={themeState}> Hello </Button>
    </div>
  )
}

const Button = styled.button`
  color: ${props => props.theme.colors.btnFontPrimary};
  background-color: ${props => props.theme.colors.btnBackgroundMain};
  border: 1px solid ${props => props.theme.colors.btnBorderPrimary};
`

export default Login
