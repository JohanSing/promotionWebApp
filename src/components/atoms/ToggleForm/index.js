import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ToggleContainer = styled.div``
const ToggleLabel = styled.label`
  display: block;
  background: #f3f3f3;
  height: 50px;
  width: 80px;
  border-radius: 50px;
  margin: 50px auto;
  position: relative;
  transition: 0.25s ease-in-out;
  box-shadow: 0 0 0 2px #dddddd;
  &:before {
    content: '';
    transition: 0.25s ease-in-out;
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    background: white;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #dddddd;
  }
`
const ToggleOn = styled.span`
  display: block;
  position: absolute;
  z-index: 0;
  left: 0;
  opacity: 1;
  min-width: 300px;
  line-height: 50px;
  transition: 0.25s ease-in-out;
  opacity: 0;
  color: ${props => props.color};
`

const ToggleOff = styled.span`
  transition: 0.25s ease-in-out;
  display: block;
  position: absolute;
  z-index: 0;
  right: 100px;
  text-align: right;
  opacity: 1;
  min-width: 300px;
  line-height: 50px;
  opacity: 1;
  color: #bbbbbb;
`
const ToggleInput = styled.input`
  position: absolute;
  left: -5000px;
  transition: 0.25s ease-in-out;
  :checked {
    + ${ToggleLabel} {
      background: ${props => props.color};
      transition: 0.25s ease-in-out;
      box-shadow: 0 0 0 2px ${props => props.color};
      ${ToggleOn} {
        left: 100px;
        transition: 0.25s ease-in-out;
        opacity: 1;
      }
      ${ToggleOff} {
        right: 0px;
        transition: 0.25s ease-in-out;
        opacity: 0;
      }
      &:before {
        left: 30px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2),
          0 0 0 2px ${props => props.color};
      }
    }
  }
`

const ToggleForm = ({
  nameOn = 'On',
  nameOff = 'Off',
  color = 'blue',
  inputName,
  action,
  ...props
}) => {
  return (
    <ToggleContainer>
      <ToggleInput
        color={color}
        name={inputName}
        id={inputName}
        type='checkbox'
      />
      <ToggleLabel htmlFor={inputName} className='checkbox-label'>
        <ToggleOn color={color}>{nameOn}</ToggleOn>
        <ToggleOff>{nameOff}</ToggleOff>
      </ToggleLabel>
    </ToggleContainer>
  )
}

ToggleForm.propTypes = {
  nameOn: PropTypes.string,
  nameOff: PropTypes.string,
  color: PropTypes.string,
  inputName: PropTypes.string,
  action: PropTypes.func
}
export default ToggleForm
