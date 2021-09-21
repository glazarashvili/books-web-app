import React from 'react'
import { useSelector } from 'react-redux'

import classes from './LoginForm.module.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'

const LoginForm = ({ onClose, onLoginSubmit }) => {
  const store = useSelector(state => state.isUserLoggedIn)

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
    setEnteredEmail('')
    setEnteredPassword('')
    onLoginSubmit(enteredEmail, enteredPassword)
    onClose()
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
