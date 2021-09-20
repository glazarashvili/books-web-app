import React from 'react'
import Modal from '../../../UI/Modal/Modal'
import LoginForm from './LoginForm'

import classes from './LoginModal.module.css'

const LoginModal = () => {
  return (
    <Modal className={classes['login-moda']}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
