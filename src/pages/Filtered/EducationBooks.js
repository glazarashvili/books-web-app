import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const EducationBooks = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.books)

  const location = useLocation().pathname.slice(7)

  const items = store.books.map((elem, index) => (
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

  return <div className='filtered-container'>{items}</div>
}
