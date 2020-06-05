import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const Avatar = ({ srcImg, altImg, size, color }) => {
  return (
    <WrapperAvatar>
      <Image src={srcImg} alt={altImg} size={size} color={color} />
    </WrapperAvatar>
  )
}

Avatar.propTypes = {
  srcImg: Proptypes.string,
  altImg: Proptypes.string,
  size: Proptypes.string,
  color: Proptypes.string
}

const WrapperAvatar = styled.div``

const Image = styled.img`
  border: 1px solid ${props => props.color};
  border-radius: 50%;
  height: ${props => props.size};
`

export default Avatar
