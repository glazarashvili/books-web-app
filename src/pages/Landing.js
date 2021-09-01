import React from 'react'

import Cards from '../components/Cards/Cards'
import Carousel from '../UI/Carousel/Carousel'
import SearchMenu from '../components/SeachMenu/SearchMenu'
import CategoriesList from '../components/Categories/CategoriesList'

const Landing = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <SearchMenu />
      <CategoriesList />
      <Carousel />
      <Cards />
    </div>
  )
}

export default Landing
