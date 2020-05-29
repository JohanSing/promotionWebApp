import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FaMoon } from 'react-icons/fa'

import { switchTheme } from '../../../stores/actions/global'

const Toggle = props => {
  const dispatch = useDispatch()

  return (
    <div>
      <FaMoonElement color={props.color}></FaMoonElement>
      <ToggleContainer>
        <ToggleInput type='checkbox' onClick={() => dispatch(switchTheme())} />
        <ToggleSliderRound></ToggleSliderRound>
      </ToggleContainer>
    </div>
  )
}

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
    height: 26px;
    width: 26px;
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
    background-color: #2196f3;
  }
  &:focus + ${ToggleSliderRound} {
    box-shadow: 0 0 1px #2196f3;
  }
  :checked + ${ToggleSliderRound}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
const FaMoonElement = styled(FaMoon)`
  position: absolute;
  margin-top: 0.5em;
  color: ${props => props.color};
`
export default Toggle
