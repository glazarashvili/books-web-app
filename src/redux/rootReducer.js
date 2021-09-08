import { combineReducers } from 'redux'

import booksReducer from './Books/BooksReducer'

const rootReducer = combineReducers({
  books: booksReducer,
})

export default rootReducer
