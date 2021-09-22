import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import classes from './HeaderLogin.module.css'

import LoginModal from './LoginModal'
import Button from '../../../UI/Button/Button'

const HeaderLogin = () => {
  const dispatch = useDispatch()
  const [modalShown, setModalShown] = React.useState(false)
  const IsUserLoggedIn = useSelector(state => state.user.isUserLoggedIn)

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

  const LoginSubmitHandler = (email, password) => {
    console.log(email, password)
    localStorage.setItem('isUserLoggedIn', true)
    dispatch({ type: 'SET_USER' })
    // loginUser({ email: email, password: password })
  }

  // const modalContent = (
  //   <React.Fragment>
  //     {ReactDOM.createPortal(
  //       <LoginModal onClose={hideModal} onLoginSubmit={LoginSubmitHandler} />,
  //       document.getElementById('modal')
  //     )}
  //     {ReactDOM.createPortal(
  //       <Backdrop backdropClick={hideModal} />,
  //       document.getElementById('backdrop')
  //     )}
  //   </React.Fragment>
  // )

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
            <LoginModal
              onClose={hideModal}
              onLoginSubmit={LoginSubmitHandler}
            />
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
