import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { FaMoon } from 'react-icons/fa'

const Toggle = ({ action, color }) => {
  return (
    <ToggleContainer>
      <FaMoonElement color={color} />
      <ToggleInput type='checkbox' onClick={() => action()} color={color} />
      <ToggleSliderRound></ToggleSliderRound>
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  color: Proptypes.string,
  action: Proptypes.func
}

const ToggleContainer = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 30px;
`
const ToggleSliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`
const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${ToggleSliderRound} {
    background-color: ${props => props.color};
  }
  &:focus + ${ToggleSliderRound} {
    box-shadow: 0 0 1px ${props => props.color};
  }
  :checked + ${ToggleSliderRound}:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`
const FaMoonElement = styled(FaMoon)`
  position: absolute;
  font-size: 1em !important;
  right: 3.5em;
  top: 0.48em;
  color: ${props => props.color};
`
export default Toggle
