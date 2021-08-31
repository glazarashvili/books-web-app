import React from 'react'
import Carousel from '../UI/Carousel/Carousel'
import CategoriesList from '../components/Categories/CategoriesList'
import SearchMenu from '../components/SeachMenu/SearchMenu'
import Cards from '../components/Cards/Cards'

const HomePage = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <SearchMenu />
      <CategoriesList />
      <Carousel />
      <Cards />
    </div>
  )
}

export default HomePage
