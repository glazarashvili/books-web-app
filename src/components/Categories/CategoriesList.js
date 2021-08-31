import React from 'react'
import Template from '../../UI/Template/Template'

import classes from './CategoriesList.module.css'

const CategoriesList = () => {
  return (
    <div className={classes['category-menu']}>
      <Template>
        <ul className={classes['category-menu__items']}>
          <li>New</li>
          <li>Bestseller</li>
          <li>Ficton</li>
          <li>Non-Fiction</li>
          <li>Children's</li>
          <li>Elt</li>
          <li>Gifts</li>
          <li>Other Publishers</li>
          <li>Other Languages</li>
        </ul>
      </Template>
    </div>
  )
}

export default CategoriesList
