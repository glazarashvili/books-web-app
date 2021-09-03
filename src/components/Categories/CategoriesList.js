import { NavLink } from 'react-router-dom'

import Template from '../../UI/Template/Template'

import classes from './CategoriesList.module.css'

const categories = [
  'new',
  'bestsellers',
  'fiction',
  'non-fiction',
  'childrens',
  'other languages',
]

const CategoriesList = () => {
  const categoriesList = categories.map(category => {
    return (
      <NavLink
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
