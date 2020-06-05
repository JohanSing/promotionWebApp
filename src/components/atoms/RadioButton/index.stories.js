import React from 'react'
import RadioButton from './index'

export default {
  title: 'RadioButton',
  component: RadioButton
}

export const RadioButtonRed = () => (
  <RadioButton color='red' name='radio1' labelName='Radio 1' id='radio-1' />
)

export const RadioButtonBlue = () => (
  <RadioButton inputColor='blue' name='toto' labelName='Radio 1' />
)
