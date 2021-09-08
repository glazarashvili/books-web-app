import {
  FETCH_FICTION_BOOKS_REQUEST,
  FETCH_FICTION_BOOKS_SUCCESS,
  FETCH_FICTION_BOOKS_FAILURE,
} from './FictionBooksActionTypes'

import axios from 'axios'

const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'

export const fetchFictionBooksRequest = () => {
  return {
    type: FETCH_FICTION_BOOKS_REQUEST,
  }
}

export const fetchFictionBooksSuccess = fictionBooks => {
  return {
    type: FETCH_FICTION_BOOKS_SUCCESS,
    payload: fictionBooks,
  }
}

export const fetchFictionBooksFailure = error => {
  return {
    type: FETCH_FICTION_BOOKS_FAILURE,
    payload: error,
  }
}

export const fetchFictionBooks = () => {
  return function (dispatch) {
    dispatch(fetchFictionBooksRequest())
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=' +
          key
      )
      .then(response => {
        const fictionBooks = response.data.results.books
        dispatch(fetchFictionBooksSuccess(fictionBooks))
      })
      .catch(error => {
        dispatch(fetchFictionBooksFailure(error.message))
      })
  }
}
