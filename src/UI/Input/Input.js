import React from 'react'

import classes from './Input.module.css'

const Input = ({ label, value, type, labelShown, placeholder, className }) => {
  return (
    <div>
      <input
        id={label}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${classes.input} ${className}`}
      />
      {labelShown && <label htmlFor={label}>{label}</label>}
    </div>
  )
}

export default Input
