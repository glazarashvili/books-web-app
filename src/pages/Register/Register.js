import React from 'react'
import axios from 'axios'

import classes from './Register.module.css'
import { useHistory } from 'react-router-dom'

import RegisterForm from './RegisterForm'

export const Register = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = React.useState(false)

  const registerUserHandler = async user => {
    setIsLoading(true)
    const data = await axios({
      data: JSON.stringify(user),
      method: 'POST',
      url: 'https://books-web-app-c7f23-default-rtdb.firebaseio.com/user.json',
    })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error))
    history.push('/')
    console.log(data)
  }

  return (
    <div className={classes.register}>
      <h1 className={classes.heading}>Registration</h1>
      <RegisterForm
        isLoading={isLoading}
        onUserRegister={registerUserHandler}
      />
    </div>
  )
}
