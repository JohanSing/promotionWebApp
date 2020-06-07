import React from 'react'
import Textarea from './index'

export default {
  title: 'Textarea',
  component: Textarea
}

export const RedTextArea = () => (
  <Textarea
    inputColor='red'
    name='author-surnname'
    id='book-description'
    inputName='Textarea'
  ></Textarea>
)
