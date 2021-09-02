import items from './index.js'
import classes from './Footer.module.css'

import Template from '../../UI/Template/Template'

const Footer = () => {
  const footerList = items.map(item => {
    return (
      <li>
        <img src={item.image} />
        <a target='_blank' href={item.link}>
          {item.title}
        </a>
      </li>
    )
  })

  return (
    <footer className={classes.footer}>
      <Template>
        <ul className={classes['footer-items']}>
          <li>
            <a>Bookshop</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
          <li>
            <a>Useful sites</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>
        <ul className={classes['footer-items']}>{footerList}</ul>
        <ul className={classes['footer-items']}>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>
            <a>Delivery Options</a>
          </li>
          <li>
            <a>Gift Cards</a>
          </li>
        </ul>
      </Template>
    </footer>
  )
}

export default Footer
