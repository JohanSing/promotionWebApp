import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const IconEmojiLang = ({ action, emoji, lang, ...props }) => {
  return (
    <Icon
      role='img'
      aria-label='jsx-a11y/accessible-emoji'
      margin={props.margin}
      size={props.size}
      onClick={() => {
        action(lang)
      }}
    >
      {emoji}
    </Icon>
  )
}

IconEmojiLang.propTypes = {
  action: Proptypes.func,
  emoji: Proptypes.string,
  lang: Proptypes.string
}

const Icon = styled.span`
  margin: ${props => props.margin};
  font-size: ${props => props.size};
  cursor: pointer;
`

export default IconEmojiLang
