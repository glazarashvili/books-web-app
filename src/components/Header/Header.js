import { Link } from 'react-router-dom'

import classes from './Header.module.css'

import Button from '../../UI/Button/Button'
import Template from '../../UI/Template/Template'

const Header = () => {
  return (
    <header className={classes.header}>
      <Template>
        <ul className={classes['nav-items']}>
          <Link className={classes.link} to='/'>
            <li>Bookshop</li>
          </Link>
          <li>Blog</li>
          <li>Gift Card</li>
          <li>Orphan's Book club</li>
        </ul>
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
