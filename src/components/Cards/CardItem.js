import React from 'react'

import classes from './CardItem.module.css'

const CardItem = ({ title, author, image }) => {
  return (
    <div className={classes['card-item']}>
      <img
        src={image}
        alt='card-item-iamge'
        className={classes['card-item__image']}
      />
      <div className={classes['card-item__content']}>
        <p className={classes['card-item__content-title']}>{title}</p>
        <p className={classes['card-item__content-author']}>{author}</p>
      </div>
      <div className={classes['card-item__hidden']}>
        <p className={classes['card-item__content-title']}>{title}</p>
        <p className={classes['card-item__content-author']}>{author}</p>
        <button>Add To Basket</button>
      </div>
    </div>
  )
}

export default CardItem
