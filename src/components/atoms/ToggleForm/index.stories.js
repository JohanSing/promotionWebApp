import React from 'react'
import ToggleForm from './index'

export default {
  title: 'ToggleForm',
  component: ToggleForm
}

export const BlueCard = () => (
  <ToggleForm nameOff='Off' nameOn='On' inputName='checkbox' color='green' />
)
