import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.p`
  font-family: 'Francois One';
  color: ${props => props.color};
`

const CardDescription = ({ text, color, ...props }) => {
  return <Container color={color}>{text}</Container>
}

CardDescription.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default CardDescription
