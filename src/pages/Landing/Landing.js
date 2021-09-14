import React from 'react'

import images from './images'
import classes from './Landing.module.css'

import Cards from '../../components/Cards/Cards'
import Carousel from '../../UI/Carousel/Carousel'
import Banner from '../../components/Banner/Banner'

export const Landing = () => {
  return (
    <div className={classes['landing-page']}>
      <React.Fragment>
        <Carousel />
        <Cards type='fiction' path='fiction' category='hardcover-fiction' />
        <Banner image={images[2]} />
        <Cards type='business' path='business' category='business-books' />
      </React.Fragment>
    </div>
  )
}
