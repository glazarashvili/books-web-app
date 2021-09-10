import React from 'react'

import images from './images'
import classes from './Landing.module.css'

import Cards from '../../components/Cards/Cards'
import Carousel from '../../UI/Carousel/Carousel'
import Banner from '../../components/Banner/Banner'

// import Loading from '../../UI/Loading/Loading'

export const Landing = () => {
  // const [loading, setLoading] = React.useState(true)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 10000)
  // }, [])

  return (
    <div className={classes['landing-page']}>
      {/* {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Carousel />
          <Cards type='fiction' path='fiction' category='hardcover-fiction' />
          <Banner image={images[2]} />
          <Cards type='business' path='business' category='business-books' />
        </React.Fragment>
      )} */}
      <React.Fragment>
        <Carousel />
        <Cards type='fiction' path='fiction' category='hardcover-fiction' />
        <Banner image={images[2]} />
        <Cards type='business' path='business' category='business-books' />
      </React.Fragment>
    </div>
  )
}
