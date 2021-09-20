import React from 'react'

import Input from '../../../UI/Input/Input'

import classes from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <form className={classes['login-form']}>
      <Input
        type='text'
        label='name'
        labelShown={true}
        // value={enteredName}
        // onInputChange={nameChangeHandler}
      />
      <Input
        type='text'
        label='name'
        labelShown={true}
        // value={enteredName}
        // onInputChange={nameChangeHandler}
      />
    </form>
  )
}

export default LoginForm
