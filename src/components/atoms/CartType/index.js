import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTypeContainer = styled.div`
  align-self: flex-start;
  color: ${props => props.fontColor};
`

const CardType = ({ text, ...props }) => {
  return (
    <CardTypeContainer fontColor={props.fontColor}>{text}</CardTypeContainer>
  )
}

CardType.propTypes = {
  text: PropTypes.string
}

export default CardType
