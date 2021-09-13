import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const AnimalsBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const location = useLocation().pathname.slice(7)

  console.log(location)

  const items = store.books.map((book, index) => (
    <Link to={`/books/${location}/1`}>
      <CardItem
        bookId={index}
        key={book.title}
        price={book.price}
        title={book.title}
        author={book.author}
        image={book.book_image}
      />
    </Link>
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('animals'))
  }, [dispatch])

  return <div className='filtered-container'>{items}</div>
}
