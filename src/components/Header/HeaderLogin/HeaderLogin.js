import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import classes from './HeaderLogin.module.css'

import LoginModal from './LoginModal'
import Button from '../../../UI/Button/Button'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const HeaderLogin = () => {
  const [modalShown, setModalShown] = React.useState(false)
  const IsUserLoggedIn = useSelector(state => state.user.isUserLoggedIn)
  const dispatch = useDispatch()

  const hideModal = () => {
    setModalShown(false)
  }

  const showModal = () => {
    setModalShown(true)
  }

  const onLogoutHandler = () => {
    localStorage.setItem('isUserLoggedIn', false)
    dispatch({ type: 'SET_USER' })
  }

  return (
    <div className={classes['login-menu']}>
      {IsUserLoggedIn && (
        <Button onClick={onLogoutHandler} className={classes.button}>
          Log Out
        </Button>
      )}
      {!IsUserLoggedIn && (
        <React.Fragment>
          <button className={classes['modal-button']} onClick={showModal}>
            <p className={classes.link}>Log In</p>
          </button>
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
        </React.Fragment>
      )}
    </div>
  )
}

export default HeaderLogin
