import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'
import classes from './LoginModal.module.css'

import LoginForm from './LoginForm'
import Modal from '../../../UI/Modal/Modal'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const LoginModal = ({ onClose, onLoginSubmit }) => {
  const history = useHistory()

  const createAccountHandler = () => {
    onClose()
    history.push('/register')
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
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
          <LoginForm onClose={onClose} onLoginSubmit={onLoginSubmit} />
        </Modal>,
        document.getElementById('modal-overlay')
      )}
      {ReactDOM.createPortal(
        <Backdrop backdropClick={onClose} />,
        document.getElementById('backdrop')
      )}
    </React.Fragment>
  )
}

export default LoginModal
