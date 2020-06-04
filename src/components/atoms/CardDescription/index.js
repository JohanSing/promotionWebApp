import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@400;700;900&display=swap%27');
  font-family: 'Francois One';
`

const CardDescription = ({ text, ...props }) => {
  return <Container props>{text}</Container>
}

CardDescription.propTypes = {
  text: PropTypes.string
}

export default CardDescription
