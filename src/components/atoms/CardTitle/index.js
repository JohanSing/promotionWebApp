import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@400;700;900&display=swap%27');
  font-family: 'Lato';
`

const CardTitle = ({ ...props }) => {
  return <Container props>{props.children}</Container>
}

export default CardTitle
