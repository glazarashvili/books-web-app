import React from 'react'

import Template from '../../UI/Template/Template'

import classes from './Banner.module.css'

const Banner = ({ image }) => {
  return (
    <div className={classes.banner}>
      <Template>
        <img className={classes['banner-image']} alt='banner pic' src={image} />
      </Template>
    </div>
  )
}

export default Banner
