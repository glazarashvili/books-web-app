import React from 'react'

import classes from './Input.module.css'

const Input = ({ label, value, type, labelShown, placeholder }) => {
  return (
    <div className={classes['input-container']}>
      <div>{labelShown && <label htmlFor={label}>{label}</label>}</div>
      <div>
        <input
          id={label}
          type={type}
          value={value}
          placeholder={placeholder}
          className={classes.input}
        />
      </div>
    </div>
  )
}

export default Input
