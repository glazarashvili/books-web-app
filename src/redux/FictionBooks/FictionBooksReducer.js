import {
  FETCH_FICTION_BOOKS_REQUEST,
  FETCH_FICTION_BOOKS_SUCCESS,
  FETCH_FICTION_BOOKS_FAILURE,
} from './FictionBooksActionTypes'

const initialState = {
  loading: false,
  fictionBooks: [],
  error: '',
}

const fictionBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FICTION_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_FICTION_BOOKS_SUCCESS:
      return {
        ...state,
        fictionBooks: action.payload,
        loading: false,
      }

    case FETCH_FICTION_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default fictionBooksReducer
