import { NavLink } from 'react-router-dom'

import { categories } from './index'

import Template from '../../UI/Template/Template'

import classes from './CategoriesList.module.css'

const CategoriesList = () => {
  const categoriesList = categories.map((category, index) => {
    return (
      <NavLink
        key={index}
        to={`/books/${category.path}`}
        className={classes.link}
        activeClassName={classes['active-link']}>
        <li>{category.name}</li>
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
