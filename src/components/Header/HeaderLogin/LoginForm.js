import React from 'react'
import classes from './LoginForm.module.css'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'

const LoginForm = ({
  authFailed,
  onModalClose,
  onLoginSubmit,
  loginIsLoading,
}) => {
  const [enteredEmail, setEnteredEmail] = React.useState('')
  const [enteredPassword, setEnteredPassword] = React.useState('')

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value)
  }
  const passwordChangeHandler = e => {
    setEnteredPassword('')
  }

  const submitHandler = e => {
    e.preventDefault()
    onLoginSubmit(enteredEmail, enteredPassword)
    if (authFailed) {
      setEnteredEmail('')
      setEnteredPassword('')
    }
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
        {loginIsLoading ? 'Loading...' : 'Log In'}
      </Button>
    </form>
  )
}

export default LoginForm
