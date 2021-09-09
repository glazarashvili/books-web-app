import React from 'react'

import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.loading}>
      <img src='https://saba.com.ge/content/img/Loader.gif' alt='loading-pic' />
      <p className={classes['loading_content']}>Loading...</p>
    </div>
  )
}

export default Loading
