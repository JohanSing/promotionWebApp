import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconTextContainer = styled.div`
  margin-top: 0.5em;
  svg {
    margin-right: 1em;
    color: ${props => props.iconColor};
  }
`

const CardIconTextContainer = ({ color = 'black', ...props }) => {
  return (
    <IconTextContainer iconColor={color} props>
      {props.children}
    </IconTextContainer>
  )
}

CardIconTextContainer.propTypes = {
  color: PropTypes.string
}

export default CardIconTextContainer
