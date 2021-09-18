import React from 'react'

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import classes from './RegisterForm.module.css'

const RegisterForm = () => {
  const [enteredName, setEnteredName] = React.useState('')
  const [enteredEmail, setEnteredEmail] = React.useState('')
  const [enteredSurname, setEnteredSurname] = React.useState('')
  const [enteredPassword, setEnteredPassword] = React.useState('')
  const [formIsValid, setFormIsValid] = React.useState(false)

  const regex = /\d/
  const passwordIsValid = regex.test(enteredPassword)

  React.useEffect(() => {
    setFormIsValid(
      enteredName.length > 3 &&
        enteredEmail.includes('@' && 'com') &&
        passwordIsValid
    )
  }, [enteredName, enteredEmail, passwordIsValid])

  const nameChangeHandler = e => {
    setEnteredName(e.target.value)
  }

  const surnameChangeHandler = e => {
    setEnteredSurname(e.target.value)
  }

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value)
  }

  const passwordChangeHandler = e => {
    setEnteredPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    setEnteredName('')
    setEnteredEmail('')
    setEnteredSurname('')
    setEnteredPassword('')
  }

  return (
    <form onSubmit={submitHandler} className={classes['register-form']}>
      <Input
        type='text'
        label='name'
        labelShown={true}
        value={enteredName}
        onInputChange={nameChangeHandler}
      />
      <Input
        type='text'
        label='surname'
        labelShown={true}
        value={enteredSurname}
        onInputChange={surnameChangeHandler}
      />
      <Input
        type='e-mail'
        label='e-mail'
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
      <div className={classes.checkbox}>
        <input type='checkbox' id='checkbox' />
        <label htmlFor='checkbox'>
          Agree to terms of <a href='/'>conditions.</a>
        </label>
      </div>
      <Button
        type='submit'
        disabled={!formIsValid}
        onSubmit={submitHandler}
        className={classes.button}>
        Create your account
      </Button>
    </form>
  )
}

export default RegisterForm
