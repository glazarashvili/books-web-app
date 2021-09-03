import React from 'react'

import images from './images'
import classes from './Landing.module.css'

import Cards from '../../components/Cards/Cards'
import Carousel from '../../UI/Carousel/Carousel'
import Banner from '../../components/Banner/Banner'

export const Landing = () => {
  return (
    <div className={classes['landing-page']}>
      <Carousel />
      <Cards type='new' />
      <Banner image={images[0]} />
      <Cards type='fiction' />
      <Banner image={images[1]} />
      <Cards type='Bestsellers' />
    </div>
  )
}
