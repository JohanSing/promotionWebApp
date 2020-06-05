import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const NavbarItemIcon = ({ isActive = false, ...props }) => {
  return <NavbarItem isActive={isActive}>{props.children}</NavbarItem>
}

NavbarItemIcon.propTypes = {
  isActive: Proptypes.bool
}

const NavbarItem = styled.div`
  position: relative;
  display: flex;
  padding: 14px 16px;
  margin: 0 20px;
  border-radius: 1em;
  font-size: 16px;
  align-items: center;

  svg {
    margin: 0 5px;
    font-size: 25px;
    color: ${props => props.colorFont};
  }
`

export default NavbarItemIcon
