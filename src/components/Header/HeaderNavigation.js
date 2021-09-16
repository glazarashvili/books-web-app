import React from 'react'
import { Link } from 'react-router-dom'

import classes from './HeaderNavigation.module.css'

const HeaderNavigation = () => {
  return (
    <ul className={classes['nav-items']}>
      <Link className={classes.link} to='/'>
        <img
          alt='home-icon'
          src='https://www.bookshop.ge/images/icons/home.png'
        />
      </Link>
      <li>Blog</li>
      <li>Gift Card</li>
      <li>Orphan's Book club</li>
    </ul>
  )
}

export default HeaderNavigation
