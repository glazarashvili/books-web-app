import React from 'react'

import classes from './Navigation.module.css'

import Header from '../Header/Header'
import SearchMenu from '../SeachMenu/SearchMenu'
import CategoriesList from '../Categories/CategoriesList'

const Navigation = () => {
  return (
    <div className={classes['navigation-menu']}>
      <Header />
      <SearchMenu />
      <CategoriesList />
    </div>
  )
}

export default Navigation
