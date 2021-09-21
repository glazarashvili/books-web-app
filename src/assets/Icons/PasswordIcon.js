import React from 'react'

import { icons } from './index'
import classes from './PasswordIcon.module.css'

const PasswordIcon = ({ onPasswordClick, inputType }) => {
  return (
    <div className={classes['password-icon']} onClick={onPasswordClick}>
      <img
        alt='show-hide-pass'
        src={inputType === 'password' ? icons.visible : icons.hidden}
      />
    </div>
  )
}

export default PasswordIcon
