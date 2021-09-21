import React from 'react'
import classes from './RegisterForm.module.css'

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import PasswordIcon from '../../assets/Icons/PasswordIcon'

const RegisterForm = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [nameIsTouched, setNameIsTouched] = React.useState(false)
  const [emailIsTouched, setEmailIsTouched] = React.useState(false)
  const [surnameIsTouched, setSurnameIsTouched] = React.useState(false)
  const [passwordIsTouched, setPasswordIsTouched] = React.useState(false)

  const [formIsValid, setFormIsValid] = React.useState(false)
  const [inputType, setInputType] = React.useState('password')
  const [isInputChecked, setIsInputChecked] = React.useState(false)

  const regex = /^(\d+[a-zA-Z]|[a-zA-Z]+\d)(\d|[a-zA-Z])*/gm

  const nameIsValid = name.length > 0
  const nameIsInvalid = !nameIsValid && nameIsTouched

  const surnameIsValid = surname.length > 0
  const surnameIsInvalid = !surnameIsValid && surnameIsTouched

  const emailIsValid = email.length > 5 && email.includes('@')
  const emailIsInvalid = !emailIsValid && emailIsTouched

  const passwordIsValid = regex.test(password) && password.length > 5
  const passwordIsInvalid = !passwordIsValid && passwordIsTouched

  React.useEffect(() => {
    setFormIsValid(
      nameIsValid &&
        emailIsValid &&
        surnameIsValid &&
        passwordIsValid &&
        isInputChecked
    )
  }, [
    nameIsValid,
    emailIsValid,
    surnameIsValid,
    passwordIsValid,
    isInputChecked,
  ])

  const nameChangeHandler = e => {
    setName(e.target.value)
  }

  const surnameChangeHandler = e => {
    setSurname(e.target.value)
  }

  const emailChangeHandler = e => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = e => {
    setPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    setName('')
    setEmail('')
    setSurname('')
    setPassword('')
  }

  const ChangeInputType = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  const onNameFocus = () => {
    setNameIsTouched(true)
  }

  const onSurnameFocus = () => {
    setSurnameIsTouched(true)
  }

  const onEmailFocus = () => {
    setEmailIsTouched(true)
  }

  const onPasswordFocus = () => {
    setPasswordIsTouched(true)
  }

  const inputContent = (
    <PasswordIcon inputType={inputType} onPasswordClick={ChangeInputType} />
  )

  return (
    <form onSubmit={submitHandler} className={classes['register-form']}>
      <Input
        type='text'
        label='name'
        value={name}
        labelShown={true}
        onFocus={onNameFocus}
        className={
          nameIsInvalid
            ? classes['input-red']
            : nameIsValid
            ? classes['input-green']
            : ''
        }
        onInputChange={nameChangeHandler}
      />
      <Input
        type='text'
        label='surname'
        value={surname}
        labelShown={true}
        onFocus={onSurnameFocus}
        className={
          surnameIsInvalid
            ? classes['input-red']
            : surnameIsValid
            ? classes['input-green']
            : ''
        }
        onInputChange={surnameChangeHandler}
      />
      <Input
        type='e-mail'
        label='e-mail'
        value={email}
        labelShown={true}
        onFocus={onEmailFocus}
        className={
          emailIsInvalid
            ? classes['input-red']
            : emailIsValid
            ? classes['input-green']
            : ''
        }
        onInputChange={emailChangeHandler}
      />
      <Input
        type={inputType}
        label='password'
        value={password}
        labelShown={true}
        onFocus={onPasswordFocus}
        className={
          passwordIsInvalid
            ? classes['input-red']
            : passwordIsValid
            ? classes['input-green']
            : ''
        }
        children={inputContent}
        onInputChange={passwordChangeHandler}
      />
      <div className={classes.checkbox}>
        <input
          id='checkbox'
          type='checkbox'
          checked={isInputChecked}
          onChange={() => setIsInputChecked(!isInputChecked)}
        />
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
