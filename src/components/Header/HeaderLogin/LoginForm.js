import React from 'react'

import Input from '../../../UI/Modal/Modal'

import classes from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <div>
      <p style={{ color: 'red' }}>color</p>
      <Input labelShown={true} label='E-email' />
      <Input />
    </div>
  )
}

export default LoginForm
