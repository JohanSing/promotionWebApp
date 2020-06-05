import React from 'react'
import Select from './index'

export default {
  title: 'Select',
  component: Select
}

export const BlueSelect = () => (
  <Select name='Select' color='blue'>
    <option value='' disabled selected></option>
    <option value='1'>Option 1</option>
    <option value='2'>Option 2</option>
    <option value='3'>Option 3</option>
  </Select>
)

export const RedSelect = () => (
  <Select name='Select' color='red'>
    <option value='' disabled selected></option>
    <option value='1'>Option 1</option>
    <option value='2'>Option 2</option>
    <option value='3'>Option 3</option>
  </Select>
)
