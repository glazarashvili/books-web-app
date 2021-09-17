import React from 'react'

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import classes from './RegisterForm.module.css'

const RegisterForm = () => {
  return (
    <form className={classes['register-form']}>
      <Input labelShown={true} label='name' type='text' />
      <Input labelShown={true} label='surname' type='text' />
      <Input labelShown={true} label='e-mail' type='e-mail' />
      <Input labelShown={true} label='password' type='password' />
      <div className={classes.checkbox}>
        <input type='checkbox' id='checkbox' />
        <label htmlFor='checkbox'>
          Agree to terms of <a href='/'>conditions.</a>
        </label>
      </div>
      <Button className={classes.button}>Create your account</Button>
    </form>
  )
}

export default RegisterForm
