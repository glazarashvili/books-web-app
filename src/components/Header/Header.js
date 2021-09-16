import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import classes from './Header.module.css'

import Button from '../../UI/Button/Button'
import SunSvg from '../../assets/SVG/SunSvg'
import MoonSvg from '../../assets/SVG/MoonSvg'
import Template from '../../UI/Template/Template'

const Header = () => {
  const dispatch = useDispatch()
  const darkmode = useSelector(store => store.darkmode.toggle)

  console.log(darkmode, 'darkmode')

  return (
    <header className={darkmode ? classes.header : classes.dark}>
      <Template>
        <ul className={classes['nav-items']}>
          <Link className={classes.link} to='/'>
            <img
              alt='home-icon'
              src='https://www.bookshop.ge/images/icons/home.png'
            />
          </Link>
          <li>Blog</li>
          <li>Gift Card</li>
          <li>Orphan's Book club</li>
        </ul>
        <div
          onClick={() => dispatch({ type: 'SET_DARK_MODE' })}
          className={classes['dark-mode']}>
          {darkmode ? <SunSvg /> : <MoonSvg />}
          <p>{darkmode ? 'Dark Mode' : 'Light Mode'}</p>
        </div>
        <div className={classes['login-menu']}>
          <Link to='/login' className={classes.link}>
            Log In
          </Link>
          <Link className={classes['btn-link']} to='/register'>
            <Button className={classes.button}>Sign Up</Button>
          </Link>
        </div>
      </Template>
    </header>
  )
}

export default Header
