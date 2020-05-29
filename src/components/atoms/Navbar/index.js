import React from 'react'
import styled from 'styled-components'

const Navbar = props => {
  return <NavbarContainer>{props.children}</NavbarContainer>
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  background-color: #333;
  justify-content: space-between;
  height: 100%;
  max-height: 116em;
`

export default Navbar
