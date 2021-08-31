import React from 'react'

import classes from './Carousel.module.css'

const images = [
  'https://www.bookshop.ge/content/uploads/slider/slider_5f718889505dd.jpg',
  'https://www.bookshop.ge/content/uploads/slider/slider_60f566c675464.jpg',
]

const Carousel = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)

  // React.useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setPosterIndex(prevState => prevState + 1)
  //     if (posterIndex > images.length - 2) {
  //       setPosterIndex(0)
  //     }
  //     if (posterIndex < 1) {
  //       setPosterIndex(images.length - 1)
  //     }
  //   }, 5000)
  // }, [])

  const nextImageChangeHandler = () => {
    // clearTimeout(identifier)
    setPosterIndex(prevState => prevState + 1)

    if (posterIndex > images.length - 2) {
      setPosterIndex(0)
    }
  }
  const prevImageChangeHandler = () => {
    // clearTimeout(identifier)
    setPosterIndex(prevState => prevState - 1)

    if (posterIndex < 1) {
      setPosterIndex(images.length - 1)
    }
  }

  let backgroundImage = `url(${images[posterIndex]})`

  return (
    <div
      className={classes.carousel}
      style={{
        backgroundImage: backgroundImage,
      }}>
      <div
        onClick={prevImageChangeHandler}
        className={`${classes.circle} ${classes.left}`}>
        <div className={classes['arrow-left']}></div>
      </div>
      <div
        onClick={nextImageChangeHandler}
        className={`${classes.circle} ${classes.right}`}>
        <div className={classes['arrow-right']}></div>
      </div>
    </div>
  )
}

export default Carousel
