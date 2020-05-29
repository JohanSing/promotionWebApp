import React, { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Navbar from '../../atoms/Navbar'
import NavbarItem from '../../atoms/NavbarItem'
import { FaBars, FaTimes } from 'react-icons/fa'
import Toggle from '../../atoms/Toggle'

const FullNavbar = props => {
  const [isNavbarActive, setisNavbarActive] = useState(false)
  const [icon, setIcon] = useState(FaBars)
  const theme = useContext(ThemeContext)

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
    <Navbar>
      <NavbarItemHome colorBackground={theme.colors.lightPrimary} href='/'>
        Projay
      </NavbarItemHome>
      <NavbarItemIcon href='#bars' onClick={activeNavbar}>
        {icon}
      </NavbarItemIcon>
      <NavbarItemIconToggle>
        <Toggle></Toggle>
      </NavbarItemIconToggle>
      <NavbarItem
        name={'Uploader un Livre'}
        isActive={isNavbarActive}
        href='/books/upload'
      ></NavbarItem>
    </Navbar>
  )
}

const NavbarItemHome = styled.a`
  align-self: flex-start;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: ${props => props.colorBackground};
`

const NavbarItemIcon = styled.a`
  align-items: flex-end;
  position: absolute;
  color: #f2f2f2;
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
