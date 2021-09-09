import React from 'react'

import classes from './HttpError.module.css'

const HttpError = ({ children }) => {
  return <div className={classes['error-container']}>{children}</div>
}

export default HttpError
