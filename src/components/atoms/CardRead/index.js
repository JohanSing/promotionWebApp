import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.a`
  align-self: flex-end;
  text-decoration: none;
  color: black;
  font-family: 'Francois One';
`

const CardRead = ({ text, link = '#', ...props }) => {
  return (
    <Wrapper href={link} props>
      {text}
    </Wrapper>
  )
}

CardRead.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}
export default CardRead
