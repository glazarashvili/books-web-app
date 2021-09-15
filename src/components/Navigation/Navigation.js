import classes from './Navigation.module.css'

import Header from '../Header/Header'
import SearchMenu from '../SeachMenu/SearchMenu'
import CategoriesList from '../Categories/CategoriesList'

const Navigation = ({ mode, onDarkModeClick }) => {
  return (
    <div className={classes['navigation-menu']}>
      <Header mode={mode} onDarkModeClick={onDarkModeClick} />
      <SearchMenu />
      <CategoriesList />
    </div>
  )
}

export default Navigation
