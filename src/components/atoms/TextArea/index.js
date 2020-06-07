import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Textarea = ({
  inputName,
  type,
  name,
  id,
  placeholder,
  inputColor,
  ...props
}) => {
  return (
    <TextareaContainer className='form__group'>
      <TextAreaComponent
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        inputColor={inputColor}
        {...props}
      />
      <LabelComponent htmlFor={name}>{inputName}</LabelComponent>
    </TextareaContainer>
  )
}

const LabelComponent = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #9b9b9b;
`

const TextAreaComponent = styled.textarea`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid ${props => props.inputColor};
  }
  &:placeholder-shown ~ ${LabelComponent} {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }
  &:focus ~ ${LabelComponent} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.9em;
    color: ${props => props.inputColor};
  }
  &::placeholder {
    color: transparent;
  }
`

const TextareaContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
`
Textarea.defaultProps = {
  inputName: '',
  type: '',
  name: 'Input',
  id: '',
  placeholder: 'Placeholder',
  inputColor: 'Yellow'
}

Textarea.propTypes = {
  inputName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  inputColor: PropTypes.string
}

export default Textarea
