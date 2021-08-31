import React from 'react'
import Carousel from '../UI/Carousel/Carousel'
import CategoriesList from '../components/Categories/CategoriesList'
import SearchMenu from '../components/SeachMenu/SearchMenu'

const HomePage = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <SearchMenu />
      <CategoriesList />
      <Carousel />
    </div>
  )
}

export default HomePage
