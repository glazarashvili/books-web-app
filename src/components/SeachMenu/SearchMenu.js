import React from 'react'

import { Link } from 'react-router-dom'

import classes from './SearchMenu.module.css'

import Search from './Search'
import Template from '../../UI/Template/Template'

const SearchMenu = () => {
  return (
    <div className={classes['search-menu']}>
      <Template className={classes.template}>
        <Link to='/'>
          <img
            alt='search-menu-pic'
            className={classes['search-menu__image']}
            src='https://www.bookshop.ge/images/logo.svg'
          />
        </Link>
        <Search />
        <div className={classes['search-menu__icons']}>
          <img
            alt='search-menu-pic'
            src='https://bookshop.ge/images/icons/save.png'
          />
          <img
            alt='search-menu-pic'
            src='https://bookshop.ge/images/icons/cart.png'
          />
        </div>
      </Template>
    </div>
  )
}

export default SearchMenu
