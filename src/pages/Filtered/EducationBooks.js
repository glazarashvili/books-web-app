import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/books/booksActions'

import './Filtered.css'
import Loading from '../../UI/Loading/Loading'
import HttpError from '../../UI/Error/HttpError'

import CardItem from '../../components/Cards/CardItem'

export const EducationBooks = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.books)
  const loading = useSelector(state => state.books.loading)
  const httpError = useSelector(state => state.books.error)

  const location = useLocation().pathname.slice(7)
  const errorContent = 'Error. No information found! Please try again...'

  const items = products.books.map((elem, index) => (
    <Link
      key={index}
      to={`/books/${location}/${index}`}
      className='card-item-link'>
      <CardItem
        price={elem.price}
        title={elem.title}
        author={elem.author}
        image={elem.book_image}
      />
    </Link>
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('education'))
  }, [dispatch])

  return (
    <div className='filtered-container'>
      {loading && <Loading />}
      {!loading && httpError && <HttpError>{errorContent}</HttpError>}
      {!loading && !httpError && items}
    </div>
  )
}
