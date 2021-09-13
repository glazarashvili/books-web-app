import { NavLink } from 'react-router-dom'

import Template from '../../UI/Template/Template'

import classes from './CategoriesList.module.css'

const categories = [
  'fiction',
  'culture',
  'business',
  'religion',
  'education',
  'animals',
]

const CategoriesList = () => {
  const categoriesList = categories.map((category, index) => {
    return (
      <NavLink
        key={index}
        to={`/books/${category}`}
        className={classes.link}
        activeClassName={classes['active-link']}>
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
