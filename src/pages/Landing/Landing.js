import React from 'react'

import classes from './Landing.module.css'
import images from './index'

import Cards from '../../components/Cards/Cards'
import Carousel from '../../UI/Carousel/Carousel'
import Banner from '../../components/Banner/Banner'
import SearchMenu from '../../components/SeachMenu/SearchMenu'
import CategoriesList from '../../components/Categories/CategoriesList'

const Landing = () => {
  return (
    <div className={classes['landing-page']}>
      <SearchMenu />
      <CategoriesList />
      <Carousel />
      <Cards />
      <Banner image={images[0]} />
    </div>
  )
}

export default Landing
