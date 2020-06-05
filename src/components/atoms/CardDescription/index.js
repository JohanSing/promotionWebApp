import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.p`
  font-family: 'Francois One';
`

const CardDescription = ({ text, ...props }) => {
  return <Container props>{text}</Container>
}

CardDescription.propTypes = {
  text: PropTypes.string
}

export default CardDescription
