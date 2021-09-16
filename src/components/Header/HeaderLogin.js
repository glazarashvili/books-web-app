import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../UI/Button/Button'

import classes from './HeaderLogin.module.css'

const HeaderLogin = () => {
  return (
    <div className={classes['login-menu']}>
      <Link to='/login' className={classes.link}>
        Log In
      </Link>
      <Link className={classes['btn-link']} to='/register'>
        <Button className={classes.button}>Sign Up</Button>
      </Link>
    </div>
  )
}

export default HeaderLogin
