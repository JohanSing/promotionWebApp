import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.a`
  align-self: flex-end;
  text-decoration: none;
  color: black;
  @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@400;700;900&display=swap%27');
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
