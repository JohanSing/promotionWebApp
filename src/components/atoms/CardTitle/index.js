import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-family: 'Lato';
`

const CardTitle = ({ ...props }) => {
  return <Container props>{props.children}</Container>
}

export default CardTitle
