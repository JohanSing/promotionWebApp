import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const Button = ({
  name,
  borderColor,
  fillingColor,
  textColor,
  textHoverColor,
  backgroundColor,
  IsInvert,
  type,
  ...props
}) => {
  return (
    <ButtonContainer>
      <ButtonComponent
        IsInvert={IsInvert}
        textHoverColor={textHoverColor}
        textColor={textColor}
        fillingColor={fillingColor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        type={type}
        {...props}
      >
        {name}
      </ButtonComponent>
    </ButtonContainer>
  )
}
const ButtonComponent = styled.button`
  background-color: ${props =>
    props.IsInvert ? props.backgroundColor : props.fillingColor};
  border: none;
  color: ${props => (props.IsInvert ? props.textHoverColor : props.textColor)};
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid ${props => props.borderColor};
  &:hover {
    background-color: ${props =>
      props.IsInvert ? props.fillingColor : props.backgroundColor};
    color: ${props =>
      props.IsInvert ? props.textColor : props.textHoverColor};
  }
`
const ButtonContainer = styled.div``

Button.defaultProps = {
  name: '',
  borderColor: 'black',
  fillingColor: 'black',
  textHoverColor: 'black',
  textColor: 'white',
  backgroundColor: 'white',
  type: 'button',
  IsInvert: false
}

Button.propTypes = {
  name: Proptypes.string,
  borderColor: Proptypes.string,
  fillingColor: Proptypes.string,
  textHoverColor: Proptypes.string,
  textColor: Proptypes.string,
  backgroundColor: Proptypes.string,
  type: Proptypes.string,
  IsInvert: Proptypes.bool
}

export default Button
