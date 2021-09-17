import React from 'react'
import classes from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux'

import HeaderLogin from './HeaderLogin'
import SunSvg from '../../assets/SVG/SunSvg'
import MoonSvg from '../../assets/SVG/MoonSvg'
import Template from '../../UI/Template/Template'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
  const dispatch = useDispatch()
  const darkmode = useSelector(store => store.darkmode.toggle)

  const onDarkModeClick = () => {
    dispatch({ type: 'SET_DARK_MODE' })
  }

  return (
    <header
      className={
        darkmode ? `${classes.header} ${classes.dark}` : classes.header
      }>
      <Template>
        <HeaderNavigation />
        <div onClick={onDarkModeClick} className={classes['dark-mode']}>
          {darkmode ? <SunSvg /> : <MoonSvg />}
          <p>{darkmode ? 'Light Mode' : 'Dark Mode'}</p>
        </div>
        <HeaderLogin />
      </Template>
    </header>
  )
}

export default Header
