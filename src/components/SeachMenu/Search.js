import React from 'react'

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

import classes from './Search.module.css'

const Search = () => {
  return (
    <div className={classes['search-bar']}>
      <Input
        className={classes.input}
        type='search'
        placeholder='Find your product'
      />
      <Button className={classes.button}>
        <img
          className={classes['search-icon']}
          alt='search icon'
          src='https://bookshop.ge/images/icons/search.png'
        />
        Search
      </Button>
    </div>
  )
}

export default Search
