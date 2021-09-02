import React from 'react'

import images from './index'
import classes from './Landing.module.css'

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
      <Cards type='new' />
      <Cards type='fiction' />
      <Banner image={images[0]} />
      <Cards type='childrens' />
      <Banner image={images[1]} />
      <Cards type='Bestsellers' />
    </div>
  )
}

export default Landing