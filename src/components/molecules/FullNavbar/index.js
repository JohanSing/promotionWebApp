import React, { useState } from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

import { FaBars, FaTimes } from 'react-icons/fa'

import Navbar from '../../atoms/Navbar'
import NavbarItem from '../../atoms/NavbarItem'
import Toggle from '../../atoms/Toggle'

const FullNavbar = ({ theme }) => {
  const [isNavbarActive, setisNavbarActive] = useState(false)
  const [icon, setIcon] = useState(FaBars)

  function activeNavbar() {
    if (isNavbarActive) {
      setisNavbarActive(false)
      setIcon(FaBars)
    } else {
      setisNavbarActive(true)
      setIcon(FaTimes)
    }
  }

  return (
    <Navbar colorBackground={theme.colors.backgroundMain}>
      <NavbarItemHome
        colorBackground={theme.colors.backgroundMain}
        colorFont={theme.colors.fontMain}
        href='/'
      >
        Projay
      </NavbarItemHome>
      <NavbarItemIcon
        colorFont={theme.colors.fontMain}
        href='#bars'
        onClick={activeNavbar}
      >
        {icon}
      </NavbarItemIcon>
      <NavbarItemIconToggle>
        <Toggle color={theme.colors.btnBackgroundPrimaryHover}></Toggle>
      </NavbarItemIconToggle>
      <NavbarItem
        name={'Uploader un Livre'}
        isActive={isNavbarActive}
        href='/books/upload'
        colorBackground={theme.colors.backgroundMain}
        colorFont={theme.colors.fontMain}
      ></NavbarItem>
    </Navbar>
  )
}

FullNavbar.propTypes = {
  theme: Proptypes.object
}

const NavbarItemHome = styled.a`
  align-self: flex-start;
  color: ${props => props.colorFont};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: ${props => props.colorBackground};
`

const NavbarItemIcon = styled.a`
  align-items: flex-end;
  position: absolute;
  color: ${props => props.colorFont};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`

const NavbarItemIconToggle = styled(NavbarItemIcon)`
  margin-bottom: 10em;
  margin-right: 3em;
`

export default FullNavbar
