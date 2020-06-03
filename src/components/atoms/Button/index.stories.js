import React from 'react'
import Button from '../Button'

export default {
  title: 'Button',
  component: Button
}

export const ButtonNotInverted = () => (
  <Button
    name='Button'
    borderColor='blue'
    textHoverColor='blue'
    fillingColor='blue'
    textColor='white'
    IsInvert={false}
    onClick={() => console.log('test')}
  ></Button>
)

export const ButtonInverted = () => (
  <Button
    name='Button'
    borderColor='blue'
    textHoverColor='blue'
    fillingColor='blue'
    textColor='white'
    IsInvert={true}
  ></Button>
)
