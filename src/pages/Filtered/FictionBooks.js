import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFictionBooks } from '../../redux/FictionBooks/FictionBooksActions'

import './Filtered.css'

export const FictionBooks = () => {
  const books = useSelector(state => state.fictionBooks)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchFictionBooks())
  }, [dispatch])

  console.log(books)
  return <div className='filtered-container'>Fiction</div>
}
