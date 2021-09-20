import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import classes from './HeaderLogin.module.css'

import LoginModal from './LoginModal'
import Button from '../../../UI/Button/Button'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const HeaderLogin = () => {
  const [modalShown, setModalShown] = React.useState(false)

  const hideModal = () => {
    setModalShown(false)
  }

  const showModal = () => {
    setModalShown(true)
  }

  return (
    <div className={classes['login-menu']}>
      <button className={classes['modal-button']} onClick={showModal}>
        <p className={classes.link}>Log In</p>
      </button>
      {/* {modalShown && (
        <React.Fragment>
          <LoginModal onClose={hideModal} />
          <Backdrop backdropClick={hideModal} />
        </React.Fragment>
      )} */}

      {modalShown && (
        <React.Fragment>
          {ReactDOM.createPortal(
            <LoginModal onClose={hideModal} />,
            document.getElementById('modal')
          )}
          {ReactDOM.createPortal(
            <Backdrop backdropClick={hideModal} />,
            document.getElementById('backdrop')
          )}
        </React.Fragment>
      )}
      <Link className={classes['btn-link']} to='/register'>
        <Button className={classes.button}>Sign Up</Button>
      </Link>
    </div>
  )
}

export default HeaderLogin
