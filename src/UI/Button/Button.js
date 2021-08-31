import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, children, className, onClick, disabled }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      type={'button' || type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
