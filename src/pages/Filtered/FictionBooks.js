import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const FictionBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const items = store.books.map((book, index) => (
    <CardItem
      bookId={index}
      key={book.title}
      image={book.book_image}
      price={book.price}
      title={book.title}
      author={book.author}
    />
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('hardcover-fiction'))
  }, [dispatch])

  return <div className='filtered-container'>{items}</div>
}
