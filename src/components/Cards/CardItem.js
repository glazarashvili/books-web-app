import React from 'react'

import classes from './CardItem.module.css'

import Button from '../../UI/Button/Button'

const CardItem = ({ title, author, image, price }) => {
  return (
    <div className={classes['card-item']}>
      <div>
        <img
          src={image}
          alt='card-item-iamge'
          className={classes['card-item__image']}
        />
      </div>
      <div className={classes['card-item__content']}>
        <p className={classes['card-item__content-title']}>{title}</p>
        <p className={classes['card-item__content-author']}>{author}</p>
      </div>
      <div className={classes['card-item__overlay']}>
        <p className={classes['card-item__overlay-price']}>price: {price}</p>
        <Button className={classes['card-button']}>Add To Basket</Button>
      </div>
    </div>
  )
}

export default CardItem
