import React from 'react';
import Input  from './index';

export default {
  title: 'Input',
  component: Input,
};

export const InputWithLabel = () => (
  <Input
  inputColor='blue'
  name='input'
  labelName='Input name'
  id='book-category'
  type='text'
  ></Input>
);

export const InputWithoutLabel = () => (
  <Input
  inputColor='blue'
  ></Input>
);
