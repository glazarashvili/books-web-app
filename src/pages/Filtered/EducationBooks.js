import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const EducationBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const items = store.books.map((book, index) => (
    <CardItem
      key={book.title}
      bookId={index}
      title={book.title}
      price={book.price}
      author={book.author}
      image={book.book_image}
    />
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('education'))
  }, [dispatch])

  return <div className='filtered-container'>{items}</div>
}
