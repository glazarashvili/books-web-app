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
      <Cards type='new' path='new' cardHeaderShown={true} sliceIndex='4' />
      <Banner image={images[2]} />
      <Cards
        type='fiction'
        path='fiction'
        cardHeaderShown={true}
        sliceIndex='4'
      />
    </div>
  )
}
