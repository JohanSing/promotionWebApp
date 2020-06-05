import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

import Avatar from '../../atoms/Avatar'

const AvatarComponent = ({
  colorBorderAvatar,
  colorFont,
  srcImg,
  altImg,
  sizeAvatar,
  userName
}) => {
  return (
    <AvatarContainer>
      <Avatar
        srcImg={srcImg}
        altImg={altImg}
        size={sizeAvatar}
        color={colorBorderAvatar}
      />
      <UserName colorFont={colorFont}>{userName}</UserName>
    </AvatarContainer>
  )
}

AvatarComponent.propTypes = {
  colorBorderAvatar: Proptypes.string,
  colorFont: Proptypes.string,
  srcImg: Proptypes.string,
  altImg: Proptypes.string,
  sizeAvatar: Proptypes.string,
  userName: Proptypes.string
}

const AvatarContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 14px 35px;
`

const UserName = styled.p`
  margin-left: 10px;
`

export default AvatarComponent
