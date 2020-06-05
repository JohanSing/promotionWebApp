import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  border: 0.2em solid ${props => props.color};
  max-width: 22em;
  height: auto;
  padding: 1em;
  border-radius: 0.6em;
  display: flex;
  justify-items: stretch;
  flex-direction: column;
`

const CardContainer = ({ color, ...props }) => {
  return (
    <Container color={color} props>
      {props.children}
    </Container>
  )
}

CardContainer.propTypes = {
  color: PropTypes.string
}

export default CardContainer
