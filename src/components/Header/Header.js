import { Link } from 'react-router-dom'

import classes from './Header.module.css'

import Button from '../../UI/Button/Button'
import SunSvg from '../../assets/SVG/SunSvg'
import MoonSvg from '../../assets/SVG/MoonSvg'
import Template from '../../UI/Template/Template'

const Header = ({ mode, onDarkModeClick }) => {
  return (
    <header className={mode === 'light' ? classes.header : classes.dark}>
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
        <div className={classes['login-menu']}>
          <div onClick={onDarkModeClick} className={classes['dark-mode']}>
            {mode === 'light' ? <SunSvg /> : <MoonSvg />}
            <p>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
          </div>
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
