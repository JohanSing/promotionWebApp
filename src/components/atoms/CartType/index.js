import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTypeContainer = styled.div`
  align-self: flex-start;
`

const CardType = ({ text, ...props }) => {
  return <CardTypeContainer>{text}</CardTypeContainer>
}

CardType.propTypes = {
  text: PropTypes.string
}

export default CardType
