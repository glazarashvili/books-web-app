import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, children, className, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
      className={`${classes.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button
