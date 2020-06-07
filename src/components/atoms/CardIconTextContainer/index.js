import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconTextContainer = styled.div`
  margin-top: 0.5em;
  color: ${props => props.fontColor};
  svg {
    margin-right: 1em;
    color: ${props => props.fontColor};
  }
`

const CardIconTextContainer = ({ color = 'black', ...props }) => {
  return (
    <IconTextContainer fontColor={props.fontColor} iconColor={color} props>
      {props.children}
    </IconTextContainer>
  )
}

CardIconTextContainer.propTypes = {
  color: PropTypes.string
}

export default CardIconTextContainer
