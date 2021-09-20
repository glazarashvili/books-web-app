import React from 'react'
import Modal from '../../../UI/Modal/Modal'
import LoginForm from './LoginForm'

import classes from './LoginModal.module.css'

const LoginModal = () => {
  return (
    <Modal className={classes['login-modal']}>
      <header>
        <h1 className={classes.heading}>Log In</h1>
        <button className={classes['close-btn']}>CLOSE</button>
      </header>
      <div className={classes['not-registered']}>
        <p>not registered?</p>
        <button>create an account</button>
      </div>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
