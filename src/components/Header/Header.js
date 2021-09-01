// import { Link } from 'react-router-dom'

import Button from '../../UI/Button/Button'
import Template from '../../UI/Template/Template'

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <Template>
        <ul className={classes['nav-items']}>
          <li>Events</li>
          <li>Blog</li>
          <li>Gift Card</li>
          <li>Orphan's Book club</li>
        </ul>
        <div className={classes['login-menu']}>
          <p>Log In</p>
          <Button className={classes.button}>Sign Up</Button>
        </div>
      </Template>
    </header>
  )
}

export default Header
