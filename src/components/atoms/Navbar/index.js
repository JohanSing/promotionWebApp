import React from 'react'
import styled from 'styled-components'

const Navbar = props => {
  return (
    <NavbarContainer colorBackground={props.colorBackground}>
      {props.children}
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  background-color: ${props => props.colorBackground};
  justify-content: space-between;
  height: 100%;
  max-height: 116em;
`

export default Navbar
