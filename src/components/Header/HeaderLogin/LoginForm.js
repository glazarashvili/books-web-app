import React from 'react'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import classes from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <form className={classes['login-form']}>
      <Input
        type='email'
        label='email'
        labelShown={true}
        // value={enteredName}
        // onInputChange={nameChangeHandler}
      />
      <Input
        type='password'
        label='password'
        labelShown={true}
        // value={enteredName}
        // onInputChange={nameChangeHandler}
      />
      <Button className={classes.button}>Log In</Button>
    </form>
  )
}

export default LoginForm
