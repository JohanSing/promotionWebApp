import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'

import AvatarComponent from '../FullAvatar'
import NavbarItemButton from '../../atoms/NavbarItem/NavbarItemButton'

const LoginComponent = ({ action, theme, authUser }) => {
  const [userInfo, setUserInfo] = useState({ avatarURL: null, userName: null })
  useEffect(() => {
    setUserInfo({
      avatarURL: authUser.user.photoURL,
      userName: authUser.user.displayName
    })
  }, [authUser])

  if (authUser !== undefined) {
    return (
      <AvatarComponent
        colorBorderAvatar={theme.colors.btnBorderSecondary}
        colorFont={theme.colors.fontMain}
        srcImg={userInfo.avatarURL}
        altImg={userInfo.userName}
        sizeAvatar={'2em'}
        userName={userInfo.userName}
      />
    )
  } else {
    return (
      <NavbarItemButton
        colorFont={theme.colors.btnFontPrimary}
        colorBorder={theme.colors.btnBorderPrimary}
        colorBackground={theme.colors.btnBackgroundMain}
        margin={'14px 35px'}
        action={action}
      >
        <FaGithub colorfont={theme.colors.fontMain} />
        Login
      </NavbarItemButton>
    )
  }
}

LoginComponent.propTypes = {
  action: Proptypes.func,
  theme: Proptypes.object,
  authUser: Proptypes.object
}

export default LoginComponent
