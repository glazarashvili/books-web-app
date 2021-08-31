import React from 'react'

import Search from './Search'
import Template from '../../UI/Template/Template'

import classes from './SearchMenu.module.css'

const SearchMenu = () => {
  return (
    <div className={classes['search-menu']}>
      <Template className={classes.template}>
        <img
          style={{ height: '40px' }}
          src='https://www.bookshop.ge/images/logo.svg'
          alt='search-menu-pic'
        />
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
