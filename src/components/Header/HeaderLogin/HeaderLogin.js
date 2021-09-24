import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import classes from './HeaderLogin.module.css'
import { useSelector, useDispatch } from 'react-redux'

import LoginModal from './LoginModal'
import Button from '../../../UI/Button/Button'

const HeaderLogin = () => {
  const dispatch = useDispatch()
  const [modalShown, setModalShown] = React.useState(false)
  const [authFailed, setAuthFailed] = React.useState(false)
  const isUserLoggedIn = useSelector(state => state.user.isUserLoggedIn)

  const hideModal = () => {
    if (authFailed) {
      setModalShown(false)
    }
    return
  }

  const showModal = () => {
    setModalShown(true)
  }

  const onLogoutHandler = () => {
    localStorage.setItem('isUserLoggedIn', false)
    dispatch({ type: 'SET_USER' })
  }

  const LoginSubmitHandler = async (email, password) => {
    const registeredUsers = await axios
      .get('https://books-web-app-c7f23-default-rtdb.firebaseio.com/user.json')
      .then(response => Object.values(response.data))
      .catch(error => console.log(error))

    const isValidationPassed = registeredUsers.map(elem => {
      return elem.email === email && elem.password === password
    })

    if (isValidationPassed.includes(true)) {
      localStorage.setItem('isUserLoggedIn', true)
      dispatch({ type: 'SET_USER' })
    } else {
      setAuthFailed(true)
    }
  }

  return (
    <div className={classes['login-menu']}>
      {isUserLoggedIn && (
        <Button onClick={onLogoutHandler} className={classes.button}>
          Log Out
        </Button>
      )}
      {!isUserLoggedIn && (
        <React.Fragment>
          <button className={classes['modal-button']} onClick={showModal}>
            <p className={classes.link}>Log In</p>
          </button>
          {modalShown && (
            <LoginModal
              authFailed={authFailed}
              onModalClose={hideModal}
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
