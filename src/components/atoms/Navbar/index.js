import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const Navbar = props => {
  return (
    <NavbarContainer colorBackground={props.colorBackground}>
      {props.children}
    </NavbarContainer>
  )
}

Navbar.propTypes = {
  colorBackground: Proptypes.string
}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 101;
  height: 4em;
  background-color: ${props => props.colorBackground};
`

export default Navbar
