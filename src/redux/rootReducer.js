import { combineReducers } from 'redux'

import booksReducer from './books/booksReducer'
import darkmodeReducer from './darkmode/darkmodeReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  darkmode: darkmodeReducer,
})

export default rootReducer
