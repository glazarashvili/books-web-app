import React from 'react'
import { useLocation, Route, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'
import { BookDetails } from '../../pages/BookDetails/BookDetails'

export const FictionBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const location = useLocation().pathname.slice(7)

  console.log('location >>>   ', location)

  const items = store.books.map((book, index) => (
    <CardItem
      bookId={index}
      key={book.title}
      price={book.price}
      title={book.title}
      category={location}
      author={book.author}
      image={book.book_image}
    />
  ))

  React.useEffect(() => {
    dispatch(fetchBooks('hardcover-fiction'))
  }, [dispatch])

  return (
    // <Router>
    //   <Route path='/books/fiction/0'>
    //     <div>dddddddddddd</div>
    //   </Route>
    // </Router>

    <div className='filtered-container'>{items}</div>
  )
}
