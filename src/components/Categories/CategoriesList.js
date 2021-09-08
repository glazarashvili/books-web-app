import { NavLink } from 'react-router-dom'

import Template from '../../UI/Template/Template'

import classes from './CategoriesList.module.css'

const categories = [
  'bestsellers',
  'fiction',
  'culture',
  'business',
  'religion',
  'education',
]

const CategoriesList = () => {
  const categoriesList = categories.map((category, index) => {
    return (
      <NavLink
        key={index}
        className={classes.link}
        activeClassName={classes['active-link']}
        to={`/${category}`}>
        <li>{category}</li>
      </NavLink>
    )
  })

  return (
    <div className={classes['category-menu']}>
      <Template>
        <ul className={classes['category-menu__items']}>{categoriesList}</ul>
      </Template>
    </div>
  )
}

export default CategoriesList
