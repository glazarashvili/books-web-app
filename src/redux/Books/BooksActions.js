import axios from 'axios'

import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './BooksActionTypes'

const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  }
}

export const fetchBooksSuccess = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  }
}

export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  }
}

export const fetchBooks = category => {
  return function (dispatch) {
    dispatch(fetchBooksRequest())
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${key}`
      )
      .then(response => {
        const books = response.data.results.books
        dispatch(fetchBooksSuccess(books))
      })
      .catch(error => {
        dispatch(fetchBooksFailure(error.message))
      })
  }
}
