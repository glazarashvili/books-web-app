import React from 'react'
import classes from './LoginForm.module.css'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'

const LoginForm = ({ onModalClose, onLoginSubmit }) => {
  const [enteredEmail, setEnteredEmail] = React.useState('')
  const [enteredPassword, setEnteredPassword] = React.useState('')

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value)
  }
  const passwordChangeHandler = e => {
    setEnteredPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    onLoginSubmit(enteredEmail, enteredPassword)
    onModalClose()
  }

  return (
    <form className={classes['login-form']} onSubmit={submitHandler}>
      <Input
        type='email'
        label='email'
        labelShown={true}
        value={enteredEmail}
        onInputChange={emailChangeHandler}
      />
      <Input
        type='password'
        label='password'
        labelShown={true}
        value={enteredPassword}
        onInputChange={passwordChangeHandler}
      />
      <Button type='submit' className={classes.button}>
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
