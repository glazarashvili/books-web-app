import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../../UI/Modal/Modal'
import Button from '../../../UI/Button/Button'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import LoginForm from './LoginForm'

import classes from './HeaderLogin.module.css'

const HeaderLogin = () => {
  return (
    <div className={classes['login-menu']}>
      <button className={classes['modal-button']}>
        <p className={classes.link}>Log In</p>
      </button>
      {/* <Modal>
        <LoginForm />
      </Modal> */}
      {/* <Backdrop /> */}
      {/* <LoginForm /> */}
      <Link className={classes['btn-link']} to='/register'>
        <Button className={classes.button}>Sign Up</Button>
      </Link>
    </div>
  )
}

export default HeaderLogin
