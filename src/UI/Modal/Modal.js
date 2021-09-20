import React from 'react'

import classes from './Modal.module.css'

const Modal = ({ children, className }) => {
  return (
    <div className={`${classes['modal-container']} ${className}`}>
      {children}
    </div>
  )
}

export default Modal
