import { combineReducers } from 'redux'

import fictionBooksReducer from './FictionBooks/FictionBooksReducer'

const rootReducer = combineReducers({
  fictionBooks: fictionBooksReducer,
})

export default rootReducer
