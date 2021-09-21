import React from 'react'

import classes from './Input.module.css'

const Input = ({
  type,
  value,
  label,
  onFocus,
  children,
  className,
  labelShown,
  placeholder,
  onInputChange,
}) => {
  return (
    <div className={classes['input-container']}>
      <div>{labelShown && <label htmlFor={label}>{label}</label>}</div>
      <div>
        <input
          id={label}
          type={type}
          value={value}
          onFocus={onFocus}
          onChange={onInputChange}
          placeholder={placeholder}
          className={`${classes.input} ${className}`}
        />
        {children}
      </div>
    </div>
  )
}

export default Input
