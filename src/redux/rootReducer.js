import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import booksReducer from './books/booksReducer'
import darkmodeReducer from './darkmode/darkmodeReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  darkmode: darkmodeReducer,
  user: userReducer,
})

export default rootReducer
