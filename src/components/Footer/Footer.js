import { useSelector } from 'react-redux'

import items from './index.js'
import classes from './Footer.module.css'

import Template from '../../UI/Template/Template'

const Footer = () => {
  const darkmode = useSelector(store => store.darkmode.toggle)

  const footerList = items.map(item => {
    return (
      <li key={item.title}>
        <img src={item.image} alt={`${item.title} icon`} />
        <a target='_blank' rel='noreferrer' href={item.link}>
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <footer
      className={
        darkmode
          ? `${classes.footer} ${classes['footer-dark']}`
          : classes.footer
      }>
      <Template>
        <ul className={classes['footer-items']}>
          <li>
            <a href='/' rel='noreferrer'>
              Bookshop
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Contact us
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Useful sites
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Help
            </a>
          </li>
        </ul>
        <ul className={classes['footer-items']}>{footerList}</ul>
        <ul className={classes['footer-items']}>
          <li>
            <a href='/' rel='noreferrer'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Delivery Options
            </a>
          </li>
          <li>
            <a href='/' rel='noreferrer'>
              Gift Cards
            </a>
          </li>
        </ul>
      </Template>
    </footer>
  )
}

export default Footer
