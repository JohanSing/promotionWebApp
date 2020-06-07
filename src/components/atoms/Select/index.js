import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectContainer = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  position: relative;
  width: 100%;
  &:after {
    position: absolute;
    top: 18px;
    right: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
  }
`
const SelectHighlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`

const SelectBar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${props => props.color};
    transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`

const SelectLabel = styled.label`
  color: rgba(0, 0, 0, 0.26);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
  &:focus ~ ${SelectBar}:before, &:focus ~ ${SelectBar}:after {
    width: 100%;
  }
`

const SelectComponent = styled.select`
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.color};
  }
  &:focus ~ ${SelectLabel} {
    color: ${props => props.color};
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
  }
`

const Select = ({ name, color = 'green', action, ...props }) => {
  return (
    <SelectContainer>
      <SelectComponent props onChange={event => action(event)} color={color}>
        {props.children}
      </SelectComponent>
      <SelectHighlight />
      <SelectBar color={color} />
      <SelectLabel>{name}</SelectLabel>
    </SelectContainer>
  )
}

Select.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
}
export default Select
