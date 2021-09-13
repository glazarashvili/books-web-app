import React from 'react'
import axios from 'axios'

import { useParams, useLocation } from 'react-router-dom'

export const BookDetails = () => {
  const params = useParams()
  const bookId = params.bookId

  // console.log(params)

  const [bookDetail, setBookDetail] = React.useState([])

  const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'
  React.useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' +
          key
      )
      .then(response => {
        console.log(response.data.results.books[bookId])
        setBookDetail(response.data.results.books[bookId])
      })
  }, [bookId])

  console.log(bookDetail)

  return (
    <div>
      <p>{bookDetail.author}</p>
      <p>{bookDetail.title}</p>
      <img src={bookDetail.book_image} alt='book-detail-pic' />
    </div>
  )
}
