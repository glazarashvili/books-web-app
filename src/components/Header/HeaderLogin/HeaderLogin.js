import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../../UI/Modal/Modal'
import Button from '../../../UI/Button/Button'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import LoginForm from './LoginForm'
import Input from '../../../UI/Input/Input'

import classes from './HeaderLogin.module.css'
import LoginModal from './LoginModal'

const HeaderLogin = () => {
  const [modalShown, setModalShown] = React.useState(false)

  return (
    <div className={classes['login-menu']}>
      <button
        className={classes['modal-button']}
        onClick={() => setModalShown(true)}>
        <p className={classes.link}>Log In</p>
      </button>
      {modalShown && (
        <React.Fragment>
          <LoginModal />
          <Backdrop backdropClick={() => setModalShown(false)} />
        </React.Fragment>
      )}
      <Link className={classes['btn-link']} to='/register'>
        <Button className={classes.button}>Sign Up</Button>
      </Link>
    </div>
  )
}

export default HeaderLogin
