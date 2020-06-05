import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import AvatarComponent from '../FullAvatar'
import NavbarItemButton from '../../atoms/NavbarItem/NavbarItemButton'

const LoginComponent = ({ action, theme, authUser }) => {
  const { t } = useTranslation()
  const [userInfo, setUserInfo] = useState({ avatarURL: null, userName: null })

  useEffect(() => {
    if (authUser != undefined && authUser.access_token !== null) {
      setUserInfo({
        avatarURL: authUser.user.photoURL,
        userName: authUser.user.displayName
      })
    }
  }, [authUser])

  if (authUser != undefined && authUser.access_token !== null) {
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
        {t('login')}
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
