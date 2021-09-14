import React from 'react'

import classes from './BookDescription.module.css'

const BookDescription = ({ author, title, publisher, description }) => {
  return (
    <div className={classes['details-page_content']}>
      <p className={classes.title}>{title}</p>
      <p className={classes.author}>
        {author} <span>(Author)</span>
      </p>
      <p className={classes.publisher}>Publisher: {publisher}</p>
      <p className={classes.description}>Description: {description}</p>
    </div>
  )
}

export default BookDescription
