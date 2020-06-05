import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

export const NavbarItemLink = ({ link, name, isActive = false, ...props }) => {
  return (
    <NavbarItem
      colorFont={props.colorFont}
      isActive={isActive}
      href={link}
      aria-label={name}
    >
      {name}
    </NavbarItem>
  )
}

NavbarItemLink.propTypes = {
  link: Proptypes.string,
  name: Proptypes.string,
  isActive: Proptypes.bool,
  colorFont: Proptypes.string
}

const NavbarItem = styled.a`
  position: relative;
  display: flex;
  padding: 14px 16px;
  margin: 0 20px;
  border-radius: 50%;
  font-size: 16px;
  align-items: center;
  color: ${props => props.colorFont};
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 1s;
  transition: visibility 0s, opacity 0.5s linear;
  display: ${props => (props.isActive ? 'block' : 'none')};
`

export default NavbarItemLink
