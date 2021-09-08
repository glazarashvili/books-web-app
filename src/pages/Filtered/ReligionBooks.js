import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/Books/BooksActions'

import './Filtered.css'
import CardItem from '../../components/Cards/CardItem'

export const ReligionBooks = () => {
  const store = useSelector(state => state.fictionBooks)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchBooks('religion-spirituality-and-faith'))
  }, [dispatch])

  return (
    <div className='filtered-container'>
      {store.fictionBooks.map(book => (
        <CardItem
          key={book.title}
          image={book.book_image}
          price={book.price}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  )
}
