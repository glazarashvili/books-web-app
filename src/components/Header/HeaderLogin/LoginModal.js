import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './LoginModal.module.css'

import LoginForm from './LoginForm'
import Modal from '../../../UI/Modal/Modal'

const LoginModal = ({ onClose }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const createAccountHandler = () => {
    onClose()
    history.push('/register')
  }

  const LoginSubmitHandler = (email, password) => {
    console.log(email, password)
    localStorage.setItem('isUserLoggedIn', true)
    dispatch({ type: 'SET_USER' })
  }

  return (
    <Modal className={classes['login-modal']}>
      <header>
        <h1 className={classes.heading}>Log In</h1>
        <button className={classes['close-btn']} onClick={onClose}>
          CLOSE
        </button>
      </header>
      <div className={classes['not-registered']}>
        <p>not registered?</p>
        <button onClick={createAccountHandler}>create an account</button>
      </div>
      <LoginForm onClose={onClose} onLoginSubmit={LoginSubmitHandler} />
    </Modal>
  )
}

export default LoginModal
