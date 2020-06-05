import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-family: 'Lato';
  color: ${props => props.fontColor};
`

const CardTitle = ({ ...props }) => {
  return (
    <Container fontColor={props.fontColor} props>
      {props.children}
    </Container>
  )
}

export default CardTitle
