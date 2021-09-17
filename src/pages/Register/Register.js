import React from 'react'

import classes from './Register.module.css'
import RegisterForm from './RegisterForm'

export const Register = () => {
  return (
    <div className={classes.register}>
      <h1 className={classes.heading}>Registration</h1>
      <RegisterForm />
    </div>
  )
}
