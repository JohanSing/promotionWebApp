import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NavbarMenuItem = ({ link, name, isActive = false, ...props }) => {
  return (
    <NavbarItem
      colorFont={props.colorFont}
      colorBackground={props.colorBackground}
      isActive={isActive}
      href={link}
    >
      {name}
    </NavbarItem>
  )
}

const NavbarItem = styled.a`
  align-self: center;
  color: ${props => props.colorFont};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  width: 100%;
  transition-duration: 1s;
  transition: visibility 0s, opacity 0.5s linear;
  display: ${props => (props.isActive ? 'block' : 'none')};
  &:hover {
    background-color: ${props => props.colorBackground};
  }
`

NavbarMenuItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.bool
}
export default NavbarMenuItem
