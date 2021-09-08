import React from 'react'
import axios from 'axios'

import './Filtered.css'

import CardItem from '../../components/Cards/CardItem'

export const CultureBooks = () => {
  const [books, setBooks] = React.useState([])

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=' +
          key
      )
      .then(response => {
        console.log(response.data.results.books)
        setBooks(response.data.results.books)
      })
  }, [])

  return (
    <div className='filtered-container'>
      {books.map(book => (
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
