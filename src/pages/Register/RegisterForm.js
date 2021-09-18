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

  React.useEffect(() => {
    console.log(setEnteredName.length)
    setFormIsValid(enteredName.length > 3 && enteredEmail.includes('@'))
  }, [enteredName, enteredEmail])

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
        labelShown={true}
        onInputChange={nameChangeHandler}
        value={enteredName}
        label='name'
        type='text'
      />
      <Input
        labelShown={true}
        onInputChange={surnameChangeHandler}
        label='surname'
        value={enteredSurname}
        type='text'
      />
      <Input
        labelShown={true}
        onInputChange={emailChangeHandler}
        label='e-mail'
        value={enteredEmail}
        type='e-mail'
      />
      <Input
        labelShown={true}
        onInputChange={passwordChangeHandler}
        label='password'
        value={enteredPassword}
        type='password'
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
