import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const NavbarItemButton = ({ action, isActive = false, ...props }) => {
  return (
    <NavbarItem
      colorFont={props.colorFont}
      colorBorder={props.colorBorder}
      colorBackground={props.colorBackground}
      margin={props.margin}
      isActive={isActive}
      onClick={() => action()}
    >
      {props.children}
    </NavbarItem>
  )
}

NavbarItemButton.propTypes = {
  action: Proptypes.func,
  isActive: Proptypes.bool,
  colorFont: Proptypes.string,
  colorBorder: Proptypes.string,
  colorBackground: Proptypes.string,
  margin: Proptypes.string
}

const NavbarItem = styled.button`
  position: relative;
  display: flex;
  padding: 8px 16px;
  margin: ${props => props.margin};
  border-radius: 6px;
  border-color: ${props => props.colorBorder};
  background-color: ${props => props.colorBackground};
  font-size: 16px;
  align-items: center;
  color: ${props => props.colorFont};
  outline: 0;
  cursor: pointer;

  svg {
    margin: 0 5px;
    font-size: 20px;
  }
`

export default NavbarItemButton
