import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const AnimalsBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const items = store.books.map(book => (
    <CardItem
      key={book.title}
      price={book.price}
      title={book.title}
      author={book.author}
      image={book.book_image}
    />
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('animals'))
  }, [dispatch])

  return <div className='filtered-container'>{items}</div>
}