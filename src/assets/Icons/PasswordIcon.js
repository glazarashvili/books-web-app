import React from 'react'

import classes from './PasswordIcon.module.css'

const PasswordIcon = ({ onPasswordClick }) => {
  return (
    <div className={classes['password-icon']} onClick={onPasswordClick}>
      <img
        alt='show-hide-pass'
        src='https://mpng.subpng.com/20180424/qvw/kisspng-computer-icons-cross-eye-5adf65caa219d3.338666321524590026664.jpg'
      />
    </div>
  )
}

export default PasswordIcon
