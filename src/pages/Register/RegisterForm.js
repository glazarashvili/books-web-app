import React from 'react'

import classes from './RegisterForm.module.css'
import Input from '../../UI/Input/Input'

const RegisterForm = () => {
  return (
    <form className={classes['register-form']}>
      <Input labelShown={true} label='name' type='text' />
      <Input labelShown={true} label='surname' type='text' />
      <Input labelShown={true} label='e-mail' type='e-mail' />
      <Input labelShown={true} label='password' type='password' />
      <Input
        labelShown={true}
        type='checkbox'
        label='Agree to terms of conditions'
      />
    </form>
  )
}

export default RegisterForm
