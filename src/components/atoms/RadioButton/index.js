import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RadioButton = ({ name, inputName, id, color, isChecked = false }) => {
  useEffect(() => {
    if (isChecked) {
      document.getElementById(id).checked = true
    }
  }, [id, isChecked])
  return (
    <RadioButtonContainer>
      <RadioButtonInput type='radio' color={color} name={inputName} id={id} />
      <RadioButtonLabel htmlFor={inputName} color={color}>
        {name}
      </RadioButtonLabel>
    </RadioButtonContainer>
  )
}

const RadioButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 24px;
`

const RadioButtonLabel = styled.label`
  display: block;
  padding: 0 0 0 24px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 2px solid ${props => props.color};
    border-radius: 14px;
    z-index: 1;
    transition: ${props => props.color} 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 4px;
    width: 8px;
    height: 8px;
    background-color: ${props => props.color};
    border-radius: 50%;
    z-index: 2;
    transform: scale(0, 0);
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
`
const RadioButtonInput = styled.input`
  position: absolute;
  top: 4px;
  left: 0;
  width: 36px;
  height: 20px;
  opacity: 0;
  z-index: 0;
  &:checked + ${RadioButtonLabel} {
    &:before {
      border-color: ${props => props.color};
    }

    &:after {
      transform: scale(1, 1);
    }
  }
`

RadioButton.propTypes = {
  name: PropTypes.string,
  inputName: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string
}

export default RadioButton
