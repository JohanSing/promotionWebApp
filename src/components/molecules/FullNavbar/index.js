import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Proptypes from 'prop-types'
import styled from 'styled-components'

import { signInWithGithub } from '../../../stores/actions/auth'
import { switchTheme } from '../../../stores/actions/global'

import { FaBars, FaTimes } from 'react-icons/fa'

import Navbar from '../../atoms/Navbar'
import NavbarItemLink from '../../atoms/NavbarItem/NavbarItemLink'
import NavbarItemButton from '../../atoms/NavbarItem/NavbarItemButton'
import NavbarItemIcon from '../../atoms/NavbarItem/NavbarItemIcon'
import Toggle from '../../atoms/Toggle'
import LoginComponent from '../LoginComponent'

const FullNavbar = ({ theme, authUser }) => {
  const dispatch = useDispatch()
  const [isNavbarActive, setIsNavbarActive] = useState(false)
  const [icon, setIcon] = useState(FaBars)

  const toggleTheme = () => {
    dispatch(switchTheme())
  }

  const githubLogin = () => {
    dispatch(signInWithGithub())
  }

  function activeNavbar() {
    if (isNavbarActive) {
      setIsNavbarActive(false)
      setIcon(FaBars)
    } else {
      setIsNavbarActive(true)
      setIcon(FaTimes)
    }
  }

  return (
    <Navbar colorBackground={theme.colors.backgroundMain}>
      <TopBar>
        <NavbarItemHome colorFont={theme.colors.fontMain} href='/'>
          Promotion
        </NavbarItemHome>
        <TopBarLink>
          <NavbarItemIcon>
            <Toggle
              action={toggleTheme}
              color={theme.colors.btnBackgroundPrimaryHover}
            ></Toggle>
          </NavbarItemIcon>
          <NavbarItemButton
            colorFont={theme.colors.btnFontPrimary}
            colorBorder={theme.colors.btnBorderPrimary}
            colorBackground={theme.colors.btnBackgroundMain}
            margin={'0 20px 0 0'}
            action={activeNavbar}
          >
            {icon}
          </NavbarItemButton>
        </TopBarLink>
      </TopBar>
      <TopBarMenu
        isActive={isNavbarActive}
        colorBackground={theme.colors.backgroundMain}
      >
        <NavbarItemLink
          name='Categories'
          isActive={true}
          link='/'
          colorFont={theme.colors.fontMain}
        />
        <NavbarItemLink
          name='New project'
          isActive={true}
          link='/'
          colorFont={theme.colors.fontMain}
        />
        <NavbarItemLink
          name='New post'
          isActive={true}
          link='/'
          colorFont={theme.colors.fontMain}
        />
        <LoginComponent
          action={githubLogin}
          theme={theme}
          authUser={authUser}
        />
      </TopBarMenu>
    </Navbar>
  )
}

FullNavbar.propTypes = {
  theme: Proptypes.object,
  authUser: Proptypes.object
}

const TopBar = styled.div`
  max-width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`

const NavbarItemHome = styled.a`
  display: flex;
  margin-left: 2em;
  text-decoration: none;
  color: ${props => props.colorFont};
`

const TopBarLink = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  margin-left: auto;
`

const TopBarMenu = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.colorBackground};
  display: ${props => (props.isActive ? 'block' : 'none')};
`

export default FullNavbar
